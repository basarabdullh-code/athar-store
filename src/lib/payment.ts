import { Order, Payment } from '@prisma/client';
import { prisma } from './db';

/**
 * Payment Provider Interface
 */
export interface IPaymentProvider {
  createTransaction(
    order: Order,
    amount: number
  ): Promise<{
    transactionId: string;
    paymentUrl: string;
    expiresAt: Date;
  }>;

  verifyPayment(transactionId: string): Promise<{
    status: 'success' | 'failed' | 'pending';
    amount: number;
    timestamp: Date;
  }>;

  refundPayment(transactionId: string, amount: number): Promise<void>;
}

/**
 * Mock Payment Provider (Development/Testing)
 */
export class MockPaymentProvider implements IPaymentProvider {
  async createTransaction(order: Order, amount: number) {
    const transactionId = `MOCK_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    return {
      transactionId,
      paymentUrl: `/api/payment/mock/confirm?orderId=${order.id}&transactionId=${transactionId}`,
      expiresAt: new Date(Date.now() + 3600000), // 1 hour
    };
  }

  async verifyPayment(transactionId: string) {
    // In mock mode, always verify as successful after a short delay
    return {
      status: 'success' as const,
      amount: 0,
      timestamp: new Date(),
    };
  }

  async refundPayment(transactionId: string, amount: number) {
    // Mock refund
    console.log(`Mock refund: ${transactionId} - ${amount}`);
  }
}

/**
 * PayTabs Payment Provider (Production)
 */
export class PayTabsProvider implements IPaymentProvider {
  private apiKey: string;
  private merchantEmail: string;
  private serverKey: string;

  constructor() {
    this.apiKey = process.env.PAYTABS_API_KEY || '';
    this.merchantEmail = process.env.PAYTABS_MERCHANT_EMAIL || '';
    this.serverKey = process.env.PAYTABS_SERVER_KEY || '';

    if (!this.apiKey || !this.merchantEmail || !this.serverKey) {
      throw new Error('PayTabs credentials not configured');
    }
  }

  async createTransaction(order: Order, amount: number) {
    // TODO: Implement actual PayTabs API call
    // This is a placeholder for the actual implementation
    const response = await fetch('https://secure.paytabs.com/api/gateway/request_payment', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        merchant_email: this.merchantEmail,
        amount: amount / 100, // Convert cents to dollars
        currency: 'USD',
        order_id: order.id,
        order_details: `Order ${order.orderNumber}`,
        customer_details: {
          name: order.user?.name || 'Customer',
          email: order.email,
          phone: order.phone,
        },
        return_url: `${process.env.APP_URL}/api/payment/paytabs/callback`,
      }),
    });

    const data = await response.json();

    if (!data.redirect_url) {
      throw new Error('Failed to create PayTabs transaction');
    }

    return {
      transactionId: data.transaction_id,
      paymentUrl: data.redirect_url,
      expiresAt: new Date(Date.now() + 3600000),
    };
  }

  async verifyPayment(transactionId: string) {
    // TODO: Implement PayTabs verification API
    const response = await fetch('https://secure.paytabs.com/api/gateway/verify_payment', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.serverKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transaction_id: transactionId,
      }),
    });

    const data = await response.json();

    return {
      status: data.payment_result?.response_status === 'A' ? 'success' : 'failed',
      amount: data.amount || 0,
      timestamp: new Date(),
    };
  }

  async refundPayment(transactionId: string, amount: number) {
    // TODO: Implement PayTabs refund API
    const response = await fetch('https://secure.paytabs.com/api/gateway/refund_payment', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.serverKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transaction_id: transactionId,
        amount: amount / 100,
      }),
    });

    if (!response.ok) {
      throw new Error('Refund failed');
    }
  }
}

/**
 * Payment Provider Factory
 */
export function getPaymentProvider(): IPaymentProvider {
  const mode = process.env.PAYMENT_MODE || 'mock';

  if (mode === 'mock') {
    return new MockPaymentProvider();
  } else if (mode === 'production') {
    return new PayTabsProvider();
  }

  throw new Error(`Unknown payment mode: ${mode}`);
}

/**
 * Calculate order total with discounts and coupons
 */
export async function calculateOrderTotal(orderId: string): Promise<number> {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      items: true,
      coupon: true,
    },
  });

  if (!order) {
    throw new Error('Order not found');
  }

  let total = order.items.reduce((sum, item) => sum + item.priceAtTime * item.quantity, 0);

  if (order.coupon) {
    if (order.coupon.discountType === 'percentage') {
      total -= Math.floor((total * order.coupon.discountValue) / 100);
    } else if (order.coupon.discountType === 'fixed') {
      total -= order.coupon.discountValue;
    }
  }

  return Math.max(total, 0); // Ensure total is not negative
}

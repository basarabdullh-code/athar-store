'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

interface CartItem {
  productId: string;
  nameAr: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart);
        // Deduplicate and combine quantities
        const combined: Record<string, CartItem> = {};
        items.forEach((item: CartItem) => {
          if (combined[item.productId]) {
            combined[item.productId].quantity += item.quantity;
          } else {
            combined[item.productId] = item;
          }
        });
        setCartItems(Object.values(combined));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
    setLoading(false);
  }, []);

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
      return;
    }
    const updated = cartItems.map((item) =>
      item.productId === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (productId: string) => {
    const updated = cartItems.filter((item) => item.productId !== productId);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const applyPromoCode = (code: string) => {
    // Mock promo code validation
    if (code === 'ATHAR10') {
      setDiscount(10);
    } else if (code === 'ATHAR20') {
      setDiscount(20);
    } else {
      setDiscount(0);
      alert('رمز الخصم غير صحيح');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.floor((subtotal * discount) / 100);
  const total = subtotal - discountAmount;

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary-50">
        <Container className="py-12">
          <div className="animate-pulse space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white h-24 rounded-lg"></div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-primary-950 text-secondary-50 py-12">
        <Container>
          <h1 className="text-h1 font-bold">سلة التسوق</h1>
        </Container>
      </div>

      {/* Cart Content */}
      <Container className="py-12">
        {cartItems.length === 0 ? (
          <Card variant="default" className="text-center py-12">
            <p className="text-2xl mb-4">🛒</p>
            <h2 className="text-2xl font-bold mb-4">سلتك فارغة</h2>
            <p className="text-support-charcoal mb-8">
              ابدأ بإضافة بعض المنتجات إلى سلتك
            </p>
            <Link href={ROUTES.PRODUCTS}>
              <Button variant="accent" size="lg">
                تصفح المنتجات
              </Button>
            </Link>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.productId} variant="default">
                    <div className="flex gap-6">
                      {/* Product Image Placeholder */}
                      <div className="w-24 h-24 bg-gradient-to-b from-secondary-50 to-support-muted rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                        📦
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{item.nameAr}</h3>
                        <p className="text-2xl font-bold text-accent mb-4">
                          ${(item.price / 100).toFixed(2)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-support-gray">الكمية:</span>
                          <div className="flex items-center gap-2 border border-support-muted rounded">
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.quantity - 1)
                              }
                              className="px-3 py-1 hover:bg-secondary-50 transition-colors"
                            >
                              −
                            </button>
                            <span className="px-4 py-1 font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.quantity + 1)
                              }
                              className="px-3 py-1 hover:bg-secondary-50 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <div className="flex flex-col justify-between items-end">
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="text-error hover:text-error font-semibold text-sm transition-colors"
                        >
                          حذف
                        </button>
                        <p className="font-bold">
                          $
                          {((item.price * item.quantity) / 100).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card variant="elevated" className="sticky top-24">
                <h2 className="text-xl font-bold mb-6">ملخص الطلب</h2>

                {/* Promo Code */}
                <div className="mb-6 pb-6 border-b border-support-muted">
                  <label className="block text-sm font-semibold mb-2">
                    رمز الخصم (اختياري)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      placeholder="أدخل الرمز"
                      className="flex-1 px-3 py-2 border border-support-muted rounded focus:outline-none focus:border-accent"
                    />
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => applyPromoCode(promoCode)}
                    >
                      تطبيق
                    </Button>
                  </div>
                  {discount > 0 && (
                    <p className="text-sm text-success mt-2 font-semibold">
                      ✓ تم تطبيق خصم {discount}%
                    </p>
                  )}
                </div>

                {/* Pricing Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-support-muted">
                  <div className="flex justify-between">
                    <span className="text-support-charcoal">المجموع الفرعي</span>
                    <span className="font-semibold">
                      ${(subtotal / 100).toFixed(2)}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-success">
                      <span>الخصم ({discount}%)</span>
                      <span className="font-semibold">
                        -${(discountAmount / 100).toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="flex justify-between mb-6 text-xl">
                  <span className="font-bold">الإجمالي</span>
                  <span className="font-bold text-accent">
                    ${(total / 100).toFixed(2)}
                  </span>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <Link href={ROUTES.CHECKOUT}>
                    <Button variant="accent" fullWidth size="lg">
                      متابعة الدفع
                    </Button>
                  </Link>
                  <Link href={ROUTES.PRODUCTS}>
                    <Button variant="ghost" fullWidth>
                      متابعة التسوق
                    </Button>
                  </Link>
                </div>

                {/* Trust Info */}
                <div className="mt-6 pt-6 border-t border-support-muted text-sm text-support-gray space-y-2">
                  <div className="flex items-start gap-2">
                    <span>🔒</span>
                    <span>دفع آمن 100%</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>✓</span>
                    <span>ضمان استرجاع 30 يوم</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>📧</span>
                    <span>دعم العملاء 24/7</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

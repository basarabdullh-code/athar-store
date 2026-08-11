/**
 * Email service abstraction
 * Supports Resend, SendGrid, etc.
 */

export interface EmailProvider {
  send(to: string, subject: string, html: string): Promise<void>;
}

/**
 * Resend Email Provider
 */
export class ResendEmailProvider implements EmailProvider {
  private apiKey: string;
  private fromEmail: string;

  constructor() {
    this.apiKey = process.env.RESEND_API_KEY || '';
    this.fromEmail = process.env.FROM_EMAIL || 'noreply@athar.com';

    if (!this.apiKey) {
      console.warn('Resend API key not configured');
    }
  }

  async send(to: string, subject: string, html: string): Promise<void> {
    if (!this.apiKey) {
      console.log(`[EMAIL] To: ${to}, Subject: ${subject}`);
      return;
    }

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: this.fromEmail,
          to,
          subject,
          html,
        }),
      });

      if (!response.ok) {
        throw new Error(`Email send failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Email send error:', error);
      throw error;
    }
  }
}

/**
 * Email Templates
 */
export function getOrderConfirmationTemplate(
  orderNumber: string,
  downloadUrl: string,
  productName: string
): string {
  return `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <title>تأكيد الطلب</title>
    </head>
    <body style="font-family: Arial, sans-serif; direction: rtl; text-align: right;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #000000;">شكراً لشرائك!</h1>
        <p>رقم الطلب: <strong>${orderNumber}</strong></p>
        <p>تم استقبال طلبك بنجاح. يمكنك تحميل المنتج من الرابط أدناه:</p>
        
        <div style="margin: 30px 0;">
          <a href="${downloadUrl}" style="background-color: #D4AF37; color: #000000; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">
            تحميل ${productName}
          </a>
        </div>
        
        <p>هذا الرابط سينتهي الصلاحية بعد 30 يوماً.</p>
        
        <hr style="margin: 30px 0;">
        <footer style="color: #808080; font-size: 12px;">
          <p>أثر - منتجات رقمية تصنع فرقًا</p>
        </footer>
      </div>
    </body>
    </html>
  `;
}

export function getWelcomeTemplate(userName: string): string {
  return `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <title>أهلاً وسهلاً</title>
    </head>
    <body style="font-family: Arial, sans-serif; direction: rtl; text-align: right;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #000000;">أهلاً وسهلاً ${userName}!</h1>
        <p>شكراً لانضمامك إلى أثر.</p>
        <p>نحن سعداء برؤيتك هنا. استكشف مجموعتنا من المنتجات الرقمية المميزة.</p>
      </div>
    </body>
    </html>
  `;
}

import type { Metadata } from 'next';
import './globals.css';
import './rtl.css';
import './animations.css';
import { RootLayout } from '@/components/layout/RootLayout';

export const metadata: Metadata = {
  title: 'أثر | ATHAR - متجر المنتجات الرقمية',
  description: 'منتجات رقمية تصنع فرقًا. كتب، أدوات، قوالب وموارد عملية تساعدك تتعلم، تبني، وتتحرك إلى الأمام.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'أثر | ATHAR - متجر المنتجات الرقمية',
    description: 'منتجات رقمية تصنع فرقًا',
    type: 'website',
    locale: 'ar_SA',
  },
};

export default function RootLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}

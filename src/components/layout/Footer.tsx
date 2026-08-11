'use client';

import Link from 'next/link';
import { BRAND, ROUTES } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-secondary-50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">{BRAND.nameAr}</span>
              <span className="text-xs text-secondary-50 block font-light">ATHAR</span>
            </h3>
            <p className="text-secondary-100 text-sm leading-relaxed mb-4">
              منتجات رقمية تصنع فرقًا. تعلم، ابني، وتحرك إلى الأمام.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">الروابط السريعة</h4>
            <ul className="space-y-2 text-secondary-100 text-sm">
              <li>
                <Link href={ROUTES.HOME} className="hover:text-accent transition-colors">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link href={ROUTES.PRODUCTS} className="hover:text-accent transition-colors">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link href={ROUTES.ABOUT} className="hover:text-accent transition-colors">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">الدعم</h4>
            <ul className="space-y-2 text-secondary-100 text-sm">
              <li>
                <Link href={ROUTES.FAQ} className="hover:text-accent transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href={ROUTES.REFUND} className="hover:text-accent transition-colors">
                  سياسة الاسترجاع
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">الشروط والقوانين</h4>
            <ul className="space-y-2 text-secondary-100 text-sm">
              <li>
                <Link href={ROUTES.PRIVACY} className="hover:text-accent transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href={ROUTES.TERMS} className="hover:text-accent transition-colors">
                  شروط الاستخدام
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-secondary-100 text-sm">
          <p>جميع الحقوق محفوظة {currentYear} © {BRAND.nameAr}</p>
          <p>مصنوع بـ ❤️ للسوق الناطق بالعربية</p>
        </div>
      </div>
    </footer>
  );
}

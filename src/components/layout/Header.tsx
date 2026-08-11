'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BRAND, ROUTES } from '@/lib/constants';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'المنتجات', href: ROUTES.PRODUCTS },
    { label: 'الأقسام', href: ROUTES.CATEGORIES },
    { label: 'من نحن', href: ROUTES.ABOUT },
    { label: 'الأسئلة الشائعة', href: ROUTES.FAQ },
    { label: 'اتصل بنا', href: ROUTES.CONTACT },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary-950 text-secondary-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={ROUTES.HOME} className="text-2xl font-bold hover:text-accent transition-colors">
            <div className="flex flex-col">
              <span className="text-accent font-black">{BRAND.nameAr}</span>
              <span className="text-xs text-secondary-50 font-light">ATHAR</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded transition-colors ${
                  pathname === item.href
                    ? 'bg-accent text-primary-950 font-semibold'
                    : 'text-secondary-50 hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4 space-x-reverse">
            <Link
              href={ROUTES.CART}
              className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-accent text-primary-950 rounded hover:bg-accent-light transition-colors font-semibold text-sm"
            >
              <span>🛒</span>
              <span>السلة</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-primary-900 rounded transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-primary-800 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded transition-colors ${
                  pathname === item.href
                    ? 'bg-accent text-primary-950 font-semibold'
                    : 'text-secondary-50 hover:bg-primary-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

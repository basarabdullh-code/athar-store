// Application-wide constants

export const BRAND = {
  name: 'ATHAR',
  nameAr: 'أثر',
  tagline: 'منتجات رقمية تصنع فرقًا',
  email: 'info@athar.com',
  phone: '+966-XXX-XXXX',
};

export const COLORS = {
  primary: '#000000',
  secondary: '#F5F1E8',
  accent: '#D4AF37',
  dark: '#1A1A1A',
  charcoal: '#333333',
  gray: '#808080',
  muted: '#CCCCCC',
  success: '#2D7A3E',
  error: '#C1292E',
};

export const PAYMENT = {
  MODE: (process.env.PAYMENT_MODE || 'mock') as 'mock' | 'production',
  PROVIDER: (process.env.PAYMENT_PROVIDER || 'paytabs') as string,
  CURRENCY: 'USD',
  CURRENCY_SYMBOL: '$',
};

export const STORAGE = {
  PROVIDER: (process.env.STORAGE_PROVIDER || 'supabase') as 'supabase' | 's3',
  BUCKET_NAME: 'athar-digital-products',
};

export const DOWNLOAD = {
  TOKEN_EXPIRY_DAYS: 30,
  MAX_DOWNLOADS_PER_TOKEN: 5, // Limit per token for security
};

export const PAGINATION = {
  DEFAULT_PER_PAGE: 12,
  MAX_PER_PAGE: 100,
};

export const REFUND = {
  POLICY_DAYS: 30, // 30-day refund window
};

export const CATEGORIES = [
  { id: 'ebooks', nameAr: 'كتب إلكترونية', slugAr: 'kutub-electronia' },
  { id: 'templates', nameAr: 'قوالب', slugAr: 'qawale' },
  { id: 'tools', nameAr: 'أدوات', slugAr: 'adawat' },
  { id: 'productivity', nameAr: 'إنتاجية', slugAr: 'intajiya' },
  { id: 'ai', nameAr: 'ذكاء اصطناعي', slugAr: 'zaka-istinaay' },
  { id: 'business', nameAr: 'أعمال', slugAr: 'amal' },
  { id: 'education', nameAr: 'تعليم', slugAr: 'taelem' },
  { id: 'resources', nameAr: 'موارد رقمية', slugAr: 'moarad-raqmiya' },
];

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (slug: string) => `/products/${slug}`,
  CATEGORIES: '/categories',
  CATEGORY_DETAIL: (slug: string) => `/categories/${slug}`,
  CART: '/cart',
  CHECKOUT: '/checkout',
  ORDER_SUCCESS: (orderId: string) => `/order-success/${orderId}`,
  DOWNLOAD: (token: string) => `/download/${token}`,
  ABOUT: '/about',
  FAQ: '/faq',
  CONTACT: '/contact',
  PRIVACY: '/legal/privacy',
  TERMS: '/legal/terms',
  REFUND: '/legal/refund',
};

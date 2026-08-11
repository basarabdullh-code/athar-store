// Database model types (extended from Prisma)

export type ProductStatus = 'active' | 'draft' | 'archived';
export type OrderStatus = 'pending' | 'paid' | 'delivered' | 'refunded' | 'cancelled';
export type PaymentStatus = 'pending' | 'success' | 'failed' | 'refunded';
export type DiscountType = 'percentage' | 'fixed';

export interface ProductDTO {
  id: string;
  nameAr: string;
  slugAr: string;
  subtitleAr?: string;
  descriptionAr: string;
  descriptionLong?: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  categoryId: string;
  coverImage: string;
  featured: boolean;
  bestSeller: boolean;
  status: ProductStatus;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderDTO {
  id: string;
  orderNumber: string;
  userId: string;
  totalPrice: number;
  currency: string;
  status: OrderStatus;
  email: string;
  phone?: string;
  discountAmount?: number;
  createdAt: Date;
  paidAt?: Date;
  deliveredAt?: Date;
}

export interface CartItem {
  productId: string;
  quantity: number;
  priceAtTime: number; // Price in cents
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
}

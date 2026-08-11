import { z } from 'zod';

// Email validation
export const emailSchema = z.string().email('Invalid email address').toLowerCase();

// Phone validation (basic international format)
export const phoneSchema = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
  .optional();

// Product slug validation (Arabic romanization)
export const slugSchema = z.string().regex(/^[a-z0-9-]+$/, 'Invalid slug format');

// Price validation (must be positive integer in cents)
export const priceSchema = z.number().int().positive('Price must be positive');

// Coupon code validation
export const couponCodeSchema = z.string().regex(/^[A-Z0-9-]+$/, 'Invalid coupon code');

// Order number validation
export const orderNumberSchema = z.string().regex(/^ATHAR-[A-Z0-9]{8}$/, 'Invalid order number');

// Checkout form validation
export const checkoutSchema = z.object({
  email: emailSchema,
  phone: phoneSchema,
  couponCode: z.string().optional(),
  paymentMethod: z.enum(['card', 'bank_transfer']),
});

// Login form validation
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// Product creation validation
export const productCreateSchema = z.object({
  nameAr: z.string().min(1, 'Product name is required'),
  slugAr: slugSchema,
  subtitleAr: z.string().optional(),
  descriptionAr: z.string().min(10, 'Description must be at least 10 characters'),
  descriptionLong: z.string().optional(),
  price: priceSchema,
  originalPrice: priceSchema.optional(),
  categoryId: z.string().cuid('Invalid category'),
  coverImage: z.string().url('Invalid image URL'),
});

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: emailSchema,
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ProductCreateInput = z.infer<typeof productCreateSchema>;
export type ContactFormInput = z.infer<typeof contactFormSchema>;

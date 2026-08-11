'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

interface Product {
  id: string;
  nameAr: string;
  slugAr: string;
  descriptionAr: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  category: string;
  coverImage: string;
  featured: boolean;
  bestSeller: boolean;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    nameAr: 'لا تبحث عن وظيفة... اصنع دخلك',
    slugAr: 'la-tabhath-an-wazifa',
    descriptionAr: 'دليل عملي خطوة بخطوة لبدء العمل والربح عبر الإنترنت',
    price: 999,
    originalPrice: 1999,
    discountPercent: 50,
    category: 'كتب إلكترونية',
    coverImage: '📚',
    featured: true,
    bestSeller: true,
  },
  {
    id: '2',
    nameAr: 'قالب موقع احترافي',
    slugAr: 'template-professional-website',
    descriptionAr: 'قالب حديث وسهل الاستخدام لإنشاء موقعك الخاص',
    price: 2999,
    category: 'قوالب',
    coverImage: '🎨',
    featured: true,
    bestSeller: false,
  },
  {
    id: '3',
    nameAr: 'دورة تسويق رقمي',
    slugAr: 'digital-marketing-course',
    descriptionAr: 'تعلم أساسيات التسويق الرقمي من الصفر',
    price: 4999,
    originalPrice: 7999,
    discountPercent: 37,
    category: 'تعليم',
    coverImage: '📖',
    featured: false,
    bestSeller: true,
  },
  {
    id: '4',
    nameAr: 'حزمة قوالب النماذج',
    slugAr: 'form-templates-bundle',
    descriptionAr: '50 قالب نموذج جاهز للاستخدام الفوري',
    price: 1999,
    category: 'قوالب',
    coverImage: '📋',
    featured: false,
    bestSeller: false,
  },
  {
    id: '5',
    nameAr: 'أداة تحليل الكلمات المفتاحية',
    slugAr: 'keyword-analyzer-tool',
    descriptionAr: 'أداة قوية لتحليل الكلمات المفتاحية وتحسين الـ SEO',
    price: 3999,
    category: 'أدوات',
    coverImage: '🔍',
    featured: true,
    bestSeller: false,
  },
  {
    id: '6',
    nameAr: 'دليل الإنتاجية الشامل',
    slugAr: 'productivity-guide',
    descriptionAr: 'نظام متكامل لزيادة إنتاجيتك وإدارة وقتك بكفاءة',
    price: 2499,
    originalPrice: 3499,
    discountPercent: 28,
    category: 'إنتاجية',
    coverImage: '⚡',
    featured: false,
    bestSeller: true,
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  // Get unique categories
  const categories = Array.from(new Set(MOCK_PRODUCTS.map((p) => p.category)));

  useEffect(() => {
    // Simulate loading from API
    setTimeout(() => {
      setProducts(MOCK_PRODUCTS);
      setFilteredProducts(MOCK_PRODUCTS);
      setLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  return (
    <div>
      {/* Header */}
      <div className="bg-primary-950 text-secondary-50 py-12">
        <Container>
          <h1 className="text-h1 font-bold mb-4">جميع المنتجات</h1>
          <p className="text-secondary-100 text-lg">
            اكتشف مجموعتنا الشاملة من المنتجات الرقمية
          </p>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <Card variant="default">
              <h3 className="text-lg font-bold mb-6">التصنيفات</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-right px-4 py-2 rounded transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-accent text-primary-950 font-semibold'
                      : 'hover:bg-secondary-50'
                  }`}
                >
                  جميع المنتجات
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-right px-4 py-2 rounded transition-colors ${
                      selectedCategory === category
                        ? 'bg-accent text-primary-950 font-semibold'
                        : 'hover:bg-secondary-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>

            {/* Filter Info */}
            <Card variant="default" className="mt-6 bg-secondary-50">
              <p className="text-sm text-support-charcoal">
                تم العثور على <strong>{filteredProducts.length}</strong> منتج
              </p>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} variant="elevated">
                    <div className="bg-support-muted rounded-lg h-48 mb-4 animate-pulse"></div>
                    <div className="bg-support-muted h-4 rounded mb-2 animate-pulse"></div>
                    <div className="bg-support-muted h-4 rounded w-3/4 animate-pulse"></div>
                  </Card>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <Card variant="default" className="text-center py-12">
                <p className="text-support-charcoal mb-4">لا توجد منتجات في هذا التصنيف</p>
                <Button
                  variant="accent"
                  onClick={() => setSelectedCategory('all')}
                >
                  عرض جميع المنتجات
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    variant="hover"
                    className="overflow-hidden transition-all hover:shadow-lg"
                  >
                    {/* Product Image */}
                    <div className="bg-gradient-to-b from-secondary-50 to-support-muted rounded-lg h-56 flex items-center justify-center text-6xl mb-4">
                      {product.coverImage}
                    </div>

                    {/* Badges */}
                    <div className="flex gap-2 mb-3">
                      <Badge variant="default" size="sm">
                        {product.category}
                      </Badge>
                      {product.bestSeller && (
                        <Badge variant="accent" size="sm">
                          ⭐ الأكثر مبيعًا
                        </Badge>
                      )}
                      {product.discountPercent && (
                        <Badge variant="error" size="sm">
                          -{product.discountPercent}%
                        </Badge>
                      )}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                      {product.nameAr}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-support-charcoal mb-4 line-clamp-2">
                      {product.descriptionAr}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-center gap-3 mb-4 pt-4 border-t border-support-muted">
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-accent">
                          ${(product.price / 100).toFixed(2)}
                        </div>
                        {product.originalPrice && (
                          <div className="text-sm text-support-gray line-through">
                            ${(product.originalPrice / 100).toFixed(2)}
                          </div>
                        )}
                      </div>
                      {/* Rating Placeholder */}
                      <div className="text-center">
                        <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
                        <p className="text-xs text-support-gray">(0)</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href={ROUTES.PRODUCT_DETAIL(product.slugAr)}>
                      <Button variant="accent" fullWidth size="md">
                        عرض التفاصيل
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Accordion } from '@/components/common/Accordion';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

interface ProductDetail {
  id: string;
  nameAr: string;
  slugAr: string;
  subtitleAr: string;
  descriptionAr: string;
  descriptionLong: string;
  price: number;
  originalPrice?: number;
  category: string;
  coverImage: string;
  featured: boolean;
  bestSeller: boolean;
  learnings: string[];
  inclusions: string[];
  faqs: { question: string; answer: string }[];
}

const MOCK_PRODUCT_DETAIL: ProductDetail = {
  id: '1',
  nameAr: 'لا تبحث عن وظيفة... اصنع دخلك',
  slugAr: 'la-tabhath-an-wazifa',
  subtitleAr: 'دليل عملي خطوة بخطوة',
  descriptionAr: 'دليل عملي يساعد المبتدئ على فهم طرق العمل والربح عبر الإنترنت',
  descriptionLong:
    'هذا الدليل الشامل يأخذك في رحلة عملية خطوة بخطوة لتحويل مهاراتك إلى دخل حقيقي عبر الإنترنت. سواء كنت تبحث عن وظيفة إضافية أو بناء عمل بدوام كامل، ستجد في هذا الدليل كل ما تحتاجه.',
  price: 999,
  originalPrice: 1999,
  category: 'كتب إلكترونية',
  coverImage: '📚',
  featured: true,
  bestSeller: true,
  learnings: [
    'كيفية اختيار المهارة المناسبة لك',
    'بناء عرضك الأول وتسعيره بشكل احترافي',
    'استراتيجيات الوصول إلى العملاء الأوائل',
    'كيفية زيادة أسعارك مع الوقت',
    'إدارة المشاريع والعملاء بكفاءة',
    'بناء سمعة قوية في السوق',
    'تطوير مصدر دخل متعدد',
    'تجنب الأخطاء الشائعة للمبتدئين',
  ],
  inclusions: [
    'كتاب PDF بصيغة عالية الجودة (50+ صفحة)',
    'قوالب جاهزة للاستخدام (عقود، فواتير، وغيرها)',
    'أدلة خطوة بخطوة مع أمثلة حقيقية',
    'قائمة بأفضل منصات العمل الحرة',
    'استراتيجيات تسويق مجانية',
    'وصول مدى الحياة إلى التحديثات',
  ],
  faqs: [
    {
      question: 'هل هذا الدليل مناسب للمبتدئين تماماً؟',
      answer:
        'نعم، تماماً! تم كتابة هذا الدليل بشكل خاص للمبتدئين. لا تحتاج إلى أي خبرة سابقة.',
    },
    {
      question: 'هل سأحتاج إلى استثمار أموال لبدء العمل؟',
      answer:
        'لا، معظم المنصات مجانية للبدء. الدليل يشرح كيفية البدء بدون استثمار مالي.',
    },
    {
      question: 'كم من الوقت يستغرق الحصول على أول دخل؟',
      answer:
        'هذا يعتمد على مهارتك والمجال الذي تختاره. بعض الناس يحصلون على عملهم الأول في أسبوع واحد.',
    },
    {
      question: 'هل سأحصل على دعم بعد الشراء؟',
      answer:
        'نعم، يمكنك التواصل معنا عبر البريد الإلكتروني للإجابة على أي أسئلة.',
    },
  ],
};

const RELATED_PRODUCTS = [
  {
    id: '2',
    nameAr: 'قالب موقع احترافي',
    slugAr: 'template-professional-website',
    price: 2999,
    image: '🎨',
  },
  {
    id: '3',
    nameAr: 'دورة تسويق رقمي',
    slugAr: 'digital-marketing-course',
    price: 4999,
    image: '📖',
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProduct(MOCK_PRODUCT_DETAIL);
      setLoading(false);
    }, 300);
  }, [params.slug]);

  const handleAddToCart = () => {
    // Store in cart (will be implemented properly later)
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({
      productId: product?.id,
      nameAr: product?.nameAr,
      price: product?.price,
      quantity,
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary-50">
        <Container className="py-12">
          <div className="animate-pulse space-y-6">
            <div className="bg-support-muted h-96 rounded-lg"></div>
            <div className="bg-support-muted h-8 rounded w-3/4"></div>
            <div className="bg-support-muted h-4 rounded w-1/2"></div>
          </div>
        </Container>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-secondary-50">
        <Container className="py-12 text-center">
          <p>المنتج غير موجود</p>
          <Link href={ROUTES.PRODUCTS}>
            <Button className="mt-4">العودة للمنتجات</Button>
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-primary-950 text-secondary-50 py-4">
        <Container>
          <div className="flex items-center gap-2 text-sm">
            <Link href={ROUTES.HOME} className="hover:text-accent">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href={ROUTES.PRODUCTS} className="hover:text-accent">
              المنتجات
            </Link>
            <span>/</span>
            <span>{product.nameAr}</span>
          </div>
        </Container>
      </div>

      {/* Product Details */}
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div>
            <div className="bg-gradient-to-b from-secondary-50 to-support-muted rounded-lg p-8 flex items-center justify-center h-96 text-9xl sticky top-24">
              {product.coverImage}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              <Badge variant="default">{product.category}</Badge>
              {product.bestSeller && (
                <Badge variant="accent">⭐ الأكثر مبيعًا</Badge>
              )}
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-h1 font-bold mb-2">{product.nameAr}</h1>
            <p className="text-lg text-support-gray mb-6">{product.subtitleAr}</p>

            {/* Rating */}
            <div className="mb-6 pb-6 border-b border-support-muted">
              <div className="text-2xl text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-sm text-support-charcoal">(0 تقييم)</p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-accent">
                  ${(product.price / 100).toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-support-gray line-through">
                    ${(product.originalPrice / 100).toFixed(2)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-lg font-semibold text-success">
                  توفير: $
                  {((product.originalPrice - product.price) / 100).toFixed(2)}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-base text-support-charcoal mb-8 leading-relaxed">
              {product.descriptionLong}
            </p>

            {/* Add to Cart */}
            <div className="space-y-4 mb-8 pb-8 border-b border-support-muted">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border border-support-muted rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-secondary-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-secondary-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              <Button
                variant="accent"
                size="lg"
                fullWidth
                onClick={handleAddToCart}
                className={addedToCart ? 'bg-success' : ''}
              >
                {addedToCart ? '✓ تمت الإضافة للسلة' : 'أضف للسلة'}
              </Button>
              <Button variant="secondary" size="lg" fullWidth>
                اشتر الآن
              </Button>
            </div>

            {/* What You Get */}
            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4">ما الذي ستحصل عليه:</h3>
              <ul className="space-y-2">
                {product.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-success text-lg mt-1">✓</span>
                    <span className="text-support-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* What You'll Learn */}
          <Card variant="elevated" className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">ما الذي ستتعلمه:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.learnings.map((learning, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-accent text-lg">🎯</span>
                  <span>{learning}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Key Features */}
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-4">المميزات الأساسية</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-accent">📄 صيغة</p>
                <p className="text-support-charcoal">PDF عالي الجودة</p>
              </div>
              <div>
                <p className="font-semibold text-accent">📊 حجم</p>
                <p className="text-support-charcoal">50+ صفحة</p>
              </div>
              <div>
                <p className="font-semibold text-accent">🌐 اللغة</p>
                <p className="text-support-charcoal">العربية</p>
              </div>
              <div>
                <p className="font-semibold text-accent">♾️ الوصول</p>
                <p className="text-support-charcoal">مدى الحياة</p>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-h2 font-bold mb-8">الأسئلة الشائعة</h2>
          <Accordion
            items={product.faqs.map((faq, i) => ({
              id: `faq-${i}`,
              title: faq.question,
              content: faq.answer,
            }))}
          />
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-h2 font-bold mb-8">منتجات ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RELATED_PRODUCTS.map((relatedProduct) => (
              <Card key={relatedProduct.id} variant="hover">
                <div className="bg-gradient-to-b from-secondary-50 to-support-muted rounded-lg h-48 flex items-center justify-center text-6xl mb-4">
                  {relatedProduct.image}
                </div>
                <h3 className="font-bold mb-3 line-clamp-2">
                  {relatedProduct.nameAr}
                </h3>
                <div className="flex justify-between items-center pt-4 border-t border-support-muted">
                  <span className="text-2xl font-bold text-accent">
                    ${(relatedProduct.price / 100).toFixed(2)}
                  </span>
                  <Link href={ROUTES.PRODUCT_DETAIL(relatedProduct.slugAr)}>
                    <Button variant="accent" size="sm">
                      عرض
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

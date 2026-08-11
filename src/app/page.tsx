'use client';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Accordion } from '@/components/common/Accordion';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-950 to-primary-800 text-secondary-50 py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-h1 md:text-h1 font-black mb-6 leading-tight">
              منتجات رقمية تصنع فرقًا.
            </h1>
            <p className="text-lg md:text-xl text-secondary-100 mb-8 leading-relaxed">
              كتب، أدوات، قوالب وموارد عملية تساعدك تتعلم، تبني، وتتحرك إلى الأمام.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={ROUTES.PRODUCTS}>
                <Button size="lg" variant="accent">
                  استكشف المنتجات
                </Button>
              </Link>
              <Link href={ROUTES.PRODUCTS + '?featured=true'}>
                <Button size="lg" variant="secondary">
                  شاهد الأكثر مبيعًا
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Product Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="flex justify-center animate-slide-up">
              <div className="w-full max-w-sm bg-gradient-to-b from-secondary-50 to-support-muted rounded-lg p-8 shadow-lg">
                <div className="bg-primary-950 rounded-lg h-96 flex items-center justify-center text-6xl">
                  📚
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <Badge variant="accent" className="mb-4">
                الكتاب المميز
              </Badge>
              <h2 className="text-h2 font-bold mb-4">
                لا تبحث عن وظيفة... اصنع دخلك
              </h2>
              <p className="text-lg text-support-gray mb-4 leading-relaxed">
                دليل عملي خطوة بخطوة
              </p>
              <p className="text-base text-support-charcoal mb-6 leading-relaxed">
                دليل عملي يساعد المبتدئ على فهم طرق العمل والربح عبر الإنترنت، اختيار المهارة المناسبة، بناء أول عرض، الوصول إلى العملاء، وتحويل المهارة إلى مصدر دخل قابل للنمو.
              </p>

              <div className="mb-8">
                <div className="text-3xl font-bold text-accent mb-2">
                  $9.99
                </div>
              </div>

              <Link href={ROUTES.PRODUCT_DETAIL('la-tabhath-an-wazifa')}>
                <Button size="lg" variant="accent" fullWidth>
                  احصل على الكتاب
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Why ATHAR Section */}
      <section className="py-16 md:py-24 bg-secondary-50">
        <Container>
          <h2 className="text-h2 font-bold text-center mb-12">
            لماذا أثر؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '⚙️',
                title: 'عملية',
                description: 'منتجات مصممة للتطبيق وليس للقراءة فقط.',
              },
              {
                icon: '✨',
                title: 'مختارة بعناية',
                description: 'نركز على الجودة والقيمة الحقيقية.',
              },
              {
                icon: '⚡',
                title: 'فورية',
                description: 'احصل على منتجاتك الرقمية مباشرة بعد الشراء.',
              },
              {
                icon: '🚀',
                title: 'تتطور باستمرار',
                description: 'منتجات وتحديثات جديدة مع نمو المتجر.',
              },
            ].map((item, index) => (
              <Card key={index} variant="hover" className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-support-charcoal">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-h2 font-bold text-center mb-12">
            الأكثر مبيعًا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'لا تبحث عن وظيفة... اصنع دخلك',
                category: 'كتب إلكترونية',
                price: '$9.99',
                image: '📚',
              },
            ].map((product, index) => (
              <Card key={index} variant="elevated">
                <div className="bg-secondary-50 rounded-lg h-48 flex items-center justify-center text-6xl mb-4">
                  {product.image}
                </div>
                <Badge variant="default" size="sm" className="mb-3">
                  {product.category}
                </Badge>
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-support-muted">
                  <span className="text-2xl font-bold text-accent">{product.price}</span>
                  <Link href={ROUTES.PRODUCT_DETAIL('la-tabhath-an-wazifa')}>
                    <Button size="sm" variant="accent">
                      اعرض
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={ROUTES.PRODUCTS}>
              <Button size="lg" variant="primary">
                عرض جميع المنتجات
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-primary-950 text-secondary-50">
        <Container>
          <h2 className="text-h2 font-bold text-center mb-12">
            كيف يعمل؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '1', title: 'اختر منتجك', description: 'استكشف مجموعتنا واختر المنتج المناسب لك' },
              { number: '2', title: 'ادفع بأمان', description: 'ادفع بآمان باستخدام طرق دفع موثوقة' },
              { number: '3', title: 'استلم منتجك فورًا', description: 'احصل على رابط التحميل مباشرة بعد الدفع' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-primary-950 text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-secondary-100">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-h2 font-bold text-center mb-12">
            لماذا تثق بنا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🔒', title: 'دفع آمن', description: 'معاملات آمنة ومحمية' },
              { icon: '📥', title: 'تسليم فوري', description: 'احصل على المنتج مباشرة' },
              { icon: '💬', title: 'دعم العملاء', description: 'نحن هنا للمساعدة' },
              { icon: '↩️', title: 'سياسة استرجاع', description: 'ضمان 30 يوم' },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-support-charcoal">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary-50">
        <Container>
          <h2 className="text-h2 font-bold text-center mb-12">
            الأسئلة الشائعة
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion
              items={[
                {
                  id: '1',
                  title: 'ما الذي أحصل عليه بعد الشراء؟',
                  content: 'تحصل على رابط تحميل آمن للمنتج الرقمي مباشرة بعد إتمام الدفع.',
                },
                {
                  id: '2',
                  title: 'هل المنتجات رقمية؟',
                  content: 'نعم، جميع منتجاتنا رقمية. لا توجد تكاليف شحن، واحصل عليها مباشرة.',
                },
                {
                  id: '3',
                  title: 'متى يصل المنتج؟',
                  content: 'تحصل على المنتج فورًا بعد إتمام الدفع. لا توجد أوقات انتظار.',
                },
                {
                  id: '4',
                  title: 'هل أستطيع تحميل المنتج أكثر من مرة؟',
                  content: 'نعم، يمكنك تحميل المنتج عدة مرات لمدة 30 يوم بعد الشراء.',
                },
                {
                  id: '5',
                  title: 'ما طرق الدفع؟',
                  content: 'نقبل بطاقات الائتمان والتحويلات البنكية والمحافظ الرقمية.',
                },
                {
                  id: '6',
                  title: 'هل توجد سياسة استرجاع؟',
                  content: 'نعم، لديك 30 يوم من تاريخ الشراء لطلب استرجاع أموالك بدون شروط.',
                },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-950 to-primary-800 text-secondary-50">
        <Container>
          <div className="text-center">
            <h2 className="text-h2 font-bold mb-6">
              ابدأ ببناء نسختك الأفضل.
            </h2>
            <p className="text-lg mb-8 text-secondary-100 max-w-2xl mx-auto">
              اكتشف مجموعتنا من المنتجات الرقمية التي ستساعدك تتعلم وتنمو وتحقق أهدافك.
            </p>
            <Link href={ROUTES.PRODUCTS}>
              <Button size="lg" variant="accent">
                استكشف المنتجات
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

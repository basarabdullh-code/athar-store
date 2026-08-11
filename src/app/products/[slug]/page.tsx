export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen">
      <div className="bg-primary-950 text-secondary-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-h1 font-bold">تفاصيل المنتج</h1>
          <p className="text-secondary-100 mt-4">{params.slug}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-support-gray">جاري العمل على صفحة تفاصيل المنتج...</p>
      </div>
    </div>
  );
}

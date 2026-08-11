export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-primary-950 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-primary-950 mb-2">الصفحة غير موجودة</h2>
        <p className="text-support-charcoal mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة.
        </p>
        <a
          href="/"
          className="inline-block bg-accent text-primary-950 px-6 py-3 rounded font-semibold hover:bg-accent-light transition-colors"
        >
          العودة إلى الصفحة الرئيسية
        </a>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="preview-layout">
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Component Preview</h1>
          <div className="flex space-x-6">
            <Link href="/preview" className="text-gray-600 hover:text-blue-600">
              Light Hero
            </Link>
            <Link href="/preview-dark" className="text-gray-600 hover:text-blue-600">
              Dark Hero
            </Link>
            <Link href="/preview/all" className="text-gray-600 hover:text-blue-600">
              All Sections
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
} 
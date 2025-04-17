import StyleProvider from '@/lib/contexts/StyleProvider';
import Link from 'next/link';

export default function DebugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyleProvider>
      <div className="debug-layout">
        <nav className="bg-white shadow-md p-4">
          <div className="max-w-full mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Component Debug</h1>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </div>
    </StyleProvider>
  );
} 
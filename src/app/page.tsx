'use client';

import React from 'react';
import { DesignProvider } from '@/lib/contexts/DesignContext';
import TabPanel from '@/components/TabPanel';
import SitemapBuilder from '@/components/sitemap/SitemapBuilder';
import WireframePreview from '@/components/wireframe/WireframePreview';
import StyleGuideEditor from '@/components/styleguide/StyleGuideEditor';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Jackson Lego</h1>
            <div className="flex space-x-2">
              <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Export
              </button>
              <button className="bg-blue-600 rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Preview
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <DesignProvider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <TabPanel
                tabs={[
                  {
                    id: 'sitemap',
                    label: 'Sitemap',
                    content: <SitemapBuilder />,
                  },
                  {
                    id: 'style-guide',
                    label: 'Style Guide',
                    content: <StyleGuideEditor />,
                  },
                ]}
                defaultTab="sitemap"
              />
            </div>
            <div>
              <WireframePreview />
            </div>
          </div>
        </DesignProvider>
      </div>
    </main>
  );
}

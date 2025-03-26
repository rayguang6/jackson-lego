'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { DesignProvider } from '@/lib/contexts/DesignContext';
import TabPanel from '@/components/TabPanel';
import SitemapBuilder from '@/components/sitemap/SitemapBuilder';
import WireframePreview from '@/components/wireframe/WireframePreview';
import StyleGuideEditor from '@/components/styleguide/StyleGuideEditor';

export default function Home() {
  const [isStructurePanelOpen, setIsStructurePanelOpen] = useState(true);
  
  const togglePanel = useCallback(() => {
    setIsStructurePanelOpen(prev => !prev);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-full mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Jackson Lego</h1>
            <div className="flex space-x-2">
              <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Export
              </button>
              <Link 
                href="/preview/all" 
                className="bg-indigo-600 rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview Components
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-full mx-auto py-4 flex">
        <DesignProvider>
          <div className={`transition-all duration-300 ease-in-out flex-shrink-0 ${isStructurePanelOpen ? 'w-80' : 'w-12'} bg-white border-r border-gray-200 relative`}>
            <div className={`flex items-center p-3 border-b border-gray-200 ${isStructurePanelOpen ? 'justify-between' : 'justify-center'}`}>
              {isStructurePanelOpen && (
                <h2 className="text-lg font-medium text-gray-900 transition-opacity duration-300">Structure</h2>
              )}
              <button 
                onClick={togglePanel}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label={isStructurePanelOpen ? "Collapse panel" : "Expand panel"}
              >
                {isStructurePanelOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19l7-7-7-7" />
                  </svg>
                )}
              </button>
            </div>
            
            {isStructurePanelOpen && (
              <div className="p-3">
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
            )}
          </div>
          <div className="flex-grow px-6">
            <WireframePreview />
          </div>
        </DesignProvider>
      </div>
    </main>
  );
}

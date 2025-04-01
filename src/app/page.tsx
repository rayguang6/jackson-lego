'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { DesignProvider } from '@/lib/contexts/DesignContext';
import TabPanel from '@/components/TabPanel';
import SitemapBuilder from '@/components/sitemap/SitemapBuilder';
import WireframePreview from '@/components/wireframe/WireframePreview';
import BrandGuide from '@/components/BrandGuide';
import ExportButton from '@/components/ExportButton';

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
              <div className="flex items-center gap-4">
                <Link
                  href="/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
                >
                  <svg
                    className="-ml-1 mr-2 h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Preview
                </Link>
                <ExportButton />
              </div>
              {/* <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Export
              </button>
              <Link 
                href="/debug" 
                className="bg-indigo-600 rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={true}
              >
                Debug
              </Link> */}
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
                      label: 'Brand Guide',
                      content: <BrandGuide />,
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

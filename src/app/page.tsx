'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import TabPanel from '@/components/TabPanel';
import SitemapBuilder from '@/components/sitemap/SitemapBuilder';
import WebsiteBuilder from '@/components/website-builder/WebsiteBuilder';
import BrandGuide from '@/components/brandguide/BrandGuide';
import ExportButton from '@/components/ExportButton';
import { useDesignStore } from '@/lib/store/designStore';
import StyleProvider from '@/lib/contexts/StyleProvider';
import FunnelSelectionDialog from '@/components/FunnelSelectionDialog';
import { WebsiteSection } from '@/lib/types';
import Image from 'next/image';

export default function Home() {
  const [isStructurePanelOpen, setIsStructurePanelOpen] = useState(true);
  
  const togglePanel = useCallback(() => {
    setIsStructurePanelOpen(prev => !prev);
  }, []);

  // New Design button component
  const NewDesignButton = () => {
    const design = useDesignStore() as any;
    const [showFunnelDialog, setShowFunnelDialog] = useState(false);
    
    const handleNewDesign = () => {
      setShowFunnelDialog(true);
    };

    const handleFunnelSelect = (sections: WebsiteSection[]) => {
      design.resetDesign(sections);
    };
    
    return (
      <>
        <button
          onClick={handleNewDesign}
          className="inline-flex items-center px-4 py-2 border border-blue-500 rounded-md text-sm font-medium bg-white text-blue-500 hover:bg-blue-50 cursor-pointer"
        >
          <svg
            className="-ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
          </svg>
          New Design
        </button>

        {showFunnelDialog && (
          <FunnelSelectionDialog
            onClose={() => setShowFunnelDialog(false)}
            onSelect={handleFunnelSelect}
          />
        )}
      </>
    );
  };

  return (
    <main className="h-screen bg-gray-50 overflow-hidden ">

        {/* Top Nav Bar */}
        <header className="bg-white shadow-sm">
          <div className="max-w-full mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Image src="/images/main/oneclick design v1.png" alt="One Click Design Logo" width={180} height={40} priority />
              </div>
              <div className="flex space-x-3">
                {/* 3 Buttons */}
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

                  <StyleProvider>
                    <ExportButton />
                  </StyleProvider>
                  
                  <NewDesignButton />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex h-[calc(100vh-64px)]">
          {/* Left Panel */}
          <div className={`transition-all duration-300 ease-in-out flex-shrink-0 ${isStructurePanelOpen ? 'w-50 lg:w-1/4' : 'w-12'} bg-white border-r border-gray-200 relative`}>
            <div className={`sticky top-0 flex items-center p-4 border-b border-gray-200 bg-white z-10 ${isStructurePanelOpen ? 'justify-between' : 'justify-center'}`}>
              {isStructurePanelOpen && (
                <h2 className="text-lg font-medium text-gray-900 transition-opacity duration-300">Structure</h2>
              )}
              <button 
                onClick={togglePanel}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0 cursor-pointer"
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
              <div className="h-[calc(100vh-120px)] flex flex-col">
                <div className="h-full">
                  <TabPanel
                    tabs={[
                      {
                        id: 'brand-guide',
                        label: 'Brand Guide',
                        content: 
                          <StyleProvider>
                            <BrandGuide />
                          </StyleProvider>
                      },
                      {
                        id: 'sections',
                        label: 'Sections',
                        content: <SitemapBuilder />,
                      }
                    ]}
                    defaultTab="brand-guide"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex-grow overflow-y-auto bg-gray-50 p-6 w-full lg:w-3/4">
            <StyleProvider>
              <WebsiteBuilder />
            </StyleProvider>
          </div>
        </div>
          
    </main>
  );
}

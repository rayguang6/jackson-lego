'use client';

import React, { useState } from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import WireframeSection from './WireframeSection';

const WireframePreview: React.FC = () => {
  const { design } = useDesign();
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);

  // Sort sections by order
  const sortedSections = [...design.sections].sort((a, b) => a.order - b.order);

  const handleSectionClick = (sectionId: string) => {
    setSelectedSectionId(sectionId);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg border">
      <h2 className="text-xl font-bold mb-4">Website Preview</h2>
      
      <div className="overflow-y-auto max-h-[calc(100vh-200px)] px-4 py-2 bg-white rounded-lg border">
        <div className="max-w-3xl mx-auto">
          {sortedSections.length === 0 ? (
            <div className="h-40 flex items-center justify-center text-gray-500 italic">
              No sections to preview. Add sections in the Site Map tab.
            </div>
          ) : (
            sortedSections.map((section) => (
              <WireframeSection
                key={section.id}
                section={section}
                onClick={handleSectionClick}
                isSelected={section.id === selectedSectionId}
              />
            ))
          )}
        </div>
      </div>
      
      {selectedSectionId && (
        <div className="mt-4 p-3 bg-white rounded border">
          <h3 className="font-medium text-sm mb-2">Template Options</h3>
          <p className="text-sm text-gray-500 mb-2">
            Choose from different layout options for this section
          </p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
              Layout 1
            </button>
            <button className="px-3 py-1 bg-white border text-gray-700 text-sm rounded hover:bg-gray-50">
              Layout 2
            </button>
            <button className="px-3 py-1 bg-white border text-gray-700 text-sm rounded hover:bg-gray-50">
              Layout 3
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WireframePreview; 
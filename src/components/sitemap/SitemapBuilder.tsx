'use client';

import React, { useState } from 'react';
import { WebsiteSection, SectionType } from '@/lib/types';
import { useDesignStore } from '@/lib/store/designStore';
import SitemapSection from './SitemapSection';
import { getTemplatesForSectionType } from '@/lib/templates';
import TemplateThumbnail from '@/components/website-builder/TemplateThumbnail';

const SitemapBuilder: React.FC = () => {
  // 1️⃣ Grab only what you need from the store
  const sections       = useDesignStore(s => s.design.sections);
  const addSection     = useDesignStore(s => s.addSection);
  const removeSection  = useDesignStore(s => s.removeSection);
  const reorderSection = useDesignStore(s => s.reorderSection);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  // Sort sections by order
  const sortedSections = React.useMemo(
    () => [...sections].sort((a, b) => a.order - b.order),
    [sections]
  );

  const handleMoveUp = (sectionId: string) => {
    const sec = sections.find(s => s.id === sectionId);
    if (sec && sec.order > 0) {
      reorderSection(sectionId, sec.order - 1);
    }
  };

  const handleMoveDown = (sectionId: string) => {
    const sec = sections.find(s => s.id === sectionId);
    if (sec && sec.order < sections.length - 1) {
      reorderSection(sectionId, sec.order + 1);
    }
  };

  return (
    <div className="rounded-lg w-full flex flex-col h-full">
      <div className="flex-shrink-0 bg-white shadow-sm z-10">
        <div className="bg-white flex gap-3 p-3 border-b border-gray-200">
          <button
            type="button"
            onClick={() => setIsAddDialogOpen(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm font-medium"
          >
            + Add Section
          </button>
        </div>
      </div>
      
      <div className="flex-grow overflow-y-auto space-y-2 px-3 pb-4 pt-2">
        {sortedSections.length === 0 ? (
          <p className="text-gray-500 italic text-sm p-3 text-center bg-gray-50 rounded-lg">No sections yet. Add your first section above.</p>
        ) : (
          sortedSections.map((section, index) => (
            <SitemapSection
              key={section.id}
              section={section}
              onRemove={removeSection}
              onMoveUp={handleMoveUp}
              onMoveDown={handleMoveDown}
              isFirst={index === 0}
              isLast={index === sortedSections.length - 1}
            />
          ))
        )}
      </div>
      {/* Section selector modal */}
      {isAddDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={() => setIsAddDialogOpen(false)}>
          <div
            className="bg-white p-6 rounded-lg shadow-xl w-[1200px] max-w-[95vw] max-h-[90vh] border border-gray-200 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Select Section Type</h3>
              <button
                onClick={() => setIsAddDialogOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 overflow-y-auto flex-1">
              {Object.values(SectionType).map(type => {
                const variants = getTemplatesForSectionType(type);
                if (variants.length === 0) return null;
                const variant = variants[0];
                return (
                  <div key={type} className="h-[400px] cursor-pointer">
                    <TemplateThumbnail
                      template={variant}
                      onClick={() => {
                        addSection(type, variant.id);
                        setIsAddDialogOpen(false);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SitemapBuilder; 
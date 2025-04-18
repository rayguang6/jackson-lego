'use client';

import React, { useState } from 'react';
import { WebsiteSection, SectionType } from '@/lib/types';
import { useDesignStore } from '@/lib/store/designStore';
import SitemapSection from './SitemapSection';

const SitemapBuilder: React.FC = () => {
  // 1️⃣ Grab only what you need from the store
  const sections       = useDesignStore(s => s.design.sections);
  const addSection     = useDesignStore(s => s.addSection);
  const removeSection  = useDesignStore(s => s.removeSection);
  const reorderSection = useDesignStore(s => s.reorderSection);

  const [newSectionType, setNewSectionType] = useState<SectionType>(SectionType.S01_Hero);

  // Sort sections by order
  // const sortedSections = [...design.sections].sort((a, b) => a.order - b.order);

  // 3️⃣ Sort them by order for rendering
  const sortedSections = React.useMemo(
    () => [...sections].sort((a, b) => a.order - b.order),
    [sections]
  );

  const handleAddSection = () => {
    // Generate a descriptive title for the sitemap display
    const formattedType = newSectionType.charAt(0).toUpperCase() + newSectionType.slice(1).replace(/([A-Z])/g, ' $1').trim();
    const title = `${formattedType} Section`;
    
    // Get default template ID for this section type
    const defaultTemplateId = `${newSectionType}-v1-light`;
    
    // Pass both required parameters
    addSection(newSectionType, defaultTemplateId);
  };

  
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
          <select
            value={newSectionType}
            onChange={(e) => setNewSectionType(e.target.value as SectionType)}
            className="border rounded p-2 flex-grow text-sm"
          >
            {Object.values(SectionType).map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1').trim()}
              </option>
            ))}
          </select>
          
          <button
            type="button"
            onClick={handleAddSection}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm font-medium min-w-[70px]"
          >
            Add
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
    </div>
  );
};

export default SitemapBuilder; 
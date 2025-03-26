'use client';

import React, { useState } from 'react';
import { Section, SectionType } from '@/lib/types';
import { useDesign } from '@/lib/contexts/DesignContext';
import SitemapSection from './SitemapSection';

const SitemapBuilder: React.FC = () => {
  const { design, addSection, removeSection, reorderSection } = useDesign();
  const [newSectionType, setNewSectionType] = useState<SectionType>(SectionType.Hero);

  // Sort sections by order
  const sortedSections = [...design.sections].sort((a, b) => a.order - b.order);

  const handleAddSection = () => {
    // Auto-generate section title based on type
    const sectionCount = design.sections.filter(s => s.type === newSectionType).length + 1;
    const formattedType = newSectionType.charAt(0).toUpperCase() + newSectionType.slice(1).replace(/([A-Z])/g, ' $1').trim();
    const title = `${formattedType} Section`;
    
    addSection({
      type: newSectionType,
      title: title,
    });
  };

  const handleMoveUp = (sectionId: string) => {
    const section = design.sections.find((s) => s.id === sectionId);
    if (section && section.order > 0) {
      reorderSection(sectionId, section.order - 1);
    }
  };

  const handleMoveDown = (sectionId: string) => {
    const section = design.sections.find((s) => s.id === sectionId);
    if (section && section.order < design.sections.length - 1) {
      reorderSection(sectionId, section.order + 1);
    }
  };

  return (
    <div className="bg-white rounded-lg">
      <div className="mb-4">
        <div className="flex gap-3 p-3 border-b border-gray-200">
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
      
      <div className="space-y-2 px-3 pb-4 max-h-[calc(100vh-220px)] overflow-y-auto">
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
'use client';

import React, { useState } from 'react';
import { Section, SectionType } from '@/lib/types';
import { useDesign } from '@/lib/contexts/DesignContext';
import SitemapSection from './SitemapSection';

const SitemapBuilder: React.FC = () => {
  const { design, addSection, removeSection, reorderSection } = useDesign();
  const [newSectionType, setNewSectionType] = useState<SectionType>(SectionType.Features);
  const [newSectionTitle, setNewSectionTitle] = useState('');

  // Sort sections by order
  const sortedSections = [...design.sections].sort((a, b) => a.order - b.order);

  const handleAddSection = (e: React.FormEvent) => {
    e.preventDefault();

    if (newSectionTitle.trim() === '') {
      return;
    }

    addSection({
      type: newSectionType,
      title: newSectionTitle.trim(),
    });

    // Reset the form
    setNewSectionTitle('');
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
    <div className="bg-gray-50 p-4 rounded-lg border">
      <h2 className="text-xl font-bold mb-4">Website Structure</h2>
      
      <div className="mb-6">
        <form onSubmit={handleAddSection} className="flex gap-2 mb-4">
          <select
            value={newSectionType}
            onChange={(e) => setNewSectionType(e.target.value as SectionType)}
            className="border rounded p-2 flex-grow-0"
          >
            {Object.values(SectionType).map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
              </option>
            ))}
          </select>
          
          <input
            type="text"
            value={newSectionTitle}
            onChange={(e) => setNewSectionTitle(e.target.value)}
            placeholder="Section Title"
            className="border rounded p-2 flex-grow"
          />
          
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </form>
      </div>
      
      <div className="space-y-2">
        {sortedSections.length === 0 ? (
          <p className="text-gray-500 italic">No sections yet. Add your first section above.</p>
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
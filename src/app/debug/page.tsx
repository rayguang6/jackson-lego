'use client';

import React, { useState, useEffect } from 'react';
import { templateRegistry, getTemplate } from '@/lib/templates';
import { SectionType } from '@/lib/types/index';

export default function DebugPage() {
  const [selectedSection, setSelectedSection] = useState<SectionType>(SectionType.S01_Hero);
  const [selectedVariant, setSelectedVariant] = useState<string>('v1');
  
  // Get all section types that have variants
  const availableSections = Object.entries(templateRegistry)
    .filter(([_, templates]) => 
      Object.keys(templates.light).length > 0 || Object.keys(templates.dark).length > 0
    )
    .map(([sectionType]) => sectionType as SectionType);

  // Get available variants for the selected section (combined from both themes)
  const lightVariants = Object.keys(templateRegistry[selectedSection]?.light || {});
  const darkVariants = Object.keys(templateRegistry[selectedSection]?.dark || {});
  const availableVariants = [...new Set([...lightVariants, ...darkVariants])];
  
  // If no variants available for the current selection, reset to first available
  useEffect(() => {
    if (!availableVariants.includes(selectedVariant) && availableVariants.length > 0) {
      setSelectedVariant(availableVariants[0]);
    }
  }, [selectedSection, availableVariants, selectedVariant]);

  // Render both light and dark modes of the selected component
  const renderSelectedComponents = () => {
    const lightTemplate = getTemplate(selectedSection, 'light', selectedVariant);
    const darkTemplate = getTemplate(selectedSection, 'dark', selectedVariant);
    
    if (!lightTemplate && !darkTemplate) {
      return <div className="p-8 text-center text-gray-500">No template available for this selection</div>;
    }

    return (
      <div>
        {/* Component Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1).replace(/-/g, ' ')} - {selectedVariant}
          </h2>
          <p className="text-gray-500">
            {lightTemplate?.description || darkTemplate?.description}
          </p>
        </div>

        {/* Templates Debug Stack - Vertical Layout */}
        <div className="flex flex-col gap-8">
          {/* Light Template */}
          {lightTemplate && (
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="bg-gray-100 p-2 font-medium text-sm">Light Theme</div>
              <div>
                {React.createElement(lightTemplate.component, { theme: 'light' })}
              </div>
            </div>
          )}
          
          {/* Dark Template */}
          {darkTemplate && (
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="bg-gray-800 text-white p-2 font-medium text-sm">Dark Theme</div>
              <div>
                {React.createElement(darkTemplate.component, { theme: 'dark' })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="debug-page">
      {/* Controls */}
      <div className="debug-controls sticky top-0 z-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Template Debug</h1>
            
            <div className="flex flex-wrap gap-4">
              {/* Section Type Selector */}
              <div>
                <label htmlFor="section-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Section Type
                </label>
                <select
                  id="section-type"
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value as SectionType)}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {availableSections.map((section) => (
                    <option key={section} value={section}>
                      {section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, ' ')}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Variant Selector */}
              <div>
                <label htmlFor="variant" className="block text-sm font-medium text-gray-700 mb-1">
                  Variant
                </label>
                <select
                  id="variant"
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {availableVariants.map((variant) => (
                    <option key={variant} value={variant}>
                      {variant}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Debug Area */}
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSelectedComponents()}
      </div>
    </div>
  );
} 
'use client';

import React, { useState, useEffect } from 'react';
import { templateRegistry } from '@/lib/templates';
import { SectionType } from '@/lib/types/index';

// Type for legacy template structure - for type checking only
interface LegacyTemplates {
  light?: Record<string, any>;
  dark?: Record<string, any>;
  variants?: any[];
}

export default function DebugPage() {
  const [selectedSection, setSelectedSection] = useState<SectionType | 'all'>('all');
  const [selectedVariant, setSelectedVariant] = useState<string | 'all'>('all');
  
  // Get all section types that have variants
  const availableSections = Object.entries(templateRegistry)
    .filter(([_, templates]) => {
      // Handle both new structure (variants array) and old structure (light/dark objects)
      if (Array.isArray(templates.variants) && templates.variants.length > 0) {
        return true;
      }
      // Cast to legacy structure for type checking
      const legacyTemplates = templates as unknown as LegacyTemplates;
      return (legacyTemplates.light && Object.keys(legacyTemplates.light).length > 0) || 
             (legacyTemplates.dark && Object.keys(legacyTemplates.dark).length > 0);
    })
    .map(([sectionType]) => sectionType as SectionType);

  // Get all available variants from all sections
  const getAllVariants = () => {
    const allVariants: string[] = [];
    
    Object.values(templateRegistry).forEach(templates => {
      // Handle new structure (variants array)
      if (Array.isArray(templates.variants) && templates.variants.length > 0) {
        templates.variants.forEach(variant => {
          const idParts = variant.id.split('-');
          const variantId = idParts.find(part => part.startsWith('v')) || 'v1';
          if (!allVariants.includes(variantId)) {
            allVariants.push(variantId);
          }
        });
      } else {
        // Handle legacy structure
        const legacyTemplates = templates as unknown as LegacyTemplates;
        if (legacyTemplates.light) {
          Object.keys(legacyTemplates.light).forEach(variant => {
            if (!allVariants.includes(variant)) {
              allVariants.push(variant);
            }
          });
        }
        if (legacyTemplates.dark) {
          Object.keys(legacyTemplates.dark).forEach(variant => {
            if (!allVariants.includes(variant)) {
              allVariants.push(variant);
            }
          });
        }
      }
    });
    
    return allVariants;
  };

  // Get available variants for the selected section (handle both structures)
  const getAvailableVariants = () => {
    if (selectedSection === 'all') {
      return getAllVariants();
    }
    
    const templates = templateRegistry[selectedSection as SectionType];
    
    if (!templates) return [];
    
    // Handle new structure (variants array)
    if (Array.isArray(templates.variants) && templates.variants.length > 0) {
      const allVariants = templates.variants;
      // Extract unique variant IDs (without theme suffix)
      const variantIds = allVariants.map(variant => {
        const idParts = variant.id.split('-');
        // Handle different ID formats (e.g., "hero-v1-light" or "hero-light-v1")
        return idParts.find(part => part.startsWith('v')) || 'v1';
      });
      return [...new Set(variantIds)];
    }
    
    // Handle legacy structure (light/dark objects)
    const legacyTemplates = templates as unknown as LegacyTemplates;
    const lightVariants = Object.keys(legacyTemplates.light || {});
    const darkVariants = Object.keys(legacyTemplates.dark || {});
    return [...new Set([...lightVariants, ...darkVariants])];
  };
  
  const availableVariants = getAvailableVariants();
  
  // If no variants available for the current selection, reset to first available
  useEffect(() => {
    if (selectedVariant !== 'all' && !availableVariants.includes(selectedVariant) && availableVariants.length > 0) {
      setSelectedVariant(availableVariants[0]);
    }
  }, [selectedSection, availableVariants, selectedVariant]);

  // Get all templates matching current filters
  const getFilteredTemplates = () => {
    const allTemplates: Array<{section: SectionType, template: any}> = [];
    
    // Iterate over all sections or just the selected one
    const sectionsToProcess = selectedSection === 'all' 
      ? availableSections 
      : [selectedSection as SectionType];
    
    sectionsToProcess.forEach(section => {
      const templates = templateRegistry[section];
      if (!templates) return;
      
      // Handle new structure (variants array)
      if (Array.isArray(templates.variants) && templates.variants.length > 0) {
        templates.variants.forEach(template => {
          const idParts = template.id.split('-');
          const variantId = idParts.find(part => part.startsWith('v')) || 'v1';
          
          if (selectedVariant === 'all' || variantId === selectedVariant) {
            allTemplates.push({ section, template });
          }
        });
      } else {
        // Handle legacy structure
        const legacyTemplates = templates as unknown as LegacyTemplates;
        ['light', 'dark'].forEach(theme => {
          const themeTemplates = legacyTemplates[theme as 'light' | 'dark'] || {};
          
          Object.entries(themeTemplates).forEach(([variant, template]) => {
            if (selectedVariant === 'all' || variant === selectedVariant) {
              allTemplates.push({ section, template });
            }
          });
        });
      }
    });
    
    return allTemplates;
  };

  // Render a single template
  const renderTemplate = (section: SectionType, template: any, index: number) => {
    const { theme, component: Component } = template;
    const sectionName = section.charAt(0).toUpperCase() + section.slice(1).replace(/_/g, ' ');
    const variant = template.id.split('-').find((part: string) => part.startsWith('v')) || 'v1';
    
    return (
      <div key={`${template.id}-${index}`} className="border rounded-lg overflow-hidden shadow-md mb-8">
        <div className={`p-3 font-medium ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800 text-white'}`}>
          {sectionName} - {variant} - {theme}
        </div>
        <div>
          {React.createElement(Component, { theme })}
        </div>
      </div>
    );
  };

  // Render templates based on current filters
  const renderTemplates = () => {
    const filteredTemplates = getFilteredTemplates();
    
    if (filteredTemplates.length === 0) {
      return <div className="p-8 text-center text-gray-500">No templates available for the selected filters</div>;
    }

    return (
      <div className="flex flex-col">
        {filteredTemplates.map((item, index) => renderTemplate(item.section, item.template, index))}
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
                  onChange={(e) => setSelectedSection(e.target.value as SectionType | 'all')}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="all">All Sections</option>
                  {availableSections.map((section) => (
                    <option key={section} value={section}>
                      {section.charAt(0).toUpperCase() + section.slice(1).replace(/_/g, ' ')}
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
                  <option value="all">All Variants</option>
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
        {renderTemplates()}
      </div>
    </div>
  );
} 
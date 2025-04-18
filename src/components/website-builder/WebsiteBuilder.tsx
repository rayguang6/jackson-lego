'use client';

import React, { useState, useMemo } from 'react';
import { useDesignStore } from '@/lib/store/designStore';
import { WebsiteSection, SectionType, ThemeType, VersionType } from '@/lib/types';
// Import the template registry
import { getTemplate, getTemplatesForSectionType } from '@/lib/templates';
import { parseTemplateId, generateTemplateId } from '@/lib/utils';
import TemplateSelector from './TemplateSelector';

const WebsiteBuilder: React.FC = () => {

  // 1️⃣ Pull state & actions from Zustand
  const sections        = useDesignStore(s => s.design.sections);
  const styleGuide      = useDesignStore(s => s.design.styleGuide);
  const removeSection   = useDesignStore(s => s.removeSection);
  const reorderSection  = useDesignStore(s => s.reorderSection);
  const updateSectionTemplate = useDesignStore(s => s.updateSectionTemplate);

  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [templateSelectorSection, setTemplateSelectorSection] = useState<WebsiteSection | null>(null);

  // 2️⃣ Sort once per change
  const sortedSections = useMemo(
    () => [...sections].sort((a, b) => a.order - b.order),
    [sections]
  );

  const handleSectionClick = (sectionId: string) => {
    setSelectedSectionId(sectionId);
  };

  const handleMoveUp = (sectionId: string) => {
    const section = sortedSections.find((s) => s.id === sectionId);
    if (section && section.order > 0) {
      reorderSection(sectionId, section.order - 1);
    }
  };

  const handleMoveDown = (sectionId: string) => {
    const section = sortedSections.find((s) => s.id === sectionId);
    if (section && section.order < sortedSections.length - 1) {
      reorderSection(sectionId, section.order + 1);
    }
  };

  const handleDelete = (sectionId: string) => {
    if (window.confirm('Are you sure you want to delete this section?')) {
      removeSection(sectionId);
      if (selectedSectionId === sectionId) {
        setSelectedSectionId(null);
      }
    }
  };

  const openTemplateSelector = (section: WebsiteSection) => {
    setTemplateSelectorSection(section);
  };

  const closeTemplateSelector = () => {
    setTemplateSelectorSection(null);
  };

  // Toggle the theme of a section between light and dark
  const toggleSectionTheme = (section: WebsiteSection) => {
    if (!section.templateId) return;
    
    const templateInfo = parseTemplateId(section.templateId);
    if (!templateInfo) return;
    
    // Toggle theme
    const newTheme = templateInfo.theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
    
    // Generate new template ID with the same section type and version, but opposite theme
    const newTemplateId = generateTemplateId(
      templateInfo.sectionType,
      templateInfo.version,
      newTheme
    );
    
    // Check if the template exists
    const newTemplate = getTemplate(templateInfo.sectionType, templateInfo.version, newTheme);
    if (newTemplate) {
      updateSectionTemplate(section.id, newTemplateId);
    }
  };
  
  // Change to a random variant of the same section type
  const randomizeSectionVariant = (section: WebsiteSection) => {
    // Get all templates for this section type
    const templates = getTemplatesForSectionType(section.type);
    if (templates.length <= 1) return; // No other templates available
    
    // Get current template info
    const currentTemplateInfo = section.templateId ? parseTemplateId(section.templateId) : null;
    
    // Filter templates to exclude the current one
    const otherTemplates = templates.filter(template => {
      if (!currentTemplateInfo) return true;
      const info = parseTemplateId(template.id);
      if (!info) return true;
      
      // We consider it a different template if the version is different
      return info.version !== currentTemplateInfo.version;
    });
    
    if (otherTemplates.length === 0) return;
    
    // Pick a random template
    const randomIndex = Math.floor(Math.random() * otherTemplates.length);
    const randomTemplate = otherTemplates[randomIndex];
    
    // Update section with the new template
    updateSectionTemplate(section.id, randomTemplate.id);
  };

  // Create a skeleton placeholder based on section type
  const renderSectionSkeleton = () => {
    return (
      <div className="flex flex-col items-center py-16 px-8 space-y-6 bg-white">
        <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-40 w-full max-w-4xl bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  };

  // Render an actual component based on section type
  // const renderActualTemplate = (section: WebsiteSection) => {
  //   let template;
    
  //   if (section.templateId) {
  //     // Parse the template ID safely
  //     const templateInfo = parseTemplateId(section.templateId);
      
  //     if (templateInfo) {
  //       // Use the parsed information to get the template
  //       template = getTemplate(
  //         section.type, 
  //         templateInfo.version, 
  //         templateInfo.theme
  //       );
  //     } else {
  //       // Fallback to default if parsing failed
  //       template = getTemplate(section.type, VersionType.v1, ThemeType.light);
  //     }
  //   } else {
  //     // If no template is selected, use v1/light as the default
  //     template = getTemplate(section.type, VersionType.v1, ThemeType.light);
  //   }
    
  //   if (template) {
  //     const Component = template.component;
      
  //     // Pass the section ID to ensure unique instances can have different content
  //     return <Component 
  //       theme={template.theme} 
  //       sectionId={section.id}
  //       styleGuide={design.styleGuide}
  //       content={section.content} 
  //     />;
  //   }
    
  //   // If no template is found, render a skeleton
  //   return renderSectionSkeleton();
  // };

  const renderActualTemplate = (section: WebsiteSection) => {
    let tpl = section.templateId
      ? (() => {
          const info = parseTemplateId(section.templateId!);
          return info
            ? getTemplate(section.type, info.version, info.theme)
            : getTemplate(section.type, VersionType.v1, ThemeType.light);
        })()
      : getTemplate(section.type, VersionType.v1, ThemeType.light);

    if (!tpl?.component) return renderSectionSkeleton();

    const C = tpl.component;
    return (
      <C
        theme={tpl.theme}
        sectionId={section.id}
        styleGuide={styleGuide}
        content={section.content}
      />
    );
  };

  // Get selected section
  // const selectedSection = selectedSectionId 
  //   ? sortedSections.find(section => section.id === selectedSectionId)
  //   : sortedSections[0] || null;

  return (
    <>
      <div className="h-full flex flex-col bg-white rounded-lg border">
        <div className="flex-shrink-0 bg-white border-b border-gray-200 p-3 flex justify-between items-center shadow-sm">
          <h2 className="text-lg font-medium text-gray-900">Website Builder</h2>
        </div>
        
        {sortedSections.length > 0 ? (
          <div className="flex-grow overflow-y-auto">
            <div className="bg-white">
              {/* Combined preview - renders all sections as a single website */}
              {sortedSections.map((section, index) => (
                <div 
                  key={section.id} 
                  className={`relative border-b border-gray-100 ${
                    section.id === selectedSectionId ? 'ring-2 ring-indigo-500' : ''
                  } group`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  {/* Section label overlay - moved to top left */}
                  <div className="absolute top-0 left-0 bg-indigo-600 text-white px-3 py-1 text-xs font-medium z-10 flex items-center">
                    <span>{section.title}</span>
                    {section.templateId && (
                      <span className="ml-2 bg-white text-indigo-600 px-2 py-0.5 rounded-full text-xxs">
                        {section.templateId.split('-').slice(0, 2).join(' ')}
                      </span>
                    )}
                  </div>
                  
                  {/* Section toolbar - moved to top right, only visible on hover or when selected */}
                  <div 
                    className={`absolute top-0 right-0 bg-white rounded-lg shadow-md flex items-center p-1 z-20 transition-opacity duration-200 ${
                      section.id === selectedSectionId ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => handleMoveUp(section.id)}
                      disabled={index === 0}
                      className={`p-1.5 rounded ${
                        index === 0 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      title="Move up"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => handleMoveDown(section.id)}
                      disabled={index === sortedSections.length - 1}
                      className={`p-1.5 rounded ${
                        index === sortedSections.length - 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      title="Move down"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    
                    <div className="mx-0.5 h-4 border-r border-gray-200"></div>
                    
                    {/* Theme toggle button */}
                    <button
                      onClick={() => toggleSectionTheme(section)}
                      className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
                      title="Toggle light/dark theme"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    </button>
                    
                    {/* Random variant button */}
                    <button
                      onClick={() => randomizeSectionVariant(section)}
                      className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
                      title="Random variant"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                        />
                      </svg>
                    </button>
                    
                    <div className="mx-0.5 h-4 border-r border-gray-200"></div>
                    
                    {/* Template selector button */}
                    <button
                      onClick={() => openTemplateSelector(section)}
                      className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
                      title="Select template"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        />
                      </svg>
                    </button>
                    
                    <div className="mx-0.5 h-4 border-r border-gray-200"></div>
                    
                    {/* Delete button */}
                    <button
                      onClick={() => handleDelete(section.id)}
                      className="p-1.5 text-red-500 hover:bg-red-50 rounded"
                      title="Delete section"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                  
                  {renderActualTemplate(section)}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center p-8">
              <p className="text-gray-500 text-lg">No sections to preview.</p>
              <p className="text-gray-400 mt-2">Add sections in the Structure panel to get started.</p>
            </div>
          </div>
        )}
      </div>
      
      {templateSelectorSection && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6 overflow-auto"
          onClick={() => closeTemplateSelector()}
        >
          <div 
            className="relative max-h-[90vh] max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <TemplateSelector 
              section={templateSelectorSection} 
              onClose={closeTemplateSelector} 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WebsiteBuilder; 
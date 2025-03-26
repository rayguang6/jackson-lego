'use client';

import React, { useEffect, useState } from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { Section, SectionType } from '@/lib/types';
import { getTemplatesForSectionType, TemplateVariant } from '@/lib/constants/templateRegistry';
import TemplateThumbnail from './TemplateThumbnail';

interface TemplateSelectorProps {
  section: Section;
  onClose?: () => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ section, onClose }) => {
  const { updateSectionTemplate } = useDesign();
  const [templates, setTemplates] = useState<TemplateVariant[]>([]);
  const [previewMode, setPreviewMode] = useState<'image' | 'rendered'>('rendered');
  
  useEffect(() => {
    // Get all templates for this section type
    const availableTemplates = getTemplatesForSectionType(section.type);
    setTemplates(availableTemplates);
  }, [section.type]);
  
  const handleSelectTemplate = (templateId: string) => {
    updateSectionTemplate(section.id, templateId);
    if (onClose) onClose();
  };
  
  // Function to format section type name for display
  const formatSectionType = (type: SectionType) => {
    return type
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-xl w-[540px] max-w-[90vw] border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          {formatSectionType(section.type)} Templates
        </h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-md overflow-hidden">
            <button
              onClick={() => setPreviewMode('image')}
              className={`px-3 py-1 text-xs ${
                previewMode === 'image' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Image
            </button>
            <button
              onClick={() => setPreviewMode('rendered')}
              className={`px-3 py-1 text-xs ${
                previewMode === 'rendered' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Preview
            </button>
          </div>
          {onClose && (
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Current template indicator */}
      {section.templateId && (
        <div className="mb-3 px-3 py-2 bg-gray-50 rounded-md text-sm text-gray-600 flex items-center">
          <span className="mr-2">Current template:</span>
          <span className="font-medium text-indigo-600">
            {section.templateId.split('-').join(' ')}
          </span>
        </div>
      )}
      
      {/* Template grid */}
      <div className="grid grid-cols-2 gap-3 max-h-[430px] overflow-y-auto p-1">
        {templates.map((template) => (
          <div key={template.id} className="h-[210px]">
            {previewMode === 'rendered' ? (
              <TemplateThumbnail
                template={template}
                selected={section.templateId === template.id}
                onClick={() => handleSelectTemplate(template.id)}
              />
            ) : (
              <div 
                className={`border rounded-md overflow-hidden cursor-pointer hover:border-indigo-500 transition-colors h-full flex flex-col ${
                  section.templateId === template.id ? 'ring-2 ring-indigo-500' : ''
                }`}
                onClick={() => handleSelectTemplate(template.id)}
              >
                {/* Template preview image or placeholder */}
                <div className="bg-gray-100 flex-1 overflow-hidden">
                  {template.previewImageUrl ? (
                    <img 
                      src={template.previewImageUrl} 
                      alt={template.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400 text-xs p-4 text-center w-full">
                      {template.name}
                      <span className="ml-1 text-[10px] text-gray-400">({template.theme})</span>
                    </div>
                  )}
                </div>
                
                {/* Template name and theme badge */}
                <div className="p-2 bg-white">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate flex-1">
                      {template.name}
                    </p>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      template.theme === 'light' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-900 text-gray-100'
                    }`}>
                      {template.theme}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-1">
                    {template.description.length > 35 
                      ? template.description.substring(0, 35) + '...' 
                      : template.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Empty state */}
        {templates.length === 0 && (
          <div className="col-span-2 py-8 text-center">
            <p className="text-gray-500">No templates available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateSelector; 
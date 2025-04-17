'use client';

import React, { useEffect, useState } from 'react';
import { useDesignStore } from '@/lib/store/designStore';
import { WebsiteSection, SectionType, ThemeType, VersionType } from '@/lib/types';
import { getTemplatesForSectionType } from '@/lib/templates';
import { TemplateVariant } from '@/lib/templates/types';
import TemplateThumbnail from './TemplateThumbnail';

interface TemplateSelectorProps {
  section: WebsiteSection;
  onClose?: () => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ section, onClose }) => {
  const updateSectionTemplate = useDesignStore(s => s.updateSectionTemplate);
  const [templates, setTemplates] = useState<TemplateVariant[]>([]);
  
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
    <div className="p-6 bg-white rounded-lg shadow-xl w-[900px] max-w-[95vw] max-h-[90vh] border border-gray-200 overflow-hidden flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {formatSectionType(section.type)} Templates
        </h3>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 p-1.5 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Current template indicator */}
      {section.templateId && (
        <div className="mb-4 px-4 py-3 bg-gray-50 rounded-md text-sm text-gray-600 flex items-center">
          <span className="mr-2">Current template:</span>
          <span className="font-medium text-indigo-600">
            {section.templateId.split('-').join(' ')}
          </span>
        </div>
      )}
      
      {/* Template grid */}
      <div className="grid grid-cols-2 gap-6 overflow-y-auto p-2 flex-1">
        {templates.map((template) => (
          <div key={template.id} className="h-[350px]">
            <TemplateThumbnail
              template={template}
              selected={section.templateId === template.id}
              onClick={() => handleSelectTemplate(template.id)}
            />
          </div>
        ))}
        
        {/* Empty state */}
        {templates.length === 0 && (
          <div className="col-span-2 py-12 text-center">
            <p className="text-gray-500 text-lg">No templates available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateSelector; 
'use client';

import React from 'react';
import { TemplateVariant } from '@/lib/templates/types';

interface TemplateThumbnailProps {
  template: TemplateVariant;
  selected?: boolean;
  onClick?: () => void;
}

const TemplateThumbnail: React.FC<TemplateThumbnailProps> = ({ 
  template, 
  selected = false,
  onClick
}) => {
  const { component: Component, theme, id } = template;
  
  // Scale factor for the thumbnail - increase from 0.2 to 0.3 for better visibility
  const scaleFactor = 0.35;
  
  // Get the variant from the ID (like v1, v2, etc.)
  // Parse ID format: 'sectionType-version-theme' to extract version
  const idParts = id.split('-');
  const variant = idParts.find(part => part.startsWith('v'))?.toUpperCase() || '';
  
  // Default preview props
  const defaultPreviewProps = {
    theme
  };
  
  return (
    <div 
      className={`border rounded-lg overflow-hidden cursor-pointer hover:border-indigo-500 transition-colors h-full flex flex-col shadow-sm ${
        selected ? 'ring-2 ring-indigo-500 shadow-md' : 'hover:shadow-md'
      }`}
      onClick={onClick}
    >
      {/* Template preview - rendered component at smaller scale */}
      <div className="bg-gray-100 flex-1 overflow-hidden relative" style={{ height: '300px' }}>
        {/* Variant badge */}
        <div className="absolute top-2 right-2 z-10 px-2 py-1 rounded-md text-sm font-semibold bg-gray-800 text-white opacity-80">
          {variant}
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div 
            className="w-full h-full" 
            style={{ 
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            {/* Apply transform to scale down the component */}
            <div style={{ 
              transform: `scale(${scaleFactor})`, 
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${100 / scaleFactor}%`
            }}>
              {/* Render the component with default props */}
              <Component {...defaultPreviewProps} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Template info */}
      <div className="p-3 bg-white border-t">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900 flex-1">
            {id.split('-').join(' ').toUpperCase()}
          </p>
          <span className={`text-xs px-2 py-1 rounded-full ${
            theme === 'light' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-900 text-gray-100'
          }`}>
            {theme}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TemplateThumbnail; 
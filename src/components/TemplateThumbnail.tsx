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
  const { component: Component, preview, name, theme, description, id = '' } = template;
  
  // Scale factor for the thumbnail - make it small enough for the grid
  const scaleFactor = 0.2;
  
  // Get the variant from the ID (like v1, v2, etc.)
  const variant = id.split('-').pop()?.toUpperCase() || '';
  
  // Default preview props that will be used for all component types
  // These provide reasonable defaults for thumbnails
  const defaultPreviewProps = {
  };
  
  // Combine default props with any specific preview props
  const combinedProps = {
    ...defaultPreviewProps,
    ...(preview || {})
  };
  
  return (
    <div 
      className={`border rounded-md overflow-hidden cursor-pointer hover:border-indigo-500 transition-colors h-full flex flex-col ${
        selected ? 'ring-2 ring-indigo-500' : ''
      }`}
      onClick={onClick}
    >
      {/* Template preview - rendered component at smaller scale */}
      <div className="bg-gray-100 flex-1 overflow-hidden relative" style={{ height: '160px' }}>
        {/* Variant badge */}
        <div className="absolute top-1 right-1 z-10 px-1.5 py-0.5 rounded-sm text-xs font-semibold bg-gray-800 text-white opacity-75">
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
              {/* Always render the component with at least the default props */}
              <Component {...combinedProps} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Template name and theme badge */}
      <div className="p-2 bg-white">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900 truncate flex-1">
            {name}
          </p>
          <span className={`text-[10px] px-1.5 py-0.5 rounded ${
            theme === 'light' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-900 text-gray-100'
          }`}>
            {theme}
          </span>
        </div>
        <p className="text-xs text-gray-500 truncate mt-1">
          {description.length > 35 
            ? description.substring(0, 35) + '...' 
            : description}
        </p>
      </div>
    </div>
  );
};

export default TemplateThumbnail; 
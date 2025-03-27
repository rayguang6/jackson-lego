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
  
  // Scale factor for the thumbnail - make it small enough for the grid
  const scaleFactor = 0.2;
  
  // Get the variant from the ID (like v1, v2, etc.)
  const variant = id.split('-').pop()?.toUpperCase() || '';
  
  // Default preview props
  const defaultPreviewProps = {
    theme
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
              {/* Render the component with default props */}
              <Component {...defaultPreviewProps} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Template info */}
      <div className="p-2 bg-white">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900 truncate flex-1">
            {id.split('-').join(' ').toUpperCase()}
          </p>
          <span className={`text-[10px] px-1.5 py-0.5 rounded ${
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
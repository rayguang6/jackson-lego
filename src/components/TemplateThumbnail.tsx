'use client';

import React from 'react';
import { TemplateVariant } from '@/lib/constants/templateRegistry';

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
  const { component: Component, preview, name, theme, description } = template;
  
  // Scale factor for the thumbnail - make it small enough for the grid
  const scaleFactor = 0.2;
  
  return (
    <div 
      className={`border rounded-md overflow-hidden cursor-pointer hover:border-indigo-500 transition-colors h-full flex flex-col ${
        selected ? 'ring-2 ring-indigo-500' : ''
      }`}
      onClick={onClick}
    >
      {/* Template preview - actual rendered component */}
      <div className="bg-gray-100 flex-1 overflow-hidden relative" style={{ height: '160px' }}>
        <div className="absolute top-0 left-0 w-full h-full">
          <div 
            className="w-full h-full" 
            style={{ 
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <div style={{ 
              transform: `scale(${scaleFactor})`, 
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${100 / scaleFactor}%`
            }}>
              {preview ? (
                <Component {...preview} />
              ) : (
                <div className="text-gray-400 text-xs p-4 text-center w-full">
                  {name}
                  <span className="ml-1 text-[10px] text-gray-400">({theme})</span>
                </div>
              )}
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
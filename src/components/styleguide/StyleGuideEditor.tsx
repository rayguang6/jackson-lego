'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';

const StyleGuideEditor: React.FC = () => {
  const { styleGuide, updatePrimaryColor, updateStyleGuide } = useDesign();

  const handleColorChange = (colorKey: keyof typeof styleGuide.colors, value: string) => {
    if (colorKey === 'primary') {
      updatePrimaryColor(value);
    } else {
      updateStyleGuide({
        ...styleGuide,
        colors: {
          ...styleGuide.colors,
          [colorKey]: value,
        },
      });
    }
  };

  const handleFontFamilyChange = (value: string) => {
    updateStyleGuide({
      ...styleGuide,
      typography: {
        ...styleGuide.typography,
        fontFamily: value,
        headingFont: value,
        bodyFont: value,
      },
    });
  };

  return (
    <div className="bg-white rounded-lg">
      <h2 className="text-lg font-medium p-3 border-b border-gray-200">Brand Guide</h2>
      
      <div className="p-4 space-y-6">
        {/* Primary Color - Featured */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-3">Primary Brand Color</h3>
          <div className="flex items-center">
            <div 
              className="w-16 h-16 rounded-md shadow-md mr-4" 
              style={{ backgroundColor: styleGuide.colors.primary }}
            ></div>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <input
                  type="color"
                  value={styleGuide.colors.primary}
                  onChange={(e) => handleColorChange('primary', e.target.value)}
                  className="w-10 h-10 mr-2 border cursor-pointer"
                  aria-label="Choose primary color"
                />
                <input
                  type="text"
                  value={styleGuide.colors.primary}
                  onChange={(e) => handleColorChange('primary', e.target.value)}
                  className="border rounded w-24 px-2 py-1 text-sm"
                />
              </div>
              <p className="text-xs text-gray-500">
                This color will be used for buttons, accents, and highlights throughout your site.
              </p>
            </div>
          </div>
        </div>
        
        {/* Color Palette */}
        <div>
          <h3 className="text-md font-medium mb-3">Color Palette</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(styleGuide.colors)
              .filter(([key]) => key !== 'primary') // Skip primary as it's featured above
              .map(([key, color]) => (
                <div key={key} className="flex items-center">
                  <div 
                    className="w-8 h-8 rounded-md mr-2" 
                    style={{ backgroundColor: color }}
                  ></div>
                  <label className="w-24 text-sm capitalize">{key}:</label>
                  <div className="flex items-center">
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => 
                        handleColorChange(key as keyof typeof styleGuide.colors, e.target.value)
                      }
                      className="w-8 h-8 mr-2 border cursor-pointer"
                    />
                    <input
                      type="text"
                      value={color}
                      onChange={(e) => 
                        handleColorChange(key as keyof typeof styleGuide.colors, e.target.value)
                      }
                      className="border rounded w-24 px-2 py-1 text-sm"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        {/* Typography */}
        <div>
          <h3 className="text-md font-medium mb-3">Typography</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <label className="w-24 text-sm">Font Family:</label>
              <select
                value={styleGuide.typography.fontFamily}
                onChange={(e) => handleFontFamilyChange(e.target.value)}
                className="border rounded px-2 py-1 w-full"
              >
                <option value="Inter, system-ui, sans-serif">Inter</option>
                <option value="Roboto, system-ui, sans-serif">Roboto</option>
                <option value="'Open Sans', system-ui, sans-serif">Open Sans</option>
                <option value="'Playfair Display', serif">Playfair Display</option>
                <option value="'Montserrat', sans-serif">Montserrat</option>
              </select>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Preview</h4>
              <div 
                className="p-4 bg-gray-50 rounded border space-y-4"
                style={{ fontFamily: styleGuide.typography.fontFamily }}
              >
                <h1 
                  style={{ 
                    fontSize: styleGuide.typography.h1.size,
                    fontWeight: styleGuide.typography.h1.weight,
                    lineHeight: styleGuide.typography.h1.lineHeight,
                    color: styleGuide.colors.text
                  }}
                >
                  Heading 1
                </h1>
                <h2 
                  style={{ 
                    fontSize: styleGuide.typography.h2.size,
                    fontWeight: styleGuide.typography.h2.weight,
                    lineHeight: styleGuide.typography.h2.lineHeight,
                    color: styleGuide.colors.text
                  }}
                >
                  Heading 2
                </h2>
                <p 
                  style={{ 
                    fontSize: styleGuide.typography.body.size,
                    fontWeight: styleGuide.typography.body.weight,
                    lineHeight: styleGuide.typography.body.lineHeight,
                    color: styleGuide.colors.text
                  }}
                >
                  This is body text. It should be easy to read and have good contrast with the background.
                </p>
                <div className="flex space-x-3 mt-4">
                  <button 
                    style={{ 
                      backgroundColor: styleGuide.colors.primary,
                      color: 'white',
                      borderRadius: styleGuide.borderRadius.md
                    }}
                    className="px-4 py-2"
                  >
                    Primary Button
                  </button>
                  <button 
                    style={{ 
                      backgroundColor: 'transparent',
                      color: styleGuide.colors.primary,
                      borderRadius: styleGuide.borderRadius.md,
                      border: `1px solid ${styleGuide.colors.primary}`
                    }}
                    className="px-4 py-2"
                  >
                    Outlined Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuideEditor; 
'use client';

import React, { useState } from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { FONT_OPTIONS } from '@/lib/fonts';

interface FontOption {
  name: string;
  value: string;
}

const StyleGuideEditor = () => {
  const { styleGuide, updateStyleGuide, updatePrimaryColor, updateHeadingFont, updateBodyFont } = useDesign();
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'spacing' | 'preview'>('colors');

  // Color change handlers
  const handleColorChange = (colorType: 'primaryColor' | 'secondaryColor' | 'accentColor' | 'backgroundColor' | 'textColor', value: string) => {
    if (colorType === 'primaryColor') {
      updatePrimaryColor(value);
    } else {
      updateStyleGuide({
        ...styleGuide,
        [colorType]: value,
      });
    }
  };

  // Typography handlers
  const handleHeadingFontChange = (value: string) => {
    updateHeadingFont(value);
  };

  const handleBodyFontChange = (value: string) => {
    updateBodyFont(value);
  };

  // Typography size/weight handler
  const handleTypographyChange = (
    element: 'h1' | 'h2' | 'body',
    property: 'size' | 'weight' | 'lineHeight',
    value: string
  ) => {
    updateStyleGuide({
      ...styleGuide,
      [`${element}${property.charAt(0).toUpperCase()}${property.slice(1)}`]: value
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      <h2 className="text-lg font-medium p-3 border-b border-gray-200">Brand & Style Guide</h2>
      
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex">
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'colors' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('colors')}
          >
            Colors
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'typography' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('typography')}
          >
            Typography
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'spacing' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('spacing')}
          >
            Spacing & Borders
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'preview' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="p-4">
        {/* Colors Tab */}
        {activeTab === 'colors' && (
          <div className="space-y-6">
            {/* Primary Color - Featured */}
            <div className="mb-6">
              <h3 className="text-md font-medium mb-3">Primary Brand Color</h3>
              <div className="flex items-center">
                <div 
                  className="w-16 h-16 rounded-md shadow-md mr-4" 
                  style={{ backgroundColor: styleGuide.primaryColor }}
                ></div>
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <input
                      type="color"
                      value={styleGuide.primaryColor}
                      onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                      className="w-10 h-10 mr-2 border cursor-pointer"
                    />
                    <input
                      type="text"
                      value={styleGuide.primaryColor}
                      onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                      className="border rounded w-24 px-2 py-1 text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    This color will be used for buttons, accents, and highlights throughout your site.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Other Colors */}
            <div>
              <h3 className="text-md font-medium mb-3">Color Palette</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(styleGuide)
                  .filter(([key]) => key.endsWith('Color') && key !== 'primaryColor')
                  .map(([key, value]) => (
                    <div key={key} className="flex items-center p-2 rounded-md hover:bg-gray-50">
                      <div 
                        className="w-10 h-10 rounded-md shadow-sm mr-3" 
                        style={{ backgroundColor: value as string }}
                      ></div>
                      <div>
                        <label className="text-sm font-medium capitalize block mb-1">
                          {key.replace('Color', '')} Color
                        </label>
                        <div className="flex items-center">
                          <input
                            type="color"
                            value={value as string}
                            onChange={(e) => 
                              handleColorChange(key as 'secondaryColor' | 'accentColor' | 'backgroundColor' | 'textColor', e.target.value)
                            }
                            className="w-7 h-7 mr-2 border cursor-pointer rounded"
                          />
                          <input
                            type="text"
                            value={value as string}
                            onChange={(e) => 
                              handleColorChange(key as 'secondaryColor' | 'accentColor' | 'backgroundColor' | 'textColor', e.target.value)
                            }
                            className="border rounded w-24 px-2 py-1 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Typography Tab */}
        {activeTab === 'typography' && (
          <div className="space-y-6">
            {/* Font Selection */}
            <div>
              <h3 className="text-md font-medium mb-3">Fonts</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Heading Font</label>
                  <div className="relative">
                    <select
                      value={styleGuide.headingFont}
                      onChange={(e) => handleHeadingFontChange(e.target.value)}
                      className="w-full p-2 border rounded text-sm appearance-none"
                    >
                      {FONT_OPTIONS.map(font => (
                        <option 
                          key={font.name} 
                          value={font.value} 
                          style={{ fontFamily: font.value }}
                        >
                          {font.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Body Font</label>
                  <div className="relative">
                    <select
                      value={styleGuide.bodyFont}
                      onChange={(e) => handleBodyFontChange(e.target.value)}
                      className="w-full p-2 border rounded text-sm appearance-none"
                    >
                      {FONT_OPTIONS.map(font => (
                        <option 
                          key={font.name} 
                          value={font.value} 
                          style={{ fontFamily: font.value }}
                        >
                          {font.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Typography Settings */}
            <div>
              <h3 className="text-md font-medium mb-3">Typography Settings</h3>
              
              <div className="space-y-6">
                {/* H1 Settings */}
                <div className="p-3 border rounded-md">
                  <h4 className="text-sm font-semibold mb-2">Heading 1</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs mb-1">Size</label>
                      <input
                        type="text"
                        value={styleGuide.h1Size}
                        onChange={(e) => handleTypographyChange('h1', 'size', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1">Weight</label>
                      <select
                        value={styleGuide.h1Weight}
                        onChange={(e) => handleTypographyChange('h1', 'weight', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      >
                        <option value="300">Light (300)</option>
                        <option value="400">Regular (400)</option>
                        <option value="500">Medium (500)</option>
                        <option value="600">SemiBold (600)</option>
                        <option value="700">Bold (700)</option>
                        <option value="800">ExtraBold (800)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs mb-1">Line Height</label>
                      <input
                        type="text"
                        value={styleGuide.h1LineHeight}
                        onChange={(e) => handleTypographyChange('h1', 'lineHeight', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-2 p-2 bg-gray-50 rounded">
                    <span 
                      style={{ 
                        fontFamily: styleGuide.headingFont,
                        fontSize: styleGuide.h1Size,
                        fontWeight: styleGuide.h1Weight,
                        lineHeight: styleGuide.h1LineHeight
                      }}
                    >
                      Heading 1 Example
                    </span>
                  </div>
                </div>
                
                {/* H2 Settings */}
                <div className="p-3 border rounded-md">
                  <h4 className="text-sm font-semibold mb-2">Heading 2</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs mb-1">Size</label>
                      <input
                        type="text"
                        value={styleGuide.h2Size}
                        onChange={(e) => handleTypographyChange('h2', 'size', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1">Weight</label>
                      <select
                        value={styleGuide.h2Weight}
                        onChange={(e) => handleTypographyChange('h2', 'weight', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      >
                        <option value="300">Light (300)</option>
                        <option value="400">Regular (400)</option>
                        <option value="500">Medium (500)</option>
                        <option value="600">SemiBold (600)</option>
                        <option value="700">Bold (700)</option>
                        <option value="800">ExtraBold (800)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs mb-1">Line Height</label>
                      <input
                        type="text"
                        value={styleGuide.h2LineHeight}
                        onChange={(e) => handleTypographyChange('h2', 'lineHeight', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-2 p-2 bg-gray-50 rounded">
                    <span 
                      style={{ 
                        fontFamily: styleGuide.headingFont,
                        fontSize: styleGuide.h2Size,
                        fontWeight: styleGuide.h2Weight,
                        lineHeight: styleGuide.h2LineHeight
                      }}
                    >
                      Heading 2 Example
                    </span>
                  </div>
                </div>
                
                {/* Body Text Settings */}
                <div className="p-3 border rounded-md">
                  <h4 className="text-sm font-semibold mb-2">Body Text</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs mb-1">Size</label>
                      <input
                        type="text"
                        value={styleGuide.bodySize}
                        onChange={(e) => handleTypographyChange('body', 'size', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1">Weight</label>
                      <select
                        value={styleGuide.bodyWeight}
                        onChange={(e) => handleTypographyChange('body', 'weight', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      >
                        <option value="300">Light (300)</option>
                        <option value="400">Regular (400)</option>
                        <option value="500">Medium (500)</option>
                        <option value="600">SemiBold (600)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs mb-1">Line Height</label>
                      <input
                        type="text"
                        value={styleGuide.bodyLineHeight}
                        onChange={(e) => handleTypographyChange('body', 'lineHeight', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-2 p-2 bg-gray-50 rounded">
                    <p 
                      style={{ 
                        fontFamily: styleGuide.bodyFont,
                        fontSize: styleGuide.bodySize,
                        fontWeight: styleGuide.bodyWeight,
                        lineHeight: styleGuide.bodyLineHeight
                      }}
                    >
                      This is an example of body text. Your content should be easy to read with good spacing and contrast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Spacing Tab */}
        {activeTab === 'spacing' && (
          <div className="space-y-6">
            {/* Spacing */}
            <div>
              <h3 className="text-md font-medium mb-3">Spacing</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {Object.entries(styleGuide)
                  .filter(([key]) => key.startsWith('spacing'))
                  .map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <label className="block text-xs font-medium capitalize">
                        {key.replace('spacing', '')}
                      </label>
                      <input
                        type="text"
                        value={value as string}
                        onChange={(e) => updateStyleGuide({
                          ...styleGuide,
                          [key]: e.target.value
                        })}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <div 
                        className="bg-gray-200 mt-1"
                        style={{ height: '8px', width: value as string }}
                      ></div>
                    </div>
                  ))}
              </div>
            </div>
            
            {/* Border Radius */}
            <div>
              <h3 className="text-md font-medium mb-3">Border Radius</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(styleGuide)
                  .filter(([key]) => key.startsWith('borderRadius'))
                  .map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <label className="block text-xs font-medium capitalize">
                        {key === 'borderRadiusFull' ? 'Rounded (Full)' : `Rounded ${key.replace('borderRadius', '').toUpperCase()}`}
                      </label>
                      <input
                        type="text"
                        value={value as string}
                        onChange={(e) => updateStyleGuide({
                          ...styleGuide,
                          [key]: e.target.value
                        })}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <div 
                        className="bg-gray-200 h-12 w-full mt-1"
                        style={{ borderRadius: value as string }}
                      ></div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Preview Tab */}
        {activeTab === 'preview' && (
          <div className="space-y-4">
            <div 
              className="p-6 border rounded-md space-y-6"
              style={{ 
                backgroundColor: styleGuide.backgroundColor,
                color: styleGuide.textColor
              }}
            >
              <div className="space-y-2">
                <h1 
                  style={{ 
                    fontFamily: styleGuide.headingFont,
                    fontSize: styleGuide.h1Size,
                    fontWeight: styleGuide.h1Weight,
                    lineHeight: styleGuide.h1LineHeight,
                    color: styleGuide.textColor
                  }}
                >
                  Your Website Heading
                </h1>
                <h2 
                  style={{ 
                    fontFamily: styleGuide.headingFont,
                    fontSize: styleGuide.h2Size,
                    fontWeight: styleGuide.h2Weight,
                    lineHeight: styleGuide.h2LineHeight,
                    color: styleGuide.textColor
                  }}
                >
                  Subheading with secondary text
                </h2>
                <p 
                  style={{ 
                    fontFamily: styleGuide.bodyFont,
                    fontSize: styleGuide.bodySize,
                    fontWeight: styleGuide.bodyWeight,
                    lineHeight: styleGuide.bodyLineHeight,
                    marginTop: styleGuide.spacingMd
                  }}
                >
                  This is body text that demonstrates how your content will look. Good typography enhances readability and user experience. The spacing between elements creates a visual hierarchy.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4">
                <button 
                  style={{ 
                    backgroundColor: styleGuide.primaryColor,
                    color: '#ffffff',
                    borderRadius: styleGuide.borderRadiusMd,
                    padding: `${styleGuide.spacingXs} ${styleGuide.spacingMd}`,
                    fontFamily: styleGuide.bodyFont
                  }}
                >
                  Primary Button
                </button>
                <button 
                  style={{ 
                    backgroundColor: styleGuide.secondaryColor,
                    color: '#ffffff',
                    borderRadius: styleGuide.borderRadiusMd,
                    padding: `${styleGuide.spacingXs} ${styleGuide.spacingMd}`,
                    fontFamily: styleGuide.bodyFont
                  }}
                >
                  Secondary Button
                </button>
                <button 
                  style={{ 
                    backgroundColor: 'transparent',
                    color: styleGuide.primaryColor,
                    borderRadius: styleGuide.borderRadiusMd,
                    border: `1px solid ${styleGuide.primaryColor}`,
                    padding: `${styleGuide.spacingXs} ${styleGuide.spacingMd}`,
                    fontFamily: styleGuide.bodyFont
                  }}
                >
                  Outline Button
                </button>
              </div>
              
              <div 
                style={{ 
                  backgroundColor: styleGuide.accentColor + '15',
                  borderRadius: styleGuide.borderRadiusLg,
                  padding: styleGuide.spacingMd,
                  marginTop: styleGuide.spacingLg
                }}
              >
                <p 
                  style={{ 
                    fontFamily: styleGuide.bodyFont,
                    fontSize: styleGuide.bodySize
                  }}
                >
                  This is an example of a callout or accent box with your brand colors.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleGuideEditor; 
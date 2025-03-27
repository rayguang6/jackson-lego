'use client';

import React, { useState } from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { FONT_OPTIONS } from '@/lib/fonts';

// Tab types for the editor
type EditorTab = 'colors' | 'typography' | 'spacing' | 'preview';

const StyleGuideEditor: React.FC = () => {
  const { styleGuide, updatePrimaryColor, updateStyleGuide, updateHeadingFont, updateBodyFont } = useDesign();
  const [activeTab, setActiveTab] = useState<EditorTab>('colors');

  // Color change handlers
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
      typography: {
        ...styleGuide.typography,
        [element]: {
          ...styleGuide.typography[element],
          [property]: value,
        },
      },
    });
  };

  // Spacing and Border Radius handler
  const handleSpacingChange = (
    category: 'spacing' | 'borderRadius',
    key: string,
    value: string
  ) => {
    updateStyleGuide({
      ...styleGuide,
      [category]: {
        ...styleGuide[category],
        [key]: value,
      },
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
            
            {/* Secondary Colors */}
            <div>
              <h3 className="text-md font-medium mb-3">Color Palette</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(styleGuide.colors)
                  .filter(([key]) => key !== 'primary') // Skip primary as it's featured above
                  .map(([key, color]) => (
                    <div key={key} className="flex items-center p-2 rounded-md hover:bg-gray-50">
                      <div 
                        className="w-10 h-10 rounded-md shadow-sm mr-3" 
                        style={{ backgroundColor: color }}
                      ></div>
                      <div>
                        <label className="text-sm font-medium capitalize block mb-1">{key} Color</label>
                        <div className="flex items-center">
                          <input
                            type="color"
                            value={color}
                            onChange={(e) => 
                              handleColorChange(key as keyof typeof styleGuide.colors, e.target.value)
                            }
                            className="w-7 h-7 mr-2 border cursor-pointer rounded"
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
                      value={styleGuide.typography.headingFont}
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
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Used for headings and titles</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Body Font</label>
                  <div className="relative">
                    <select
                      value={styleGuide.typography.bodyFont}
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
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Used for paragraphs and general text</p>
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
                        value={styleGuide.typography.h1.size}
                        onChange={(e) => handleTypographyChange('h1', 'size', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1">Weight</label>
                      <select
                        value={styleGuide.typography.h1.weight}
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
                        value={styleGuide.typography.h1.lineHeight}
                        onChange={(e) => handleTypographyChange('h1', 'lineHeight', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-2 p-2 bg-gray-50 rounded">
                    <span 
                      style={{ 
                        fontFamily: styleGuide.typography.headingFont,
                        fontSize: styleGuide.typography.h1.size,
                        fontWeight: styleGuide.typography.h1.weight,
                        lineHeight: styleGuide.typography.h1.lineHeight
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
                        value={styleGuide.typography.h2.size}
                        onChange={(e) => handleTypographyChange('h2', 'size', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1">Weight</label>
                      <select
                        value={styleGuide.typography.h2.weight}
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
                        value={styleGuide.typography.h2.lineHeight}
                        onChange={(e) => handleTypographyChange('h2', 'lineHeight', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-2 p-2 bg-gray-50 rounded">
                    <span 
                      style={{ 
                        fontFamily: styleGuide.typography.headingFont,
                        fontSize: styleGuide.typography.h2.size,
                        fontWeight: styleGuide.typography.h2.weight,
                        lineHeight: styleGuide.typography.h2.lineHeight
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
                        value={styleGuide.typography.body.size}
                        onChange={(e) => handleTypographyChange('body', 'size', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1">Weight</label>
                      <select
                        value={styleGuide.typography.body.weight}
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
                        value={styleGuide.typography.body.lineHeight}
                        onChange={(e) => handleTypographyChange('body', 'lineHeight', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-2 p-2 bg-gray-50 rounded">
                    <p 
                      style={{ 
                        fontFamily: styleGuide.typography.bodyFont,
                        fontSize: styleGuide.typography.body.size,
                        fontWeight: styleGuide.typography.body.weight,
                        lineHeight: styleGuide.typography.body.lineHeight
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
                {Object.entries(styleGuide.spacing).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <label className="block text-xs font-medium capitalize">
                      {key}
                    </label>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleSpacingChange('spacing', key, e.target.value)}
                      className="w-full p-1.5 border rounded text-sm"
                    />
                    <div 
                      className="bg-gray-200 mt-1"
                      style={{ height: '8px', width: value }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Border Radius */}
            <div>
              <h3 className="text-md font-medium mb-3">Border Radius</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(styleGuide.borderRadius).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <label className="block text-xs font-medium capitalize">
                      {key === 'full' ? 'Rounded (Full)' : `Rounded ${key.toUpperCase()}`}
                    </label>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleSpacingChange('borderRadius', key, e.target.value)}
                      className="w-full p-1.5 border rounded text-sm"
                    />
                    <div 
                      className="bg-gray-200 h-12 w-full mt-1"
                      style={{ borderRadius: value }}
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
                backgroundColor: styleGuide.colors.background,
                color: styleGuide.colors.text
              }}
            >
              <div className="space-y-2">
                <h1 
                  style={{ 
                    fontFamily: styleGuide.typography.headingFont,
                    fontSize: styleGuide.typography.h1.size,
                    fontWeight: styleGuide.typography.h1.weight,
                    lineHeight: styleGuide.typography.h1.lineHeight,
                    color: styleGuide.colors.text
                  }}
                >
                  Your Website Heading
                </h1>
                <h2 
                  style={{ 
                    fontFamily: styleGuide.typography.headingFont,
                    fontSize: styleGuide.typography.h2.size,
                    fontWeight: styleGuide.typography.h2.weight,
                    lineHeight: styleGuide.typography.h2.lineHeight,
                    color: styleGuide.colors.text
                  }}
                >
                  Subheading with secondary text
                </h2>
                <p 
                  style={{ 
                    fontFamily: styleGuide.typography.bodyFont,
                    fontSize: styleGuide.typography.body.size,
                    fontWeight: styleGuide.typography.body.weight,
                    lineHeight: styleGuide.typography.body.lineHeight,
                    marginTop: styleGuide.spacing.md
                  }}
                >
                  This is body text that demonstrates how your content will look. Good typography enhances readability and user experience. The spacing between elements creates a visual hierarchy.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4">
                <button 
                  style={{ 
                    backgroundColor: styleGuide.colors.primary,
                    color: '#ffffff',
                    borderRadius: styleGuide.borderRadius.md,
                    padding: `${styleGuide.spacing.xs} ${styleGuide.spacing.md}`,
                    fontFamily: styleGuide.typography.bodyFont
                  }}
                >
                  Primary Button
                </button>
                <button 
                  style={{ 
                    backgroundColor: styleGuide.colors.secondary,
                    color: '#ffffff',
                    borderRadius: styleGuide.borderRadius.md,
                    padding: `${styleGuide.spacing.xs} ${styleGuide.spacing.md}`,
                    fontFamily: styleGuide.typography.bodyFont
                  }}
                >
                  Secondary Button
                </button>
                <button 
                  style={{ 
                    backgroundColor: 'transparent',
                    color: styleGuide.colors.primary,
                    borderRadius: styleGuide.borderRadius.md,
                    border: `1px solid ${styleGuide.colors.primary}`,
                    padding: `${styleGuide.spacing.xs} ${styleGuide.spacing.md}`,
                    fontFamily: styleGuide.typography.bodyFont
                  }}
                >
                  Outlined Button
                </button>
              </div>
              
              <div 
                style={{ 
                  backgroundColor: styleGuide.colors.accent + '15',
                  borderRadius: styleGuide.borderRadius.lg,
                  padding: styleGuide.spacing.md,
                  marginTop: styleGuide.spacing.lg
                }}
              >
                <p 
                  style={{ 
                    fontFamily: styleGuide.typography.bodyFont,
                    fontSize: styleGuide.typography.body.size
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
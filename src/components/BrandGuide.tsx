'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import FontSelector from './FontSelector';

interface DesignHook {
  styleGuide: any;
  updatePrimaryColor: (color: string) => void;
  resetStyleGuide?: () => void;
}

const BrandGuide: React.FC = () => {
  // Cast to our simplified interface to avoid TypeScript errors
  const { styleGuide, updatePrimaryColor, resetStyleGuide } = useDesign() as unknown as DesignHook;
  
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePrimaryColor(e.target.value);
  };

  const handleResetStyle = () => {
    if (resetStyleGuide && confirm('Reset to default style settings?')) {
      resetStyleGuide();
    }
  };

  const primaryColor = styleGuide.primaryColor;
  const headingFont = styleGuide.headingFont;
  const bodyFont = styleGuide.bodyFont;

  return (
    <div className="space-y-6 text-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Brand Colors</h2>
        {resetStyleGuide && (
          <button
            onClick={handleResetStyle}
            className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors"
          >
            Reset Style
          </button>
        )}
      </div>
      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-2">Primary Color</label>
          <div className="flex items-center space-x-3">
            <input
              type="color"
              value={primaryColor}
              onChange={handleColorChange}
              className="w-12 h-12 rounded cursor-pointer"
            />
            <input
              type="text"
              value={primaryColor}
              onChange={(e) => updatePrimaryColor(e.target.value)}
              className="border rounded px-3 py-2 w-36 font-mono"
            />
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-4">Typography</h2>
        <FontSelector />
      </div>
      
      <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: primaryColor + '10' }}>
        <h3 className="text-md font-semibold mb-2" style={{ color: primaryColor, fontFamily: headingFont }}>
          Preview
        </h3>
        
        <div className="flex flex-col space-y-3">
          
          <h2 className="text-lg font-semibold" style={{ fontFamily: headingFont }}>
            Heading font sample
          </h2>

          <p className="text-sm" style={{ fontFamily: bodyFont }}>
            Body Font Sample text with your selected <span style={{ color: primaryColor }}>primary color</span> and body font.
          </p>
          
          <button 
            className="px-3 py-1.5 rounded text-white transition-colors text-sm"
            style={{ backgroundColor: primaryColor }}
          >
            Primary Button
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default BrandGuide; 
'use client';

import React, { useEffect, useState } from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';

// Curated list of 5 Google Fonts
const FONT_OPTIONS = [
  { name: 'Manrope', value: 'var(--font-manrope), system-ui, sans-serif' },
  { name: 'Archivo', value: 'var(--font-archivo), system-ui, sans-serif' },
  { name: 'Inter', value: 'var(--font-inter), system-ui, sans-serif' },
  { name: 'Merriweather', value: 'var(--font-merriweather), serif' }, 
  { name: 'Montserrat', value: 'var(--font-montserrat), system-ui, sans-serif' }
];

const FontSelector: React.FC = () => {
  const { styleGuide, updateHeadingFont, updateBodyFont } = useDesign();
  // Initialize with defaults from FONT_OPTIONS
  const [headingValue, setHeadingValue] = useState(FONT_OPTIONS[0].value); // Manrope
  const [bodyValue, setBodyValue] = useState(FONT_OPTIONS[1].value); // Archivo
  
  // Set values based on style guide when component mounts
  useEffect(() => {
    try {
      // Try to match by name in the value string
      const headingFontValue = styleGuide.typography.headingFont.toLowerCase();
      const bodyFontValue = styleGuide.typography.bodyFont.toLowerCase();
      
      // Find matching fonts
      const headingFont = FONT_OPTIONS.find(
        font => headingFontValue.includes(font.name.toLowerCase())
      );
      
      const bodyFont = FONT_OPTIONS.find(
        font => bodyFontValue.includes(font.name.toLowerCase())
      );
      
      // Update state if matches found
      if (headingFont) setHeadingValue(headingFont.value);
      if (bodyFont) setBodyValue(bodyFont.value);
      
      console.log('Current body font:', styleGuide.typography.bodyFont);
      console.log('Selected body font:', bodyFont?.value || bodyValue);
    } catch (error) {
      console.error('Error matching fonts:', error);
    }
  }, [styleGuide]);
  
  const handleHeadingFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setHeadingValue(selectedValue);
    updateHeadingFont(selectedValue);
  };
  
  const handleBodyFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setBodyValue(selectedValue);
    updateBodyFont(selectedValue);
  };
  
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium mb-1.5 text-sm">Heading Font</label>
        <div className="relative">
          <select
            value={headingValue}
            onChange={handleHeadingFontChange}
            className="w-full p-1.5 text-sm border rounded appearance-none"
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
      </div>
      
      <div>
        <label className="block font-medium mb-1.5 text-sm">Body Font</label>
        <div className="relative">
          <select
            value={bodyValue}
            onChange={handleBodyFontChange}
            className="w-full p-1.5 text-sm border rounded appearance-none"
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
      </div>
    </div>
  );
};

export default FontSelector; 
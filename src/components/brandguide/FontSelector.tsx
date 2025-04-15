'use client';

import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDesign } from '@/lib/contexts/DesignContext';
import { FONT_OPTIONS } from '@/lib/fonts';

const FontSelector: React.FC = () => {
  const { styleGuide, updateHeadingFont, updateBodyFont } = useDesign();
  const [headingValue, setHeadingValue] = useState(FONT_OPTIONS[0].value);
  const [bodyValue, setBodyValue] = useState(FONT_OPTIONS[1].value);
  
  // State for popup
  const [activeFontType, setActiveFontType] = useState<'heading' | 'body' | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [isBrowser, setIsBrowser] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredFont, setHoveredFont] = useState<string | null>(null);
  
  // Refs
  const popupRef = useRef<HTMLDivElement>(null);
  const headingCardRef = useRef<HTMLDivElement>(null);
  const bodyCardRef = useRef<HTMLDivElement>(null);
  
  // Set isBrowser to true on mount
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  
  // Set values based on style guide when component mounts
  useEffect(() => {
    try {
      const headingFontValue = styleGuide.headingFont.toLowerCase();
      const bodyFontValue = styleGuide.bodyFont.toLowerCase();
      
      const headingFont = FONT_OPTIONS.find(
        font => headingFontValue.includes(font.name.toLowerCase())
      );
      
      const bodyFont = FONT_OPTIONS.find(
        font => bodyFontValue.includes(font.name.toLowerCase())
      );
      
      if (headingFont) setHeadingValue(headingFont.value);
      if (bodyFont) setBodyValue(bodyFont.value);
    } catch (error) {
      console.error('Error matching fonts:', error);
    }
  }, [styleGuide]);
  
  // Helper to get the font name from value
  const getFontNameFromValue = (value: string) => {
    const font = FONT_OPTIONS.find(f => f.value === value);
    return font ? font.name : 'Default Font';
  };
  
  const handleFontChange = (fontType: 'heading' | 'body', value: string) => {
    if (fontType === 'heading') {
      setHeadingValue(value);
      updateHeadingFont(value);
    } else {
      setBodyValue(value);
      updateBodyFont(value);
    }
  };
  
  const openFontSelector = (fontType: 'heading' | 'body') => {
    const cardRef = fontType === 'heading' ? headingCardRef : bodyCardRef;
    
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      
      // Position popup
      let top = rect.top + window.scrollY;
      let left = rect.left + window.scrollX;
      
      // Adjust if it would go off-screen
      const popupWidth = 300;
      if (left + popupWidth > windowWidth) {
        left = windowWidth - popupWidth - 20;
      }
      
      setPopupPosition({ top, left });
      setActiveFontType(fontType);
      setSearchQuery('');
    }
  };
  
  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        // Check if click was on one of the cards
        const wasOnHeadingCard = headingCardRef.current && headingCardRef.current.contains(event.target as Node);
        const wasOnBodyCard = bodyCardRef.current && bodyCardRef.current.contains(event.target as Node);
        
        if (!wasOnHeadingCard && !wasOnBodyCard) {
          setActiveFontType(null);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Filter fonts based on search query
  const filteredFonts = FONT_OPTIONS.filter(font => 
    font.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Get current font details
  const headingFontName = getFontNameFromValue(headingValue);
  const bodyFontName = getFontNameFromValue(bodyValue);
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Heading Font Card - Cleaner UI */}
        <div 
          ref={headingCardRef}
          className="rounded-md border border-gray-200 overflow-hidden cursor-pointer"
          onClick={() => openFontSelector('heading')}
        >
          <div className="px-4 py-2 border-b border-gray-100">
            <h3 className="text-sm text-gray-600">Heading Font</h3>
          </div>
          <div className="px-4 py-6 bg-gray-50 flex items-center justify-center">
            <div className="text-xl font-medium" style={{ fontFamily: headingValue }}>
              {headingFontName}
            </div>
          </div>
        </div>
        
        {/* Body Font Card - Cleaner UI */}
        <div 
          ref={bodyCardRef}
          className="rounded-md border border-gray-200 overflow-hidden cursor-pointer"
          onClick={() => openFontSelector('body')}
        >
          <div className="px-4 py-2 border-b border-gray-100">
            <h3 className="text-sm text-gray-600">Body Font</h3>
          </div>
          <div className="px-4 py-6 bg-gray-50 flex items-center justify-center">
            <div className="text-xl" style={{ fontFamily: bodyValue }}>
              {bodyFontName}
            </div>
          </div>
        </div>
      </div>
      
      {/* Clean Font Selector Popup */}
      {isBrowser && activeFontType && createPortal(
        <div 
          ref={popupRef}
          className="fixed z-[100] bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden p-2"
          style={{ 
            top: `${popupPosition.top}px`, 
            left: `${popupPosition.left}px`,
            width: '300px',
            maxHeight: '500px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="flex justify-between items-center p-3 border-b border-gray-200">
            <h4 className="font-medium">{activeFontType === 'heading' ? 'Heading' : 'Body'}</h4>
            <button 
              onClick={() => setActiveFontType(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          
          {/* Search bar - minimal styling */}
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full bg-gray-50 border-none rounded-md py-2 pl-10 pr-3 text-sm"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Clean font list with consistent backgrounds */}
          <div className="overflow-y-auto" style={{ maxHeight: '265px' }}>
            {filteredFonts.map((font) => (
              <div 
                key={font.name}
                className={`p-3 rounded-md border border-gray-200 mt-2 ${
                  (activeFontType === 'heading' ? headingValue : bodyValue) === font.value 
                    ? 'bg-gray-100' 
                    : hoveredFont === font.value ? 'bg-gray-50' : 'bg-white'
                }`}
                onClick={() => {
                  handleFontChange(activeFontType, font.value);
                  setActiveFontType(null);
                }}
                onMouseEnter={() => setHoveredFont(font.value)}
                onMouseLeave={() => setHoveredFont(null)}
              >
                {/* Text preview */}
                <div className="text-base mb-2" style={{ fontFamily: font.value }}>
                  Get More Clients and Lets Make More USD $$$
                </div>
                
                {/* Font info - just name and Google icon */}
                <div className="flex items-center">
                  <img 
                    src="/images/main/google_icon.png" 
                    alt="Google" 
                    className="w-4 h-4 mr-2"
                  />
                  <span className="text-sm">{font.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default FontSelector;
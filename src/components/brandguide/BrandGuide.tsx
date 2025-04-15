'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDesign } from '@/lib/contexts/DesignContext';
import FontSelector from './FontSelector';

interface DesignHook {
  styleGuide: any;
  updatePrimaryColor: (color: string) => void;
  updateSecondaryColor: (color: string) => void;
  resetStyleGuide?: () => void;
}

interface ColorConfig {
  id: string;
  label: string;
  value: string;
  updateFn: (color: string) => void;
  name?: string;
}

// Helper function to get color variations
const getShades = (hexColor: string): string[] => {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  // Generate 5 shades (from lightest to darkest)
  const shades = [];
  
  // Lightest (mix with white)
  shades.push(
    `#${Math.min(Math.round(r + (255 - r) * 0.8), 255).toString(16).padStart(2, '0')}${
      Math.min(Math.round(g + (255 - g) * 0.8), 255).toString(16).padStart(2, '0')}${
      Math.min(Math.round(b + (255 - b) * 0.8), 255).toString(16).padStart(2, '0')}`
  );
  
  // Lighter
  shades.push(
    `#${Math.min(Math.round(r + (255 - r) * 0.6), 255).toString(16).padStart(2, '0')}${
      Math.min(Math.round(g + (255 - g) * 0.6), 255).toString(16).padStart(2, '0')}${
      Math.min(Math.round(b + (255 - b) * 0.6), 255).toString(16).padStart(2, '0')}`
  );
  
  // Light
  shades.push(
    `#${Math.min(Math.round(r + (255 - r) * 0.3), 255).toString(16).padStart(2, '0')}${
      Math.min(Math.round(g + (255 - g) * 0.3), 255).toString(16).padStart(2, '0')}${
      Math.min(Math.round(b + (255 - b) * 0.3), 255).toString(16).padStart(2, '0')}`
  );
  
  // Base color
  shades.push(hexColor);
  
  // Dark
  shades.push(
    `#${Math.round(r * 0.8).toString(16).padStart(2, '0')}${
      Math.round(g * 0.8).toString(16).padStart(2, '0')}${
      Math.round(b * 0.8).toString(16).padStart(2, '0')}`
  );
  
  return shades;
};

const BrandGuide: React.FC = () => {
  // Cast to our simplified interface to avoid TypeScript errors
  const { styleGuide, updatePrimaryColor, updateSecondaryColor, resetStyleGuide } = useDesign() as unknown as DesignHook;
  
  // State for color configurations including names
  const [colorConfigs, setColorConfigs] = useState<ColorConfig[]>([
    {
      id: 'primary',
      label: 'Primary',
      value: styleGuide.primaryColor,
      updateFn: updatePrimaryColor,
      name: 'Primary'
    },
    {
      id: 'secondary',
      label: 'Secondary',
      value: styleGuide.secondaryColor,
      updateFn: updateSecondaryColor,
      name: 'Secondary'
    }
  ]);
  
  const [activeColorId, setActiveColorId] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [colorName, setColorName] = useState('');
  const [selectedShade, setSelectedShade] = useState<number>(3); // Default to base color (index 3)
  const popupRef = useRef<HTMLDivElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);
  const cardRefs = useRef<{[key: string]: React.RefObject<HTMLDivElement | null>}>({});
  
  // State to track if we're in a browser environment for the portal
  const [isBrowser, setIsBrowser] = useState(false);
  
  // Set isBrowser to true on mount
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  
  // Initialize refs for all color cards
  useEffect(() => {
    colorConfigs.forEach(config => {
      if (!cardRefs.current[config.id]) {
        cardRefs.current[config.id] = React.createRef<HTMLDivElement | null>();
      }
    });
  }, [colorConfigs]);
  
  // Update color name when active color changes
  useEffect(() => {
    if (activeColorId) {
      const config = colorConfigs.find(c => c.id === activeColorId);
      if (config) {
        setColorName(config.name || config.label);
      }
    }
  }, [activeColorId, colorConfigs]);
  
  // Auto-trigger color picker when popup opens
  useEffect(() => {
    if (activeColorId && colorInputRef.current) {
      // Wait a bit to ensure the DOM is ready
      const timer = setTimeout(() => {
        colorInputRef.current?.click();
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [activeColorId]);
  
  const handleColorChange = (hexColor: string) => {
    const config = colorConfigs.find(c => c.id === activeColorId);
    if (config) {
      // Update the color in our state
      setColorConfigs(prev => prev.map(c => 
        c.id === activeColorId ? { ...c, value: hexColor } : c
      ));
      
      // Update in the design context
      config.updateFn(hexColor);
    }
  };

  const handleNativeColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleColorChange(e.target.value);
  };

  const handleColorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorName(e.target.value);
    
    // Update name in our configurations
    setColorConfigs(prev => prev.map(c => 
      c.id === activeColorId ? { ...c, name: e.target.value } : c
    ));
  };

  const handleResetStyle = () => {
    if (resetStyleGuide && confirm('Reset to default style settings?')) {
      resetStyleGuide();
      
      // Get the default values from the reset style guide and update local state
      import('@/lib/constants/styleGuide').then(({ styleGuide: defaultStyleGuide }) => {
        setColorConfigs(prev => prev.map(config => {
          if (config.id === 'primary') {
            return { ...config, value: defaultStyleGuide.primaryColor };
          } else if (config.id === 'secondary') {
            return { ...config, value: defaultStyleGuide.secondaryColor };
          }
          return config;
        }));
      });
      
      setActiveColorId(null);
    }
  };

  const openColorPicker = (colorId: string) => {
    const cardRef = cardRefs.current[colorId];
    
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      
      // Calculate window dimensions
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const requiredSpace = 400; // Approximate width of our popup
      const requiredHeight = 600; // Approximate height of our popup
      
      // Determine if popup should go left or right
      const goLeft = rect.left + rect.width + requiredSpace > windowWidth;
      
      // Determine if popup should go above or below
      const goAbove = rect.top + requiredHeight > windowHeight;
      
      let topPosition = rect.top + window.scrollY;
      if (goAbove) {
        // Position above the card
        topPosition = Math.max(20, rect.top + window.scrollY - requiredHeight - 10);
      }
      
      // Ensure popup is not positioned outside of viewport
      const leftPosition = goLeft 
        ? Math.max(20, rect.left + window.scrollX - requiredSpace - 10)
        : Math.min(windowWidth - requiredSpace - 20, rect.left + window.scrollX + rect.width + 10);
      
      setPopupPosition({ 
        top: topPosition,
        left: leftPosition
      });
      
      setActiveColorId(colorId);
      
      // Reset selected shade to base color
      setSelectedShade(3);
    }
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        // Check if the click was on one of the cards
        const wasOnCard = Object.values(cardRefs.current).some(
          ref => ref.current && ref.current.contains(event.target as Node)
        );
          
        if (!wasOnCard) {
          setActiveColorId(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Handle window resize to reposition popup
  useEffect(() => {
    if (activeColorId) {
      const handleResize = () => {
        // Reposition the popup when window is resized
        openColorPicker(activeColorId);
      };
      
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [activeColorId]);

  // Add this function to your component before the return statement
  const handleColorShuffle = () => {
    if (!activeColorId) return;
    
    // Generate a pleasing random color using HSL for better control
    const hue = Math.floor(Math.random() * 360); // Random hue (0-359)
    const saturation = Math.floor(Math.random() * 30 + 70); // Higher saturation (70-100%)
    const lightness = Math.floor(Math.random() * 20 + 40); // Medium lightness (40-60%)
    
    // Convert HSL to Hex
    const convertHSLToHex = (h: number, s: number, l: number) => {
      s /= 100;
      l /= 100;
      
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs((h / 60) % 2 - 1));
      const m = l - c / 2;
      
      let r = 0, g = 0, b = 0;
      
      if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
      } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
      } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
      } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
      } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
      } else {
        r = c; g = 0; b = x;
      }
      
      const rHex = Math.round((r + m) * 255).toString(16).padStart(2, '0');
      const gHex = Math.round((g + m) * 255).toString(16).padStart(2, '0');
      const bHex = Math.round((b + m) * 255).toString(16).padStart(2, '0');
      
      return `#${rHex}${gHex}${bHex}`;
    };
    
    const randomColor = convertHSLToHex(hue, saturation, lightness);
    handleColorChange(randomColor);
  };

  // Get shades for the active color
  const activeColorShades = activeColorId 
    ? getShades(colorConfigs.find(c => c.id === activeColorId)?.value || '#000000')
    : [];
    
  // Get active color
  const activeColor = colorConfigs.find(c => c.id === activeColorId);

  const headingFont = styleGuide.headingFont;
  const bodyFont = styleGuide.bodyFont;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 bg-white shadow-sm py-4 mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Brand Colors</h2>
        {resetStyleGuide && (
          <button
            onClick={handleResetStyle}
            className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors cursor-pointer"
          >
            Reset Style
          </button>
        )}
      </div>
      
      <div className="flex-grow overflow-y-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {colorConfigs.map(config => (
            <div 
              key={config.id}
              ref={cardRefs.current[config.id] || (cardRefs.current[config.id] = React.createRef<HTMLDivElement | null>())}
              className="rounded-lg p-4 cursor-pointer transition-all duration-200 bg-white border border-gray-200"
              onClick={() => openColorPicker(config.id)}
            >
              <div className="mb-2">
                <h3 className="font-medium">{config.label}</h3>
                <p className="text-sm text-gray-500 font-mono">{config.value.toUpperCase()}</p>
              </div>
              <div 
                className="w-full h-24 rounded-md" 
                style={{ backgroundColor: config.value }}
              />
            </div>
          ))}
        </div>
        
        {/* Use createPortal to render the popup in the document body */}
        {isBrowser && activeColorId && activeColor && createPortal(
          <div 
            ref={popupRef}
            className="fixed z-[100] bg-white rounded-lg shadow-xl border border-gray-200 p-5 overflow-y-auto"
            style={{ 
              top: `${popupPosition.top}px`, 
              left: `${popupPosition.left}px`,
              width: '380px',
              maxHeight: '80vh', // Reduced from 90vh to ensure more margin
              overflowY: 'auto',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium text-lg">Color picker</h4>
              <button 
                onClick={() => setActiveColorId(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            {/* Color picker area */}
            <div className="mb-4">
              {/* Hidden native color input that can be triggered */}
              <input
                ref={colorInputRef}
                type="color"
                value={activeColor.value}
                onChange={handleNativeColorPickerChange}
                className="opacity-0 absolute h-0 w-0"
              />
              
              {/* Color preview area - clicking this will open the native color picker */}
              <div 
                className="w-full h-40 rounded-md mb-3 cursor-pointer border border-gray-200"
                style={{ background: activeColor.value }}
                onClick={() => colorInputRef.current?.click()}
              >
                <div className="flex items-center justify-center h-full text-white text-sm">
                  Click to open color picker
                </div>
              </div>
              
              {/* Hex input */}
              <div className="mb-4">
                <label className="block text-sm text-gray-500 mb-1">Hex</label>
                <input 
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={activeColor.value.toUpperCase()}
                  onChange={(e) => handleColorChange(e.target.value)}
                />
              </div>
              
              {/* Color palette - NEW SECTION */}
              <div className="mb-6">
                <h5 className="text-sm font-medium mb-2">Presets</h5>
                <div className="grid grid-cols-8 gap-2">
                  {[
                    '#FF4996', // Pink
                    '#FE7D74', // Coral
                    '#FFCC00', // Yellow
                    '#8CE201', // Lime
                    '#16D5A2', // Teal
                    '#5ABDF0', // Sky Blue
                    '#5961F8', // Blue
                    '#9F62F6'  // Purple
                  ].map((color, index) => (
                    <div
                      key={`palette-${index}`}
                      className="w-8 h-8 rounded-md cursor-pointer border border-gray-100 hover:border-gray-300 transition-colors"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(color)}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              
              {/* Main color only */}
              <div className="w-full">
                <div 
                  className="w-full h-16 rounded-md mb-1" 
                  style={{ backgroundColor: activeColor.value }}
                />
                <div className="bg-gray-100 px-1 py-0.5 text-xs text-center">
                  Main
                </div>
              </div>
            </div>
            
            {/* Name & Shades */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-medium mb-2">Naming</h5>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 mb-6"
                  placeholder="Color name"
                  value={colorName}
                  onChange={handleColorNameChange}
                />
                
                <h5 className="text-sm font-medium mb-2">Shades</h5>
                <div className="space-y-2">
                  <div className="text-xs text-gray-500 mb-1">Pastel</div>
                  {activeColorShades.slice(0, 3).map((shade, index) => (
                    <div 
                      key={`light-${index}`}
                      className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                        selectedShade === index ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => {
                        setSelectedShade(index);
                        handleColorChange(shade);
                      }}
                    >
                      <div 
                        className="w-6 h-6 rounded-md" 
                        style={{ backgroundColor: shade }}
                      />
                      <span className="text-sm">
                        {colorName} • {index === 0 ? 'Lightest' : index === 1 ? 'Lighter' : 'Light'}
                      </span>
                    </div>
                  ))}
                  
                  <div className="text-xs text-gray-500 mb-1 mt-3">Mid-Tone</div>
                  <div 
                    className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                      selectedShade === 3 ? 'bg-gray-800 text-white' : ''
                    }`}
                    onClick={() => {
                      setSelectedShade(3);
                      handleColorChange(activeColorShades[3]);
                    }}
                  >
                    <div 
                      className="w-6 h-6 rounded-md" 
                      style={{ backgroundColor: activeColorShades[3] }}
                    />
                    <span className="text-sm flex-1">{colorName}</span>
                    {selectedShade === 3 && (
                      <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">Base</span>
                    )}
                  </div>
                  
                  <div 
                    className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                      selectedShade === 4 ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => {
                      setSelectedShade(4);
                      handleColorChange(activeColorShades[4]);
                    }}
                  >
                    <div 
                      className="w-6 h-6 rounded-md" 
                      style={{ backgroundColor: activeColorShades[4] }}
                    />
                    <span className="text-sm">{colorName} • Dark</span>
                  </div>
                </div>
                
                <button 
                  className="w-full mt-4 flex items-center justify-center space-x-2 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={handleColorShuffle}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Shuffle</span>
                </button>
              </div>
              
              <div>
                {/* Selection menu placeholder - in a real implementation this would be populated with more options */}
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm cursor-pointer"
                onClick={() => setActiveColorId(null)}
              >
                Select
              </button>
            </div>
          </div>,
          document.body
        )}
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Typography</h2>
          <FontSelector />
        </div>
        
        <div className="mt-6 p-4 rounded-lg border border-gray-200 bg-white">
          <h3 className="text-lg font-semibold mb-4" style={{ color: styleGuide.primaryColor, fontFamily: headingFont }}>
            Preview
          </h3>
          
          <div className="p-4 rounded-lg" style={{ backgroundColor: styleGuide.primaryColor + '10' }}>
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-semibold" style={{ fontFamily: headingFont }}>
                Heading font sample
              </h2>

              <p style={{ fontFamily: bodyFont }}>
                Body Font Sample text with your selected <span style={{ color: styleGuide.primaryColor }}>primary color</span> and body font.
              </p>
              
              <div className="flex space-x-3 mt-2">
                <button 
                  className="px-4 py-2 rounded-md text-white transition-colors"
                  style={{ backgroundColor: styleGuide.primaryColor }}
                >
                  Primary Button
                </button>
                
                <button 
                  className="px-4 py-2 rounded-md text-white transition-colors"
                  style={{ backgroundColor: styleGuide.secondaryColor }}
                >
                  Secondary Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandGuide;
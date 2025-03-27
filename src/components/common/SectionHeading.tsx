'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { styleGuide } from '@/lib/constants/styleGuide';

interface SectionHeadingProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  theme = 'light',
  className = ''
}) => {
  const { styleGuide } = useDesign();
  const headingFont = styleGuide?.headingFont || styleGuide.headingFont;
  const primaryColor = styleGuide?.primaryColor || styleGuide.primaryColor;

  const isDark = theme === 'dark';

  return (
    <h2 
      style={{ fontFamily: headingFont }} 
      className={`font-manrope leading-[1.2] mb-4 text-[60px] font-bold
        ${isDark ? 'text-white' : 'text-gray-900'}
        ${className}
      `}
    >
      {children}
    </h2>
  );
};

// Highlighted text component for use within SectionHeading
export const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { styleGuide } = useDesign();
  const primaryColor = styleGuide?.primaryColor || styleGuide.primaryColor;
  
  return (
    <span style={{ color: primaryColor }}>{children}</span>
  );
}; 
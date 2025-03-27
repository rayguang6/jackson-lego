'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { styleGuide } from '@/lib/constants/styleGuide';

interface MyParagraphProps {
  text: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export const MyParagraph: React.FC<MyParagraphProps> = ({
  text,
  theme = 'light',
  className = ''
}) => {
  const { styleGuide } = useDesign();
  const bodyFont = styleGuide?.headingFont || styleGuide.headingFont;

  const isDark = theme === 'dark';

  return (
    <p style={{ fontFamily: bodyFont }} className={`font-archivo text-[20px] leading-[1.6] font-normal ${isDark ? 'text-gray-300' : 'text-[#4B5563]'} mb-8 ${className}`}>
        {text} 
      </p> 
  );
};

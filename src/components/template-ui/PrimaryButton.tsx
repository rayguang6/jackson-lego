'use client';

import React from 'react';
import { useDesignStore } from '@/lib/store/designStore';

interface PrimaryButtonProps {
  text: string;
  theme: 'light' | 'dark';
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  theme,
  className = '',
}) => {
  const { styleGuide } = useDesignStore(s => s.design);
  const primaryColor = styleGuide?.primaryColor || styleGuide.primaryColor;
  const bodyFont = styleGuide?.bodyFont || styleGuide.bodyFont;

  return (
    <button 
      className={`group font-archivo inline-flex items-center px-10 py-5 text-white rounded-lg font-bold text-base hover:opacity-90 transition-all duration-300 ${className}`}
      style={{ 
        backgroundColor: primaryColor,
        fontFamily: bodyFont 
      }}
    >
      {text}
       
        <svg className="ml-2 group-hover:translate-x-1 transition-transform duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.16663 10H15.8333M15.8333 10L10 4.16669M15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
  );
}; 
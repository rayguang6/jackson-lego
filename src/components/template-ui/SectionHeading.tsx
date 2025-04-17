'use client';

import React from 'react';
import { getTypographyClass } from '@/lib/typography';

interface SectionHeadingProps { 
  children: React.ReactNode;
  theme?: 'light' | 'dark'; 
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span style={{ color: 'var(--primary-color)' }}>{children}</span>;
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  theme = 'light',
  className = '',
  as = 'h2',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  
  const HeadingTag = as;
  
  const baseTypography = getTypographyClass({
    size: as,
    weight: 'bold',
    lineHeight: 'tight'
  });

  return (
    <HeadingTag
      className={`
        ${baseTypography}
        ${textColor}
        ${className}
      `}
      style={{ fontFamily: 'var(--heading-font)' }}
    >
      {children}
    </HeadingTag>
  );
}; 
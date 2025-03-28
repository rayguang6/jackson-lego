'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { getTypographyClass } from '@/utils/typography';

interface SectionHeadingProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { styleGuide } = useDesign();
  return <span style={{ color: styleGuide.primaryColor }}>{children}</span>;
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  theme = 'light',
  className = '',
  as = 'h2',
}) => {
  const { styleGuide } = useDesign();
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
    >
      {children}
    </HeadingTag>
  );
}; 
'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';

interface SectionProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  theme = 'light',
  className = '',
  noPadding = false
}) => {
  const { styleGuide } = useDesign();
  const isDark = theme === 'dark';

  // Define theme colors based on style guide
  const colors = {
    background: isDark ? styleGuide.backgroundColorDark : styleGuide.backgroundColor,
  };

  return (
    <section 
      className={`
        w-full relative overflow-hidden
        ${!noPadding ? 'px-24 py-16' : ''}
        ${className}
      `}
      style={{
        backgroundColor: colors.background,
      }}
    >
      {children}
    </section>
  );
}; 
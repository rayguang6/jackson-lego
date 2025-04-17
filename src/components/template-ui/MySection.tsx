'use client';

import React from 'react';
import { useDesignStore } from '@/lib/store/designStore';

interface SectionProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
  backgroundColor?: string;
}

export const MySection: React.FC<SectionProps> = ({
  children,
  theme = 'light',
  className = '',
  backgroundColor,
}) => {
  const { styleGuide } = useDesignStore(s => s.design);
  const isDark = theme === 'dark';

  const bgColor = backgroundColor || (isDark ? styleGuide.backgroundColorDark : styleGuide.backgroundColor);

  return (
    <section
      className={`
        w-full relative overflow-hidden
        px-4 sm:px-6 lg:px-8 xl:px-24
        py-8 sm:py-12 lg:py-16
        ${className}
      `}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {children}
    </section>
  );
}; 
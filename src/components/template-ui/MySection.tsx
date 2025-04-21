'use client';

import React from 'react';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
interface SectionProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

export const MySection: React.FC<SectionProps> = ({
  children,
  theme = 'light',
  className = '',
  backgroundColor,  
  style
}) => {
  const isDark = theme === 'dark';

  const bgColor = backgroundColor || (isDark ? GLOBALCSS_VAR.backgroundColorDark : GLOBALCSS_VAR.backgroundColor);

  return (
    <section
      className={`
        w-full relative overflow-hidden
        px-8 sm:px-6 lg:px-8 xl:px-24
        py-16 sm:py-12 lg:py-16
        ${className}
      `}
      style={{
        backgroundColor: bgColor,
        ...style
      }}
    >
      <div className="max-w-[1170px] mx-auto">
        {children}
      </div>
    </section>
  );
}; 
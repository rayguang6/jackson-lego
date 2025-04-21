'use client';

import React from 'react';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
interface ParagraphProps {
  theme?: 'light' | 'dark';
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const MyParagraph: React.FC<ParagraphProps> = ({
  theme = 'light',
  className = '',
  children,
  style
}) => {

  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-400';

  return (
    <p
      className={`
        ${textColor}
        ${className}
        text-[16px]
        font-normal
        leading-[1.8]
      `}
      style={{ fontFamily: GLOBALCSS_VAR.bodyFont, ...style }}
    >
      {children}
    </p>
  );
};

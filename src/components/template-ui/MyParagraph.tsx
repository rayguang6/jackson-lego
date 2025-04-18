'use client';

import React from 'react';

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
  const textColor = isDark ? 'text-gray-300' : 'text-gray-600';

  return (
    <p
      className={`
        ${textColor}
        ${className}
      `}
      style={{ fontFamily: 'var(--body-font)', ...style }}
    >
      {children}
    </p>
  );
};

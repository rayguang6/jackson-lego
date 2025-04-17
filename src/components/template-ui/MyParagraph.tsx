'use client';

import React from 'react';
import { getTypographyClass } from '@/lib/typography';

interface ParagraphProps {
  text: string;
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'body' | 'small' | 'xs';
}

export const MyParagraph: React.FC<ParagraphProps> = ({
  text,
  theme = 'light',
  className = '',
  size = 'body',
}) => {

  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-600';

  const baseTypography = getTypographyClass({
    size,
    weight: 'regular',
    lineHeight: 'relaxed'
  });

  return (
    <p
      className={`
        ${baseTypography}
        ${textColor}
        ${className}
      `}
      style={{ fontFamily: 'var(--body-font)' }}
    >
      {text}
    </p>
  );
};

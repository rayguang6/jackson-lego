'use client';

import React from 'react';
import { useDesignStore } from '@/lib/store/designStore';
import { getTypographyClass } from '@/utils/typography';

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
  const { styleGuide } = useDesignStore(s => s.design);
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
      style={{ fontFamily: styleGuide.bodyFont }}
    >
      {text}
    </p>
  );
};

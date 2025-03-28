'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
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
  const { styleGuide } = useDesign();
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
    >
      {text}
    </p>
  );
};

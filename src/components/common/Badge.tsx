'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { StarIcon } from '@/components/icons/StarIcon';

interface BadgeProps {
  text: string;
  theme?: 'light' | 'dark';
  className?: string;
  icon?: 'star' | 'none';
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  theme = 'light'
}) => {
  const { styleGuide } = useDesign();
  const primaryColor = styleGuide?.primaryColor || styleGuide.primaryColor;
  const bodyFont = styleGuide?.bodyFont || styleGuide.bodyFont;

  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center ${isDark ? 'bg-zinc-800' : 'bg-white'} rounded-full px-4 py-2 mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]`}>
      <StarIcon color={primaryColor} />
      <span style={{ fontFamily: bodyFont }} className={`ml-2 font-archivo text-sm font-medium ${isDark ? 'text-white' : 'text-[#111827]'}`}>{text}</span>
    </div>
  );
}; 
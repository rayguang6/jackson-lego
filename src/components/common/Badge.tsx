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
  theme = 'light',
  className = '',
  icon = 'star'
}) => {
  const { styleGuide } = useDesign();
  const primaryColor = styleGuide?.primaryColor || styleGuide.primaryColor;
  const bodyFont = styleGuide?.bodyFont || styleGuide.bodyFont;

  const isDark = theme === 'dark';

  return (
    <div className={`border inline-flex items-center ${isDark ? 'border-white/[0.25]' : 'bg-white border-[#E4E4E7]'} rounded-full px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${className}`}>
      {icon === 'star' && <StarIcon color={primaryColor} />}
      <span style={{ fontFamily: bodyFont }} className={`${icon === 'star' ? 'ml-2' : ''} font-archivo text-sm font-medium ${isDark ? 'text-white' : 'text-[#111827]'}`}>{text}</span>
    </div>
  );
}; 
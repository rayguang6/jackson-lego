'use client';

import React from 'react';
import { StarIcon } from '@/components/template-ui/icons/StarIcon';

interface BadgeProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
  icon?: 'star' | 'none';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  theme = 'light',
  className = '',
  icon = 'star'
}) => {

  const isDark = theme === 'dark';

  return (
    <div className={`border inline-flex items-center ${isDark ? 'border-white/[0.25]' : 'bg-white border-[#E4E4E7]'} rounded-full px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${className}`}>
      {icon === 'star' && <StarIcon />}
      <span style={{ fontFamily: 'var(--body-font)' }} className={`${icon === 'star' ? 'ml-2' : ''} text-sm font-medium ${isDark ? 'text-white' : 'text-[#111827]'}`}>{children}</span>
    </div>
  );
}; 
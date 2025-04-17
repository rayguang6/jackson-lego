'use client';

import React from 'react';
import { useDesignStore } from '@/lib/store/designStore';
import { styleGuide } from '@/lib/constants/styleGuide';

interface PlayButtonProps {
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PlayButton: React.FC<PlayButtonProps> = ({
  onClick,
  size = 'md',
  className = ''
}) => {
  const { styleGuide } = useDesignStore(s => s.design);
  const primaryColor = styleGuide?.primaryColor || styleGuide.primaryColor;

  // Size mappings
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 32
  };

  return (
    <button 
      onClick={onClick}
      className={`${sizeClasses[size]} bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform ${className}`}
    >
      <svg 
        width={iconSizes[size]} 
        height={iconSizes[size]} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M8 5.14301V19.143L19 12.143L8 5.14301Z" 
          style={{ fill: primaryColor, stroke: primaryColor }} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}; 
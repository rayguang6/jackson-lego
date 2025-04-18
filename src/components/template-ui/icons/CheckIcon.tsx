'use client';

import React from 'react';

interface CheckIconProps {
  className?: string;
}

export const CheckIcon: React.FC<CheckIconProps> = ({ className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path 
        fillRule="evenodd" 
        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" 
        clipRule="evenodd" 
      />
    </svg>
  );
}; 
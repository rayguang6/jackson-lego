'use client';

import React from 'react';

interface StarIconProps {
  color?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const StarIcon: React.FC<StarIconProps> = ({ 
  color = '#EF083A',
  className = '',
  width = 21,
  height = 20
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 21 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M16.3333 1.6665C16.6023 2.91908 17.5807 3.89753 18.8333 4.1665C17.5807 4.43548 16.6023 5.41393 16.3333 6.6665C16.0643 5.41393 15.0859 4.43548 13.8333 4.1665C15.0859 3.89753 16.0643 2.91908 16.3333 1.6665ZM8.06 1.83317C8.81958 5.37044 11.5827 8.13359 15.12 8.89317C11.5827 9.65276 8.81958 12.4159 8.06 15.9532C7.30042 12.4159 4.53726 9.65276 1 8.89317C4.53726 8.13359 7.30042 5.37044 8.06 1.83317ZM18.8333 14.9998C17.1632 14.6412 15.8586 13.3366 15.5 11.6665C15.1413 13.3366 13.8367 14.6412 12.1666 14.9998C13.8367 15.3585 15.1413 16.6631 15.5 18.3332C15.8586 16.6631 17.1632 15.3585 18.8333 14.9998Z" 
        fill={color}
      />
    </svg>
  );
}; 
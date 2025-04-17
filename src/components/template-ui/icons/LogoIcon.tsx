import React from 'react';

interface LogoIconProps {
  brandColor?: string;
  theme?: 'light' | 'dark';
  className?: string;
  width?: number;
  height?: number;
}

export const LogoIcon: React.FC<LogoIconProps> = ({
  theme = 'light',
  className = '',
  width = 140,
  height = 35
}) => {
  const isDark = theme === 'dark';
  const brandColor = 'var(--primary-color)';
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 180 35" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left shape */}
      <path 
        d="M0.5 11C2.9 2.6 11.5 0.166667 15.5 0V23C12.7 32.6 4.33333 35 0.5 35V11Z" 
        fill={isDark ? "#ffffff" : brandColor} 
      />
      {/* Bottom right circle */}
      <circle 
        cx="26" 
        cy="27" 
        r="8" 
        style={{
          fill: isDark ? brandColor : 'var(--primary-color)',
          opacity: isDark ? 1 : 0.12
        }}
      />
      {/* Top right circle */}
      <circle 
        cx="26" 
        cy="8" 
        r="8" 
        fill={isDark ? "#ffffff" : brandColor} 
      />
      {/* YourBrand text */}
      <text
        x="47"
        y="23"
        fill={isDark ? '#FFFFFF' : '#18181B'}
        style={{
          fontFamily: 'var(--font-manrope)',
          fontSize: '22px',
          fontWeight: '700',
          letterSpacing: '-0.02em'
        }}
      >
        YourBrand
      </text>
    </svg>
  );
}; 
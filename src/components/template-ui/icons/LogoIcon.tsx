import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
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
}) => {
  const isDark = theme === 'dark';
  const brandColor = GLOBALCSS_VAR.primaryColor;
  
  return (
    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 40.2286C9.17015 9.50857 42.0299 0.609524 57.3134 0V84.1143C46.6149 119.223 14.6468 128 0 128V40.2286Z" fill={ isDark ? 'white' : brandColor}/>
    <ellipse cx="97.4324" cy="98.7435" rx="30.5672" ry="29.2571" fill={brandColor} fill-opacity={isDark ? '1' : '0.2'}/>
    <ellipse cx="97.4324" cy="29.2571" rx="30.5672" ry="29.2571" fill={ isDark ? 'white' : brandColor}/>
</svg>

  );
}; 
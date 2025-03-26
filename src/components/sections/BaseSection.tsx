'use client';

import React, { ReactNode } from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';

export interface BaseSectionProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  fullWidth?: boolean;
  centered?: boolean;
  paddingY?: 'small' | 'medium' | 'large';
  sectionType?: string;
}

/**
 * Base component for all section templates
 * Provides consistent styling and structure
 */
const BaseSection: React.FC<BaseSectionProps> = ({
  children,
  className = '',
  backgroundColor,
  textColor,
  fullWidth = false,
  centered = true,
  paddingY = 'medium',
  sectionType,
}) => {
  // Try to access the design context for styling, fallback to defaults if not available
  let primaryColor = '';
  try {
    const { styleGuide } = useDesign();
    primaryColor = styleGuide.colors.primary;
  } catch (error) {
    console.log('BaseSection used outside DesignContext, using default styles');
  }
  
  // Determine padding based on size
  const paddingClasses = {
    small: 'py-8',
    medium: 'py-16',
    large: 'py-24',
  }[paddingY];
  
  return (
    <section
      className={`w-full ${paddingClasses} px-4 ${className}`}
      style={{
        backgroundColor: backgroundColor || 'white',
        color: textColor || 'inherit',
      }}
      data-section-type={sectionType}
    >
      <div className={`${fullWidth ? 'w-full' : 'max-w-[1200px] mx-auto'}`}>
        <div className={`${centered ? 'flex flex-col items-center text-center' : ''}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default BaseSection; 
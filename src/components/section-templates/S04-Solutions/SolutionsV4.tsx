'use client';

import React from 'react';
import { SolutionsProps, defaultSolutionsProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { GridIcon } from '@/components/template-ui/icons/GridIcon';

export const SolutionsV4: React.FC<SolutionsProps> = ({
  title = defaultSolutionsProps.title,
  subtitle = defaultSolutionsProps.subtitle,
  badgeText = defaultSolutionsProps.badgeText,
  features = defaultSolutionsProps.features,
  theme = defaultSolutionsProps.theme,
  sectionId
}) => {
  const isDark = theme === 'dark';
  
  return (
    <MySection theme={theme} className="py-16 md:py-24" backgroundColor={ isDark ? "" : GLOBALCSS_VAR.primaryColor10}
    >
      <div id={sectionId} className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <Badge theme={theme}>
            {badgeText}
          </Badge>
        </div>
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <MyHeading theme={theme} as='h2' className={`text-3xl md:text-4xl font-bold mb-6`}>
            {title}
          </MyHeading>
          <MyParagraph theme={theme} className={`text-lg`}>
            {subtitle}
          </MyParagraph>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={` rounded-lg p-6 flex flex-col items-center text-center bg-white`}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-4 rounded-md"
              style={{
                backgroundColor: theme === 'dark' ? `${GLOBALCSS_VAR.primaryColor}` : `${GLOBALCSS_VAR.primaryColor10}`,
              }}
              >
                <GridIcon color={theme === 'dark' ? "white" : GLOBALCSS_VAR.primaryColor} className="h-5 w-5" />
              </div>
              
              {/* Title */}
              <MyHeading as='h5' className={`text-xl font-semibold mb-2`}>
                {feature.title}
              </MyHeading>
              
              {/* Description */}
              <MyParagraph className={`text-base`}>
                {feature.description}
              </MyParagraph>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
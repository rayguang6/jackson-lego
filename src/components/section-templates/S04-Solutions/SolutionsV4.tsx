'use client';

import React from 'react';
import { SolutionsProps, defaultSolutionsProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';

export const SolutionsV4: React.FC<SolutionsProps> = ({
  title = defaultSolutionsProps.title,
  subtitle = defaultSolutionsProps.subtitle,
  badgeText = defaultSolutionsProps.badgeText,
  features = defaultSolutionsProps.features,
  theme = defaultSolutionsProps.theme,
  sectionId
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subtitleColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const cardBorder = isDark ? 'border-gray-700' : 'border-gray-100';
  const cardShadow = isDark ? '' : 'shadow-sm';
  
  // Ensure we have 6 features (2 rows of 3)
  const displayFeatures = features.slice(0, 6);
  // If we have less than 6, duplicate the last one to fill
  while (displayFeatures.length < 6) {
    displayFeatures.push(features[features.length - 1]);
  }
  
  return (
    <MySection theme={theme} className="py-16 md:py-24">
      <div id={sectionId} className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <Badge theme={theme}>
            {badgeText}
          </Badge>
        </div>
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textColor}`}>
            {title}
          </h2>
          <p className={`text-lg ${subtitleColor}`}>
            {subtitle}
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {displayFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`${cardBg} ${cardBorder} border rounded-lg p-6 ${cardShadow} flex flex-col items-center text-center`}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-4 bg-red-100 rounded-md">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-red-600"
                >
                  <path 
                    d="M3 9H21M9 21V9M3 5H21M3 17H21M3 13H21M15 21V9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className={subtitleColor}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
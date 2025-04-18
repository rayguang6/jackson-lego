'use client';

import React from 'react';
import Image from 'next/image';
import { SolutionsProps, defaultSolutionsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';

export const SolutionsV3: React.FC<SolutionsProps> = ({
  title = defaultSolutionsProps.title,
  subtitle = defaultSolutionsProps.subtitle,
  badgeText = defaultSolutionsProps.badgeText,
  sectionTitle = defaultSolutionsProps.sectionTitle,
  features = defaultSolutionsProps.features,
  theme = defaultSolutionsProps.theme
}) => {
  
  // Ensure we have 6 features (2 rows of 3)
  const displayFeatures = features.slice(0, 6);
  // If we have less than 6, duplicate the last one to fill
  while (displayFeatures.length < 6) {
    displayFeatures.push(features[features.length - 1]);
  }
  
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-center mb-10">
          <Badge theme={theme}>
            {badgeText}
          </Badge>
        </div>
        
        {/* Main content */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
          
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Features - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-10">
            {displayFeatures.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white rounded-md border border-gray-200 shadow-sm w-12 h-12 flex items-center justify-center">
                  <Image 
                    src={`/images/solution-v3-icon-${index + 1}.svg`} 
                    alt={feature.title}
                    width={20}
                    height={20}
                    className="text-red-600"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-base max-w-xs">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Features - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {displayFeatures.slice(3, 6).map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white rounded-md border border-gray-200 shadow-sm w-12 h-12 flex items-center justify-center">
                  <Image 
                    src={`/images/solution-v3-icon-${index + 4}.svg`} 
                    alt={feature.title}
                    width={20}
                    height={20}
                    className="text-red-600"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-base max-w-xs">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MySection>
  );
}; 
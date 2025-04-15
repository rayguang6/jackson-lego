'use client';

import React from 'react';
import Image from 'next/image';
import { SolutionsProps, defaultSolutionsProps } from './types';
import { useDesign } from '@/lib/contexts/DesignContext';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';

export const SolutionsV2: React.FC<SolutionsProps> = ({
  title = defaultSolutionsProps.title,
  subtitle = defaultSolutionsProps.subtitle,
  badgeText = defaultSolutionsProps.badgeText,
  sectionTitle = defaultSolutionsProps.sectionTitle,
  features = defaultSolutionsProps.features,
  theme = defaultSolutionsProps.theme
}) => {
  const { design } = useDesign();
  
  return (
    <MySection theme={theme} className="py-24 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex justify-center mb-10">
          {badgeText && (
            <Badge text={badgeText} icon="none" className="text-red-600 tracking-widest" />
          )}
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
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100/50 shadow-sm p-8 flex flex-col items-center text-center">
              <div className="flex-shrink-0 h-14 w-14 rounded-lg bg-red-600 flex items-center justify-center mb-6">
                <Image 
                  src={`/images/solution-icon-${index + 1}.svg`} 
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
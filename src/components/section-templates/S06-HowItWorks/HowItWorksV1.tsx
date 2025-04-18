'use client';

import React from 'react';

import { MySection } from '@/components/template-ui/MySection';
import { HowItWorksProps, defaultHowItWorksProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
export const HowItWorksV1: React.FC<HowItWorksProps> = ({
  theme = defaultHowItWorksProps.theme,
  title = defaultHowItWorksProps.title,
  subtitle = defaultHowItWorksProps.subtitle,
  badgeText = defaultHowItWorksProps.badgeText,
  features = defaultHowItWorksProps.features,
}) => {
  const isDark = theme === 'dark';

  const StepCard = ({ number, title, description, isHighlighted = false }: { 
    number: number; 
    title: string; 
    description: string;
    isHighlighted?: boolean;
  }) => {
    return (
      <div 
        className={`
          flex items-center gap-6 p-5 rounded-[10px] relative
          ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#E4E4E7]'}
          border shadow-md
          w-full max-w-[460px]
        `}
      >
        <div 
          className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: GLOBALCSS_VAR.primaryColor }}
        >
          <span className="text-white font-extrabold text-xl font-manrope">{number}</span>
        </div>
        
        <div className="flex-1">
          <p 
            className={`font-medium text-xl mb-1 ${isDark ? 'text-white' : 'text-[#18181B]'}`} 
            style={{ fontFamily: GLOBALCSS_VAR.headingFont, lineHeight: '1.4' }}
          >
            {title}
          </p>
          <p 
            className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
          >
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <MySection 
      theme={theme}
      className="py-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">  
          {/* Badge */}
          <Badge 
            theme={theme}
          >
            {badgeText}
          </Badge>

          {/* Title */}
          <SectionHeading
            theme={theme}
            className="text-center max-w-[600px]"
          >
            {title}
          </SectionHeading>

          {/* Subtitle */}
          <MyParagraph
            theme={theme}
          >
            {subtitle}
          </MyParagraph>

          {/* Steps */}
          <div className="w-full flex flex-col items-center gap-6 mt-6">
            {features?.map((feature, index) => (
              <StepCard
                key={index}
                number={index + 1}
                title={feature.title.replace(/\d+\.\s+/, '')} // Remove the numbering from the title
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </MySection>
  );
}; 
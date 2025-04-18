'use client';

import React from 'react';

import { MySection } from '@/components/template-ui/MySection';
import { HowItWorksProps, defaultHowItWorksProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
export const HowItWorksV2: React.FC<HowItWorksProps> = ({
  theme = defaultHowItWorksProps.theme,
  title = defaultHowItWorksProps.title,
  subtitle = defaultHowItWorksProps.subtitle,
  badgeText = defaultHowItWorksProps.badgeText,
  features = defaultHowItWorksProps.features,
  ctaText = defaultHowItWorksProps.ctaText,
}) => {
  const isDark = theme === 'dark';

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
          <div className="w-full mt-6 relative">
            {/* Vertical line that connects the steps */}
            <div className={`absolute left-[22px] top-8 bottom-8 w-[1px] ${isDark ? 'bg-gray-700' : 'bg-gray-300'} z-0`}>
              <div 
                className="absolute left-0 top-0 bottom-0 w-[1px] z-10"
                style={{ backgroundColor: GLOBALCSS_VAR.primaryColor, height: '100%' }}
              ></div>
            </div>

            {/* Steps container */}
            <div className="flex flex-col gap-10 relative z-10">
              {features?.map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  {/* Circle indicator */}
                  <div className="relative flex-shrink-0">
                    {/* Light pink outer circle */}
                    <div className={`w-11 h-11 rounded-full ${isDark ? 'bg-red-900/20' : 'bg-red-100'}`}></div>
                    
                    {/* Small red inner circle */}
                    <div 
                      className="w-5 h-5 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ backgroundColor: GLOBALCSS_VAR.primaryColor }}
                    ></div>
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-1">
                    <h3 
                      className={`text-[26px] font-normal mb-2 ${isDark ? 'text-white' : 'text-[#4D4D4D]'}`}
                      style={{ fontFamily: GLOBALCSS_VAR.headingFont }}
                    >
                      {`${index + 1}. ${feature.title.replace(/\d+\.\s+/, '')}`}
                    </h3>
                    <p 
                      className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#4D4D4D]'}`}
                      style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <PrimaryButton theme={theme} className="mt-8">
            {ctaText}
          </PrimaryButton>
        </div>
      </div>
    </MySection>
  );
}; 
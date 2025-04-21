'use client';

import React from 'react';
import { HowItWorksProps, defaultHowItWorksProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
export const HowItWorksV4: React.FC<HowItWorksProps> = ({
  title = defaultHowItWorksProps.title,
  subtitle = defaultHowItWorksProps.subtitle,
  badgeText = defaultHowItWorksProps.badgeText,
  features = defaultHowItWorksProps.features,
  ctaText = defaultHowItWorksProps.ctaText,
  theme = defaultHowItWorksProps.theme,
  sectionId
}) => {
  const isDark = theme === 'dark';
  
  // Make sure we have exactly 3 features
  const displayFeatures = features?.slice(0, 3) || [];
  
  return (
    <MySection theme={theme} className="py-20 md:py-24 lg:py-28">
      <div id={sectionId} className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-7xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <Badge theme={theme}>
              {badgeText}
            </Badge>
          </div>
          
          {/* Title and Subtitle */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <MyHeading theme={theme} className='mb-6'>
              {title}
            </MyHeading>
            <MyParagraph theme={theme}>
              {subtitle}
            </MyParagraph>
          </div>
          
          {/* Progress Bar */}
          <div className="relative w-full max-w-5xl mb-16">
            <div className="h-1 w-full" style={{ backgroundColor: GLOBALCSS_VAR.primaryColor30 }}>
              <div className="h-1.5 w-[30%]" style={{ backgroundColor: GLOBALCSS_VAR.primaryColor }}></div>
            </div>
          </div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 w-full max-w-5xl mb-20">
            {displayFeatures.map((feature, index) => {
              const stepNumber = (index + 1).toString();
              const title = feature.title.replace(/^\d+\.\s*/, ''); // Remove any numbers at the start
              
              return (
                <div key={index} className="flex flex-col items-start">
                  {/* Step Number */}
                  <div className="mb-5 relative">
                    <div className="absolute inset-0 rotate-45 rounded-md shadow-lg w-12 h-12" style={{ backgroundColor: GLOBALCSS_VAR.primaryColor }}></div>
                    <div className="relative flex items-center justify-center w-12 h-12">
                      <span className="text-white font-bold text-xl">
                        {stepNumber}
                      </span>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div>
                    <MyHeading as='h4' theme={theme} className='mb-3'>
                      {title}
                    </MyHeading>
                    <MyParagraph theme={theme}>
                      {feature.description}
                    </MyParagraph>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* CTA Button */}
          {ctaText && (
            <div className="mt-6">
              <PrimaryButton theme={theme} className="px-7 py-3 rounded-lg font-bold uppercase tracking-wider flex items-center shadow-md hover:shadow-lg transition-shadow">
                {ctaText}
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>
    </MySection>
  );
}; 
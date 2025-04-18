'use client';

import React from 'react';

import { MySection } from '@/components/template-ui/MySection';
import { HowItWorksProps, defaultHowItWorksProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import Image from 'next/image';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
export const HowItWorksV3: React.FC<HowItWorksProps> = ({
  theme = defaultHowItWorksProps.theme,
  title = defaultHowItWorksProps.title,
  subtitle = defaultHowItWorksProps.subtitle,
  badgeText = defaultHowItWorksProps.badgeText,
  features = defaultHowItWorksProps.features,
  ctaText = defaultHowItWorksProps.ctaText,
}) => {
  const isDark = theme === 'dark';

  // Icons that represent each step
  const stepIcons = [
    '/images/how-it-works/icon-template.svg',
    '/images/how-it-works/icon-customize.svg',
    '/images/how-it-works/icon-launch.svg'
  ];

  return (
    <MySection 
      theme={theme}
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Horizontal Divider */}
          <div className={`w-full h-px ${isDark ? 'bg-gray-700' : 'bg-gray-200'} my-4`}></div>

          {/* Steps Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {features?.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="mb-6">
                  <div 
                    className={`w-16 h-16 rounded-md border ${isDark ? 'border-gray-700 bg-gray-800/30' : 'border-[#E5E5E7] bg-white'} flex items-center justify-center`}
                    style={{ boxShadow: isDark ? 'none' : '0px 1px 2px 0px rgba(16, 24, 40, 0.04)' }}
                  >
                    <Image 
                      src={stepIcons[index]} 
                      alt={`Step ${index + 1}`} 
                      width={32} 
                      height={32}
                    />
                  </div>
                </div>
                
                {/* Step Label */}
                <div 
                  className="uppercase font-bold text-lg mb-2.5"
                  style={{ color: GLOBALCSS_VAR.primaryColor, fontFamily: GLOBALCSS_VAR.headingFont }}
                >
                  STEP {index + 1}
                </div>
                
                {/* Step Title */}
                <h3 
                  className={`font-bold text-xl mb-2.5 ${isDark ? 'text-white' : 'text-[#343434]'}`} 
                  style={{ fontFamily: GLOBALCSS_VAR.headingFont }}
                >
                  {feature.title.replace(/\d+\.\s+/, '')}
                </h3>
                
                {/* Step Description */}
                <p 
                  className={`text-lg ${isDark ? 'text-gray-300' : 'text-[#4B5162]'}`}
                  style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <PrimaryButton theme={theme} className="mt-8">
            {ctaText}
          </PrimaryButton>
        </div>
      </div>
    </MySection>
  );
}; 
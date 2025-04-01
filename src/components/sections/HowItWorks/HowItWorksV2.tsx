'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { MySection } from '@/components/common/MySection';
import { HowItWorksProps, defaultHowItWorksProps } from './types';
import { Badge } from '@/components/common/Badge';
import { MyParagraph } from '@/components/common/MyParagraph';
import { SectionHeading } from '@/components/common/SectionHeading';
import Link from 'next/link';

export const HowItWorksV2: React.FC<HowItWorksProps> = ({
  theme = defaultHowItWorksProps.theme,
  title = defaultHowItWorksProps.title,
  subtitle = defaultHowItWorksProps.subtitle,
  badgeText = defaultHowItWorksProps.badgeText,
  features = defaultHowItWorksProps.features,
  buttonText = defaultHowItWorksProps.buttonText,
  buttonUrl = defaultHowItWorksProps.buttonUrl,
}) => {
  const { primaryColor, headingFont, bodyFont } = useDesign().styleGuide;
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
            text={badgeText}
            theme={theme}
            icon="star"
          />

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
            text={subtitle}
            className="text-center max-w-[600px]"
          />

          {/* Steps */}
          <div className="w-full mt-6 relative">
            {/* Vertical line that connects the steps */}
            <div className={`absolute left-[22px] top-8 bottom-8 w-[1px] ${isDark ? 'bg-gray-700' : 'bg-gray-300'} z-0`}>
              <div 
                className="absolute left-0 top-0 bottom-0 w-[1px] z-10"
                style={{ backgroundColor: primaryColor, height: '100%' }}
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
                      style={{ backgroundColor: primaryColor }}
                    ></div>
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-1">
                    <h3 
                      className={`text-[26px] font-normal mb-2 ${isDark ? 'text-white' : 'text-[#4D4D4D]'}`}
                      style={{ fontFamily: 'General Sans, sans-serif' }}
                    >
                      {`${index + 1}. ${feature.title.replace(/\d+\.\s+/, '')}`}
                    </h3>
                    <p 
                      className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#4D4D4D]'}`}
                      style={{ fontFamily: bodyFont }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Link 
              href={buttonUrl || "#"}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-lg border-[10px] border-opacity-12"
              style={{
                backgroundColor: primaryColor,
                borderColor: `${primaryColor}20`,
                fontFamily: 'Archivo, sans-serif'
              }}
            >
              <span className="text-white font-bold text-lg uppercase tracking-wide">
                {buttonText}
              </span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 11L6.5 6L1.5 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </MySection>
  );
}; 
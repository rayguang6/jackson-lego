'use client';

import React from 'react';
import { HowItWorksProps, defaultHowItWorksProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';

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
  const headingColor = isDark ? 'text-white' : 'text-[#343434]';
  const subtitleColor = isDark ? 'text-gray-300' : 'text-[#4B5162]';
  const stepTitleColor = isDark ? 'text-white' : 'text-[#343434]';
  const stepDescColor = isDark ? 'text-gray-300' : 'text-[#52525B]';
  
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
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 ${headingColor}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
              {title}
            </h2>
            <p className={`text-base md:text-lg ${subtitleColor}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
              {subtitle}
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="relative w-full max-w-5xl mb-16">
            <div className="h-0.5 bg-gray-200 w-full">
              <div className="h-0.5 bg-[#EF083A] w-[30%]"></div>
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
                    <div className="absolute inset-0 bg-gradient-to-b from-[#EB5A68] to-[#EF083A] rotate-45 rounded-md shadow-lg w-12 h-12"></div>
                    <div className="relative flex items-center justify-center w-12 h-12">
                      <span className="text-white font-bold text-xl">
                        {stepNumber}
                      </span>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${stepTitleColor}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {title}
                    </h3>
                    <p className={`${stepDescColor}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* CTA Button */}
          {ctaText && (
            <div className="mt-6">
              <button 
                className="bg-[#EF083A] text-white px-7 py-3 rounded-lg font-bold uppercase tracking-wider flex items-center shadow-md hover:shadow-lg transition-shadow"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                {ctaText}
                <span className="ml-2 bg-white text-[#EF083A] rounded-full w-6 h-6 flex items-center justify-center">
                  <svg 
                    width="10" 
                    height="10" 
                    viewBox="0 0 10 10" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 5H7M7 5L5 3M7 5L5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </MySection>
  );
}; 
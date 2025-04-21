'use client';

import React from 'react';
import { HowItWorksProps, defaultHowItWorksProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import Image from 'next/image';

export const HowItWorksV5: React.FC<HowItWorksProps> = ({
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
  const stepTitleColor = isDark ? 'text-white' : 'text-[#EF083A]';
  const stepDescColor = isDark ? 'text-gray-300' : 'text-[#505F7C]';
  
  // Make sure we have exactly 3 features
  const displayFeatures = features?.slice(0, 3) || [];
  
  // Update descriptions to match design if needed
  const updatedFeatures = displayFeatures.map((feature, index) => {
    // Let's provide more detailed descriptions if not already provided
    if (index === 0 && feature.description.length < 50) {
      return {
        ...feature,
        description: "Pick from versatile, pre-designed templates tailored to your needs."
      };
    }
    if (index === 1 && feature.description.length < 50) {
      return {
        ...feature,
        description: "Use the intuitive drag-and-drop editor to personalize your design in minutes."
      };
    }
    if (index === 2 && feature.description.length < 50) {
      return {
        ...feature,
        description: "Quickly publish your site, knowing it's fast, optimized, and ready to perform."
      };
    }
    return feature;
  });
  
  return (
    <MySection theme={theme} className="py-24 lg:py-28">
      <div id={sectionId} className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          {/* Badge */}
          <div className="mb-8">
            <Badge theme={theme}>
              {badgeText}
            </Badge>
          </div>
          
          {/* Title and Subtitle */}
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 ${headingColor}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
              {title}
            </h2>
            <p className={`text-base md:text-lg ${subtitleColor}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
              {subtitle}
            </p>
          </div>
        </div>
        
        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-20 mb-12 max-w-6xl mx-auto">
          {/* Steps Column */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-12 lg:space-y-16">
              {updatedFeatures.map((feature, index) => {
                const stepNumber = (index + 1).toString();
                const title = feature.title.replace(/^\d+\.\s*/, ''); // Remove any numbers at the start
                
                return (
                  <div key={index} className="flex items-start">
                    {/* Number Circle */}
                    <div className="mr-4 lg:mr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#EF083A] flex items-center justify-center">
                        <span className="text-white font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {stepNumber}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      {/* Title */}
                      <h3 className={`text-xl lg:text-2xl font-semibold mb-4 ${stepTitleColor}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {title}
                      </h3>
                      
                      {/* Description */}
                      <p className={`${stepDescColor} text-base lg:text-lg`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Image Column */}
          <div className="w-full lg:w-2/5 rounded-md overflow-hidden">
            <div className="aspect-[4/3] w-full h-full relative">
              <Image
                src="/images/templates/how-it-works/workflow-bg.jpg"
                alt="Workflow background"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        {ctaText && (
          <div className="mt-6 flex justify-center">
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
    </MySection>
  );
}; 
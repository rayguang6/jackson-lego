'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FeaturesOrServicesProps, defaultFeaturesOrServicesProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';

export const FeaturesOrServicesV3: React.FC<FeaturesOrServicesProps> = ({
  title = defaultFeaturesOrServicesProps.title,
  subtitle = defaultFeaturesOrServicesProps.subtitle,
  badgeText = defaultFeaturesOrServicesProps.badgeText,
  ctaButtonText = defaultFeaturesOrServicesProps.ctaButtonText,
  ctaButtonLink = defaultFeaturesOrServicesProps.ctaButtonLink,
  services = defaultFeaturesOrServicesProps.services,
  theme = defaultFeaturesOrServicesProps.theme
}) => {
  const { primaryColor, headingFont, bodyFont, textColor } = useDesign().styleGuide;
  const isDark = theme === 'dark';
  
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-center mb-10">
          {badgeText && (
            <Badge text={badgeText} theme={theme} />
          )}
        </div>
        
        {/* Main heading */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <SectionHeading theme={theme} className="mb-6">
            {title}
          </SectionHeading>
          
          <MyParagraph theme={theme} text={subtitle} />
        </div>
        
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {services.slice(0, 3).map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col h-full"
            >
              <div className="flex justify-between items-center pb-5 border-b border-gray-200 mb-5">
                <h3 
                  className="text-xl font-medium pr-4"
                  style={{ color: textColor, fontFamily: headingFont }}
                >
                  {service.title}
                </h3>
                <div 
                  className="h-12 w-12 rounded-lg flex items-center justify-center font-semibold text-xl shadow-sm"
                  style={{ 
                    backgroundColor: `${primaryColor}10`, 
                    color: primaryColor 
                  }}
                >
                  {`0${index + 1}`}
                </div>
              </div>
              
              <p 
                className="mb-5 flex-grow"
                style={{ color: textColor, fontFamily: bodyFont }}
              >
                {service.description}
              </p>
              
              <div className="rounded-2xl overflow-hidden mt-auto">
                <Image 
                  src={`/images/service-v3-image-${index + 1}.svg`}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        {ctaButtonText && (
          <div className="flex justify-center">
            <Link 
              href={ctaButtonLink || '#'} 
              className="inline-flex items-center gap-3 text-white rounded-lg px-7 py-4 font-bold tracking-wide shadow-md transition-colors"
              style={{ 
                backgroundColor: primaryColor,
                fontFamily: bodyFont 
              }}
            >
              <span>{ctaButtonText}</span>
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center" style={{ color: primaryColor }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M1.5 11L6.5 6L1.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        )}
      </div>
    </MySection>
  );
}; 
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FeaturesOrServicesProps, defaultFeaturesOrServicesProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';

export const FeaturesOrServicesV3: React.FC<FeaturesOrServicesProps> = ({
  title = defaultFeaturesOrServicesProps.title,
  subtitle = defaultFeaturesOrServicesProps.subtitle,
  badgeText = defaultFeaturesOrServicesProps.badgeText,
  ctaText = defaultFeaturesOrServicesProps.ctaText,
  services = defaultFeaturesOrServicesProps.services,
  theme = defaultFeaturesOrServicesProps.theme
}) => {
  const isDark = theme === 'dark';
  
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-center mb-10">
          {badgeText && (
            <Badge theme={theme}>
              {badgeText}
            </Badge>
          )}
        </div>
        
        {/* Main heading */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <SectionHeading theme={theme} className="mb-6">
            {title}
          </SectionHeading>
          
          <MyParagraph theme={theme} />
            {subtitle}
          <MyParagraph/>
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
                  style={{ color: GLOBALCSS_VAR.textColor, fontFamily: GLOBALCSS_VAR.headingFont }}
                >
                  {service.title}
                </h3>
                <div 
                  className="h-12 w-12 rounded-lg flex items-center justify-center font-semibold text-xl shadow-sm"
                  style={{ 
                    backgroundColor: `${GLOBALCSS_VAR.primaryColor10}`, 
                    color: GLOBALCSS_VAR.primaryColor 
                  }}
                >
                  {`0${index + 1}`}
                </div>
              </div>
              
              <p 
                className="mb-5 flex-grow"
                style={{ color: GLOBALCSS_VAR.textColor, fontFamily: GLOBALCSS_VAR.bodyFont }}
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
        <PrimaryButton theme={theme} className="mt-8">
          {ctaText}
        </PrimaryButton>
      </div>
    </MySection>
  );
}; 
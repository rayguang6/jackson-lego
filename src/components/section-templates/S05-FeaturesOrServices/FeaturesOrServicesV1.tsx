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

export const FeaturesOrServicesV1: React.FC<FeaturesOrServicesProps> = ({
  title = defaultFeaturesOrServicesProps.title,
  subtitle = defaultFeaturesOrServicesProps.subtitle,
  badgeText = defaultFeaturesOrServicesProps.badgeText,
  services = defaultFeaturesOrServicesProps.services,
  theme = defaultFeaturesOrServicesProps.theme,
  ctaText = defaultFeaturesOrServicesProps.ctaText,
}) => {
  const isDark = theme === 'dark';
  
  // Define colors based on theme
  const textColor = isDark ? '#FFFFFF' : '#1F2937'; // white for dark, gray-800 for light
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-100';
  const serviceBgColor = isDark ? 'bg-gray-800' : 'bg-white';
  const serviceTextColor = isDark ? 'text-white' : 'text-gray-700';
  
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
        
        {/* Services */}
        <div className="flex flex-col gap-10 max-w-6xl mx-auto mb-12">
          {services.slice(0, 4).map((service, index) => (
            <div 
              key={index} 
              className={`border ${borderColor} rounded-3xl p-8 ${serviceBgColor} flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 transition-colors`}
            >
              <div className="w-full md:w-2/5 aspect-video md:aspect-auto rounded-2xl overflow-hidden">
                <Image 
                  src={service.imageSrc}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5">
                <h3 
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: GLOBALCSS_VAR.primaryColor, fontFamily: GLOBALCSS_VAR.headingFont }}
                >
                  {service.title}
                </h3>
                <p 
                  className={`text-lg mb-8 ${serviceTextColor}`}
                  style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                >
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Image 
                        src="/images/service-check-icon.svg"
                        alt="check"
                        width={24}
                        height={24}
                        className="flex-shrink-0 mt-0.5"
                      />
                      <span 
                        className={serviceTextColor}
                        style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
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
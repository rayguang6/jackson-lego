'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FeaturesOrServicesProps, defaultFeaturesOrServicesProps } from './types';
import { useDesign } from '@/lib/contexts/DesignContext';
import { MySection } from '@/components/common/MySection';
import { Badge } from '@/components/common/Badge';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MyParagraph } from '@/components/common/MyParagraph';

export const FeaturesOrServicesV1: React.FC<FeaturesOrServicesProps> = ({
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
        
        {/* Services */}
        <div className="flex flex-col gap-10 max-w-6xl mx-auto mb-12">
          {services.slice(0, 4).map((service, index) => (
            <div 
              key={index} 
              className={`border border-gray-100 rounded-3xl p-8 flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10`}
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
                  style={{ color: primaryColor, fontFamily: headingFont }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-lg mb-8"
                  style={{ color: textColor, fontFamily: bodyFont }}
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
                        style={{ color: textColor, fontFamily: bodyFont }}
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
        {ctaButtonText && (
          <div className="flex justify-center">
            <Link 
              href={ctaButtonLink || '#'} 
              className="inline-flex items-center gap-3 text-white rounded-lg px-6 py-4 font-bold tracking-wide shadow-lg transition-colors"
              style={{ 
                backgroundColor: primaryColor, 
                boxShadow: `0 10px 15px -3px ${primaryColor}20, 0 4px 6px -4px ${primaryColor}20`,
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
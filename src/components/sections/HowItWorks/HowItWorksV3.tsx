'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { MySection } from '@/components/common/MySection';
import { HowItWorksProps, defaultHowItWorksProps } from './types';
import { Badge } from '@/components/common/Badge';
import { MyParagraph } from '@/components/common/MyParagraph';
import { SectionHeading } from '@/components/common/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';

export const HowItWorksV3: React.FC<HowItWorksProps> = ({
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
                  style={{ color: primaryColor, fontFamily: headingFont }}
                >
                  STEP {index + 1}
                </div>
                
                {/* Step Title */}
                <h3 
                  className={`font-bold text-xl mb-2.5 ${isDark ? 'text-white' : 'text-[#343434]'}`} 
                  style={{ fontFamily: headingFont }}
                >
                  {feature.title.replace(/\d+\.\s+/, '')}
                </h3>
                
                {/* Step Description */}
                <p 
                  className={`text-lg ${isDark ? 'text-gray-300' : 'text-[#4B5162]'}`}
                  style={{ fontFamily: bodyFont }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16">
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
'use client';

import React from 'react';
import Image from 'next/image';
import { SocialProofProps, defaultSocialProofProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';

export const SocialProofV2: React.FC<SocialProofProps> = ({
  title = defaultSocialProofProps.title,
  subtitle = defaultSocialProofProps.subtitle,
  logos = defaultSocialProofProps.logos,
  stats = defaultSocialProofProps.stats,
  testimonial = defaultSocialProofProps.testimonial,
  theme = defaultSocialProofProps.theme,
  sectionId
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subtitleColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const logoFilter = isDark ? 'brightness-0 invert' : '';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const cardBorder = isDark ? 'border-gray-700' : 'border-gray-200';

  return (
    <MySection theme={theme} className="py-20">
      <div id={sectionId} className="container mx-auto px-4">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left column - Header */}
          <div className="md:w-1/2">
            <SectionHeading theme={theme} className="mb-4">
              {title}
            </SectionHeading>
            <MyParagraph theme={theme} className="mb-8">
              {subtitle}
            </MyParagraph>
            
            {/* Stats cards */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`${cardBg} ${cardBorder} border rounded-lg p-4 text-center`}
                  >
                    <div 
                      className="text-3xl font-bold mb-1" 
                      style={{ color: 'var(--primary-color)', fontFamily: 'var(--heading-font)' }}
                    >
                      {stat.value}
                    </div>
                    <div className={`text-sm ${subtitleColor}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Right column - Testimonial */}
          <div className="md:w-1/2">
            {testimonial && (
              <div className={`${cardBg} border ${cardBorder} rounded-xl p-6 md:p-8 shadow-lg relative`}>
                {/* Quote icon */}
                <div className="absolute top-6 right-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M18.8889 10L12.2222 20H16.6667V30H6.66669V20L13.3334 10H18.8889ZM35.5556 10L28.8889 20H33.3333V30H23.3333V20L30 10H35.5556Z" 
                      fill="var(--primary-color)" 
                      fillOpacity="0.2"
                    />
                  </svg>
                </div>
                
                {/* Quote */}
                <p className={`${textColor} text-lg md:text-xl leading-relaxed mb-6`}>
                  "{testimonial.quote}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center">
                  {testimonial.avatarUrl && (
                    <div className="mr-4">
                      <Image 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.author}
                        width={56}
                        height={56}
                        className="rounded-full"
                      />
                    </div>
                  )}
                  <div>
                    <div className={`font-semibold ${textColor}`}>{testimonial.author}</div>
                    <div className={subtitleColor}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Logos */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className={`text-center text-sm uppercase tracking-wide font-semibold mb-8 ${subtitleColor}`}>
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos?.map((logo, index) => (
              <div key={index} className="h-8 md:h-10">
                <img 
                  src={logo.url} 
                  alt={logo.alt}
                  className={`h-full object-contain ${logoFilter}`}
                  style={{ filter: logoFilter || undefined }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MySection>
  );
}; 
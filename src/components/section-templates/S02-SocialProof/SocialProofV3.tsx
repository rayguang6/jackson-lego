'use client';

import React from 'react';
import Image from 'next/image';
import { SocialProofProps, defaultSocialProofProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';

export const SocialProofV3: React.FC<SocialProofProps> = ({
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
        {/* Testimonial at the top */}
        {testimonial && (
          <div 
            className={`max-w-4xl mx-auto mb-20 rounded-xl p-10 shadow-xl relative overflow-hidden`}
            style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
          >
            {/* Background decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 bg-white"></div>
            <div className="absolute bottom-10 -left-20 w-60 h-60 rounded-full opacity-10 bg-white"></div>
            
            {/* Quote icon */}
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M14.0741 12L6.22226 24H13.3334V36H0.000041V24L7.77782 12H14.0741ZM38.0741 12L30.2222 24H37.3334V36H24.0001V24L31.7778 12H38.0741Z" 
                  fill="white" 
                  fillOpacity="0.5"
                />
              </svg>
            </div>
            
            {/* Quote */}
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              "{testimonial.quote}"
            </p>
            
            {/* Author info */}
            <div className="flex items-center">
              {testimonial.avatarUrl && (
                <div className="mr-4">
                  <Image 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-white"
                  />
                </div>
              )}
              <div>
                <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                <div className="text-white text-opacity-80">{testimonial.role}</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionHeading theme={theme} className="mb-4">
            {title}
          </SectionHeading>
          <MyParagraph theme={theme}>
            {subtitle}
          </MyParagraph>
        </div>
        
        {/* Stats in cards */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`${cardBg} ${cardBorder} border rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300`}
              >
                <div 
                  className="text-5xl font-bold mb-2" 
                  style={{ color: 'var(--primary-color)', fontFamily: 'var(--heading-font)' }}
                >
                  {stat.value}
                </div>
                <div className={`text-lg font-medium ${subtitleColor}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Logos with background */}
        <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-8 md:p-12`}>
          <p className={`text-center text-sm uppercase tracking-wide font-semibold mb-10 ${subtitleColor}`}>
            Trusted by innovative companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
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
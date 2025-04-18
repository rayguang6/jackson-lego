'use client';

import React from 'react';
import Image from 'next/image';
import { SocialProofProps, defaultSocialProofProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';

export const SocialProofV1: React.FC<SocialProofProps> = ({
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

  return (
    <MySection theme={theme} className="py-16">
      <div id={sectionId} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeading theme={theme} className="mb-4">
            {title}
          </SectionHeading>
          <MyParagraph theme={theme}>
            {subtitle}
          </MyParagraph>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16">
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

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-4xl md:text-5xl font-bold mb-2" 
                  style={{ color: 'var(--primary-color)', fontFamily: 'var(--heading-font)' }}
                >
                  {stat.value}
                </div>
                <div className={subtitleColor}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonial */}
        {testimonial && (
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 md:p-8 shadow-md">
            <div className="flex flex-col">
              {/* Quote */}
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonial.quote}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center">
                {testimonial.avatarUrl && (
                  <div className="mr-4">
                    <Image 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MySection>
  );
}; 
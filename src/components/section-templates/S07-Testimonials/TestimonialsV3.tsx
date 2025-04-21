'use client';

import React from 'react';
import Image from 'next/image';
import { TestimonialsProps, defaultTestimonialsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { Badge } from '@/components/template-ui/Badge';
// Custom placeholder avatar component

// Render the star rating (all filled in V3 design)
const renderStars = () => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Image 
          key={i}
          src="/images/star-icon.svg" 
          alt="Star" 
          width={16} 
          height={16}
          className="w-4 h-4 mr-0.5"
        />
      ))}
    </div>
  );
};

export const TestimonialsV3: React.FC<TestimonialsProps> = ({
  title = defaultTestimonialsProps.title,
  subtitle = defaultTestimonialsProps.subtitle,
  badgeText = defaultTestimonialsProps.badgeText,
  testimonials = defaultTestimonialsProps.testimonials,
  theme = defaultTestimonialsProps.theme
}) => {
  const isDark = theme === 'dark';
  
  // Ensure we have enough testimonials (duplicate if needed)
  const displayTestimonials = [...testimonials];
  while (displayTestimonials.length < 6) {
    displayTestimonials.push(...testimonials.slice(0, 6 - displayTestimonials.length));
  }
  
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <Badge theme={theme}>
            {badgeText || 'TESTIMONIAL'}
          </Badge>
          
          <MyHeading theme={theme} className="mb-5 text-4xl font-semibold mt-5">
            {title}
          </MyHeading>
          
          <MyParagraph theme={theme} className="text-lg">
            {subtitle}
          </MyParagraph>
        </div>
        
        {/* Testimonial Cards - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {displayTestimonials.map((testimonial, index) => (
            <div 
              key={`row1-${index}`} 
              className={`
                rounded-lg p-6 flex flex-col shadow-lg 
              `}
              style={{
                backgroundColor: isDark ? '#1F2937' : '#F9FAFB'
              }}
            >

              {/* Star Rating */}
              <div className="mt-4">
                  {renderStars()}
                </div>


              {/* Quote */}
              <div className="mt-6 mb-2">
                <MyParagraph theme={theme} className="text-lg">
                  "{testimonial.quote}"
                </MyParagraph>
              </div>
              
              <div className="mt-auto">
                
                
                {/* Author Info */}
                <div className="flex items-center">
                  <Image src={testimonial.avatarUrl} alt={testimonial.author} width={48} height={48} className="rounded-full" />
                  <div className="ml-4">
                    <MyHeading as='h4' theme={theme}>
                      {testimonial.author}
                    </MyHeading>
                    <MyParagraph className="text-sm" theme={theme}>
                      {testimonial.role} {testimonial.company ? `@${testimonial.company}` : ''}
                    </MyParagraph>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </MySection>
  );
}; 
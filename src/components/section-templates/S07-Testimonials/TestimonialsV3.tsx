'use client';

import React from 'react';
import Image from 'next/image';
import { TestimonialsProps, defaultTestimonialsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';

// Custom placeholder avatar component
const UserAvatar = ({ author, index, isDark, avatarUrl }: { author: string; index: number; isDark: boolean; avatarUrl?: string }) => {
  // Only use the custom avatar if no avatarUrl is provided
  if (!avatarUrl || avatarUrl.includes('testimonial-avatar')) {
    const colors = ['#EF083A', '#3267FF', '#9061F9', '#2DA94F', '#FF8C42'];
    const avatarColor = colors[index % colors.length];
    const initials = author.split(' ').map(name => name[0]).join('').toUpperCase().substring(0, 2);
    
    return (
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-bold"
        style={{ backgroundColor: avatarColor }}
      >
        {initials}
      </div>
    );
  }
  
  // Return image if avatarUrl is provided
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden">
      <Image 
        src={avatarUrl} 
        alt={author}
        width={48}
        height={48}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

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
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-primary">
            {badgeText || 'TESTIMONIAL'}
          </p>
          
          <SectionHeading theme={theme} className="mb-5 text-4xl font-semibold">
            {title}
          </SectionHeading>
          
          <MyParagraph theme={theme} className="text-lg">
            {subtitle}
          </MyParagraph>
        </div>
        
        {/* Testimonial Cards - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {displayTestimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={`row1-${index}`} 
              className={`
                rounded-lg p-6 flex flex-col shadow-lg bg-white
              `}
            >
              {/* Quote */}
              <div className="mb-6">
                <p 
                  className="text-gray-900 text-lg"
                  style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                >
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="mt-auto">
                {/* Star Rating */}
                <div className="mb-4">
                  {renderStars()}
                </div>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <UserAvatar 
                    author={testimonial.author} 
                    index={index}
                    isDark={isDark}
                    avatarUrl={testimonial.avatarUrl}
                  />
                  <div className="ml-4">
                    <h3 
                      className="font-bold text-base text-gray-900"
                      style={{ fontFamily: GLOBALCSS_VAR.headingFont }}
                    >
                      {testimonial.author}
                    </h3>
                    <p 
                      className="text-gray-500 text-sm"
                      style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                    >
                      {testimonial.role} {testimonial.company ? `@${testimonial.company}` : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial Cards - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.slice(3, 6).map((testimonial, index) => (
            <div 
              key={`row2-${index}`} 
              className={`
                rounded-lg p-6 flex flex-col shadow-lg bg-white
              `}
            >
              {/* Quote */}
              <div className="mb-6">
                <p 
                  className="text-gray-900 text-lg"
                  style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                >
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="mt-auto">
                {/* Star Rating */}
                <div className="mb-4">
                  {renderStars()}
                </div>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <UserAvatar 
                    author={testimonial.author} 
                    index={index + 3} // Different colors for second row
                    isDark={isDark}
                    avatarUrl={testimonial.avatarUrl}
                  />
                  <div className="ml-4">
                    <h3 
                      className="font-bold text-base text-gray-900"
                      style={{ fontFamily: GLOBALCSS_VAR.headingFont }}
                    >
                      {testimonial.author}
                    </h3>
                    <p 
                      className="text-gray-500 text-sm"
                      style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                    >
                      {testimonial.role} {testimonial.company ? `@${testimonial.company}` : ''}
                    </p>
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
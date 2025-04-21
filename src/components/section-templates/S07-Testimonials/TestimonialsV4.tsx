'use client';

import React from 'react';
import Image from 'next/image';
import { TestimonialsProps, defaultTestimonialsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';

// Custom placeholder avatar component
const UserAvatar = ({ author, index, isDark, avatarUrl }: { author: string; index: number; isDark: boolean; avatarUrl?: string }) => {
  // Only use the custom avatar if no avatarUrl is provided
  if (!avatarUrl || avatarUrl.includes('testimonial-avatar')) {
    const colors = ['#EF083A', '#3267FF', '#9061F9', '#2DA94F', '#FF8C42', '#E85A0C', '#00BFA6', '#6236FF', '#B620E0'];
    const avatarColor = colors[index % colors.length];
    const initials = author.split(' ').map(name => name[0]).join('').toUpperCase().substring(0, 2);
    
    return (
      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center text-white text-base font-bold"
        style={{ backgroundColor: avatarColor }}
      >
        {initials}
      </div>
    );
  }
  
  // Return image if avatarUrl is provided
  return (
    <div className="w-14 h-14 rounded-full overflow-hidden">
      <Image 
        src={avatarUrl} 
        alt={author}
        width={56}
        height={56}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

// Render the star rating
const renderStars = (rating: number = 5) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-4 h-4 mr-1 last:mr-0">
          {i < rating ? (
            <Image 
              src="/images/star-filled-v4.svg" 
              alt="Filled star" 
              width={16} 
              height={16}
              className="w-full h-full"
            />
          ) : (
            <Image 
              src="/images/star-empty-v4.svg" 
              alt="Empty star" 
              width={16} 
              height={16}
              className="w-full h-full"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export const TestimonialsV4: React.FC<TestimonialsProps> = ({
  title = defaultTestimonialsProps.title,
  subtitle = defaultTestimonialsProps.subtitle,
  badgeText = defaultTestimonialsProps.badgeText,
  testimonials = defaultTestimonialsProps.testimonials,
  theme = defaultTestimonialsProps.theme
}) => {
  const isDark = theme === 'dark';
  
  // Ensure we have enough testimonials by duplicating if needed
  const displayTestimonials = [...testimonials];
  while (displayTestimonials.length < 9) {
    displayTestimonials.push(...testimonials.slice(0, 9 - displayTestimonials.length));
  }
  
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <Badge theme={theme}>
            {badgeText || 'TESTIMONIALS'}
          </Badge>
        </div>
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <MyHeading theme={theme} className="mb-5 text-4xl font-semibold">
            {title || 'What our clients say about us'}
          </MyHeading>
          
          <MyParagraph theme={theme} className="text-lg">
            {subtitle || 'Discover the experiences of our satisfied customers! Read their testimonials to learn how our services have made a positive impact on their businesses.'}
          </MyParagraph>
        </div>
        
        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.slice(0, 9).map((testimonial, index) => (
            <div 
              key={index} 
              className={`
                rounded-lg p-6 flex flex-col shadow-md
                ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'}
              `}
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <UserAvatar 
                  author={testimonial.author} 
                  index={index}
                  isDark={isDark}
                  avatarUrl={testimonial.avatarUrl}
                />
                <div className="ml-4">
                  <h3 
                    className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: GLOBALCSS_VAR.headingFont }}
                  >
                    {testimonial.author}
                  </h3>
                  <p 
                    className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
                    style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                  >
                    {testimonial.role} {testimonial.company ? `@${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
              
              {/* Star Rating */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Quote */}
              <div className="flex-grow">
                <p 
                  className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}
                  style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                >
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
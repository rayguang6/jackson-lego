'use client';

import React from 'react';
import Image from 'next/image';
import { TestimonialsProps, defaultTestimonialsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';

// Custom placeholder avatar component
const UserAvatar = ({ author, index, isDark }: { author: string; index: number; isDark: boolean }) => {
  const colors = ['#EF083A', '#3267FF', '#9061F9', '#2DA94F', '#FF8C42'];
  const avatarColor = colors[index % colors.length];
  const initials = author.split(' ').map(name => name[0]).join('').toUpperCase().substring(0, 2);
  
  return (
    <div 
      className="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold"
      style={{ backgroundColor: avatarColor }}
    >
      {initials}
    </div>
  );
};

export const TestimonialsV2: React.FC<TestimonialsProps> = ({
  title = defaultTestimonialsProps.title,
  subtitle = defaultTestimonialsProps.subtitle,
  badgeText = defaultTestimonialsProps.badgeText,
  testimonials = defaultTestimonialsProps.testimonials,
  theme = defaultTestimonialsProps.theme
}) => {
  const isDark = theme === 'dark';
  
  const renderStars = (rating: number = 5) => {
    return Array(5).fill(0).map((_, i) => (
      <div key={i} className="h-6 w-6 flex items-center justify-center">
        {i < rating ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={GLOBALCSS_VAR.primaryColor} stroke={GLOBALCSS_VAR.primaryColor} strokeWidth="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GLOBALCSS_VAR.primaryColor} strokeWidth="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )}
      </div>
    ));
  };
  
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <Badge theme={theme}>
            {badgeText}
          </Badge>
        </div>
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <SectionHeading theme={theme} className="mb-6">
            {title}
          </SectionHeading>
          
          <MyParagraph theme={theme}>
            {subtitle}
          </MyParagraph>
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index} 
              className={`
                border rounded-lg p-8 flex flex-col shadow-sm
                ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
              `}
            >
              {/* Testimonial Content */}
              <div className="flex flex-col flex-grow">
                {/* Client Info */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    {/* Use custom avatar component instead of missing images */}
                    <UserAvatar 
                      author={testimonial.author} 
                      index={index}
                      isDark={isDark}
                    />
                  </div>
                  <h3 
                    className={`text-xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: GLOBALCSS_VAR.headingFont }}
                  >
                    {testimonial.author}
                  </h3>
                  <p 
                    className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                  >
                    {testimonial.role} {testimonial.company ? `@${testimonial.company}` : ''}
                  </p>
                </div>
                
                {/* Quote */}
                <div className="mb-8 flex-grow">
                  <p 
                    className={`text-center ${isDark ? 'text-gray-200' : 'text-gray-800'}`}
                    style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                  >
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
              
              {/* Star Rating */}
              <div className="flex justify-center mt-auto">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
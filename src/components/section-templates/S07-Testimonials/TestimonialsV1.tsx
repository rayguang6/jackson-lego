'use client';

import React from 'react';
import { TestimonialsProps, defaultTestimonialsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';

// Custom placeholder avatar component
const UserAvatar = ({ author, index, isDark }: { author: string; index: number; isDark: boolean }) => {
  const colors = ['#EF083A', '#3267FF', '#9061F9', '#2DA94F', '#FF8C42'];
  const avatarColor = colors[index % colors.length];
  const initials = author.split(' ').map(name => name[0]).join('').toUpperCase().substring(0, 2);
  
  return (
    <div 
      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
      style={{ backgroundColor: avatarColor }}
    >
      {initials}
    </div>
  );
};

export const TestimonialsV1: React.FC<TestimonialsProps> = ({
  title = defaultTestimonialsProps.title,
  subtitle = defaultTestimonialsProps.subtitle,
  badgeText = defaultTestimonialsProps.badgeText,
  testimonials = defaultTestimonialsProps.testimonials,
  theme = defaultTestimonialsProps.theme
}) => {
  const { primaryColor, headingFont, bodyFont } = useDesign().styleGuide;
  const isDark = theme === 'dark';
  
  const renderStars = (rating: number = 5) => {
    return Array(5).fill(0).map((_, i) => (
      <div key={i} className="w-4 h-4">
        <svg viewBox="0 0 20 20" fill={i < rating ? '#FDD264' : 'none'} stroke={i < rating ? 'none' : '#DFDEDE'}>
          <path d="M10 1L12.39 6.21H18.1L13.855 9.58L15.23 14.79L10 11.17L4.77 14.79L6.145 9.58L1.9 6.21H7.61L10 1Z" strokeWidth="1.5"/>
        </svg>
      </div>
    ));
  };
  
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-3">
          {badgeText && (
            <span 
              className="uppercase tracking-[0.06em] font-semibold text-sm"
              style={{ color: primaryColor, fontFamily: bodyFont }}
            >
              {badgeText}
            </span>
          )}
        </div>
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4" 
            style={{ 
              fontFamily: headingFont,
              color: isDark ? 'white' : '#343434'
            }}
          >
            {title}
          </h2>
          
          {subtitle && (
            <p 
              className="text-lg" 
              style={{ 
                fontFamily: bodyFont,
                color: isDark ? '#E5E7EB' : '#4B5162'
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Testimonial Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index} 
              className={`
                border rounded-xl p-8 flex flex-col
                ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
              `}
            >
              {/* Stars at the top */}
              <div className="flex mb-6">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Quote */}
              <div className="mb-6 flex-grow">
                <p 
                  className="text-lg"
                  style={{ 
                    fontFamily: bodyFont,
                    color: isDark ? '#E5E7EB' : '#101828',
                    lineHeight: 1.67
                  }}
                >
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* User info at the bottom */}
              <div className="flex items-center">
                <UserAvatar 
                  author={testimonial.author} 
                  index={index}
                  isDark={isDark}
                />
                <div className="ml-4">
                  <h4 
                    className="font-bold text-lg"
                    style={{ 
                      fontFamily: headingFont,
                      color: isDark ? 'white' : '#101828'
                    }}
                  >
                    {testimonial.author}
                  </h4>
                  <p 
                    className="text-base"
                    style={{ 
                      fontFamily: bodyFont,
                      color: isDark ? '#9CA3AF' : '#475467'
                    }}
                  >
                    {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
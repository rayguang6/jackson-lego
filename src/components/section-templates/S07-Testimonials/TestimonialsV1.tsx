'use client';

import React from 'react';
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
  theme = defaultTestimonialsProps.theme,
  sectionId
}) => {
  const isDark = theme === 'dark';
  const badgeColor = 'text-[#EF083A]';
  const headingColor = isDark ? 'text-white' : 'text-[#343434]';
  const subtitleColor = isDark ? 'text-gray-300' : 'text-[#4B5162]';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const cardBorder = isDark ? 'border-gray-700' : 'border-[#E5E5E7]';
  const quoteColor = isDark ? 'text-white' : 'text-[#101828]';
  const authorColor = isDark ? 'text-white' : 'text-[#101828]';
  const roleColor = isDark ? 'text-gray-400' : 'text-[#475467]';
  
  // Make sure we have at least 3 testimonials
  const displayTestimonials = testimonials.slice(0, 3);
  while (displayTestimonials.length < 3) {
    displayTestimonials.push(testimonials[0]);
  }
  
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
      <div id={sectionId} className="container mx-auto px-4 max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-10 md:mb-16">
          {/* Badge */}
          <div className="mb-3">
            <span className={`uppercase tracking-[0.06em] font-semibold text-sm ${badgeColor}`} style={{ fontFamily: 'Archivo, sans-serif' }}>
              {badgeText}
            </span>
          </div>
          
          {/* Title */}
          <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${headingColor}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
            {title}
          </h2>
          
          {/* Subtitle */}
          <p className={`text-base md:text-lg max-w-3xl mx-auto ${subtitleColor}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
            {subtitle}
          </p>
        </div>
        
        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`flex flex-col border ${cardBorder} ${cardBg} rounded-xl p-8`}
            >
              {/* Stars Rating */}
              <div className="flex mb-5">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Quote */}
              <div className="mb-6 flex-grow">
                <p 
                  className={`text-lg ${quoteColor}`}
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    lineHeight: '1.67',
                    letterSpacing: '-0.04em'
                  }}
                >
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Author Info */}
              <div className="mt-auto">
                <h4 
                  className={`font-bold text-lg ${authorColor}`}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {testimonial.author}
                </h4>
                <p 
                  className={`text-base ${roleColor}`}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
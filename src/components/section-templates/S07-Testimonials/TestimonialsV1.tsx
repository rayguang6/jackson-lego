'use client';

import React, { useEffect } from 'react';
import { TestimonialsProps, defaultTestimonialsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { useDesignStore } from '@/lib/store/designStore';
import { EditableText } from '@/components/editable/EditableText';
// Custom placeholder avatar component
const UserAvatar = ({ author, index, isDark }: { author: string; index: number; isDark: boolean }) => {
  const colors = ['#EF083A', '#3267FF', '#9061F9', '#2DA94F', '#FF8C42'];
  // const avatarColor = colors[index % colors.length];
  // const initials = author.split(' ').map(name => name[0]).join('').toUpperCase().substring(0, 2);
  
  return (
    <div 
      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
      style={{ backgroundColor: GLOBALCSS_VAR.primaryColor }}
    >
      {/* {initials} */}
    </div>
  );
};

export const TestimonialsV1: React.FC<TestimonialsProps> = ({
  title = defaultTestimonialsProps.title,
  subtitle = defaultTestimonialsProps.subtitle,
  badgeText = defaultTestimonialsProps.badgeText,
  testimonials = defaultTestimonialsProps.testimonials,
  theme = defaultTestimonialsProps.theme,
  sectionId = defaultTestimonialsProps.sectionId || '',
  ctaText = defaultTestimonialsProps.ctaText,
}) => {
  const isDark = theme === 'dark';

  // Initialize the testimonials array in the store to ensure it exists
  useEffect(() => {
    // Get the current section content
    const sectionContent = useDesignStore.getState().design.sections.find(s => s.id === sectionId)?.content || {};
    
    // Check if testimonials array doesn't exist yet in the store   
    if (!sectionContent.testimonials) {
      // Initialize with a copy of the default testimonials
      useDesignStore.getState().updateSectionField(sectionId, 'testimonials', JSON.parse(JSON.stringify(testimonials)));
    }
  }, [sectionId, testimonials]);  
  
  
  // Make sure we have at least 3 testimonials
  const displayTestimonials = testimonials.slice(0, 3);
  while (displayTestimonials.length < 3) {
    displayTestimonials.push(testimonials[0]);
  }
  
  const renderStars = (rating: number = 5) => {
    return Array(5).fill(0).map((_, i) => (
      <div key={i} className="w-6 h-6">
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
            <Badge theme={theme}>
              <EditableText
                sectionId={sectionId}
                defaultValue={badgeText || ''}
                contentPath="badgeText"
              />        
            </Badge>
          </div>
          
          {/* Title */}
          <MyHeading theme={theme}>
            <EditableText
              sectionId={sectionId}
              defaultValue={title}
              contentPath="title"
            />
          </MyHeading>
          
          {/* Subtitle */}
          <MyParagraph theme={theme}>
            <EditableText
              sectionId={sectionId}
              defaultValue={subtitle}
              contentPath="subtitle"
            />
          </MyParagraph>
        </div>
        
        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`flex flex-col border bg-white rounded-xl p-8`}
              style={{
                border: isDark ? '1px solid #252F3F' : '1px solid #E5E5E7'
              }}
            >
              {/* Stars Rating */}
              <div className="flex mb-5">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Quote */}
              <div className="mb-6 flex-grow">
                <p 
                  className={`text-lg`}
                  style={{ 
                    fontFamily: 'Manrope, sans-serif',
                    lineHeight: '1.67',
                    letterSpacing: '-0.04em'
                  }}
                >
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={testimonial.quote}
                    contentPath={`testimonials.${index}.quote`}
                  />  
                </p>
              </div>
              
              {/* Author Info */}
              <div className="mt-auto">
                <MyHeading as='h4' >
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={testimonial.author}
                    contentPath={`testimonials.${index}.author`}
                  />
                </MyHeading>
                <MyParagraph className='mt-2'>
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={testimonial.role}
                    contentPath={`testimonials.${index}.role`}
                  />
                </MyParagraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
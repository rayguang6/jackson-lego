'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { TestimonialsProps, defaultTestimonialsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { useDesignStore } from '@/lib/store/designStore';
import { EditableText } from '@/components/editable/EditableText';
// Custom placeholder avatar component
const UserAvatar = ({ author, index, isDark, avatarUrl }: { author: string; index: number; isDark: boolean; avatarUrl?: string }) => {
  // Only use the custom avatar if no avatarUrl is provided
  if (!avatarUrl || avatarUrl.includes('testimonial-avatar')) {
    const colors = ['#EF083A', '#3267FF', '#9061F9', '#2DA94F', '#FF8C42'];
    const avatarColor = colors[index % colors.length];
    const initials = author.split(' ').map(name => name[0]).join('').toUpperCase().substring(0, 2);
    
    return (
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
        style={{ backgroundColor: avatarColor }}
      >
        {initials}
      </div>
    );
  }
  
  // Return image if avatarUrl is provided
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden">
      <Image 
        src={avatarUrl} 
        alt={author}
        width={64}
        height={64}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export const TestimonialsV2: React.FC<TestimonialsProps> = ({
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
  
  const renderStars = (rating: number = 5) => {
    return Array(5).fill(0).map((_, i) => (
      <div key={i} className="w-5 h-5">
        {i < rating ? (
          <Image 
            src="/images/star-filled.svg" 
            alt="Filled star" 
            width={20} 
            height={20}
            className="w-full h-full"
          />
        ) : (
          <Image 
            src="/images/star-empty.svg" 
            alt="Empty star" 
            width={20} 
            height={20}
            className="w-full h-full"
          />
        )}
      </div>
    ));
  };
  
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <Badge theme={theme}>
            <EditableText
              sectionId={sectionId}
              defaultValue={badgeText}
              contentPath="badgeText"
            />
          </Badge>
        </div>
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <MyHeading theme={theme} className="mb-5 text-4xl font-semibold">
            <EditableText
              sectionId={sectionId}
              defaultValue={title}
              contentPath="title"
            />
          </MyHeading>
          
          <MyParagraph theme={theme} className="text-lg">
            <EditableText
              sectionId={sectionId}
              defaultValue={subtitle}
              contentPath="subtitle"
            />
          </MyParagraph>
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index} 
              className={`
                border rounded-lg p-8 flex flex-col h-full shadow-md
                ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
              `}
            >
              {/* Testimonial Content */}
              <div className="flex flex-col items-center flex-grow">
                {/* Client Info */}
                <div className="flex flex-col items-center mb-4">
                  <UserAvatar 
                    author={testimonial.author} 
                    index={index}
                    isDark={isDark}
                    avatarUrl={testimonial.avatarUrl}
                  />
                  <div className="mt-4 text-center">
                    <h3 
                      className={`text-xl font-semibold mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}
                      style={{ fontFamily: GLOBALCSS_VAR.headingFont }}
                    >
                      <EditableText
                        sectionId={sectionId}
                        defaultValue={testimonial.author}
                        contentPath={`testimonials.${index}.author`}
                      />
                    </h3>
                    <p 
                      className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                      style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                    >
                      <EditableText
                        sectionId={sectionId}
                        defaultValue={testimonial.role}
                        contentPath={`testimonials.${index}.role`}
                      /> {testimonial.company ? `@${testimonial.company}` : ''}
                    </p>
                  </div>
                </div>
                
                {/* Quote */}
                <div className="mt-6 mb-8 flex-grow">
                  <p 
                    className={`text-center ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
                    style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                  >
                    <EditableText
                      sectionId={sectionId}
                      defaultValue={testimonial.quote}
                      contentPath={`testimonials.${index}.quote`}
                    />
                  </p>
                </div>
              </div>
              
              {/* Star Rating */}
              <div className="flex justify-center mt-auto pt-4">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
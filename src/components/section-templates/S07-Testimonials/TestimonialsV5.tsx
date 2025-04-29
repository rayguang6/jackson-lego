'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialsProps, defaultTestimonialsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { PlayButton } from '@/components/template-ui/PlayButton';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { useDesignStore } from '@/lib/store/designStore';
import { EditableText } from '@/components/editable/EditableText';
// Video thumbnail with play button overlay
const VideoThumbnail = ({ src }: { src: string }) => {
  return (
    <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden cursor-pointer group">
      {/* Video Thumbnail */}
      <div className="absolute inset-0 bg-gray-200">
        <Image 
          src={src} 
          alt="Testimonial video thumbnail"
          width={500}
          height={300}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
          <div className="ml-1">
            <PlayButton size="md" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Render the star rating
const renderStars = (rating: number = 5) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Image 
          key={i}
          src="/images/star-filled-v5.svg" 
          alt="Star" 
          width={16} 
          height={16}
          className={`w-4 h-4 mr-1 ${i >= rating ? 'opacity-30' : ''}`}
        />
      ))}
    </div>
  );
};

export const TestimonialsV5: React.FC<TestimonialsProps> = ({
  title = defaultTestimonialsProps.title,
  subtitle = defaultTestimonialsProps.subtitle,
  badgeText = defaultTestimonialsProps.badgeText,
  testimonials = defaultTestimonialsProps.testimonials,
  theme = defaultTestimonialsProps.theme,
  ctaText = defaultTestimonialsProps.ctaText,
  sectionId = defaultTestimonialsProps.sectionId || '',
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
    
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <Badge theme={theme}>
            <EditableText
              sectionId={sectionId}
              defaultValue={badgeText}
              contentPath="badgeText"
            />
          </Badge>
        </div>
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <MyHeading as='h2' theme={theme} className="mb-5 text-4xl font-semibold">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={`${index}`} className="flex flex-col h-full">
              {/* Video Thumbnail */}
              <VideoThumbnail src={testimonial.thumbnailUrl} />
              
              {/* Testimonial Content */}
              <div className="mt-6 flex flex-col flex-grow">
                {/* Rating */}
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Quote */}
                <MyParagraph theme={theme} className={`${isDark ? 'text-gray-200' : 'text-gray-800'} text-lg mb-4 flex-grow`} style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}>
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={testimonial.quote}
                    contentPath={`testimonials.${index}.quote`}
                  />
                </MyParagraph>
                
                {/* Author */}
                <div className="mt-auto">
                  <MyHeading as='h5' theme={theme} className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: GLOBALCSS_VAR.headingFont }}>  
                    <EditableText
                      sectionId={sectionId}
                      defaultValue={testimonial.author}
                      contentPath={`testimonials.${index}.author`}
                    />
                  </MyHeading>
                  <MyParagraph theme={theme} className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-500'}`} style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}>
                    <EditableText
                      sectionId={sectionId}
                      defaultValue={testimonial.role}
                      contentPath={`testimonials.${index}.role`}
                    /> {testimonial.company ? `@${testimonial.company}` : ''}
                  </MyParagraph>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <PrimaryButton theme={theme} className="mt-8">
            <EditableText
              sectionId={sectionId}
              defaultValue={ctaText}
              contentPath="ctaText"
            />
          </PrimaryButton>  
        </div>
      </div>
    </MySection>
  );
}; 
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialsProps, defaultTestimonialsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';

// Video thumbnail with play button overlay
const VideoThumbnail = ({ index }: { index: number }) => {
  // Default video thumbnails if no video URL is provided
  const thumbnails = [
    '/images/video-thumbnail-1.jpg',
    '/images/video-thumbnail-2.jpg',
    '/images/video-thumbnail-3.jpg',
    '/images/video-thumbnail-4.jpg',
  ];
  
  return (
    <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden cursor-pointer group">
      {/* Video Thumbnail */}
      <div className="absolute inset-0 bg-gray-200">
        <Image 
          src={thumbnails[index % thumbnails.length]} 
          alt="Testimonial video thumbnail"
          width={500}
          height={300}
          className="w-full h-full object-cover"
          priority={index < 2}
        />
      </div>
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
          <div className="ml-1">
            <Image 
              src="/images/play-button-triangle.svg" 
              alt="Play button"
              width={12}
              height={14}
              className="w-3 h-4"
            />
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
  theme = defaultTestimonialsProps.theme
}) => {
  const isDark = theme === 'dark';
  
  // Ensure we have enough testimonials
  const displayTestimonials = [...testimonials];
  while (displayTestimonials.length < 4) {
    displayTestimonials.push(...testimonials.slice(0, 4 - displayTestimonials.length));
  }
  
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <Badge theme={theme}>
            {badgeText || 'TESTIMONIALS'}
          </Badge>
        </div>
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <SectionHeading theme={theme} className="mb-5 text-4xl font-semibold">
            {title || 'What our clients say about us'}
          </SectionHeading>
          
          <MyParagraph theme={theme} className="text-lg">
            {subtitle || 'See how our solutions are making a difference for businesses like yours.'}
          </MyParagraph>
        </div>
        
        {/* Video Testimonials Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {displayTestimonials.slice(0, 2).map((testimonial, index) => (
            <div key={`row1-${index}`} className="flex flex-col h-full">
              {/* Video Thumbnail */}
              <VideoThumbnail index={index} />
              
              {/* Testimonial Content */}
              <div className="mt-6 flex flex-col flex-grow">
                {/* Rating */}
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Quote */}
                <p 
                  className={`${isDark ? 'text-gray-200' : 'text-gray-800'} text-lg mb-4 flex-grow`}
                  style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                >
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="mt-auto">
                  <h3 
                    className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: GLOBALCSS_VAR.headingFont }}
                  >
                    {testimonial.author}
                  </h3>
                  <p 
                    className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
                    style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                  >
                    {testimonial.role} {testimonial.company ? `@${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Video Testimonials Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {displayTestimonials.slice(2, 4).map((testimonial, index) => (
            <div key={`row2-${index}`} className="flex flex-col h-full">
              {/* Video Thumbnail */}
              <VideoThumbnail index={index + 2} />
              
              {/* Testimonial Content */}
              <div className="mt-6 flex flex-col flex-grow">
                {/* Rating */}
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Quote */}
                <p 
                  className={`${isDark ? 'text-gray-200' : 'text-gray-800'} text-lg mb-4 flex-grow`}
                  style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                >
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="mt-auto">
                  <h3 
                    className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: GLOBALCSS_VAR.headingFont }}
                  >
                    {testimonial.author}
                  </h3>
                  <p 
                    className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
                    style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                  >
                    {testimonial.role} {testimonial.company ? `@${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Link 
            href="#"
            className="inline-flex items-center bg-primary text-white font-bold py-4 px-8 rounded-lg border-2 border-primary/20 hover:bg-primary/90 transition-colors"
          >
            <span className="font-bold tracking-wide text-lg mr-2" style={{ fontFamily: 'Archivo, sans-serif' }}>GET INSTANT ACCESS</span>
            <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="#EF083A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </MySection>
  );
}; 
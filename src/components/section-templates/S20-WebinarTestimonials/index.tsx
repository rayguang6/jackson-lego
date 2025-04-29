'use client';

import React from 'react';
import { WebinarTestimonialsProps, defaultWebinarTestimonialsProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { EditableText } from '@/components/editable/EditableText';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import Image from 'next/image';

export const S20WebinarTestimonials: React.FC<WebinarTestimonialsProps> = ({
  title = defaultWebinarTestimonialsProps.title,
  subtitle = defaultWebinarTestimonialsProps.subtitle,
  testimonials = defaultWebinarTestimonialsProps.testimonials,
  theme = defaultWebinarTestimonialsProps.theme,
  sectionId
}: WebinarTestimonialsProps) => {
  return (
    <MySection theme={theme}>
      <div className="container mx-auto px-4 py-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <MyHeading theme={theme} as="h2" className="mb-4">
            <EditableText
              sectionId={sectionId}
              contentPath="title"
              defaultValue={title}
            />
          </MyHeading>
          <MyHeading theme={theme} as="h2" className="text-primary-500">
            <EditableText
              sectionId={sectionId}
              contentPath="subtitle"
              defaultValue={subtitle}
            />
          </MyHeading>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-lg bg-opacity-5 bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="w-20 h-20 mb-6 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimonial Text */}
              <MyParagraph theme={theme} className="mb-6 italic opacity-90">
                <EditableText
                  sectionId={sectionId}
                  contentPath={`testimonials.${index}.testimonial`}
                  defaultValue={testimonial.testimonial}
                />
              </MyParagraph>

              {/* Profile Info */}
              <div className="mt-auto">
                <MyHeading theme={theme} as="h4" className="text-lg mb-1">
                  <EditableText
                    sectionId={sectionId}
                    contentPath={`testimonials.${index}.name`}
                    defaultValue={testimonial.name}
                  />
                </MyHeading>
                <MyParagraph theme={theme} className="text-sm opacity-80">
                  <EditableText
                    sectionId={sectionId}
                    contentPath={`testimonials.${index}.role`}
                    defaultValue={testimonial.role}
                  />
                  {' @ '}
                  <EditableText
                    sectionId={sectionId}
                    contentPath={`testimonials.${index}.company`}
                    defaultValue={testimonial.company}
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
'use client';

import React from 'react';
import { WebinarScheduleProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { EditableText } from '@/components/editable/EditableText';
import Image from 'next/image';

export const S22WebinarSchedule: React.FC<WebinarScheduleProps> = ({
  title,
  description,
  webinars,
  theme,
  sectionId
}) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <MySection theme={theme}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <MyHeading theme={theme} as="h2" className="mb-4">
            <EditableText
              sectionId={sectionId}
              contentPath="title"
              defaultValue={title}
            />
          </MyHeading>
          <MyParagraph theme={theme} className="max-w-2xl mx-auto">
            <EditableText
              sectionId={sectionId}
              contentPath="description"
              defaultValue={description}
            />
          </MyParagraph>
        </div>

        <div className="space-y-8">
          {webinars?.map((webinar) => (
            <div 
              key={webinar.id}
              className="bg-white bg-opacity-5 rounded-lg p-8 hover:bg-opacity-10 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-3">
                  <MyHeading theme={theme} as="h3" className="text-2xl mb-4">
                    {webinar.title}
                  </MyHeading>
                  
                  <div className="flex flex-wrap gap-6 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-primary-500">📅</span>
                      <span>{formatDate(webinar.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary-500">⏰</span>
                      <span>{webinar.time}</span>
                    </div>
                  </div>

                  <MyParagraph theme={theme} className="mb-6">
                    {webinar.description}
                  </MyParagraph>

                  <a
                    href={webinar.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3 rounded-lg font-bold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: 'var(--primary-color)' }}
                  >
                    Register Now
                    <svg className="ml-2 group-hover:translate-x-1 transition-transform duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16663 10H15.8333M15.8333 10L10 4.16669M15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={webinar.speakerImage}
                      alt={webinar.speakerName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <MyHeading theme={theme} as="h4" className="text-lg mb-1">
                    {webinar.speakerName}
                  </MyHeading>
                  <MyParagraph theme={theme} className="text-sm opacity-75">
                    {webinar.speakerTitle}
                  </MyParagraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
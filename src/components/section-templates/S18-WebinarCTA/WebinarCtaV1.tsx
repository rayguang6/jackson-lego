'use client';

import React from 'react';
import { WebinarCTAProps, defaultWebinarCTAProps } from './types';
import { MySection } from '@/components/template-ui/MySection'; 
import { EditableText } from '@/components/editable/EditableText';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import Image from 'next/image';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { Badge } from '@/components/template-ui/Badge';

export const WebinarCTAV1: React.FC<WebinarCTAProps> = ({
  title = defaultWebinarCTAProps.title,
  subtitle = defaultWebinarCTAProps.subtitle,
  date = defaultWebinarCTAProps.date,
  time = defaultWebinarCTAProps.time,
  location = defaultWebinarCTAProps.location,
  ctaText = defaultWebinarCTAProps.ctaText,
  theme = defaultWebinarCTAProps.theme,
  warningText = defaultWebinarCTAProps.warningText,
  sectionId = defaultWebinarCTAProps.sectionId || '',
  imageUrl = defaultWebinarCTAProps.imageUrl,
}: WebinarCTAProps) => {

  return (
    <MySection 
      theme={theme}
      className="px-8">

      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Content */}
          <div className="flex flex-col">
            <MyHeading as="h2" theme={theme} className="mt-5">
              <EditableText
                sectionId={sectionId}
                contentPath="title"
                defaultValue={title}
              />
            </MyHeading>
            <MyParagraph theme={theme} className="mt-5">
              <EditableText
                sectionId={sectionId}
                contentPath="subtitle"
                defaultValue={subtitle}
              />
            </MyParagraph>

            <div className="flex flex-col gap-2 mt-5">
              <MyParagraph theme={theme} className="m-0">
                <EditableText
                  sectionId={sectionId}
                  contentPath="date"
                  defaultValue={date}
                />
              </MyParagraph>
              <MyParagraph theme={theme} className="m-0">
                <EditableText
                  sectionId={sectionId}
                  contentPath="time"
                  defaultValue={time}
                />
              </MyParagraph>
              <MyParagraph theme={theme} className="m-0">
                <EditableText
                  sectionId={sectionId}
                  contentPath="warningText"
                  defaultValue={warningText}
                />
              </MyParagraph>
            </div>

            <div className="mt-8">
              <PrimaryButton theme={theme}>
                <EditableText
                  sectionId={sectionId} 
                  defaultValue={ctaText}
                  contentPath={`ctaText`}
                  className="w-full"
                />
              </PrimaryButton>
            </div>
          </div>


          {/* Right Video Thumbnail */}
          <div className="relative w-full rounded-[20px] overflow-hidden flex items-center justify-center">
            <div className={`relative h-full rounded-[15px] overflow-hidden `}>
              <Image
                src={imageUrl}
                alt="Video thumbnail"
                width={500}
                height={500}
                style={{ objectFit: 'cover' }}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </MySection>
  );
}; 
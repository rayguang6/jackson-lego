'use client';

import React from 'react';
import { WebinarHeroProps, defaultWebinarHeroProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { EditableText } from '@/components/editable/EditableText';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import Image from 'next/image';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { Badge } from '@/components/template-ui/Badge';

export const WebinarHeroV1: React.FC<WebinarHeroProps> = ({
  topBannerText = defaultWebinarHeroProps.topBannerText,
  mainTitle = defaultWebinarHeroProps.mainTitle,
  subTitle = defaultWebinarHeroProps.subTitle,
  highlightedText = defaultWebinarHeroProps.highlightedText,
  description = defaultWebinarHeroProps.description,
  ctaText = defaultWebinarHeroProps.ctaText,
  timeRange = defaultWebinarHeroProps.timeRange,
  registrationLimit = defaultWebinarHeroProps.registrationLimit,
  theme = defaultWebinarHeroProps.theme,
  sectionId = defaultWebinarHeroProps.sectionId || '',
  imageUrl = defaultWebinarHeroProps.imageUrl,
}: WebinarHeroProps) => {

  return (
    <MySection theme={theme} className="!p-0 !mx-0 max-w-none">
      {/* Top Banner */}
      <div className="bg-gray-900 text-white text-center w-screen mx-auto">
        <MyParagraph theme={theme} className="text-center">
          <EditableText
            sectionId={sectionId}
            contentPath="topBannerText"
            defaultValue={topBannerText}
          />
        </MyParagraph>
      </div>
      <MySection theme={theme} className="">

      


      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <MyHeading theme={theme} as="h1" className="mb-6">
              <EditableText
                sectionId={sectionId}
                contentPath="mainTitle"
                defaultValue={mainTitle}
              />
              <br />
              <EditableText
                sectionId={sectionId}
                contentPath="subTitle"
                defaultValue={subTitle}
              />
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl opacity-80">
                <EditableText
                  sectionId={sectionId}
                  contentPath="highlightedText"
                  defaultValue={highlightedText}
                />
              </span>
            </MyHeading>

            <MyParagraph theme={theme} className="mb-8">
              <EditableText
                sectionId={sectionId}
                contentPath="description"
                defaultValue={description}
              />
            </MyParagraph>

            {/* CTA Button */}
            <PrimaryButton theme={theme} className="mb-4">
              <EditableText
                sectionId={sectionId}
                contentPath="ctaText"
                defaultValue={ctaText}
              />
            </PrimaryButton>

            {/* Time Range */}
            <MyParagraph theme={theme} className="text-lg opacity-80">
              <EditableText
                sectionId={sectionId}
                contentPath="timeRange"
                defaultValue={timeRange}
              />
            </MyParagraph>

            <MyParagraph theme={theme} className="mt-4 text-lg opacity-90">
              <EditableText
                sectionId={sectionId}
                contentPath="registrationLimit"
                defaultValue={registrationLimit}
              />
            </MyParagraph>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 relative">

              <Image
                src={imageUrl}
                alt="Webinar Speakers"
                className="object-cover"
                width={500}
                height={500}
              />
          </div>
        </div>
      </div>

      </MySection>
    </MySection>
  );
}; 
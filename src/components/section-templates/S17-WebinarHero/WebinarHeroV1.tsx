'use client';

import React from 'react';
import { WebinarHeroProps, defaultWebinarHeroProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { EditableText } from '@/components/editable/EditableText';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import Image from 'next/image';
import { MyHeading, Highlight } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { Badge } from '@/components/template-ui/Badge';
import { ThemeType } from '@/lib/types';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';

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

  const isDark = theme === ThemeType.dark;

  return (
    <>
      {/* Full Width Top Banner */}
      <section
        className="relative left-1/2 -translate-x-1/2 w-[100vw] p-0 m-0"
        style={{ backgroundColor: GLOBALCSS_VAR.primaryColor }}
      >
        <MyParagraph theme={theme} className="text-white text-center py-3">
          <EditableText
            sectionId={sectionId}
            contentPath="topBannerText"
            defaultValue={topBannerText}
          />
        </MyParagraph>
        
      </section>
      {/* Content Section */}
      <MySection theme={theme} className="!p-0 !mx-0">
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
              </MyHeading>
              <MyHeading theme={theme} as="h4" className="mb-6">
              <EditableText
                  sectionId={sectionId}
                  contentPath="subTitle"
                  defaultValue={subTitle}
                />
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
    </>
  );
}; 
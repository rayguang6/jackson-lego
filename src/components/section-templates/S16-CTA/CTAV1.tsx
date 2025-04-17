'use client';

import React from 'react';
import Link from 'next/link';
import { MySection } from '@/components/template-ui/MySection';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { CTAProps, defaultCTAProps } from './types';
import { EditableText } from '@/components/editable/EditableText';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { EditableImage } from '@/components/editable/EditableImage';

export const CTAV1: React.FC<CTAProps> = ({
  title = defaultCTAProps.title,
  subtitle = defaultCTAProps.subtitle,
  ctaText = defaultCTAProps.ctaText,
  theme = defaultCTAProps.theme,
  imageUrl = defaultCTAProps.imageUrl || '',
  sectionId
}: CTAProps) => {
  const isDark = theme === 'dark';

  return (
    <MySection 
      theme={theme}
      className="relative overflow-hidden"
    >
      {/* Content */}
      <div className="z-10 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 gap-8">
        {/* Text Content */}
        <div className="flex flex-col max-w-xl">
          <SectionHeading theme={theme} className="mb-6">
            <EditableText
              sectionId={sectionId}
              contentPath="title"
              defaultValue={title}
              className="inline"
            />
          </SectionHeading>

          <MyParagraph theme={theme} className="mb-8">
            <EditableText
              sectionId={sectionId}
              contentPath="subtitle"
              defaultValue={subtitle}
            />
          </MyParagraph>

          {/* CTA Button */}
          <PrimaryButton theme={theme} className="mt-8 w-fit">
            <EditableText
              sectionId={sectionId}
              contentPath="ctaText"
              defaultValue={ctaText}
            />  
          </PrimaryButton>
        </div>

        {/* Image - added border to make it visible even when empty */}
        <div className="w-full md:w-auto">
          <div className={`rounded-lg overflow-hidden ${isDark ? 'border border-gray-700' : 'border border-gray-200'}`}>
            <EditableImage
              sectionId={sectionId}
              contentPath="imageUrl"
              defaultSrc={imageUrl || ''}
              alt="CTA Image"
              width={400}
              height={400}
              objectFit="contain"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </MySection>
  );
};
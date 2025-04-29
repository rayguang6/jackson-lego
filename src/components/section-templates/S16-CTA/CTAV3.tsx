'use client';

import React from 'react';
import { MySection } from '@/components/template-ui/MySection';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { CTAProps, defaultCTAProps } from './types';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import Image from 'next/image';
import { EditableText } from '@/components/editable/EditableText';

export const CTAV3: React.FC<CTAProps> = ({
  title = defaultCTAProps.title,
  subtitle = defaultCTAProps.subtitle,
  ctaText = defaultCTAProps.ctaText,
  theme = defaultCTAProps.theme,
  imageUrl = defaultCTAProps.imageUrl || '',  
  sectionId = defaultCTAProps.sectionId || '',
}: CTAProps) => {
  const isDark = theme === 'dark';

  return (
    <MySection 
      theme={theme}
      className="relative overflow-hidden"
    >
      {/* Content */}
      <div style={{ backgroundColor: isDark ? '#ffffff08' : '#F9F9F9', borderRadius: '10px', border: isDark ? '1px solid #4B5162' : '' }} className={` z-10 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto sm:px-6 lg:px-12 py-16 md:py-24 gap-8`}>

        {/* Text Content */}
        <div className="flex flex-col max-w-xl">
          <MyHeading theme={theme} className="mt-5">
            {/* EditableText */}
            <EditableText
              sectionId={sectionId}
              contentPath="title"
              defaultValue={title}
            />
          </MyHeading>

          <MyParagraph theme={theme} className="mt-5">
            {/* EditableText */}
            <EditableText
              sectionId={sectionId}
              contentPath="subtitle"
              defaultValue={subtitle}
            />
          </MyParagraph>

          {/* CTA Button */}
          <PrimaryButton theme={theme} className="mt-5 w-fit">
            {/* EditableText */}
            <EditableText
              sectionId={sectionId}
              contentPath="ctaText"
              defaultValue={ctaText}
            />
          </PrimaryButton>
        </div>

        {/* Image - added border to make it visible even when empty */}
        <div className="w-full md:w-auto">
          <div className={`rounded-lg overflow-hidden`}>
            {/* <EditableImage
              sectionId={sectionId}
              contentPath="imageUrl"
              defaultSrc={imageUrl || ''}
              alt="CTA Image"
              width={400}
              height={400}
              objectFit="contain"
              className="w-full"
            /> */}
            <Image
                src={imageUrl}
                alt="CTA Image"
                width={400}
                height={400}
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
          </div>
        </div>
      </div>
    </MySection>
  );
};
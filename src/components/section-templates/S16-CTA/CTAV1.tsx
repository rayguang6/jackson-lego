'use client';

import React from 'react';
import { MySection } from '@/components/template-ui/MySection';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { CTAProps, defaultCTAProps } from './types';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import Image from 'next/image';

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
          <MyHeading theme={theme} className="mb-6">
            {title}
          </MyHeading>

          <MyParagraph theme={theme} className="mb-8">
            {subtitle}
          </MyParagraph>

          {/* CTA Button */}
          <PrimaryButton theme={theme} className="mt-8 w-fit">
            {ctaText}
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
'use client';

import React from 'react';
import { MySection } from '@/components/template-ui/MySection';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { CTAProps, defaultCTAProps } from './types';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import Image from 'next/image';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { EditableText } from '@/components/editable/EditableText';

export const CTAV1: React.FC<CTAProps> = ({
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
      backgroundColor={isDark ? '#000000' : GLOBALCSS_VAR.primaryColor10}
    >
      {/* Content */}
      <div className={` z-10 flex flex-col justify-between items-center max-w-6xl mx-auto sm:px-6 lg:px-12 py-16 md:py-24 gap-8`}>

        {/* Text Content */}
        <div className="flex flex-col">
          <MyHeading theme={theme} className="mt-5 text-center">
            {/* EditableText */}
            <EditableText
              sectionId={sectionId}
              contentPath="title"
              className="text-center"
              defaultValue={title}
            />
          </MyHeading>

          <MyParagraph theme={theme} className="mt-5 text-center">
            {/* EditableText */}
            <EditableText
              sectionId={sectionId}
              contentPath="subtitle"
              defaultValue={subtitle}
            />
          </MyParagraph>

          {/* CTA Button */}
          <PrimaryButton theme={theme} className="mt-5 w-fit mx-auto">
            {/* EditableText */}
            <EditableText
              sectionId={sectionId}
              contentPath="ctaText"
              defaultValue={ctaText}
            />
          </PrimaryButton>
        </div>
      </div>
    </MySection>
  );
};
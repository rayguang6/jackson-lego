'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { CTAProps, defaultCTAProps } from './types';
import { EditableText } from '@/components/editable/EditableText';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';

export const CTAV1: React.FC<CTAProps> = ({
  title = defaultCTAProps.title,
  subtitle = defaultCTAProps.subtitle,
  ctaText = defaultCTAProps.ctaText,
  theme = defaultCTAProps.theme,
  imageUrl = defaultCTAProps.imageUrl,
  sectionId
}: CTAProps) => {

  const isDark = theme === 'dark';
  


  return (
    <MySection 
      theme={theme}
      className={`relative overflow-hidden`}
    >
    

      {/* Content */}
      <div className="z-10 flex flex-row justify-between items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Text Content */}
        <div className={`flex flex-col max-w-xl`}>
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

        {/* Image */}
        <div className="">
          <Image
            src={imageUrl || ""}
            alt="Image"
            style={{ objectFit: 'cover' }}
            className=""
            width={400}
            height={400}
          />
        </div>
      </div>
    </MySection>
  );
};
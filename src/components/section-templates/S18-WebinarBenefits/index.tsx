'use client';

import React from 'react';
import { WebinarBenefitsProps, defaultWebinarBenefitsProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { EditableText } from '@/components/editable/EditableText';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import Image from 'next/image';

export const S18WebinarBenefits: React.FC<WebinarBenefitsProps> = ({
  title = defaultWebinarBenefitsProps.title,
  benefits = defaultWebinarBenefitsProps.benefits,
  theme = defaultWebinarBenefitsProps.theme,
  sectionId
}: WebinarBenefitsProps) => {
  return (
    <MySection theme={theme}>
      <div className="container mx-auto px-4 py-16">
        {/* Section Title */}
        <MyHeading theme={theme} as="h2" className="text-center mb-12">
          <EditableText
            sectionId={sectionId}
            contentPath="title"
            defaultValue={title}
          />
        </MyHeading>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-opacity-5 bg-white"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>

              {/* Title */}
              <MyHeading theme={theme} as="h3" className="mb-4">
                <EditableText
                  sectionId={sectionId}
                  contentPath={`benefits.${index}.title`}
                  defaultValue={benefit.title}
                />
              </MyHeading>

              {/* Description */}
              <MyParagraph theme={theme} className="opacity-80">
                <EditableText
                  sectionId={sectionId}
                  contentPath={`benefits.${index}.description`}
                  defaultValue={benefit.description}
                />
              </MyParagraph>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
'use client';

import React from 'react';
import { WebinarFeaturesProps, defaultWebinarFeaturesProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { EditableText } from '@/components/editable/EditableText';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import Image from 'next/image';

export const S19WebinarFeatures: React.FC<WebinarFeaturesProps> = ({
  title = defaultWebinarFeaturesProps.title,
  subtitle = defaultWebinarFeaturesProps.subtitle,
  features = defaultWebinarFeaturesProps.features,
  theme = defaultWebinarFeaturesProps.theme,
  sectionId
}: WebinarFeaturesProps) => {
  return (
    <MySection theme={theme}>
      <div className="container mx-auto px-4 py-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <MyHeading theme={theme} as="h2" className="mb-4">
            <EditableText
              sectionId={sectionId}
              contentPath="title"
              defaultValue={title}
            />
          </MyHeading>
          <MyHeading theme={theme} as="h2" className="text-primary-500">
            <EditableText
              sectionId={sectionId}
              contentPath="subtitle"
              defaultValue={subtitle}
            />
          </MyHeading>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-opacity-5 bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>

              {/* Title */}
              <MyHeading theme={theme} as="h3" className="mb-4">
                <EditableText
                  sectionId={sectionId}
                  contentPath={`features.${index}.title`}
                  defaultValue={feature.title}
                />
              </MyHeading>

              {/* Description */}
              <MyParagraph theme={theme} className="opacity-80">
                <EditableText
                  sectionId={sectionId}
                  contentPath={`features.${index}.description`}
                  defaultValue={feature.description}
                />
              </MyParagraph>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
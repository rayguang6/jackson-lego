'use client';

import React from 'react';
import { WebinarPricingProps, defaultWebinarPricingProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { EditableText } from '@/components/editable/EditableText';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';

export const S21WebinarPricing: React.FC<WebinarPricingProps> = ({
  originalPrice = defaultWebinarPricingProps.originalPrice,
  currentPrice = defaultWebinarPricingProps.currentPrice,
  description = defaultWebinarPricingProps.description,
  ctaText = defaultWebinarPricingProps.ctaText,
  theme = defaultWebinarPricingProps.theme,
  sectionId
}: WebinarPricingProps) => {
  return (
    <MySection theme={theme}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Price Display */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <MyHeading theme={theme} as="h2" className="text-3xl md:text-4xl">
                原价
                <EditableText
                  sectionId={sectionId}
                  contentPath="originalPrice"
                  defaultValue={originalPrice}
                />
              </MyHeading>
              <MyHeading theme={theme} as="h2" className="text-4xl md:text-5xl text-primary-500">
                现在
                <EditableText
                  sectionId={sectionId}
                  contentPath="currentPrice"
                  defaultValue={currentPrice}
                />
              </MyHeading>
            </div>
          </div>

          {/* Description */}
          <MyParagraph theme={theme} className="text-xl mb-8">
            <EditableText
              sectionId={sectionId}
              contentPath="description"
              defaultValue={description}
            />
          </MyParagraph>

          {/* CTA Button */}
          <PrimaryButton theme={theme} className="w-full md:w-auto px-12 text-lg py-4">
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
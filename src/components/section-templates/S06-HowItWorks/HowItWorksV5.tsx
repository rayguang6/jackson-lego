'use client';

import React, { useEffect } from 'react';
import { HowItWorksProps, defaultHowItWorksProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import Image from 'next/image';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { useDesignStore } from '@/lib/store/designStore';
import { EditableText } from '@/components/editable/EditableText';
export const HowItWorksV5: React.FC<HowItWorksProps> = ({
  title = defaultHowItWorksProps.title,
  subtitle = defaultHowItWorksProps.subtitle,
  badgeText = defaultHowItWorksProps.badgeText,
  features = defaultHowItWorksProps.features,
  image = defaultHowItWorksProps.image,
  ctaText = defaultHowItWorksProps.ctaText,
  theme = defaultHowItWorksProps.theme,
  sectionId = defaultHowItWorksProps.sectionId || '',
}) => {
  const isDark = theme === 'dark';

  // Initialize the features array in the store to ensure it exists
  useEffect(() => {
    // Get the current section content
    const sectionContent = useDesignStore.getState().design.sections.find(s => s.id === sectionId)?.content || {};
    
    // Check if features array doesn't exist yet in the store
    if (!sectionContent.features) {
      // Initialize with a copy of the default features
      useDesignStore.getState().updateSectionField(sectionId, 'features', JSON.parse(JSON.stringify(features)));
    }
  }, [sectionId, features]);
  
  // Make sure we have exactly 3 features
  const displayFeatures = features?.slice(0, 3) || [];
  
  // Update descriptions to match design if needed
  const updatedFeatures = displayFeatures.map((feature, index) => {
    // Let's provide more detailed descriptions if not already provided
    if (index === 0 && feature.description.length < 50) {
      return {
        ...feature,
        description: "Pick from versatile, pre-designed templates tailored to your needs."
      };
    }
    if (index === 1 && feature.description.length < 50) {
      return {
        ...feature,
        description: "Use the intuitive drag-and-drop editor to personalize your design in minutes."
      };
    }
    if (index === 2 && feature.description.length < 50) {
      return {
        ...feature,
        description: "Quickly publish your site, knowing it's fast, optimized, and ready to perform."
      };
    }
    return feature;
  });
  
  return (
    <MySection theme={theme} className="py-24 lg:py-28">
      <div id={sectionId} className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          {/* Badge */}
          <div className="mb-8">
            <Badge theme={theme}>
              <EditableText
                sectionId={sectionId}
                defaultValue={badgeText}
                contentPath="badgeText"
              />
            </Badge>
          </div>
          
          {/* Title and Subtitle */}
          <div className="max-w-3xl mx-auto">
            <MyHeading theme={theme}>
              <EditableText
                sectionId={sectionId}
                defaultValue={title}
                contentPath="title"
              />
            </MyHeading>
            <MyParagraph theme={theme}>
              <EditableText
                sectionId={sectionId}
                defaultValue={subtitle}
                contentPath="subtitle"
              />
            </MyParagraph>
          </div>
        </div>
        
        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-20 mb-12 max-w-6xl mx-auto">
          {/* Steps Column */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-12 lg:space-y-16">
              {updatedFeatures.map((feature, index) => {
                const stepNumber = (index + 1).toString();
                const title = feature.title.replace(/^\d+\.\s*/, ''); // Remove any numbers at the start
                
                return (
                  <div key={index} className="flex items-start">
                    {/* Number Circle */}
                    <div className="mr-4 lg:mr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: GLOBALCSS_VAR.primaryColor }}>
                        <span className="text-white font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {stepNumber}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      {/* Title */}
                      <MyHeading as='h4' style={{color: GLOBALCSS_VAR.primaryColor}}>
                        <EditableText
                          sectionId={sectionId}
                          defaultValue={title}
                          contentPath={`features.${index}.title`}
                        />
                      </MyHeading>
                      
                      {/* Description */}
                      <MyParagraph theme={theme} className='mt-4'>
                        <EditableText
                          sectionId={sectionId}
                          defaultValue={feature.description}
                          contentPath={`features.${index}.description`}
                        />
                      </MyParagraph>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Image Column */}
          <div className="w-full rounded-md ">
            <div className="w-full h-full relative">
              <Image
                src={image}
                alt="Workflow background"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        {ctaText && (
          <div className="mt-6 flex justify-center">
            <PrimaryButton theme={theme} className="px-7 py-3 rounded-lg font-bold uppercase tracking-wider flex items-center shadow-md hover:shadow-lg transition-shadow">
              <EditableText
                sectionId={sectionId}
                defaultValue={ctaText}
                contentPath="ctaText"
              />
            </PrimaryButton>
          </div>
          )}
        </div>
    </MySection>
  );
}; 
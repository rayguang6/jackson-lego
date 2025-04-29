'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { SolutionsProps, defaultSolutionsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GridIcon } from '@/components/template-ui/icons/GridIcon';
import { Badge } from '@/components/template-ui/Badge';
import { ThemeType } from '@/lib/types';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { EditableText } from '@/components/editable/EditableText';
import { useDesignStore } from '@/lib/store/designStore';

export const SolutionsV1: React.FC<SolutionsProps> = ({
  title = defaultSolutionsProps.title,
  subtitle = defaultSolutionsProps.subtitle,
  badgeText = defaultSolutionsProps.badgeText,
  sectionTitle = defaultSolutionsProps.sectionTitle,
  theme = defaultSolutionsProps.theme,
  imageUrl = defaultSolutionsProps.imageUrl,
  features = defaultSolutionsProps.features,
  sectionId = defaultSolutionsProps.sectionId || '',
}: SolutionsProps) => {
  const isDark = theme === ThemeType.dark;
  
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
  
  return (
    <MySection theme={theme} className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Left side - Image placeholder */}
          <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden">
            {/* Image placeholder */}
            <Image src={imageUrl || ''} alt="Solutions" width={500} height={500} className="object-cover" />  
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
            {/* Badge */}
            <Badge theme={theme}>
              <EditableText
                sectionId={sectionId}
                defaultValue={badgeText}
                contentPath="badgeText"
              />
            </Badge>

            {/* Main heading */}
            <MyHeading theme={theme} as='h1' className="mb-4 mt-5">
              <EditableText
                sectionId={sectionId}
                defaultValue={title}
                contentPath="title"
              />
            </MyHeading>
            
            {/* Subtitle */}
            <MyParagraph theme={theme}>
              <EditableText
                sectionId={sectionId}
                defaultValue={subtitle}
                contentPath="subtitle"
              />
            </MyParagraph>
            
            {/* Features section */}
            {sectionTitle && (
              <MyHeading theme={theme} as='h2' className="text-sm font-bold uppercase tracking-wider mt-5">
                <EditableText
                  sectionId={sectionId}
                  defaultValue={sectionTitle}
                  contentPath="sectionTitle"
                />
              </MyHeading>
            )}
            
            {/* Features list - now using a loop */}
            <div className="space-y-8 mt-5">
              {(features || []).slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div 
                    className="flex-shrink-0 h-10 w-10 rounded flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${GLOBALCSS_VAR.primaryColor10}` }}
                  >
                    <GridIcon color={GLOBALCSS_VAR.primaryColor} className="h-5 w-5" />
                  </div>
                  <div>
                    <MyHeading theme={theme} as='h5' className="text-lg font-semibold mb-1">
                      <EditableText
                        sectionId={sectionId}
                        defaultValue={feature.title || ''}
                        contentPath={`features.${index}.title`}
                      />
                    </MyHeading>
                    <MyParagraph theme={theme} className="text-base">
                      <EditableText
                        sectionId={sectionId}
                        defaultValue={feature.description || ''}
                        contentPath={`features.${index}.description`}
                      />
                    </MyParagraph>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MySection>
  );
};
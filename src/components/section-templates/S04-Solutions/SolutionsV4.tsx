'use client';

import React, { useEffect } from 'react';
import { SolutionsProps, defaultSolutionsProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { GridIcon } from '@/components/template-ui/icons/GridIcon';
import { useDesignStore } from '@/lib/store/designStore';
import { EditableText } from '@/components/editable/EditableText';
export const SolutionsV4: React.FC<SolutionsProps> = ({
  title = defaultSolutionsProps.title,
  subtitle = defaultSolutionsProps.subtitle,
  badgeText = defaultSolutionsProps.badgeText,
  sectionTitle = defaultSolutionsProps.sectionTitle,
  theme = defaultSolutionsProps.theme,
  imageUrl = defaultSolutionsProps.imageUrl,
  features = defaultSolutionsProps.features,
  sectionId = defaultSolutionsProps.sectionId || '',
}: SolutionsProps) => {
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
  
  return (
    <MySection theme={theme} className="py-16 md:py-24" backgroundColor={ isDark ? "" : GLOBALCSS_VAR.primaryColor10}
    >
      <div id={sectionId} className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <Badge theme={theme}>
            <EditableText
              sectionId={sectionId}
              defaultValue={badgeText}
              contentPath={`badgeText`}
            />
          </Badge>
        </div>
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <MyHeading theme={theme} as='h2' className={`text-3xl md:text-4xl font-bold mb-6`}>
            <EditableText
              sectionId={sectionId}
              defaultValue= {title}
              contentPath={`title`}
            />
          </MyHeading>
          <MyParagraph theme={theme} className={`text-lg`}>
            <EditableText
              sectionId={sectionId}
              defaultValue={subtitle}
              contentPath={`subtitle`}
            />
          </MyParagraph>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={` rounded-lg p-6 flex flex-col items-center text-center bg-white`}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-4 rounded-md"
              style={{
                backgroundColor: theme === 'dark' ? `${GLOBALCSS_VAR.primaryColor}` : `${GLOBALCSS_VAR.primaryColor10}`,
              }}
              >
                <GridIcon color={theme === 'dark' ? "white" : GLOBALCSS_VAR.primaryColor} className="h-5 w-5" />
              </div>
              
              {/* Title */}
              <MyHeading as='h5' className={`text-xl font-semibold mb-2`}>
                <EditableText
                  sectionId={sectionId}
                  defaultValue={feature.title}
                  contentPath={`features.${index}.title`}
                />
              </MyHeading>
              
              {/* Description */}
              <MyParagraph className={`text-base`}>
                <EditableText
                  sectionId={sectionId}
                  defaultValue={feature.description}
                  contentPath={`features.${index}.description`}
                />
              </MyParagraph>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
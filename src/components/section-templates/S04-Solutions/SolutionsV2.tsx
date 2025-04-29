'use client';

import React, { useEffect } from 'react';
import { SolutionsProps, defaultSolutionsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { EditableText } from '@/components/editable/EditableText';
import { useDesignStore } from '@/lib/store/designStore';
export const SolutionsV2: React.FC<SolutionsProps> = ({
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
    <MySection theme={theme} className="py-24 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex justify-center mb-10">
          <Badge theme={theme}>
            <EditableText
              sectionId={sectionId}
              defaultValue={badgeText}
              contentPath={`badgeText`}
            />
          </Badge>
        </div>
        
        {/* Main content */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="flex flex-row gap-4">
            <MyHeading theme={theme} as='h2' className="mb-6">
              <EditableText
                sectionId={sectionId}
              defaultValue={title}
              contentPath={`title`}
            />
          </MyHeading>
            <MyHeading theme={theme} as='h2' className="mb-6">
              <EditableText
                sectionId={sectionId}
                defaultValue={sectionTitle || ''}
                contentPath={`sectionTitle`}
              />
          </MyHeading>

          </div>
          
          <MyParagraph theme={theme} >
            <EditableText
              sectionId={sectionId}
              defaultValue={subtitle}
              contentPath={`subtitle`}
            />
          </MyParagraph>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {(features || []).slice(0, 4).map((feature, index) => (
            <div className={` rounded-xl border border-gray-100/50 shadow-sm p-8 flex flex-col items-center text-center`}
            style={{
              backgroundColor: isDark ? "#FFFFFF08" : "",
              border: isDark ? '1px solid #4B5162':'',
            }}
            >
             
             <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="50" rx="10" fill={isDark ? "#FFFFFF10" : GLOBALCSS_VAR.primaryColor}/>
              <path d="M17.2222 16L22.4074 21.1852V18.0864H24.1358V24.1358H18.0864V22.4074H21.1852L16 17.2222L17.2222 16Z" fill={isDark ? GLOBALCSS_VAR.primaryColor : "white"} />
              <path d="M34 17.2222L28.8148 22.4074L31.9136 22.4074V24.1358L25.8642 24.1358V18.0864H27.5926V21.1852L32.7778 16L34 17.2222Z" fill={isDark ? GLOBALCSS_VAR.primaryColor : "white"} />
              <path d="M18.0864 25.8642H24.1358V31.9136H22.4074V28.8148L17.2222 34L16 32.7778L21.1852 27.5926H18.0864V25.8642Z" fill={isDark ? GLOBALCSS_VAR.primaryColor : "white"} />
              <path d="M25.8642 25.8642H31.9136V27.5926H28.8148L34 32.7778L32.7778 34L27.5926 28.8148V31.9136H25.8642V25.8642Z" fill={isDark ? GLOBALCSS_VAR.primaryColor : "white"} />
            </svg>

            <MyHeading theme={theme} as='h5' className="text-xl font-bold mb-3 mt-5" style={{color: isDark ? "white" : "black"}}>
                <EditableText
                  sectionId={sectionId}
                  defaultValue={feature.title}
                  contentPath={`features.${index}.title`}
                />
              </MyHeading>

              <MyParagraph theme={theme} className="text-base" style={{color: isDark ? "text-white" : "black"}}>
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
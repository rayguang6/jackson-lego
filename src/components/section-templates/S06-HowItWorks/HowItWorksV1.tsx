'use client';

import React, { useEffect } from 'react';

import { MySection } from '@/components/template-ui/MySection';
import { HowItWorksProps, defaultHowItWorksProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { EditableText } from '@/components/editable/EditableText';
import { useDesignStore } from '@/lib/store/designStore';

export const HowItWorksV1: React.FC<HowItWorksProps> = ({
  theme = defaultHowItWorksProps.theme,
  title = defaultHowItWorksProps.title,
  subtitle = defaultHowItWorksProps.subtitle,
  badgeText = defaultHowItWorksProps.badgeText,
  features = defaultHowItWorksProps.features,
  sectionId = defaultHowItWorksProps.sectionId || '',
}: HowItWorksProps) => {
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

  const StepCard = ({ number, title, description, index }: { 
    number: number; 
    title: string; 
    description: string;
    index: number;
  }) => {
    return (
      <div 
        className={`
          flex items-center gap-6 p-5 rounded-[10px] relative
          ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#E4E4E7]'}
          border shadow-md
          w-full max-w-[460px]
        `}
      >
        <div 
          className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: GLOBALCSS_VAR.primaryColor }}
        >
          <span className="text-white font-extrabold text-xl font-manrope">{number}</span>
        </div>
        
        <div className="flex-1">
          <p 
            className={`font-medium text-xl mb-1 ${isDark ? 'text-white' : 'text-[#18181B]'}`} 
            style={{ fontFamily: GLOBALCSS_VAR.headingFont, lineHeight: '1.4' }}
          >
            <EditableText
              sectionId={sectionId}
              defaultValue={title}
              contentPath={`features.${index}.title`}
            />
          </p>
          <p 
            className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
          >
            <EditableText
              sectionId={sectionId}
              defaultValue={description}
              contentPath={`features.${index}.description`}
            />
          </p>
        </div>
      </div>
    );
  };

  return (
    <MySection 
      theme={theme}
      className="py-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">  
          {/* Badge */}
          <Badge 
            theme={theme}
          >
            <EditableText
              sectionId={sectionId}
              defaultValue={badgeText}
              contentPath="badgeText"
            />
          </Badge>

          {/* Title */}
          <MyHeading
            theme={theme}
            className="text-center max-w-[600px]"
          >
            <EditableText
              sectionId={sectionId}
              defaultValue={title}
              contentPath="title"
            />
          </MyHeading>

          {/* Subtitle */}
          <MyParagraph
            theme={theme}
          >
            <EditableText
              sectionId={sectionId}
              defaultValue={subtitle}
              contentPath="subtitle"
            />
          </MyParagraph>

          {/* Steps */}
          <div className="w-full flex flex-col items-center gap-6 mt-6">
            {(features || []).map((feature, index) => (
              <StepCard
                key={index}
                number={index + 1}
                title={feature.title.replace(/\d+\.\s+/, '')} // Remove the numbering from the title
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </MySection>
  );
};
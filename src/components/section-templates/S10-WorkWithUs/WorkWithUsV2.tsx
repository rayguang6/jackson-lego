import React, { useEffect } from 'react';
import { WorkWithUsProps, defaultWorkWithUsProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MySection } from '@/components/template-ui/MySection';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import Image from 'next/image';
import { useDesignStore } from '@/lib/store/designStore';
import { EditableText } from '@/components/editable/EditableText';
export const WorkWithUsV2: React.FC<WorkWithUsProps> = ({
  badgeText = defaultWorkWithUsProps.badgeText,  
  title = defaultWorkWithUsProps.title, 
  subtitle = defaultWorkWithUsProps.subtitle, 
  cardItems = defaultWorkWithUsProps.cardItems, 
  theme = defaultWorkWithUsProps.theme,
  sectionId = defaultWorkWithUsProps.sectionId || '',
}: WorkWithUsProps) => {
  // Initialize the cardItems array in the store to ensure it exists
    useEffect(() => {
      // Get the current section content
      const sectionContent = useDesignStore.getState().design.sections.find(s => s.id === sectionId)?.content || {};
      if (sectionId && !sectionContent.cardItems) {
        useDesignStore.getState().updateSectionField(sectionId, 'cardItems', JSON.parse(JSON.stringify(cardItems)));
      }
    }, [sectionId, cardItems]);
  const isDark = theme === 'dark';
  
  return (
    <MySection theme={theme} className={`w-full py-24 ${isDark ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center gap-10">
          <Badge theme={theme}>
            <EditableText
              sectionId={sectionId}
              defaultValue={badgeText}
              contentPath="badgeText"
            />
          </Badge>
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            {title && (
              <MyHeading theme={theme} as='h2' className={`text-4xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <EditableText
                  sectionId={sectionId}
                  defaultValue={title}
                  contentPath="title"
                />
              </MyHeading>
            )}
            {subtitle && (
              <MyParagraph theme={theme} className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <EditableText
                  sectionId={sectionId}
                  defaultValue={subtitle}
                  contentPath="subtitle"
                />
              </MyParagraph>
            )}
          </div>
          
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl mt-8">
            {cardItems?.map((card, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-lg border ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                } flex flex-col gap-6`}
              >
                {/* Card Header with Icon */}
                <div className="gap-4 border-b pb-4 border-gray-200">
                  <div className="relative w-full h-48">
                    <Image src={card.image || '/images/default-image.png'} alt={card.title} fill className='object-cover' />
                  </div>
                  <MyHeading theme={theme} as='h5' className={` mt-5 text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    <EditableText
                      sectionId={sectionId}
                      defaultValue={card.title}
                      contentPath="title"
                    />
                  </MyHeading>
                </div>
                
                {/* Description */}
                <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={card.description}
                    contentPath="description"
                  />
                </p>
                
                {/* CTA Button */}
                <PrimaryButton theme={theme}>
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={card.ctaText}
                    contentPath="ctaText"
                  />
                </PrimaryButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MySection>
  );
}; 
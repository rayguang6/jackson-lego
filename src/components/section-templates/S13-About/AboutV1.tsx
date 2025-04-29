import React, { useEffect } from 'react';
import { AboutProps, defaultAboutProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { EditableText } from '@/components/editable/EditableText';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { useDesignStore } from '@/lib/store/designStore';

export const AboutV1: React.FC<AboutProps> = ({
  title = defaultAboutProps.title,
  subtitle = defaultAboutProps.subtitle,
  badgeText = defaultAboutProps.badgeText,
  quote = defaultAboutProps.quote,
  features = defaultAboutProps.features,
  imageUrl = defaultAboutProps.imageUrl,
  theme = defaultAboutProps.theme,
  sectionId = defaultAboutProps.sectionId || '',  
}: AboutProps) => {
  const isDark = theme === 'dark';

  // Initialize the features array in the store to ensure it exists
  useEffect(() => {
    // Get the current section content
    const sectionContent = useDesignStore.getState().design.sections.find(s => s.id === sectionId)?.content || {};
    if (sectionId && !sectionContent.features) {
      useDesignStore.getState().updateSectionField(sectionId, 'features', JSON.parse(JSON.stringify(features)));
    }

    if (sectionId && !sectionContent.quote) {
      useDesignStore.getState().updateSectionField(sectionId, 'quote', JSON.parse(JSON.stringify(quote)));
    }
  }, [sectionId, features, quote]);

  return (
    <MySection theme={theme}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="max-w-xl">
            {/* Badge */}
            <Badge theme={theme}>
              <EditableText
                sectionId={sectionId}
                contentPath="badgeText"
                defaultValue={badgeText || ''}
              />
            </Badge>

            {/* Title and Subtitle */}
            <MyHeading as='h2' theme={theme} className="text-4xl font-bold mb-4">
              <EditableText
                sectionId={sectionId}
                contentPath="title"
                defaultValue={title}
              />
            </MyHeading>
            <MyParagraph theme={theme} className="text-lg text-gray-600 mb-10">
              <EditableText
                sectionId={sectionId}
                contentPath="subtitle"
                defaultValue={subtitle}
              />
            </MyParagraph>

            {/* Quote */}
            {quote && (
              <div className=" text-white p-8 rounded-lg" style={{ backgroundColor: GLOBALCSS_VAR.primaryColor }}>
                <div className="mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 25H5L10 15H15L12.5 25Z" stroke="white" strokeWidth="2" />
                    <path d="M27.5 25H20L25 15H30L27.5 25Z" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                {quote.heading && (
                  <MyHeading as='h5' className="text-xl text-white font-medium mb-4 mt-5">
                    <EditableText
                      sectionId={sectionId}
                      contentPath="quote.heading"
                      defaultValue={quote.heading}
                    />
                  </MyHeading>
                )}
                <MyParagraph className="text-lg mb-6 text-white">
                  <EditableText
                    sectionId={sectionId}
                    contentPath="quote.text"
                    defaultValue={quote.text}
                  />
                </MyParagraph>
                <MyParagraph className="text-sm text-white">
                  – <EditableText
                      sectionId={sectionId}
                      contentPath="quote.author"
                      defaultValue={quote.author}
                    />, <EditableText
                      sectionId={sectionId}
                      contentPath="quote.position"
                      defaultValue={quote.position}
                    />
                </MyParagraph>
              </div>
            )}
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="shrink-0 w-full md:w-1/2">
              <img 
                src={imageUrl} 
                alt="About Us" 
                className="w-full h-auto rounded-lg object-cover shadow-lg" 
              />
            </div>
          )}
        </div>
      </div>  
    </MySection>
  );
}; 
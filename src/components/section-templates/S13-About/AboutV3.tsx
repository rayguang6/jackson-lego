import React, { useEffect } from 'react';
import { AboutProps, defaultAboutProps } from './types';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { Badge } from '@/components/template-ui/Badge';
import { EditableText } from '@/components/editable/EditableText';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { useDesignStore } from '@/lib/store/designStore';
export const AboutV3: React.FC<AboutProps> = ({
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
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
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
            <MyHeading className='mt-5' as="h2" theme={theme}>
              <EditableText
                sectionId={sectionId}
                contentPath="title"
                defaultValue={title}
              />
            </MyHeading>
            <MyParagraph className='mt-5'>
              <EditableText
                sectionId={sectionId}
                contentPath="subtitle"
                defaultValue={subtitle}
              />
            </MyParagraph>

            {/* Features */}
            {features && features.length > 0 && (
              <div className="bg-red-50 rounded-lg p-8 space-y-8 mt-5">
                {features.map((feature, index) => (
                  <div key={index}>
                    {index > 0 && <div className="h-px bg-gray-200 opacity-30 mb-8"></div>}
                    <div className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-full  flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GLOBALCSS_VAR.primaryColor }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 10L9.16667 11.6667L12.5 8.33333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 10 1.66675C5.39763 1.66675 1.66667 5.39771 1.66667 10.0001C1.66667 14.6024 5.39763 18.3334 10 18.3334Z" stroke="white" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">
                          <EditableText
                            sectionId={sectionId}
                            contentPath={`features.${index}.title`}
                            defaultValue={feature.title}
                          />
                        </h3>
                        <p className="text-gray-600">
                          <EditableText
                            sectionId={sectionId}
                            contentPath={`features.${index}.description`}
                            defaultValue={feature.description}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <img 
                src={imageUrl} 
                alt="About Us" 
                className="w-full h-auto rounded-lg object-cover shadow-lg" 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}; 
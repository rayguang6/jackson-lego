'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { FeaturesOrServicesProps, defaultFeaturesOrServicesProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { EditableText } from '@/components/editable/EditableText';
import { useDesignStore } from '@/lib/store/designStore';

export const FeaturesOrServicesV1: React.FC<FeaturesOrServicesProps> = ({
  title = defaultFeaturesOrServicesProps.title,
  subtitle = defaultFeaturesOrServicesProps.subtitle,
  badgeText = defaultFeaturesOrServicesProps.badgeText,
  services = defaultFeaturesOrServicesProps.services,
  theme = defaultFeaturesOrServicesProps.theme,
  ctaText = defaultFeaturesOrServicesProps.ctaText,
  sectionId = defaultFeaturesOrServicesProps.sectionId || '',
}: FeaturesOrServicesProps) => {
  const isDark = theme === 'dark';
  
  // Initialize the services array in the store to ensure it exists
  useEffect(() => {
    // Get the current section content
    const sectionContent = useDesignStore.getState().design.sections.find(s => s.id === sectionId)?.content || {};
    
    // Check if services array doesn't exist yet in the store
    if (!sectionContent.services) {
      // Initialize with a copy of the default services to ensure paths can be found later
      useDesignStore.getState().updateSectionField(sectionId, 'services', JSON.parse(JSON.stringify(services)));
    }
  }, [sectionId, services]);
  
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-center mb-10">
          {badgeText && (
            <Badge theme={theme}>
              <EditableText
                sectionId={sectionId}
                defaultValue={badgeText}
                contentPath="badgeText"
              />
            </Badge>
          )}
        </div>
        
        {/* Main heading */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <MyHeading theme={theme} className="mb-6">
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
        
        {/* Services - Make sure services exist and are an array */}
        <div className="flex flex-col gap-10 max-w-6xl mx-auto mb-12">
          {(services || []).slice(0, 4).map((service, index) => (
            <div 
              key={index} 
              className={`border rounded-3xl p-8 flex flex-col md:flex-row gap-10 transition-colors items-center justify-center`}
              style={{
                border: '1px solid' + (theme === 'dark' ? '#4B5162':'#E5E5E7'),
              }}
            >
              <div className="w-full md:w-2/5 aspect-video md:aspect-auto rounded-2xl overflow-hidden">
                <Image 
                  src={service.imageSrc}
                  alt={service.title || ''}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5">
                <MyHeading theme={theme} as='h3' className="text-2xl md:text-3xl font-bold mb-6">
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={service.title || ''}
                    contentPath={`services.${index}.title`}
                  />
                </MyHeading>
                <MyParagraph theme={theme} className={`text-lg mb-8`}
                  style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                >
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={service.description || ''}
                    contentPath={`services.${index}.description`}
                  />
                </MyParagraph>
                <ul className="space-y-4">
                  {/* Make sure bulletPoints exist and are an array */}
                  {(service.bulletPoints || []).map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM23.4142 14.5858L17.4142 8.58578C16.6332 7.80474 15.3668 7.80474 14.5858 8.58578C13.8047 9.36684 13.8047 10.6332 14.5858 11.4142L17.1716 14H10C8.89544 14 8 14.8954 8 16C8 17.1046 8.89544 18 10 18H17.1716L14.5858 20.5858C13.8047 21.3668 13.8047 22.6332 14.5858 23.4142C15.3668 24.1952 16.6332 24.1952 17.4142 23.4142L23.4142 17.4142C24.1952 16.6332 24.1952 15.3668 23.4142 14.5858Z" fill={GLOBALCSS_VAR.primaryColor}/>
                      </svg>
                      <MyParagraph theme={theme} className={`text-base`}
                        style={{ fontFamily: GLOBALCSS_VAR.bodyFont }}
                      >
                        <EditableText
                          sectionId={sectionId}
                          defaultValue={point || ''}
                          contentPath={`services.${index}.bulletPoints.${i}`}
                        />
                      </MyParagraph>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <PrimaryButton theme={theme} className="mt-8">
            <EditableText
              sectionId={sectionId}
              defaultValue={ctaText || ''}
              contentPath="ctaText"
            />
          </PrimaryButton>
        </div>
      </div>
    </MySection>
  );
};
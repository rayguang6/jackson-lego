'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FeaturesOrServicesProps, defaultFeaturesOrServicesProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { useDesignStore } from '@/lib/store/designStore';
import { EditableText } from '@/components/editable/EditableText';

export const FeaturesOrServicesV5: React.FC<FeaturesOrServicesProps> = ({
  title = defaultFeaturesOrServicesProps.title,
  subtitle = defaultFeaturesOrServicesProps.subtitle,
  badgeText = defaultFeaturesOrServicesProps.badgeText,
  services = defaultFeaturesOrServicesProps.services,
  theme = defaultFeaturesOrServicesProps.theme,
  ctaText = defaultFeaturesOrServicesProps.ctaText,
  sectionId = defaultFeaturesOrServicesProps.sectionId || '',
}) => {
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
                contentPath={`badgeText`}
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
              contentPath={`title`}
            />
          </MyHeading>
          
          <MyParagraph theme={theme}>
            <EditableText
              sectionId={sectionId}
              defaultValue={subtitle}
              contentPath={`subtitle`}
            />
          </MyParagraph>
        </div>
        
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {services.slice(0, 3).map((service, index) => (
            <div 
              key={index} 
              className=" border rounded-2xl p-5 flex flex-col h-full"
              style={{
                backgroundColor: theme === 'dark' ? '#1F2330' : '#F9F9FB',
                border: '1px solid' + (theme === 'dark' ? '#4B5162':'#E5E5E7'),
              }}
            >
              <div className="flex justify-between items-center pb-5 border-b border-gray-200 mb-5">
                <MyHeading as='h4' theme={theme}>
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={service.title}
                    contentPath={`services.${index}.title`}
                  />
                </MyHeading>
                <div 
                  className="h-12 w-12 rounded-lg flex items-center justify-center font-semibold text-xl shadow-sm"
                  style={{ 
                    backgroundColor: `black`, 
                    color: 'white' 
                  }}
                >
                  {`0${index + 1}`}
                </div>
              </div>
              
              <MyParagraph theme={theme} className="mb-5 flex-grow">
                <EditableText
                  sectionId={sectionId}
                  defaultValue={service.description}
                  contentPath={`services.${index}.description`}
                />
              </MyParagraph>
              
              <div className="rounded-2xl overflow-hidden mt-auto">
                <Image 
                  src={service.imageSrc}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <PrimaryButton theme={theme} className="mt-8">
            <EditableText
              sectionId={sectionId}
              defaultValue={ctaText}
              contentPath={`ctaText`}
            />
          </PrimaryButton>
        </div>
      </div>
    </MySection>
  );
}; 
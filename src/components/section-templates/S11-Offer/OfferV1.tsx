import React, { useEffect } from 'react';
import { OfferProps, defaultOfferProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import Image from 'next/image';
import { MySection } from '@/components/template-ui/MySection';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { EditableText } from '@/components/editable/EditableText';
import { useDesignStore } from '@/lib/store/designStore';

export const OfferV1: React.FC<OfferProps> = ({
    badgeText = defaultOfferProps.badgeText,
    title = defaultOfferProps.title,
    subtitle = defaultOfferProps.subtitle,
    offers = defaultOfferProps.offers || [],
    theme = defaultOfferProps.theme,
    specialOfferTitle = defaultOfferProps.specialOfferTitle,
    specialOfferSubtitle = defaultOfferProps.specialOfferSubtitle,
    specialOfferPrice = defaultOfferProps.specialOfferPrice,
    specialOfferOriginalPrice = defaultOfferProps.specialOfferOriginalPrice,
    ctaText = defaultOfferProps.ctaText,
    footerText = defaultOfferProps.footerText,
    sectionId = defaultOfferProps.sectionId || '',
  }: OfferProps) => {
    const isDark = theme === 'dark';

    // Initialize the offers array in the store to ensure it exists
    useEffect(() => {
      // Get the current section content
      const sectionContent = useDesignStore.getState().design.sections.find(s => s.id === sectionId)?.content || {};
      if (sectionId && !sectionContent.offers) {
        useDesignStore.getState().updateSectionField(sectionId, 'offers', JSON.parse(JSON.stringify(offers)));
      }
    }, [sectionId, offers]);
  
  return (
    <MySection theme={theme}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center gap-10">
          <Badge theme={theme}>
            <EditableText
              sectionId={sectionId}
              contentPath="badgeText"
              defaultValue={badgeText || ''}
            />
          </Badge>
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            {title && (
              <MyHeading as='h2' className={`text-4xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <EditableText
                  sectionId={sectionId}
                  contentPath="title"
                  defaultValue={title}
                />
              </MyHeading>
            )}
            {subtitle && (
              <MyParagraph theme={theme} className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <EditableText
                  sectionId={sectionId}
                  contentPath="subtitle"
                  defaultValue={subtitle}
                />
              </MyParagraph>
            )}
          </div>
          
          {/* Grouped Devices Image */}
          <div className="mx-auto my-8">
            <div className="relative w-full">
              <Image 
                src={TEMPLATE_IMAGES.OFFER.BUNDLE_IMAGE} 
                alt="Responsive Devices" 
                className="w-full h-auto"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          
          {/* Offers */}
          <div className="flex flex-col gap-6 w-full mt-6">
            {offers && offers.length > 0 && offers.map((offer, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg border w-full max-w-4xl mx-auto ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                } shadow-lg`}
              >
                <div className="flex gap-10 items-center justify-center">
                  {/* Offer Image */}
                  <div className="hidden md:block w-1/4">
                    <div className="aspect-square rounded-md relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image 
                          src={TEMPLATE_IMAGES.OFFER.DESKTOP_IMAGE} 
                          alt={offer.title} 
                          className="w-full h-full object-cover"
                          width={1000}
                          height={1000}
                        />
                      </div>
                    </div>
                  </div>
                
                  <div className="flex-1">
                    {/* Offer Content */}
                    <div className="mb-4">
                      {/* Offer Number */}
                      <MyHeading as='h3' className={`text-red-600 font-medium text-base mb-2`}>
                        <EditableText
                          sectionId={sectionId}
                          contentPath={`offers.${index}.offerNumber`}
                          defaultValue={offer.offerNumber}
                        />        
                      </MyHeading>
                      
                      {/* Offer Title */}
                      <MyHeading as='h3' className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <EditableText
                          sectionId={sectionId}
                          contentPath={`offers.${index}.title`}
                          defaultValue={offer.title}
                        />
                      </MyHeading>
                      
                      {/* Offer Description */}
                      <MyParagraph theme={theme} className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        <EditableText
                          sectionId={sectionId}
                          contentPath={`offers.${index}.description`}
                          defaultValue={offer.description}
                        />
                      </MyParagraph>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Special Offer */}
          <div className="mt-16 text-center">
            <MyHeading as='h3' className={`text-2xl font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
              <EditableText
                sectionId={sectionId}
                contentPath="specialOfferTitle"
                defaultValue={specialOfferTitle || ''}
              />
            </MyHeading>
            <MyParagraph theme={theme} className={`uppercase tracking-[0.24em] mt-3 font-bold text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <EditableText
                sectionId={sectionId}
                contentPath="specialOfferSubtitle"
                defaultValue={specialOfferSubtitle || ''}
              />
            </MyParagraph>
            <div className="mt-4">
              <MyHeading as='h3' className={`text-6xl md:text-7xl font-extrabold text-red-600 leading-tight`}>
                <EditableText
                  sectionId={sectionId}
                  contentPath="specialOfferPrice"
                  defaultValue={specialOfferPrice || ''}
                />
              </MyHeading>
              <MyParagraph theme={theme} className={`text-3xl mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <s>
                  <EditableText
                    sectionId={sectionId}
                    contentPath="specialOfferOriginalPrice"
                    defaultValue={specialOfferOriginalPrice || ''}
                  />
                </s>
              </MyParagraph>
            </div>
          </div>
          
          {/* CTA Button */}
          <PrimaryButton theme={theme}>
            <EditableText
              sectionId={sectionId}
              contentPath="ctaText"
              defaultValue={ctaText || ''}
            />
          </PrimaryButton>
          
          {/* Footer Text */}
          {footerText && (
            <div className="flex items-center gap-4">
              {/* User Avatars */}
              <div className="flex -space-x-2">
                <Image 
                  src={TEMPLATE_IMAGES.OFFER.PEOPLE_IMAGE} 
                  alt="People" 
                  className="w-full rounded-full border-2 border-white"
                  width={1000}
                  height={1000}
                />
              </div>
              <MyParagraph theme={theme} className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                <EditableText
                  sectionId={sectionId}
                  contentPath="footerText"
                  defaultValue={footerText || ''}
                />
              </MyParagraph>
            </div>
          )}
        </div>
      </div>
    </MySection>
  );  
};
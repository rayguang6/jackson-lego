'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { SolutionsProps, defaultSolutionsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { useDesignStore } from '@/lib/store/designStore';
import { EditableText } from '@/components/editable/EditableText';

export const SolutionsV3: React.FC<SolutionsProps> = ({
  title = defaultSolutionsProps.title,
  subtitle = defaultSolutionsProps.subtitle,
  badgeText = defaultSolutionsProps.badgeText,
  sectionTitle = defaultSolutionsProps.sectionTitle,
  theme = defaultSolutionsProps.theme,
  imageUrl = defaultSolutionsProps.imageUrl,
  features = defaultSolutionsProps.features,
  sectionId = defaultSolutionsProps.sectionId || '',
}: SolutionsProps) => {

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
  
  // Ensure we have 6 features (2 rows of 3)
  const displayFeatures = features.slice(0, 6);
  // If we have less than 6, duplicate the last one to fill
  while (displayFeatures.length < 6) {
    displayFeatures.push(features[features.length - 1]);
  }
  
  return (
    <MySection theme={theme} className="py-24">
      <div className="container mx-auto px-4">
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
          <div className="flex flex-row gap-0">
            <MyHeading theme={theme} as='h2' className="mb-6">
              <EditableText
                sectionId={sectionId}
                defaultValue={sectionTitle || ''}
                contentPath={`sectionTitle`}
              />
            </MyHeading>
            <MyHeading theme={theme} as='h2' className="mb-6">
              <EditableText
                  sectionId={sectionId}
                  defaultValue={title}
                  contentPath={`title`}
                />
            </MyHeading>
          </div>
          
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <EditableText
              sectionId={sectionId}
              defaultValue={subtitle}
              contentPath={`subtitle`}
            />
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Features - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-10">
            {(displayFeatures || []).map((feature, index) => (

              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-md border w-12 h-12 flex items-center justify-center"
                style={{
                  backgroundColor: theme === 'dark' ? "#FFFFFF08" : "",
                  border: '1px solid' + (theme === 'dark' ? '#4B5162':'#E5E5E7'),
                }}
                >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3_2106)">
                  <g filter="url(#filter0_d_3_2106)">
                  <path d="M17.6764 11.4952C16.1143 9.93314 16.1143 7.40048 17.6764 5.83838L20.5048 3.00995C22.0669 1.44785 24.5996 1.44785 26.1617 3.00995L28.9901 5.83838C30.5522 7.40048 30.5522 9.93314 28.9901 11.4952L26.1617 14.3237C24.5996 15.8858 22.0669 15.8858 20.5048 14.3237L17.6764 11.4952Z" fill={GLOBALCSS_VAR.primaryColor}/>
                  <path d="M6.66666 14.6668C4.45752 14.6668 2.66666 12.8759 2.66666 10.6668V6.66681C2.66666 4.45767 4.45752 2.66681 6.66666 2.66681H10.6667C12.8758 2.66681 14.6667 4.45767 14.6667 6.66681V10.6668C14.6667 12.8759 12.8758 14.6668 10.6667 14.6668H6.66666Z" fill={GLOBALCSS_VAR.primaryColor}/>
                  <path d="M6.66666 29.3335C4.45752 29.3335 2.66666 27.5426 2.66666 25.3335V21.3335C2.66666 19.1243 4.45752 17.3335 6.66666 17.3335H10.6667C12.8758 17.3335 14.6667 19.1243 14.6667 21.3335V25.3335C14.6667 27.5426 12.8758 29.3335 10.6667 29.3335H6.66666Z" fill={GLOBALCSS_VAR.primaryColor}/>
                  <path d="M21.3333 29.3335C19.1242 29.3335 17.3333 27.5426 17.3333 25.3335V21.3335C17.3333 19.1243 19.1242 17.3335 21.3333 17.3335H25.3333C27.5425 17.3335 29.3333 19.1243 29.3333 21.3335V25.3335C29.3333 27.5426 27.5425 29.3335 25.3333 29.3335H21.3333Z" fill={GLOBALCSS_VAR.primaryColor}/>
                  </g>
                  </g>
                  <defs>
                  <filter id="filter0_d_3_2106" x="0.666656" y="0.838379" width="31.495" height="31.4951" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1"/>
                  <feGaussianBlur stdDeviation="1"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.04 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_2106"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_2106" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear_3_2106" x1="16.4142" y1="1.83838" x2="16.4142" y2="29.3335" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFA9BC"/>
                  <stop offset="1" stop-color="#EF083A"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_3_2106" x1="16.4142" y1="1.83838" x2="16.4142" y2="29.3335" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFA9BC"/>
                  <stop offset="1" stop-color="#EF083A"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_3_2106" x1="16.4142" y1="1.83838" x2="16.4142" y2="29.3335" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFA9BC"/>
                  <stop offset="1" stop-color="#EF083A"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_3_2106" x1="16.4142" y1="1.83838" x2="16.4142" y2="29.3335" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFA9BC"/>
                  <stop offset="1" stop-color="#EF083A"/>
                  </linearGradient>
                  <clipPath id="clip0_3_2106">
                  <rect width="32" height="32" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>    

                </div>

                <MyHeading theme={theme} as='h5' className="text-xl font-bold mb-2 text-gray-900">
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={feature.title}
                    contentPath={`features.${index}.title`}
                  />
                </MyHeading>

                <MyParagraph theme={theme} className="text-base max-w-xs">
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
      </div>
    </MySection>
  );
}; 
import React, { useEffect } from 'react';
import { WorkWithUsProps, defaultWorkWithUsProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MySection } from '@/components/template-ui/MySection';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { useDesignStore } from '@/lib/store/designStore';
import { EditableText } from '@/components/editable/EditableText';
export const WorkWithUsV1: React.FC<WorkWithUsProps> = ({
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
                  defaultValue= {subtitle}
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
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center ${
                    isDark ? 'bg-gray-700' : 'bg-white border border-gray-200'
                  }`}>
                    <svg width="33" height="32" viewBox="0 0 33 32" fill={GLOBALCSS_VAR.primaryColor} xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3_4792)">
                        <g filter="url(#filter0_d_3_4792)">
                          <path d="M18.1142 11.4952C16.5521 9.93314 16.5521 7.40048 18.1142 5.83838L20.9427 3.00995C22.5048 1.44785 25.0374 1.44785 26.5995 3.00995L29.4279 5.83838C30.99 7.40048 30.99 9.93314 29.4279 11.4952L26.5995 14.3237C25.0374 15.8858 22.5048 15.8858 20.9427 14.3237L18.1142 11.4952Z" fill="url(#paint0_linear_3_4792)" />
                          <path d="M7.10449 14.6668C4.89535 14.6668 3.10449 12.8759 3.10449 10.6668V6.66681C3.10449 4.45767 4.89535 2.66681 7.10449 2.66681H11.1045C13.3136 2.66681 15.1045 4.45767 15.1045 6.66681V10.6668C15.1045 12.8759 13.3136 14.6668 11.1045 14.6668H7.10449Z" fill="url(#paint1_linear_3_4792)" />
                          <path d="M7.10449 29.3335C4.89535 29.3335 3.10449 27.5426 3.10449 25.3335V21.3335C3.10449 19.1243 4.89535 17.3335 7.10449 17.3335H11.1045C13.3136 17.3335 15.1045 19.1243 15.1045 21.3335V25.3335C15.1045 27.5426 13.3136 29.3335 11.1045 29.3335H7.10449Z" fill="url(#paint2_linear_3_4792)" />
                          <path d="M21.7712 29.3335C19.562 29.3335 17.7712 27.5426 17.7712 25.3335V21.3335C17.7712 19.1243 19.562 17.3335 21.7712 17.3335H25.7712C27.9803 17.3335 29.7712 19.1243 29.7712 21.3335V25.3335C29.7712 27.5426 27.9803 29.3335 25.7712 29.3335H21.7712Z" fill="url(#paint3_linear_3_4792)" />
                        </g>
                      </g>
                      <defs>
                        <filter id="filter0_d_3_4792" x="1.10449" y="0.838379" width="31.4951" height="31.4951" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1" />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.04 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_4792" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_4792" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_3_4792" x1="16.852" y1="1.83838" x2="16.852" y2="29.3335" gradientUnits="userSpaceOnUse">
                          <stop stop-color={GLOBALCSS_VAR.primaryColor20} />
                          <stop offset="1" stop-color={GLOBALCSS_VAR.primaryColor} />
                        </linearGradient>
                        <linearGradient id="paint1_linear_3_4792" x1="16.852" y1="1.83838" x2="16.852" y2="29.3335" gradientUnits="userSpaceOnUse">
                          <stop stop-color={GLOBALCSS_VAR.primaryColor20} />
                          <stop offset="1" stop-color={GLOBALCSS_VAR.primaryColor} />
                        </linearGradient>
                        <linearGradient id="paint2_linear_3_4792" x1="16.852" y1="1.83838" x2="16.852" y2="29.3335" gradientUnits="userSpaceOnUse">
                          <stop stop-color={GLOBALCSS_VAR.primaryColor20} />
                          <stop offset="1" stop-color={GLOBALCSS_VAR.primaryColor} />
                        </linearGradient>
                        <linearGradient id="paint3_linear_3_4792" x1="16.852" y1="1.83838" x2="16.852" y2="29.3335" gradientUnits="userSpaceOnUse">
                          <stop stop-color={GLOBALCSS_VAR.primaryColor20} />
                          <stop offset="1" stop-color={GLOBALCSS_VAR.primaryColor} />
                        </linearGradient>
                        <clipPath id="clip0_3_4792">
                          <rect width="32" height="32" fill="white" transform="translate(0.437988)" />
                        </clipPath>
                      </defs>
                    </svg>  
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
'use client';

import React, { useEffect } from 'react';
import { FAQProps, defaultFAQProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { useDesignStore } from '@/lib/store/designStore';
import { EditableText } from '@/components/editable/EditableText';
export const FAQV2: React.FC<FAQProps> = ({
  title = defaultFAQProps.title,
  subtitle = defaultFAQProps.subtitle,
  badgeText = defaultFAQProps.badgeText,
  faqs = defaultFAQProps.faqs,
  ctaText = defaultFAQProps.ctaText,
  theme = defaultFAQProps.theme,
  sectionId = defaultFAQProps.sectionId || '',  
}: FAQProps) => {

  // Initialize the faqs array in the store to ensure it exists
  useEffect(() => {
    // Get the current section content
    const sectionContent = useDesignStore.getState().design.sections.find(s => s.id === sectionId)?.content || {};
    
    // Check if faqs array doesn't exist yet in the store 
    if (sectionId &&  !sectionContent.faqs) {
      // Initialize with a copy of the default faqs
      useDesignStore.getState().updateSectionField(sectionId, 'faqs', JSON.parse(JSON.stringify(faqs)));
    }
  }, [sectionId, faqs]);
  // Static component - first FAQ is open by default
  const openIndex = 0;
  const isDark = theme === 'dark';

  return (
    <MySection 
      theme={theme}
      className="flex flex-col items-center py-24 px-6 md:px-16"
    >
      {/* Badge */}
      <div className="flex justify-center mb-10">   
        <Badge theme={theme}>
          <EditableText
            sectionId={sectionId}
            defaultValue={badgeText}
            contentPath="badgeText"
          />
        </Badge>
      </div>

      {/* Title and subtitle */}
      <div className="text-center mb-16 max-w-[800px]">
        <MyHeading theme={theme} className="mb-4">
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

      {/* FAQ Cards */}
      <div className="w-full max-w-[815px] flex flex-col gap-5">
        {faqs?.map((faq, index) => (
          <div 
            key={index}
            className={`rounded-xl border ${
              openIndex === index 
                ? `bg-[${isDark ? '#2A2A2A' : GLOBALCSS_VAR.primaryColor10}]` 
                : `bg-${isDark ? 'gray-800' : 'white'} `
            }`}  
            style={{
              borderColor: theme === 'dark' ? '#252F3F' : '#E5E5E7',
              backgroundColor: openIndex === index ? isDark ? '#FFF' : GLOBALCSS_VAR.primaryColor10 : isDark ? 'gray-800' : 'white'
            }}  
          >
            <div className="p-6">
              <div className="flex items-center justify-between gap-8">
                <MyHeading style={{ color: index === openIndex ? GLOBALCSS_VAR.primaryColor : isDark ? '#FFF' : '#343434'}} as="h5" className={`font-bold ${openIndex === index ? 'text-xl' : 'text-lg'}`}>
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={faq.question}
                    contentPath={`faqs.${index}.question`}
                  />
                </MyHeading>

                {openIndex === index ? (
                  <div className="w-6 h-6 flex-shrink-0 relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 12H6" stroke={isDark ? "#FFFFFF" : "#FFFFFF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : (
                  <div className="w-6 h-6 flex-shrink-0 relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 12H6" stroke={GLOBALCSS_VAR.primaryColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 18V6" stroke={GLOBALCSS_VAR.primaryColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {openIndex === index && (
                <div className="mt-3 relative">
                  <MyParagraph theme={theme} className="text-base">
                    <EditableText
                      sectionId={sectionId}
                      defaultValue={faq.answer}
                      contentPath={`faqs.${index}.answer`}
                    />
                  </MyParagraph>
                  
                  {/* Decorative elements - adjust color based on theme */}
                  <div className={`absolute w-40 h-40 rounded-full ${isDark ? 'bg-gray-700' : 'bg-white'} blur-[400px] opacity-70 -right-10 bottom-0`}></div>
                  <div className={`absolute w-40 h-40 rounded-full ${isDark ? 'bg-gray-700' : 'bg-white'} blur-[400px] opacity-70 -left-40 -top-32`}></div>
                  <div className={`absolute w-40 h-40 rounded-full ${isDark ? 'bg-gray-700' : 'bg-white'} blur-[400px] opacity-70 left-60 -top-8`}></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </MySection>
  );
}; 
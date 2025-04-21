'use client';

import React from 'react';
import { FAQProps, defaultFAQProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';

export const FAQV2: React.FC<FAQProps> = ({
  title = defaultFAQProps.title,
  subtitle = defaultFAQProps.subtitle,
  faqs = defaultFAQProps.faqs,
  badgeText = defaultFAQProps.badgeText,
  theme = defaultFAQProps.theme,
  sectionId,
}: FAQProps) => {
  // Static component - first FAQ is open by default
  const openIndex = 0;
  const isDark = theme === 'dark';

  return (
    <MySection 
      theme={theme}
      className="flex flex-col items-center py-24 px-6 md:px-16"
    >
      {/* Badge */}
      <Badge 
        theme={theme}
        icon="none"
        className="mb-10"
      >
        {badgeText}
      </Badge>

      {/* Title and subtitle */}
      <div className="text-center mb-16 max-w-[800px]">
        <SectionHeading theme={theme} className="mb-4">
          {title}
        </SectionHeading>
        <MyParagraph theme={theme}>
          {subtitle}
        </MyParagraph>
      </div>

      {/* FAQ Cards */}
      <div className="w-full max-w-[815px] flex flex-col gap-5">
        {faqs?.map((faq, index) => (
          <div 
            key={index}
            className={`rounded-xl border ${
              openIndex === index 
                ? `bg-[${isDark ? '#2A2A2A' : '#FFF7F7'}] border-[${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(91,4,23,0.05)'}]` 
                : `bg-${isDark ? 'gray-800' : 'white'} border-[${isDark ? '#3D3D3D' : '#E5E5E7'}]`
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between gap-8">
                <h3 className={`font-bold ${openIndex === index ? 'text-xl' : 'text-lg'} ${isDark ? 'text-white' : 'text-[#343434]'}`}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <div className="w-6 h-6 flex-shrink-0 relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 12H6" stroke={isDark ? "#FFFFFF" : "#FFFFFF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : (
                  <div className="w-6 h-6 flex-shrink-0 relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 12H6" stroke="#EF083A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 18V6" stroke="#EF083A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {openIndex === index && (
                <div className="mt-3 relative">
                  <MyParagraph theme={theme} className="text-base">
                    {faq.answer}
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
'use client';

import React, { useState } from 'react';
import { FAQProps, defaultFAQProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { Badge } from '@/components/template-ui/Badge';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
export const FAQV1: React.FC<FAQProps> = ({
  title = defaultFAQProps.title,
  subtitle = defaultFAQProps.subtitle,
  badgeText = defaultFAQProps.badgeText,
  faqs = defaultFAQProps.faqs,
  ctaText = defaultFAQProps.ctaText,
  theme = defaultFAQProps.theme,
  sectionId,
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MySection theme={theme} className="flex flex-col items-center">

      {/* Badge */}
      <div className="flex justify-center mb-5">
        <Badge theme={theme}>
          {badgeText || 'FAQ'}  
        </Badge>
      </div>

      {/* Title and subtitle */}
      <div className="text-center mb-12 max-w-[800px]">
        <MyHeading theme={theme} className="mb-4">
          {title}
        </MyHeading>
        <MyParagraph theme={theme}>
          {subtitle}
        </MyParagraph>
      </div>

      {/* FAQ Accordion */}
      <div className="w-full max-w-[800px]">
        {faqs?.map((faq, index) => (
          <div 
            key={index}
            className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4"
            style={{
              borderColor: theme === 'dark' ? '#252F3F' : '#E5E5E7'
            }}
          >
            <button
              className={`flex w-full text-left items-center justify-between ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              } font-medium text-lg focus:outline-none`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="ml-6">
                {openIndex === index ? (
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1.5" width="22" height="22" rx="11" stroke={GLOBALCSS_VAR.primaryColor} stroke-width="2"/>
                    <rect x="6" y="11.5" width="12" height="2" rx="1" fill={GLOBALCSS_VAR.primaryColor}/>
                  </svg>
                ) : (
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1.5" width="22" height="22" rx="11" stroke={GLOBALCSS_VAR.primaryColor} stroke-width="2"/>
                    <rect x="6" y="11.5" width="12" height="2" rx="1" fill={GLOBALCSS_VAR.primaryColor}/>
                    <rect x="11" y="6.5" width="2" height="12" rx="1" fill={GLOBALCSS_VAR.primaryColor}/>
                  </svg>
                )}
              </span>
            </button>
            <div
              className={`mt-2 transition-all duration-200 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <MyParagraph theme={theme} className="pl-0">
                {faq.answer}
              </MyParagraph>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {ctaText && (
        <div className="mt-10">
          <PrimaryButton theme={theme}>
            {ctaText}
          </PrimaryButton>
        </div>
      )}
    </MySection>
  );
}; 
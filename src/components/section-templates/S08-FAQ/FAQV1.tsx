'use client';

import React, { useState } from 'react';
import { FAQProps, defaultFAQProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';

export const FAQV1: React.FC<FAQProps> = ({
  title = defaultFAQProps.title,
  subtitle = defaultFAQProps.subtitle,
  faqs = defaultFAQProps.faqs,
  ctaText = defaultFAQProps.ctaText,
  ctaLink = defaultFAQProps.ctaLink,
  theme = defaultFAQProps.theme,
  sectionId,
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MySection theme={theme} className="flex flex-col items-center">
      {/* Title and subtitle */}
      <div className="text-center mb-12 max-w-[800px]">
        <SectionHeading theme={theme} className="mb-4">
          {title}
        </SectionHeading>
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
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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
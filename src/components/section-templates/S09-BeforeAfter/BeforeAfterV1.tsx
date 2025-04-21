'use client';

import React from 'react';
import { BeforeAfterProps, defaultBeforeAfterProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
export const BeforeAfterV1: React.FC<BeforeAfterProps> = ({
  title = defaultBeforeAfterProps.title,
  subtitle = defaultBeforeAfterProps.subtitle,
  badgeText = defaultBeforeAfterProps.badgeText,
  comparisonItems = defaultBeforeAfterProps.comparisonItems,
  beforeLabel = defaultBeforeAfterProps.beforeLabel,
  afterLabel = defaultBeforeAfterProps.afterLabel,
  ctaText = defaultBeforeAfterProps.ctaText,
  ctaLink = defaultBeforeAfterProps.ctaLink,
  theme = defaultBeforeAfterProps.theme,
  sectionId,
}: BeforeAfterProps) => {
  const isDark = theme === 'dark';

  return (
    <MySection 
      theme={theme}
      className="flex flex-col justify-center items-center py-16 px-6 md:px-8"
    >
      {/* Badge */}
      <div className="flex justify-center items-center">
        <Badge theme={theme}>{badgeText}</Badge>
      </div>

      {/* Title and subtitle */}
      <div className="text-center mt-5 mb-14 items-center justify-center">
        <MyHeading theme={theme} className="mb-4">
          <span>YourBrand is a </span>
          <span style={{ color: GLOBALCSS_VAR.primaryColor }}>shortcut</span>
          <span> for you</span>
        </MyHeading>
        <MyParagraph theme={theme} className='text-base'>{subtitle}</MyParagraph>
      </div>

      {/* Before-After Comparison */}
      <div className="w-full rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Before Column */}
          <div className='px-8 py-12 rounded-lg' style={{ 
            border: isDark ? '1px solid #252F3F' : '1px solid #E5E7EB', 
            backgroundColor: isDark ? '#1F2937' : '#F9FAFB' 
            }}>
            <MyHeading theme={theme} as='h4' className="mb-6">
              <span style={{ color: '#FF4545' }}>BEFORE</span> using YourBrand:
            </MyHeading>
            <ul className="space-y-5">
              {comparisonItems?.map((item, index) => (
                <li key={`before-${index}`} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#FF4545" />
                      <path d="M15.5 8.5L8.5 15.5M8.5 8.5L15.5 15.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <MyParagraph theme={theme} className="text-base font-medium text-[#4B5563]">
                    {item.before}
                  </MyParagraph>
                </li>
              ))}
            </ul>
          </div>

          {/* After Column */}
          <div className='px-8 py-12 rounded-lg' style={{ 
            border: isDark ? '1px solid #252F3F' : '1px solid #E5E7EB', 
            backgroundColor: isDark ? '#1F2937' : '#F9FAFB' 
            }}>
            <MyHeading theme={theme} as='h4' className="mb-6">
              <span style={{ color: '#37CA37' }}>AFTER</span> using YourBrand:
            </MyHeading>
            <ul className="space-y-5">
              {comparisonItems?.map((item, index) => (
                <li key={`after-${index}`} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#37CA37" />
                      <path d="M8 12L10.5 14.5L16 9" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <MyParagraph theme={theme} className="text-base font-medium text-[#4B5563]">
                    {item.after}
                  </MyParagraph>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-14">
        <PrimaryButton theme={theme}>
          {ctaText}
        </PrimaryButton>
      </div>
    </MySection>
  );
}; 
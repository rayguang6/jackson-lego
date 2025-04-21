'use client';

import React from 'react';
import { BeforeAfterProps, defaultBeforeAfterProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';

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
      className="flex flex-col items-center py-16 px-6 md:px-8"
    >
      {/* Badge */}
      <div className="mb-10 bg-white rounded-full px-4 py-2 shadow-sm border border-[#EAECF0]">
        <span className="text-[#EF083A] text-sm font-medium tracking-widest uppercase">{badgeText}</span>
      </div>

      {/* Title and subtitle */}
      <div className="text-center mb-14 max-w-[700px]">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#111827]">
          <span>YourBrand is a </span>
          <span className="text-[#EF083A]">shortcut</span>
          <span> for you</span>
        </h2>
        <p className="text-lg text-[#4B5563]">{subtitle}</p>
      </div>

      {/* Before-After Comparison */}
      <div className="w-full max-w-[900px] bg-white border border-[#E5E7EB] rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Before Column */}
          <div>
            <h3 className="font-bold text-xl text-[#111827] mb-6 uppercase">
              <span className="text-[#FF4545]">BEFORE</span> using YourBrand:
            </h3>
            <ul className="space-y-5">
              {comparisonItems?.map((item, index) => (
                <li key={`before-${index}`} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#FFEBEB" />
                      <path d="M15.5 8.5L8.5 15.5M8.5 8.5L15.5 15.5" stroke="#FF4545" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-[#4B5563]">
                    {item.before}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Column */}
          <div>
            <h3 className="font-bold text-xl text-[#111827] mb-6 uppercase">
              <span className="text-[#37CA37]">AFTER</span> using YourBrand:
            </h3>
            <ul className="space-y-5">
              {comparisonItems?.map((item, index) => (
                <li key={`after-${index}`} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#EAFFEA" />
                      <path d="M8 12L10.5 14.5L16 9" stroke="#37CA37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-[#4B5563]">
                    {item.after}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="bg-[#EF083A] text-white rounded-lg px-8 py-4 font-bold text-sm uppercase tracking-wide flex items-center shadow-sm hover:shadow-md transition-all">
          {ctaText}
          <span className="ml-2 flex items-center justify-center w-5 h-5 bg-white rounded-full">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 8L6.5 5L3.5 2" stroke="#EF083A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </MySection>
  );
}; 
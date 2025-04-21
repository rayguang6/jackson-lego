'use client';

import React from 'react';
import { BeforeAfterProps, defaultBeforeAfterProps } from './types';
import { MySection } from '@/components/template-ui/MySection';

export const BeforeAfterV2: React.FC<BeforeAfterProps> = ({
  title = defaultBeforeAfterProps.title,
  subtitle = defaultBeforeAfterProps.subtitle,
  badgeText = defaultBeforeAfterProps.badgeText,
  comparisonItems = defaultBeforeAfterProps.comparisonItems,
  beforeHeading = defaultBeforeAfterProps.beforeHeading,
  afterHeading = defaultBeforeAfterProps.afterHeading,
  ctaText = defaultBeforeAfterProps.ctaText,
  ctaLink = defaultBeforeAfterProps.ctaLink,
  theme = defaultBeforeAfterProps.theme,
  sectionId,
}: BeforeAfterProps) => {
  // Using just 4 items for V2 layout
  const displayItems = comparisonItems?.slice(0, 4) || [];

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

      {/* Comparison Visualization */}
      <div className="w-full max-w-[900px] h-[480px] flex flex-col md:flex-row mb-12 relative">
        {/* Before Column */}
        <div className="w-full md:w-[44%] h-full rounded-2xl bg-gradient-to-br from-[#D11D44] to-[#320809] shadow-md overflow-hidden relative z-10">
          <div className="px-6 py-10 flex flex-col h-full items-center">
            <div className="flex-1 flex flex-col justify-center items-center max-w-[280px]">
              <h3 className="text-white text-2xl font-medium mb-8 text-center leading-tight">
                Traditional<br />Methods That<br />Slow You Down
              </h3>
              <ul className="space-y-4 w-full">
                {displayItems.map((item, index) => (
                  <li key={`before-${index}`} className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mr-3">
                      <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H15" stroke="#FF4545" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-base text-white">
                      {item.before}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* After Column */}
        <div className="w-full md:w-[60%] h-full rounded-2xl bg-white border border-[#E5E7EB] shadow-lg relative md:left-[-40px] md:pl-[60px] z-20">
          {/* Color transition strips */}
          <div className="absolute top-0 left-0 h-full w-[20px] bg-[rgba(239,8,58,0.2)]"></div>
          <div className="absolute top-0 left-[20px] h-full w-[20px] bg-[rgba(239,8,58,0.1)]"></div>

          <div className="px-8 py-10 flex flex-col h-full">
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-[#111827] text-2xl font-medium mb-8 text-center leading-tight">
                Smart Solutions<br />That Enhance<br />Efficiency
              </h3>
              <ul className="space-y-4 max-w-[320px] mx-auto">
                {displayItems.map((item, index) => (
                  <li key={`after-${index}`} className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#CBFAC9] rounded-full flex items-center justify-center mr-3">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.5L5 7L11 1" stroke="#127B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-base text-[#4B5563]">
                      {item.after}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute right-6 bottom-6 w-16 h-16 bg-[#FFF7F7] shadow-lg rounded-2xl"></div>
          <div className="absolute right-10 top-10 w-12 h-12 bg-[#F3F3F8] shadow-md rounded-2xl border border-[#E5E5E7]"></div>
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
'use client';

import React from 'react';
import Image from 'next/image';
import { BeforeAfterProps, defaultBeforeAfterProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { LogoIcon } from '@/components/template-ui/icons/LogoIcon';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
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
      <div className="flex justify-center items-center">
        <Badge theme={theme}>{badgeText || 'FAST TRACK YOUR SUCCESS'}</Badge>
      </div>

      {/* Title and subtitle */}
      <div className="text-center mb-14 mt-5">
        <MyHeading theme={theme} as='h2' className="text-3xl md:text-4xl font-semibold mb-4">
          {title}
        </MyHeading>
        <MyParagraph theme={theme} className='text-lg'>{subtitle}</MyParagraph>
      </div>

      {/* Comparison Visualization */}
      <div className="w-full h-auto md:h-[480px] flex flex-col md:flex-row mb-12 relative gap-8">
        {/* Before Column */}
        <div className="w-full h-full rounded-2xl shadow-md overflow-hidden relative z-10 bg-white"
        >
          <div className="px-6 py-10 flex flex-col h-full items-center">
            {/* Sad face image */}
            <div className="absolute top-10 w-12 h-12">
              <Image 
                src="/images/sad-face.jpg" 
                alt="Sad face" 
                width={48} 
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center">
              <MyHeading as='h4' className=" font-medium text-center leading-tight !max-w-[300px]">
                {beforeHeading}
              </MyHeading>
              <ul className="space-y-4 w-full mt-8">
                {displayItems.map((item, index) => (
                  <li key={`before-${index}`} className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 mr-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="12" fill="#FF4545" />
                          <path d="M15.5 8.5L8.5 15.5M8.5 8.5L15.5 15.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <MyParagraph theme={theme} className="text-base" style={{color: '#4B5563'}}>
                      {item.before}
                    </MyParagraph>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* After Column */}
        <div className="w-full h-full rounded-2xl bg-black border border-[#E5E7EB] shadow-lg relative "
        >
          <div className='w-full h-full rounded-2xl'
            style={{
              background: `linear-gradient(to bottom, ${GLOBALCSS_VAR.primaryColor20}, ${GLOBALCSS_VAR.primaryColor})`
            }}
          
          >

            <div className="px-8 py-10 flex flex-col h-full items-center justify-center">

              <div className=" bg-white p-4 rounded-lg">
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

              <div className="flex-1 flex flex-col justify-center">
                <MyHeading as='h4' className=" font-medium text-center" style={{color: '#fff'}}>
                  {afterHeading}
                </MyHeading>
                <ul className="space-y-4 mx-auto mt-8">
                  {displayItems.map((item, index) => (
                    <li key={`after-${index}`} className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 mr-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#EAFFEA" />
                        <path d="M8 12L10.5 14.5L16 9" stroke="#37CA37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                      <MyParagraph className="text-base text-white">
                        {item.after}
                      </MyParagraph>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-14">
        <PrimaryButton theme={theme}>{ctaText}</PrimaryButton>
      </div>
    </MySection>
  );
}; 
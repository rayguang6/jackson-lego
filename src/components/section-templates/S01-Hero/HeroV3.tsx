"use client";

import React from 'react';
import Image from 'next/image';
import { LogoIcon } from '@/components/template-ui/icons/LogoIcon';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import { HeroProps, defaultHeroProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { SectionHeading, Highlight } from '@/components/template-ui/SectionHeading';
import { MySection } from '@/components/template-ui/MySection';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
export const HeroV3: React.FC<HeroProps> = ({
  title = defaultHeroProps.title,
  subtitle = defaultHeroProps.subtitle,
  ctaText = defaultHeroProps.ctaText,
  badgeText = defaultHeroProps.badgeText,
  theme = defaultHeroProps.theme,
  features = defaultHeroProps.features,
  videoThumbnailUrl = TEMPLATE_IMAGES.HERO.VIDEO_THUMBNAIL_3,
  sectionId,
  credibilityText = defaultHeroProps.credibilityText
}: HeroProps) => {


  const isDark = theme === 'dark';
  
  return (
    <MySection 
      theme={theme}
      className="px-8">

      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Content */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="mb-8">
              <LogoIcon 
                theme={theme}
              />
            </div>

            {/* Badge */}
            <div className="">
              <Badge theme={theme}>
                {badgeText}
              </Badge>
            </div>

            {/* Title */}
            <SectionHeading theme={theme} className="max-w-[1000px] mt-8">
              {title}
              <Highlight> 
                  Maximum Efficiency
              </Highlight>
            </SectionHeading>

            <MyParagraph theme={theme} className="max-w-[1000px] mt-8">
              {subtitle}
            </MyParagraph>
  
            {/* Feature List */}
            <div className="flex gap-4 mt-2">
              {features?.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke={'var(--primary-color)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'var(--body-font)' }} className={`text-sm leading-[1.75] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {feature}
                    </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <PrimaryButton theme={theme}>
                {ctaText}
              </PrimaryButton>
            </div>

            <div className="mt-8 flex flex-col gap-2">
              <div className="h-8">
                <Image 
                  src={TEMPLATE_IMAGES.HERO.AVATAR_GROUP}
                  alt="Active users"
                  width={200}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p style={{ fontFamily: 'var(--body-font)' }} className={`text-sm font-medium ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                {credibilityText}
              </p>
            </div>
          </div>

          {/* Right Video Thumbnail */}
          <div className="relative w-full rounded-[20px] overflow-hidden flex items-center justify-center">
            <div className={`relative h-full rounded-[15px] overflow-hidden `}>
              <Image
                src={videoThumbnailUrl}
                alt="Video thumbnail"
                width={500}
                height={500}
                style={{ objectFit: 'cover' }}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </MySection>
  );
}; 
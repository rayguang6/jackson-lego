"use client";

import React from 'react';
import Image from 'next/image';
import { LogoIcon } from '@/components/template-ui/icons/LogoIcon';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import { HeroProps, defaultHeroProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { MyHeading, Highlight } from '@/components/template-ui/MyHeading';
import { MySection } from '@/components/template-ui/MySection';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { EditableText } from '@/components/editable/EditableText';

export const HeroV3: React.FC<HeroProps> = ({
  logoName = defaultHeroProps.logoName,
  title = defaultHeroProps.title,
  subtitle = defaultHeroProps.subtitle,
  ctaText = defaultHeroProps.ctaText,
  badgeText = defaultHeroProps.badgeText,
  theme = defaultHeroProps.theme,
  imageUrl = TEMPLATE_IMAGES.HERO.VIDEO_THUMBNAIL_3,
  feature1 = defaultHeroProps.feature1,
  feature2 = defaultHeroProps.feature2,
  feature3 = defaultHeroProps.feature3,
  sectionId = defaultHeroProps.sectionId || '',
  credibilityText = defaultHeroProps.credibilityText,
  highlightText = defaultHeroProps.highlightText,
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

              <div className="flex items-center justify-start gap-3">
                <LogoIcon 
                  theme={theme}
                />
                <MyHeading as="h4" theme={theme} className="m-0">
                  <EditableText
                    sectionId={sectionId}
                    defaultValue={logoName}
                    contentPath={`logoName`}
                  />
                </MyHeading>
              </div>


            {/* Badge */}
            <div className="mt-5">
              <Badge theme={theme}>
                <EditableText
                  sectionId={sectionId}
                  defaultValue={badgeText}
                  contentPath={`badgeText`}
                />
              </Badge>
            </div>

            {/* Title */}
            <MyHeading theme={theme} as='h1' className="max-w-[1000px] mt-8">
              <EditableText
                sectionId={sectionId}
                defaultValue={title}
                contentPath={`title`}
              />
              <Highlight> 
                <EditableText
                  sectionId={sectionId}
                  defaultValue={highlightText}
                  contentPath={`highlightText`}
                />
              </Highlight>
            </MyHeading>

            <MyParagraph theme={theme} className="max-w-[1000px] mt-8">
              <EditableText
                sectionId={sectionId}
                defaultValue={subtitle}
                contentPath={`subtitle`}
              />
            </MyParagraph>
  
            {/* Feature List */}
            <div className="flex gap-4 mt-2">

              {/* Feature 1 */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke={'var(--primary-color)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'var(--body-font)' }} className={`text-sm leading-[1.75] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <EditableText
                      sectionId={sectionId}
                      defaultValue={feature1}
                      contentPath={`feature1`}
                    />
                    </span>
                </div>  
              {/* Feature 2 */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke={'var(--primary-color)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'var(--body-font)' }} className={`text-sm leading-[1.75] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <EditableText
                      sectionId={sectionId}
                      defaultValue={feature2}
                      contentPath={`feature2`}
                    />
                    </span>
                </div>  
              {/* Feature 3 */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke={'var(--primary-color)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'var(--body-font)' }} className={`text-sm leading-[1.75] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <EditableText
                      sectionId={sectionId}
                      defaultValue={feature3}
                      contentPath={`feature3`}
                    />
                    </span>
                </div>  



            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <PrimaryButton theme={theme}>
                <EditableText
                  sectionId={sectionId} 
                  defaultValue={ctaText}
                  contentPath={`ctaText`}
                  className="w-full"
                />
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
                <EditableText
                  sectionId={sectionId}
                  defaultValue={credibilityText || ''}
                  contentPath={`credibilityText`}
                  className="w-full"
                />
              </p>
            </div>
          </div>

          {/* Right Video Thumbnail */}
          <div className="relative w-full rounded-[20px] overflow-hidden flex items-center justify-center">
            <div className={`relative h-full rounded-[15px] overflow-hidden `}>
              <Image
                src={imageUrl}
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
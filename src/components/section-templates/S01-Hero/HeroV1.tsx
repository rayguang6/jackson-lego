'use client';

import React from 'react';
import Image from 'next/image';
import { LogoIcon } from '@/components/template-ui/icons/LogoIcon';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import { HeroProps, defaultHeroProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading, Highlight } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { PlayButton } from '@/components/template-ui/PlayButton';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { BaseSectionProps } from '@/lib/types';
import { EditableText } from '@/components/editable/EditableText';

export const HeroV1: React.FC<HeroProps> = ({
  logoName = defaultHeroProps.logoName,
  title = defaultHeroProps.title,
  highlightText = defaultHeroProps.highlightText,
  subtitle = defaultHeroProps.subtitle,
  ctaText = defaultHeroProps.ctaText,
  badgeText = defaultHeroProps.badgeText,
  theme = defaultHeroProps.theme,
  imageUrl = TEMPLATE_IMAGES.HERO.VIDEO_THUMBNAIL_5,
  sectionId = defaultHeroProps.sectionId || ''
}: HeroProps) => {
  
  return (
    <MySection 
      theme={theme}
      className="flex flex-col items-center text-center !pb-0"
    >
      {/* Logo */}
      <div className="flex justify-center w-full items-center">
        <div className="flex items-center justify-center gap-3">
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
      </div>

      {/* Badge */} 
      <Badge 
        theme={theme}
        className="mt-10"
      >
        <EditableText
          sectionId={sectionId}
          defaultValue={badgeText}
          contentPath={`badgeText`}
        />
      </Badge>

      {/* Title */}
      <MyHeading theme={theme} as='h1' className="max-w-[800px] mt-5">
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

      <MyParagraph  theme={theme} className="max-w-[800px] mt-5">
        <EditableText 
          sectionId={sectionId}
          defaultValue={subtitle}
          contentPath={`subtitle`}
        />
      </MyParagraph>

      {/* CTA Button */}
      <PrimaryButton theme={theme} className="mt-10">
        <EditableText 
          sectionId={sectionId}
          defaultValue={ctaText}
          contentPath={`ctaText`}
        />
      </PrimaryButton>

      {/* Video Thumbnail */}
      <div className="mt-15 relative w-full max-w-[1000px] max-h-[400px] min-w-[500px] rounded-t-lg aspect-video overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
        <Image
          src={imageUrl}
          alt="Video thumbnail"
          fill
          style={{ objectFit: 'cover' }}
          className='mt-5'
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <PlayButton size="md" />
        </div>
      </div>
    </MySection>
  );
}; 
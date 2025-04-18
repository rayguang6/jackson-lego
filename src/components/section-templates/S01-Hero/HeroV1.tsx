'use client';

import React from 'react';
import Image from 'next/image';
import { LogoIcon } from '@/components/template-ui/icons/LogoIcon';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import { HeroProps, defaultHeroProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { SectionHeading, Highlight } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { PlayButton } from '@/components/template-ui/PlayButton';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { BaseSectionProps } from '@/lib/types';

export const HeroV1: React.FC<HeroProps> = ({
  title = defaultHeroProps.title,
  subtitle = defaultHeroProps.subtitle,
  ctaText = defaultHeroProps.ctaText,
  badgeText = defaultHeroProps.badgeText,
  theme = defaultHeroProps.theme,
  videoThumbnailUrl = TEMPLATE_IMAGES.HERO.VIDEO_THUMBNAIL_4,
  sectionId
}: HeroProps) => {
  
  return (
    <MySection 
      theme={theme}
      className="flex flex-col items-center text-center !pb-0"
    >
      {/* Logo */}
      <div className="mb-8">
        <LogoIcon 
          theme={theme}
          className='mx-auto'
        />
      </div>

      {/* Badge */} 
      <Badge 
        theme={theme}
      >
        {badgeText}
      </Badge>


      {/* Title */}
      <SectionHeading theme={theme} className="max-w-[800px] mt-5">
        {title}
        <Highlight>
            Maximum Efficiency
        </Highlight>
      </SectionHeading>

      <MyParagraph theme={theme} className="max-w-[800px] mt-5">
        {subtitle}
      </MyParagraph>


         

      {/* CTA Button */}
      <PrimaryButton theme={theme} className="mt-8">
        {ctaText}
      </PrimaryButton>

      {/* Video Thumbnail */}
      <div className="mt-16 relative w-full max-w-[1000px] max-h-[400px] rounded-t-lg aspect-video overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
        <Image
          src={videoThumbnailUrl}
          alt="Video thumbnail"
          fill
          style={{ objectFit: 'cover' }}
          className=""
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <PlayButton size="md" />
        </div>
      </div>
    </MySection>
  );
}; 
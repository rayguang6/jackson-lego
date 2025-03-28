'use client';

import React from 'react';
import Image from 'next/image';
import { LogoIcon } from '@/components/icons/LogoIcon';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import { HeroProps, defaultHeroProps } from './types';
import { useDesign } from '@/lib/contexts/DesignContext';
import { MySection } from '@/components/common/MySection';
import { Badge } from '@/components/common/Badge';
import { SectionHeading, Highlight } from '@/components/common/SectionHeading';
import { MyParagraph } from '@/components/common/MyParagraph';
import { PlayButton } from '@/components/common/PlayButton';
import { PrimaryButton } from '@/components/common/PrimaryButton';

export const HeroV2: React.FC<HeroProps> = ({
  title = "Multipurpose Page Blocks Designed for ",
  subtitle = defaultHeroProps.subtitle,
  ctaText = defaultHeroProps.ctaText,
  badgeText = defaultHeroProps.badgeText,
  theme = defaultHeroProps.theme,
  videoThumbnailUrl = TEMPLATE_IMAGES.HERO.VIDEO_THUMBNAIL_3
}) => {
  const { primaryColor, headingFont, bodyFont } = useDesign().styleGuide;

  const isDark = theme === 'dark';
  
  return (
    <MySection 
      theme={theme}
      className="flex flex-col items-center text-center py-0 pb-0"
    >
      {/* Logo */}
      <div className="mb-8">
        <LogoIcon 
          brandColor={primaryColor}
          theme={theme}
        />
      </div>

      {/* Badge */} 
      <Badge 
        text={badgeText}
        theme={theme}
      />

      {/* Title */}
      <SectionHeading theme={theme} className="max-w-[1000px]">
        {title}{' '}
        <Highlight>Maximum Efficiency</Highlight>
      </SectionHeading>


      <MyParagraph theme={theme} className="max-w-[1000px]" text={subtitle} />

      {/* CTA Button */}
      <PrimaryButton text={ctaText} theme={theme} className="mb-12" />

      {/* Video Thumbnail */}
      <div className="relative w-full max-w-[800px] overflow-hidden">
        <Image
          src={videoThumbnailUrl}
          alt="Video thumbnail"
          width={800}
          height={450}
          className="w-full"
        />
        
      </div>
    </MySection>
  );
}; 
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
import { useDesignStore } from '@/lib/store/designStore';
import { EditableText } from '@/components/editable/EditableText';


export const HeroV2: React.FC<HeroProps> = ({
  title = "Multipurpose Page Blocks Designed for ",
  subtitle = defaultHeroProps.subtitle,
  ctaText = defaultHeroProps.ctaText,
  badgeText = defaultHeroProps.badgeText,
  theme = defaultHeroProps.theme,
  videoThumbnailUrl = TEMPLATE_IMAGES.HERO.VIDEO_THUMBNAIL_2,
  sectionId
}: HeroProps) => {


  const isDark = theme === 'dark';
  
  return (
    <MySection 
      theme={theme}
      className="flex flex-col items-center text-center py-0 !pb-0"
    >
      {/* Logo */}
      <div className="mb-8">
        <LogoIcon 
          theme={theme}
        />
      </div>

      {/* Badge */} 
      <Badge 
        theme={theme}
      >
        <EditableText
            sectionId={sectionId}
            contentPath="badgeText"
            defaultValue={badgeText}
          />
      </Badge>

      {/* Title */}
      <SectionHeading theme={theme} className="max-w-[1000px] mt-8">
        {sectionId ? (
          <EditableText
            sectionId={sectionId}
            contentPath="title"
            defaultValue={title}
            className='inline max-w-[1000px]'
          />
        ) : (
          title
        )}{' '}
        <Highlight>
          {sectionId ? (
            <EditableText
              sectionId={sectionId}
              contentPath="highlight"
              defaultValue={"Maximum Efficiency"}
              className='inline'
            />
          ) : (
            "Maximum Efficiency"
          )}
        </Highlight>
      </SectionHeading>


      <MyParagraph theme={theme} className="max-w-[1000px] mt-8">
        <EditableText
            sectionId={sectionId}
            contentPath="subtitle"
            defaultValue={subtitle}
          />
      </MyParagraph>

      {/* CTA Button */}
      <PrimaryButton theme={theme} className="mt-8">
        <EditableText
            sectionId={sectionId}
            contentPath="ctaText"
            defaultValue={ctaText}
          />
      </PrimaryButton>

      {/* Video Thumbnail */}
      <div className="relative w-full max-w-[1000px] max-h-[400px] overflow-hidden mt-16">
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
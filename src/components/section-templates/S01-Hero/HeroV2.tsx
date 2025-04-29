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
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { EditableText } from '@/components/editable/EditableText';


export const HeroV2: React.FC<HeroProps> = ({
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


  const isDark = theme === 'dark';
  
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
          className="w-full"
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
          className="w-full"
        />
      </PrimaryButton>

      {/* Video Thumbnail */}
      <div className="relative w-full max-w-[1000px] max-h-[400px] overflow-hidden mt-16">
        <Image
          src={imageUrl}
          alt="Video thumbnail"
          width={800}
          height={450}
          className="w-full"
        />
        <div className="absolute top-15 left-0 w-full h-full flex items-center justify-center">
          <svg width="128" height="128" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.2" cx="72.0007" cy="72.0007" r="72.0007" fill={GLOBALCSS_VAR.primaryColor} fill-opacity="0.92"/>
            <circle opacity="0.5" cx="72.0012" cy="72.0002" r="62.7952" fill={GLOBALCSS_VAR.primaryColor}/>
            <circle opacity="0.5" cx="72.0043" cy="72.0028" r="52.932" fill={GLOBALCSS_VAR.primaryColor}/>
            <circle opacity="0.2" cx="72.0053" cy="72.0019" r="42.4115" fill={GLOBALCSS_VAR.primaryColor}/>
            <circle opacity="0.2" cx="72.001" cy="72.0035" r="33.2071" fill={GLOBALCSS_VAR.primaryColor}/>
            <path d="M82.8132 72.2503C82.814 72.5703 82.7317 72.885 82.5742 73.1638C82.4167 73.4427 82.1894 73.6762 81.9145 73.8416L64.876 84.2233C64.5887 84.3985 64.2597 84.4942 63.923 84.5004C63.5862 84.5066 63.2538 84.4231 62.9602 84.2586C62.6695 84.0967 62.4272 83.8605 62.2585 83.5745C62.0897 83.2884 62.0005 82.9627 62 82.6308V61.8699C62.0005 61.538 62.0897 61.2123 62.2585 60.9262C62.4272 60.6401 62.6695 60.404 62.9602 60.242C63.2538 60.0776 63.5862 59.9941 63.923 60.0003C64.2597 60.0065 64.5887 60.1022 64.876 60.2774L81.9145 70.6591C82.1894 70.8245 82.4167 71.058 82.5742 71.3369C82.7317 71.6157 82.814 71.9304 82.8132 72.2503Z" fill="white"/>
          </svg>
        </div>

        
        
      </div>
    </MySection>
  );
}; 
import React from 'react';
import Image from 'next/image';

interface HeroLightV1Props {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  badgeText?: string;
  badgeIconColor?: string;
}

export const HeroLightV1: React.FC<HeroLightV1Props> = ({
  title = "Multipurpose Page Blocks Designed for Maximum Efficiency",
  subtitle = "Skip design frustration and launch your site fast with pre-designed, proven components.",
  ctaText = "GET INSTANT ACCESS",
  badgeText = "The #1 Community for Game-Changers",
  badgeIconColor = "#EF083A"
}) => {
  const titleParts = title.split('Maximum Efficiency');
  
  return (
    <section className="w-full bg-white pt-16 pb-0 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image 
              src="/images/brand-logo.png"
              alt="YourBrand"
              width={140}
              height={32}
              priority
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <Image 
              src="/images/ai-icon.svg"
              alt="AI Icon"
              width={21}
              height={20}
              className="mr-2"
            />
            <span className="font-archivo text-sm font-medium text-[#111827]">{badgeText}</span>
          </div>

          {/* Title */}
          <h1 className="font-manrope text-[48px] leading-[1.2] font-extrabold text-[#111827] mb-4 max-w-[800px]">
            {titleParts[0]}
            <span className="text-[#EF083A]">Maximum Efficiency</span>
            {titleParts[1]}
          </h1>

          {/* Subtitle */}
          <p className="font-archivo text-[20px] leading-[1.6] font-normal text-[#4B5563] mb-8 max-w-[800px]">
            {subtitle}
          </p>

          {/* CTA Button */}
          <button className="font-archivo inline-flex items-center px-6 py-4 bg-[#EF083A] text-white rounded-lg font-semibold text-base hover:bg-[#d00733] transition-colors shadow-[0_2px_4px_rgba(239,8,58,0.1)] mb-12">
            {ctaText}
            <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16669L15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Video Thumbnail */}
          <div className="relative w-full max-w-[800px] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/Lock_Banner.png"
              alt="Video thumbnail"
              width={800}
              height={450}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 
'use client';

import React from 'react';
import Image from 'next/image';
import { useDesign } from '@/lib/contexts/DesignContext';
import { LogoIcon } from '@/components/icons/LogoIcon';
import BaseSection from '../BaseSection';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';

interface HeroV1Props {
  theme?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
  ctaText?: string;
  badgeText?: string;
  badgeIconColor?: string;
  features?: string[];
}

export const HeroV1: React.FC<HeroV1Props> = ({
  theme = 'light',
  title = "Multipurpose Page Blocks Designed for Maximum Efficiency",
  subtitle = "Skip design frustration and launch your site fast with pre-designed, proven components.",
  ctaText = "GET INSTANT ACCESS",
  badgeText = "The #1 Community for Game-Changers",
  badgeIconColor,
  features = ["Build for Speed", "Proven Design", "Launch Like A Pro"]
}) => {
  // Add a try/catch to handle cases when not within a DesignProvider
  let contextPrimaryColor = "#EF083A"; // Default to fallback
  let headingFont = "var(--font-manrope), system-ui, sans-serif";
  let bodyFont = "var(--font-archivo), system-ui, sans-serif";
  
  try {
    const { styleGuide } = useDesign();
    contextPrimaryColor = styleGuide.colors.primary;
    headingFont = styleGuide.typography.headingFont;
    bodyFont = styleGuide.typography.bodyFont;
  } catch (error) {
    // Use the default values if not within a DesignProvider
    console.log("Using default styling for preview");
  }
  
  // Use the badge icon color if provided, otherwise use the primary color
  const primaryColor = badgeIconColor || contextPrimaryColor;

  const isDark = theme === 'dark';
  
  const titleParts = title.split('Maximum Efficiency');
  
  return (
    <BaseSection 
      backgroundColor={isDark ? "black" : "white"}
      paddingY="large"
      centered={true}
      sectionType="hero"
    >
      {/* Logo */}
      <div className="mb-8">
        <LogoIcon 
          brandColor={primaryColor}
          theme={isDark ? 'dark' : 'light'}
        />
      </div>

      {/* Badge */}
      <div className={`inline-flex items-center ${isDark ? 'bg-zinc-800' : 'bg-white'} rounded-full px-4 py-2 mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]`}>
        <svg 
          width="21" 
          height="20" 
          viewBox="0 0 21 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M16.3333 1.6665C16.6023 2.91908 17.5807 3.89753 18.8333 4.1665C17.5807 4.43548 16.6023 5.41393 16.3333 6.6665C16.0643 5.41393 15.0859 4.43548 13.8333 4.1665C15.0859 3.89753 16.0643 2.91908 16.3333 1.6665ZM8.06 1.83317C8.81958 5.37044 11.5827 8.13359 15.12 8.89317C11.5827 9.65276 8.81958 12.4159 8.06 15.9532C7.30042 12.4159 4.53726 9.65276 1 8.89317C4.53726 8.13359 7.30042 5.37044 8.06 1.83317ZM18.8333 14.9998C17.1632 14.6412 15.8586 13.3366 15.5 11.6665C15.1413 13.3366 13.8367 14.6412 12.1666 14.9998C13.8367 15.3585 15.1413 16.6631 15.5 18.3332C15.8586 16.6631 17.1632 15.3585 18.8333 14.9998Z" 
            style={{ fill: primaryColor }}
          />
        </svg>
        <span style={{ fontFamily: bodyFont }} className={`font-archivo text-sm font-medium ${isDark ? 'text-white' : 'text-[#111827]'}`}>{badgeText}</span>
      </div>

      {/* Title */}
      <h1 style={{ fontFamily: headingFont }} className={`font-manrope text-[48px] leading-[1.2] font-extrabold ${isDark ? 'text-white' : 'text-[#111827]'} mb-4 max-w-[800px]`}>
        {titleParts.length > 1 ? (
          <>
            {titleParts[0]}
            <span style={{ color: primaryColor, fontFamily: headingFont }}>Maximum Efficiency</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h1>

      {/* Subtitle */}
      <p style={{ fontFamily: bodyFont }} className={`font-archivo text-[20px] leading-[1.6] font-normal ${isDark ? 'text-gray-300' : 'text-[#4B5563]'} mb-8 max-w-[800px]`}>
        {subtitle}
      </p>

      {/* CTA Button */}
      <button 
        className="font-archivo inline-flex items-center px-6 py-4 text-white rounded-lg font-semibold text-base hover:opacity-90 transition-colors shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-12"
        style={{ backgroundColor: primaryColor }}
      >
        {ctaText}
        <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 4.16669L15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Video Thumbnail */}
      <div className="relative w-full max-w-[800px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
        <Image
          src={TEMPLATE_IMAGES.HERO.VIDEO_THUMBNAIL}
          alt="Video thumbnail"
          width={800}
          height={450}
          className="w-full"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5.14301V19.143L19 12.143L8 5.14301Z" 
                style={{ fill: primaryColor, stroke: primaryColor }} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </BaseSection>
  );
}; 
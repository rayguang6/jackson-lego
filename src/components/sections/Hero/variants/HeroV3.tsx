"use client";

import React from 'react';
import Image from 'next/image';
import { useDesign } from '@/lib/contexts/DesignContext';
import { LogoIcon } from '@/components/icons/LogoIcon';

interface HeroV3Props {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  badgeText?: string;
  features?: string[];
  usersCount?: string;
  theme?: 'light' | 'dark';
}

export const HeroV3: React.FC<HeroV3Props> = ({
  title = "Multipurpose Page Blocks Designed for Maximum Efficiency",
  subtitle = "Skip design frustration and launch your site fast with pre-designed, proven components.",
  ctaText = "GET INSTANT ACCESS",
  badgeText = "Generative Business Intelligence for Team",
  features = ["Build for Speed", "Proven, High Impact Design", "Launch Like A Pro"],
  usersCount = "2,000+",
  theme = 'light'
}) => {
  // Add a try/catch to handle cases when not within a DesignProvider
  let primaryColor = "#EF083A"; // Default color
  let headingFont = "var(--font-manrope), system-ui, sans-serif";
  let bodyFont = "var(--font-archivo), system-ui, sans-serif";
  
  try {
    const { styleGuide } = useDesign();
    primaryColor = styleGuide.colors.primary;
    headingFont = styleGuide.typography.headingFont;
    bodyFont = styleGuide.typography.bodyFont;
  } catch (error) {
    // Use default values if not within a DesignProvider
    console.log("Using default styling for preview");
  }

  const isDark = theme === 'dark';
  
  return (
    <section className={`w-full ${isDark ? 'bg-[#0B0F17]' : 'bg-white'} py-20 px-4 relative overflow-hidden`}>
      {/* Background gradient effects - only in dark mode */}
      {isDark && <div className="absolute inset-0 bg-gradient-radial from-[#780820] to-[#0A0101] opacity-90" />}
      
      <div className="max-w-[1200px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="mb-8">
              <LogoIcon 
                brandColor={primaryColor}
                theme={isDark ? 'dark' : 'light'}
              />
            </div>

            {/* Badge */}
            <div className={`inline-flex items-center ${isDark ? 'bg-[#EF083A]/5 backdrop-blur-sm border border-white/[0.15]' : 'bg-gray-50'} rounded-[25px] px-4 py-2 mb-8 w-fit`}>
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
              <span style={{ fontFamily: bodyFont }} className={`font-archivo text-base font-medium ${isDark ? 'text-white/90' : 'text-gray-900'}`}>{badgeText}</span>
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: headingFont }} className={`font-manrope text-[44px] leading-[1.2] font-normal ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
              {title}
            </h1>

            {/* Subtitle */}
            <p style={{ fontFamily: bodyFont }} className={`font-manrope text-base leading-[1.67] font-normal ${isDark ? 'text-white/70' : 'text-gray-600'} mb-8`}>
              {subtitle}
            </p>

            {/* Feature List */}
            <div className="flex gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: bodyFont }} className={`font-manrope text-sm leading-[1.75] ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              className="group font-archivo inline-flex items-center px-6 py-3 text-white rounded-lg font-bold text-base hover:opacity-90 transition-all duration-300 mb-8 w-fit"
              style={{ backgroundColor: primaryColor }}
            >
              {ctaText}
              <svg className="ml-2 group-hover:translate-x-1 transition-transform duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16663 10H15.8333M15.8333 10L10 4.16669M15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Users Count */}
            <div className="flex flex-col gap-2">
              <div className="h-8">
                <Image 
                  src="/images/avatar-group.png"
                  alt="Active users"
                  width={200}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p style={{ fontFamily: bodyFont }} className={`font-manrope text-sm font-medium ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                Join {usersCount} Game-Changers Using <span className={isDark ? 'text-white' : 'text-gray-900'}>YourBrand</span> Today.
              </p>
            </div>
          </div>

          {/* Right Video Thumbnail */}
          <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden">
            <div className={`relative h-full rounded-[15px] overflow-hidden ${isDark ? 'bg-[#0B0B0B]' : 'bg-gray-100'}`}>
              <Image
                src="/images/video-thumbnail-2.png"
                alt="Video thumbnail"
                fill
                style={{ objectFit: 'cover' }}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
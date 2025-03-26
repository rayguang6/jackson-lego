'use client';

import React from 'react';
import Image from 'next/image';
import { useDesign } from '@/lib/contexts/DesignContext';

interface HeroV1Props {
  theme?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
  ctaText?: string;
  badgeText?: string;
  features?: string[];
}

export const HeroV1: React.FC<HeroV1Props> = ({
  theme = 'light',
  title = "Multipurpose Page Blocks Designed for Maximum Efficiency",
  subtitle = "Skip design frustration and launch your site fast with pre-designed, proven components.",
  ctaText = "GET INSTANT ACCESS",
  badgeText = "The #1 Community for Game-Changers",
  features = ["Build for Speed", "Proven Design", "Launch Like A Pro"]
}) => {
  const { styleGuide } = useDesign();
  const primaryColor = styleGuide.colors.primary || "#2563eb";
  const headingFont = styleGuide.typography.headingFont || "var(--font-manrope)";
  const bodyFont = styleGuide.typography.bodyFont || "var(--font-archivo)";

  const isDark = theme === 'dark';

  // Define theme colors
  const colors = {
    background: isDark ? 'bg-gray-900' : 'bg-white',
    badge: isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600',
    title: isDark ? 'text-white' : 'text-gray-900',
    text: isDark ? 'text-gray-300' : 'text-gray-600',
    imageBg: isDark ? 'bg-gray-800' : 'bg-gray-100'
  };

  return (
    <section className={`w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-full mb-8 ${colors.badge}`}>
              <span style={{ fontFamily: bodyFont }} className="text-sm font-medium">
                {badgeText}
              </span>
            </div>

            {/* Title */}
            <h1 
              style={{ fontFamily: headingFont }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${colors.title}`}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p 
              style={{ fontFamily: bodyFont }}
              className={`text-xl mb-8 ${colors.text}`}
            >
              {subtitle}
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 ${colors.text}`}
                >
                  <svg 
                    className="w-5 h-5"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span style={{ fontFamily: bodyFont }}>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              className="inline-flex items-center px-6 py-3 rounded-lg font-bold text-white 
                transition-all duration-200 hover:opacity-90"
              style={{ 
                fontFamily: bodyFont,
                backgroundColor: primaryColor
              }}
            >
              {ctaText}
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </button>
          </div>

          {/* Right Image/Video */}
          <div className="flex-1">
            <div className={`relative rounded-2xl overflow-hidden ${colors.imageBg}`}>
              <Image
                src="/images/video-thumbnail-2.png"
                alt="Hero image"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
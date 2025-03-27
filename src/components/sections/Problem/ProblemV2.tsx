'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { StarIcon } from '@/components/icons';

interface Problem {
  highlight: string;
  text: string;
}

interface ProblemV2Props {
  theme?: 'light' | 'dark';
  badge?: string;
  title?: string;
  subtitle?: string;
  extraText?: string;
  problems?: Problem[];
}

export const ProblemV2: React.FC<ProblemV2Props> = ({
  theme = 'light',
  badge = "PROBLEM",
  title = "Does this sound like you?",
  subtitle = "It's time to take control and design like a pro — fast and easy.",
  extraText = "... and a lot more, but I don't want to keep you here for an hour.",
  problems = [
    {
      highlight: "Confused by complex design tools",
      text: " that take more time than they're worth?"
    },
    {
      highlight: "Wasting hours",
      text: " on designs that don't drive results or conversions?"
    },
    {
      highlight: "Struggling with technical issues",
      text: " slowing down your site's performance?"
    },
    {
      highlight: "Losing potential customers",
      text: " because your site is not visually appealing or engaging enough?"
    }
  ]
}) => {
  const { styleGuide } = useDesign();
  const primaryColor = styleGuide.colors.primary || "#EF083A";
  const headingFont = styleGuide.typography.headingFont || "var(--font-manrope)";
  const bodyFont = styleGuide.typography.bodyFont || "var(--font-archivo)";

  const isDark = theme === 'dark';

  // Convert hex to RGB for background opacity
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(primaryColor);
  const containerBg = isDark 
    ? 'bg-white/[0.02]' 
    : rgb 
      ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.03)` 
      : '#FFF8F9';

  // Define theme colors based on Figma design
  const colors = {
    background: isDark ? 'bg-[#0B0F17]' : 'bg-white',
    badge: {
      bg: isDark ? 'bg-[#EF083A]/5' : 'bg-white',
      text: isDark ? 'text-white/90' : `text-[${primaryColor}]`,
      border: isDark ? 'border-white/[0.15]' : 'border-[#B6BCCD]'
    },
    title: {
      text: isDark ? 'text-white' : 'text-[#343434]',
      highlight: isDark ? 'text-white' : `text-[${primaryColor}]`
    },
    subtitle: isDark ? 'text-white/70' : 'text-[#4B5162]',
    extraText: isDark ? 'text-white' : 'text-[#343434]',
    problem: {
      bg: isDark ? 'bg-white/[0.02]' : 'bg-white',
      border: isDark ? 'border-white/[0.08]' : 'border-[#E4E4E7]',
      highlight: isDark ? `text-[${primaryColor}]` : `text-[${primaryColor}]`,
      text: isDark ? 'text-white/90' : 'text-[#18181B]'
    }
  };

  return (
    <section className={`w-full ${colors.background} py-[100px] relative overflow-hidden`}>
      <div className="max-w-[1010px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-[30px]">
          {/* Badge */}
          <div className={`
            inline-flex items-center px-5 py-2 rounded-[20px]
            ${colors.badge.bg} ${colors.badge.text} ${colors.badge.border}
            border shadow-[0px_10px_18px_0px_rgba(58,76,146,0.10),0px_2px_6px_0px_rgba(44,58,114,0.05),0px_0px_1px_0px_rgba(44,58,114,0.05)]
            gap-2
          `}>
            <StarIcon 
              color={primaryColor}
              className="flex-shrink-0"
            />
            <span 
              style={{ fontFamily: bodyFont }} 
              className="text-base font-medium tracking-[0.1em] uppercase"
            >
              {badge}
            </span>
          </div>

          {/* Title */}
          <h2 
            style={{ fontFamily: headingFont }}
            className="text-[36px] font-semibold leading-[1.2] text-center max-w-[600px]"
          >
            <span className={colors.title.text}>Does this sound like </span>
            <span className={colors.title.highlight}>you</span>
            <span className={colors.title.text}>?</span>
          </h2>

          {/* Subtitle */}
          <p 
            style={{ fontFamily: headingFont }}
            className={`text-lg leading-[1.833] text-center max-w-[600px] ${colors.subtitle}`}
          >
            {subtitle}
          </p>

          {/* Problems Container */}
          <div 
            className={`w-full rounded-[20px] overflow-hidden ${isDark ? 'bg-white/[0.02]' : ''}`}
            style={{ backgroundColor: isDark ? undefined : containerBg }}
          >
            {/* Extra Text Header */}
            <div className="w-full py-8 px-12">
              <h3 
                style={{ fontFamily: headingFont }}
                className={`text-[28px] text-center font-medium leading-[1.4] ${colors.extraText}`}
              >
                {extraText}
              </h3>
            </div>

            {/* Problems List */}
            <div className="p-8 flex flex-col gap-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className={`
                    flex items-start gap-6 p-6 rounded-[10px]
                    ${isDark ? 'bg-white/[0.02] border-white/[0.08]' : 'bg-white border-[#E4E4E7]'}
                    border
                    ${isDark ? '' : 'shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]'}
                  `}
                >
                  <div className="flex-shrink-0 text-xl leading-none mt-1">❌</div>
                  <div className="flex-1">
                    <span style={{ color: isDark ? 'white' : primaryColor }} className="font-medium">
                      {problem.highlight}
                    </span>
                    <span className={isDark ? 'text-white/90' : 'text-[#18181B]'}>
                      {problem.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
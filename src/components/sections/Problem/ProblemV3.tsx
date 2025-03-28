'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { StarIcon } from '@/components/icons';
import { MySection } from '@/components/common/MySection';

interface Problem {
  title: string;
  description: string;
}

interface ProblemV3Props {
  theme?: 'light' | 'dark';
  badge?: string;
  title?: string;
  subtitle?: string;
  problems?: Problem[];
}

export const ProblemV3: React.FC<ProblemV3Props> = ({
  theme = 'light',
  badge = "PROBLEM",
  title = "Are you tired of running into these problems?",
  subtitle = "It's time to take control and design like a pro — fast and easy.",
  problems = [
    {
      title: "Limited Flexibility:",
      description: " Traditional design tools often restrict your creativity with rigid templates and preset structures."
    },
    {
      title: "Time-Consuming",
      description: " Spending countless hours refining designs in slow, inefficient tools can delay your projects."
    },
    {
      title: "Inconsistent Results",
      description: " Achieving a polished, professional look is challenging with outdated tools that lack cohesion."
    },
    {
      title: "Slow Performance",
      description: " Unresponsive tools hinder your workflow, slowing down design processes and frustrating your progress."
    }
  ]
}) => {
  const { styleGuide } = useDesign();
  const primaryColor = styleGuide.primaryColor || "#EF083A";
  const headingFont = styleGuide.headingFont || "var(--font-manrope)";
  const bodyFont = styleGuide.bodyFont || "var(--font-archivo)";

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
    background: isDark ? 'bg-[#0B0F17]' : '',
    badge: {
      bg: isDark ? 'bg-[#EF083A]/5' : 'bg-white',
      text: isDark ? 'text-white/90' : `text-[${primaryColor}]`,
      border: isDark ? 'border-white/[0.15]' : 'border-[#B6BCCD]'
    },
    title: isDark ? 'text-white' : 'text-[#343434]',
    subtitle: isDark ? 'text-white/70' : 'text-[#4B5162]',
    problem: {
      bg: isDark ? 'bg-white/[0.02]' : 'bg-white',
      border: isDark ? 'border-white/[0.08]' : 'border-[#E4E4E7]',
      title: isDark ? 'text-white' : `text-[${primaryColor}]`,
      text: isDark ? 'text-white/90' : 'text-[#18181B]'
    }
  };

  return (
    <MySection 
      theme={theme} 
      className={`w-full ${colors.background} py-[100px] relative overflow-hidden`}
    >
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
            className={`text-[36px] font-semibold leading-[1.2] text-center max-w-[600px] ${colors.title}`}
          >
            {title}
          </h2>

          {/* Subtitle */}
          <p 
            style={{ fontFamily: headingFont }}
            className={`text-lg leading-[1.833] text-center max-w-[600px] ${colors.subtitle}`}
          >
            {subtitle}
          </p>

          {/* Problems Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className={`
                  flex items-start gap-6 p-6 rounded-[10px] border
                  ${colors.problem.bg} ${colors.problem.border}
                  shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
                `}
              >
                <div className="flex-shrink-0 text-xl leading-none mt-1">❌</div>
                <div className="flex-1">
                  <span className={`font-medium ${colors.problem.title}`}>
                    {problem.title}
                  </span>
                  <span className={`${colors.problem.text} text-[15px] leading-[1.6]`}>
                    {problem.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MySection>
  );
}; 
'use client';

import React from 'react';
import Image from 'next/image';
import { useDesign } from '@/lib/contexts/DesignContext';
import { StarIcon } from '@/components/icons';
import { LogoIcon } from '@/components/icons/LogoIcon';
import { Section } from '@/components/common/MySection';

interface ProblemV1Props {
  theme?: 'light' | 'dark';
  badge?: string;
  title?: string;
  subtitle?: string;
  problems?: {
    text: string;
    icon?: string;
  }[];
}

export const ProblemV1: React.FC<ProblemV1Props> = ({
  theme = 'light',
  badge = "PROBLEM",
  title = "Are you tired of running into these problems?",
  subtitle = "It's time to take control and design like a pro — fast and easy.",
  problems = [
    {
      text: "Confused by complex design tools that take more time than they're worth?",
      icon: "❌"
    },
    {
      text: "Wasting hours on designs that don't drive results or conversions?",
      icon: "❌"
    },
    {
      text: "Struggling with technical issues slowing down your site's performance?",
      icon: "❌"
    },
    {
      text: "Losing potential customers because your site is not visually appealing or engaging enough?",
      icon: "❌"
    }
  ]
}) => {
  const { styleGuide } = useDesign();
  const primaryColor = styleGuide.primaryColor || "#EF083A";
  const headingFont = styleGuide.headingFont || "var(--font-manrope)";
  const bodyFont = styleGuide.bodyFont || "var(--font-archivo)";

  const isDark = theme === 'dark';

  // Define theme colors based on Figma design
  const colors = {
    background: isDark ? 'bg-gray-900' : 'bg-white',
    badge: {
      bg: isDark ? 'bg-gray-800' : 'bg-white',
      text: isDark ? 'text-gray-300' : 'text-red-600',
      border: isDark ? 'border-gray-700' : 'border-gray-200'
    },
    title: isDark ? 'text-white' : 'text-gray-900',
    subtitle: isDark ? 'text-gray-400' : 'text-gray-600',
    problem: {
      bg: isDark ? 'bg-gray-800/50' : 'bg-gray-50',
      text: isDark ? 'text-gray-300' : 'text-gray-900'
    }
  };

  return (
    <Section 
      theme={theme}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
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
            style={{ fontFamily: bodyFont }}
            className={`text-lg text-center max-w-2xl ${colors.subtitle}`}
          >
            {subtitle}
          </p>

          {/* Problems Grid */}
          <div className="w-full max-w-3xl mt-8 flex flex-col gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className={`
                  flex items-center gap-5 p-6 rounded-lg
                  ${colors.problem.bg} ${colors.problem.text}
                  transition-all duration-200 hover:scale-[1.02]
                `}
              >
                <span className="text-2xl" role="img" aria-label="icon">
                  {problem.icon}
                </span>
                <p style={{ fontFamily: headingFont }} className="text-lg font-medium">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}; 
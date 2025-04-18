'use client';

import React from 'react';
import { MySection } from '@/components/template-ui/MySection';
import { ProblemProps,defaultProblemProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { SectionHeading, Highlight } from '@/components/template-ui/SectionHeading';



export const ProblemV1: React.FC<ProblemProps> = ({
  theme = defaultProblemProps.theme,
  title = defaultProblemProps.title,
  subtitle = defaultProblemProps.subtitle,
  badgeText = defaultProblemProps.badgeText,
  problems = defaultProblemProps.problems,
}: ProblemProps) => {

  const isDark = theme === 'dark';

  return (
    <MySection 
      theme={theme}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">  
          {/* Badge */}
          <Badge 
            theme={theme}
          >

            {badgeText}
          </Badge>

          {/* Title */}
          <SectionHeading
            theme={theme}
            children={title}
            className='text-center !text-[36px] max-w-[1000px]'
          />

          {/* Subtitle */}
          <MyParagraph
            theme={theme}
          >
            {subtitle}
          </MyParagraph>

          {/* Problems Grid */}
          <div className="w-full max-w-[700px] flex flex-col gap-6">
            {problems.map((problem, index) => (
              <div 
              key={index}
              className={`
                flex items-start gap-6 p-6 rounded-[10px]
                ${isDark ? 'bg-white' : 'bg-[#F7F7F7]'}
                ${isDark ? '' : 'shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]'}
              `}
            >
              <div className="flex-shrink-0 text-xl leading-none mt-1">❌</div>
              <div className="flex-1">
                <span style={{ color: 'var(--primary-color)' }} className="font-semibold">
                  {problem.title}
                </span>
                <span className={'font-normal'} style={{ color: 'var(--text-color)' }}>
                {' '}{problem.description}
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
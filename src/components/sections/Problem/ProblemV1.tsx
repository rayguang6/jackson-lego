'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { MySection } from '@/components/common/MySection';
import { ProblemProps,defaultProblemProps } from './types';
import { Badge } from '@/components/common/Badge';
import { MyParagraph } from '@/components/common/MyParagraph';
import { SectionHeading, Highlight } from '@/components/common/SectionHeading';



export const ProblemV1: React.FC<ProblemProps> = ({
  theme = defaultProblemProps.theme,
  title = defaultProblemProps.title,
  subtitle = defaultProblemProps.subtitle,
  badgeText = defaultProblemProps.badgeText,
  problems = defaultProblemProps.problems,
}) => {

  const { primaryColor, headingFont, bodyFont } = useDesign().styleGuide;
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
            text={badgeText}
            theme={theme}
          />

          {/* Title */}
          <SectionHeading
            theme={theme}
            children={title}
            className='text-center !text-[36px] max-w-[500px]'
          />

          {/* Subtitle */}
          <MyParagraph
            theme={theme}
            text={subtitle}
          />

          {/* Problems Grid */}
          <div className="w-full max-w-[700px] flex flex-col gap-6">
            {problems.map((problem, index) => (
              <div 
              key={index}
              className={`
                flex flex-row items-center px-8 py-4 rounded-lg gap-5
                transition-all duration-200 hover:scale-[1.02]
                ${isDark ? 'bg-white' : 'bg-gray-100'}
              `}
            >
              <span className="text-[24px]" role="img" aria-label="icon">
                ❌
              </span>
              <SectionHeading theme={theme} className="!text-[16px] font-semibold p-4 !text-black">
                <Highlight>{problem.title}</Highlight>
                {'       '}{problem.description}
              </SectionHeading>
            </div>
          ))}
          </div>
        </div>
      </div>
    </MySection>
  );
}; 
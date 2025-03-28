'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { StarIcon } from '@/components/icons';
import { MySection } from '@/components/common/MySection';
import { defaultProblemProps } from './types';
import { ProblemProps } from './types';
import { Badge } from '@/components/common/Badge';
import { MyParagraph } from '@/components/common/MyParagraph';
import { SectionHeading } from '@/components/common/SectionHeading';
import { styleGuide } from '@/lib/constants/styleGuide';
import { blendWithWhite } from '@/utils/colorUtils';


export const ProblemV3: React.FC<ProblemProps> = ({
  theme = defaultProblemProps.theme,
  title = defaultProblemProps.title,
  subtitle = defaultProblemProps.subtitle,
  badgeText = defaultProblemProps.badgeText,
  problems = [
    {
      title: 'Limited Flexibility:',
      description: 'Traditional design tools often restrict your creativity with rigid templates and preset structures.',
    },
    {
      title: 'Time-Consuming:',
      description: 'Spending countless hours refining designs in slow, inefficient tools can delay your projects.',
    },
    {
      title: 'Inconsistent Results:',
      description: 'Achieving a polished, professional look is challenging with outdated tools that lack cohesion.',
    },
    {
      title: 'Slow Performance:',
      description: 'Unresponsive tools hinder your workflow, slowing down design processes and frustrating your progress.',
    },
   
  ],
}) => {
  const { primaryColor, headingFont, bodyFont } = useDesign().styleGuide;
  const isDark = theme === 'dark';

  return (
    <MySection 
      theme={theme} 
      className={`w-full py-[100px] relative overflow-hidden`}
      backgroundColor={isDark ? styleGuide.backgroundColorDark : blendWithWhite(primaryColor, 0.03)}
    >
      <div className="max-w-[1010px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-[30px]">
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className={`
                  flex items-start gap-6 p-6 rounded-[10px] border border-gray-200 bg-white
                  shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
                `}
              >
                <div className="flex-shrink-0 text-xl leading-none mt-1">❌</div>
                <div className="flex-1">
                <span style={{ color: primaryColor }} className="font-semibold">
                    {problem.title}
                  </span>
                  <span className={'font-normal'} style={{ color: styleGuide.textColor }}>
                    {' '} {problem.description}
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

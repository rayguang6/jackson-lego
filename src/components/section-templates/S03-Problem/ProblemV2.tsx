'use client';

import React from 'react';

import { StarIcon } from '@/components/template-ui/icons';
import { MySection } from '@/components/template-ui/MySection';
import { defaultProblemProps, ProblemProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { SectionHeading, Highlight } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';

export const ProblemV2: React.FC<ProblemProps> = ({
  theme = defaultProblemProps.theme,
  title = "Does this sound like",
  subtitle = "It’s time to take control and design like a pro — fast and easy.",
  badgeText = defaultProblemProps.badgeText,
  problems = defaultProblemProps.problems,
}) => {

  const isDark = theme === 'dark';


  return (
    <MySection 
      theme={theme}
      className="relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[30px]">
          {/* Badge */}
          <Badge 
            theme={theme}
          >
            {badgeText}
          </Badge>

          {/* Title */}
          <SectionHeading theme={theme} className='text-center !text-[36px] max-w-[500px]'>
            {title}
            <Highlight> you?</Highlight>
          </SectionHeading>

          {/* Subtitle */}
          <MyParagraph theme={theme}>
            {subtitle}
          </MyParagraph>

          {/* Problems Container */}
          <div 
            className={`w-max-[800px] rounded-[20px] overflow-hidden`}
            style={{
              backgroundColor: isDark ? "#FFFFFF10" : GLOBALCSS_VAR.primaryColor10,
              border: isDark ? '1px solid #ffffff20':'',
            }}
          >

            {/* Extra Text Header */}
            <div className="w-full my-8 px-12">
              <div className="w-full my-8 px-12">
                <SectionHeading theme={theme} className='text-center !text-[30px] font-medium leading-[1.4]'>
                  ... and a lot more, but I don’t want to 
                  keep you here for an hour. 
                </SectionHeading>
              </div>

              {/* Problems List */}
              <div className="px-8 pb-8 flex flex-col gap-4">
                {problems.map((problem, index) => (
                  <div 
                    key={index}
                    className={`
                      flex items-start gap-6 p-6 rounded-[10px]
                      ${isDark ? 'bg-white border-white/[0.05]' : 'bg-white border-[#E4E4E7]'}
                      border
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
        </div>
      </div>
    </MySection>
  );
}; 
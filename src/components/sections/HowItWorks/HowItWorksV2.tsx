'use client';

import React from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import { MySection } from '@/components/common/MySection';
import { HowItWorksProps,defaultHowItWorksProps } from './types';
import { Badge } from '@/components/common/Badge';
import { MyParagraph } from '@/components/common/MyParagraph';
import { SectionHeading, Highlight } from '@/components/common/SectionHeading';

export const HowItWorksV2: React.FC<HowItWorksProps> = ({
  theme = defaultHowItWorksProps.theme,
  title = defaultHowItWorksProps.title,
  subtitle = defaultHowItWorksProps.subtitle,
  badgeText = defaultHowItWorksProps.badgeText,
  features = defaultHowItWorksProps.features,
}) => {

  const { primaryColor, headingFont, bodyFont, textColor } = useDesign().styleGuide;
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
            {features?.map((feature, index) => (
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
                <span style={{ color: primaryColor }} className="font-semibold">
                  {feature.title}
                </span>
                <span className={'font-normal'} style={{ color: textColor }}>
                {' '}{feature.description}
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
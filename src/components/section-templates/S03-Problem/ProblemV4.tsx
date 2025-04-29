'use client';

import React, { useEffect } from 'react';

import { StarIcon } from '@/components/template-ui/icons';
import { MySection } from '@/components/template-ui/MySection';
import { defaultProblemProps, ProblemProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading, Highlight } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { blendWithWhite } from '@/lib/utils';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { EditableText } from '@/components/editable/EditableText';
import { useDesignStore } from '@/lib/store/designStore';


export const ProblemV4: React.FC<ProblemProps> = ({
  theme = defaultProblemProps.theme,
  title = defaultProblemProps.title,
  subtitle = defaultProblemProps.subtitle,
  badgeText = defaultProblemProps.badgeText,
  problems = defaultProblemProps.problems,
  sectionTitle = defaultProblemProps.sectionTitle,
  sectionId = defaultProblemProps.sectionId || '',
  highlightText = defaultProblemProps.highlightText,
}: ProblemProps) => {

  const isDark = theme === 'dark';

    // Initialize the problems array in the store to ensure it exists
    useEffect(() => {
      // Get the current section content
      const sectionContent = useDesignStore.getState().design.sections.find(s => s.id === sectionId)?.content || {};
      
      // Check if problems array doesn't exist yet in the store
      if (!sectionContent.problems) {
        // Initialize with a copy of the default problems
        useDesignStore.getState().updateSectionField(sectionId, 'problems', JSON.parse(JSON.stringify(problems)));
      }
    }, [sectionId, problems]);  

  return (
    <MySection 
      theme={theme}
      className="!py-24"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[20px]">

          {/* Title */}
          <MyHeading theme={theme} as='h1' className='text-center text-[28px] sm:text-[36px]'>
            <EditableText
              sectionId={sectionId}
              defaultValue={title}
              contentPath={`title`}
            />
            <Highlight>
              <EditableText
                sectionId={sectionId}
                defaultValue={highlightText}
                contentPath={`highlightText`}
              />
            </Highlight>
          </MyHeading>

          {/* Subtitle */}
          <MyParagraph theme={theme}>
            <EditableText
              sectionId={sectionId}
              defaultValue={subtitle}
              contentPath={`subtitle`}
            />
          </MyParagraph>

          {/* Problems Container */}
          <div 
            className="w-full mt-[20px]"
          >

            {/* Problems List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {(problems || []).slice(0, 3).map((problem, index) => (

              <div 
                key={index}
                className={`
                    flex flex-col items-center justify-start p-6 md:p-8 rounded-[10px] border w-full
                    ${isDark ? 'bg-white/10 border-white/20' : 'bg-white border-[#E4E4E7]'}
                    ${isDark ? '' : 'shadow-[0px_2px_8px_0px_rgba(16,24,40,0.05)]'}
                  `}
                >
                  {/* Icon */}
                  <div className="text-xl p-3 md:p-4 rounded-xl" style={{ backgroundColor: isDark ? "#FFFFFF" : GLOBALCSS_VAR.primaryColor10 }}>
                    <div style={{ fill: GLOBALCSS_VAR.primaryColor }}>
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill={GLOBALCSS_VAR.primaryColor} d="M15.7671 1.114C15.7537 0.884646 15.6565 0.668196 15.4941 0.505742C15.3316 0.343289 15.1152 0.246143 14.8858 0.232749C11.7921 0.050718 9.05846 0.415562 6.76081 1.31634C4.56237 2.17806 2.86784 3.514 1.85846 5.17962C0.481899 7.45384 0.478775 10.2148 1.82331 12.8507L0.461587 14.2124C0.374381 14.2996 0.305206 14.4032 0.25801 14.5171C0.210815 14.6311 0.186523 14.7532 0.186523 14.8765C0.186523 14.9998 0.210815 15.1219 0.25801 15.2359C0.305206 15.3498 0.374381 15.4534 0.461587 15.5406C0.637707 15.7167 0.876578 15.8156 1.12565 15.8156C1.24898 15.8156 1.3711 15.7913 1.48504 15.7441C1.59898 15.6969 1.70251 15.6278 1.78971 15.5406L3.15143 14.1788C4.45924 14.846 5.79831 15.1827 7.09284 15.1827C8.40808 15.1868 9.69886 14.8272 10.8225 14.1437C12.4881 13.1343 13.8241 11.439 14.6858 9.24134C15.5842 6.94212 15.9491 4.20775 15.7671 1.114ZM9.84831 12.5374C8.27877 13.4882 6.43737 13.5601 4.55768 12.7656L11.1624 6.16087C11.2496 6.07367 11.3187 5.97014 11.3659 5.8562C11.4131 5.74226 11.4374 5.62014 11.4374 5.49681C11.4374 5.37348 11.4131 5.25136 11.3659 5.13742C11.3187 5.02348 11.2496 4.91996 11.1624 4.83275C11.0752 4.74554 10.9716 4.67637 10.8577 4.62917C10.7438 4.58198 10.6216 4.55769 10.4983 4.55769C10.375 4.55769 10.2529 4.58198 10.1389 4.62917C10.025 4.67637 9.92145 4.74554 9.83424 4.83275L3.23424 11.4421C2.44206 9.56712 2.51393 7.72103 3.46862 6.1515C5.10221 3.45384 8.97956 1.95462 13.9374 2.06947C14.0452 7.02572 12.546 10.9038 9.84831 12.5374Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="text-center">
                    <MyHeading theme={theme} as='h3' className='mt-4 !text-[16px] sm:!text-[20px] font-bold' >
                      <EditableText
                        sectionId={sectionId}
                        defaultValue={problem.title}
                        contentPath={`problems.${index}.title`}
                      />
                    </MyHeading>
                    
                    <MyParagraph 
                      theme={theme}
                      className='mt-2 !text-[16px] !max-w-[400px]'
                    >
                      <EditableText
                        sectionId={sectionId}
                        defaultValue={problem.description}
                        contentPath={`problems.${index}.description`}
                      />
                    </MyParagraph>
                  </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </MySection>
  );
}; 
'use client';

import React, { useEffect } from 'react';

import { StarIcon } from '@/components/template-ui/icons';
import { MySection } from '@/components/template-ui/MySection';
import { defaultProblemProps, ProblemProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading, Highlight } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { EditableText } from '@/components/editable/EditableText';
import { useDesignStore } from '@/lib/store/designStore';

export const ProblemV2: React.FC<ProblemProps> = ({
  theme = defaultProblemProps.theme,
  title = defaultProblemProps.title,
  subtitle = defaultProblemProps.subtitle,
  badgeText = defaultProblemProps.badgeText,
  problems = defaultProblemProps.problems,
  highlightText = defaultProblemProps.highlightText,
  sectionTitle = defaultProblemProps.sectionTitle,
  sectionId = defaultProblemProps.sectionId || '',
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
      className="relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[30px]">
          {/* Badge */}
          <Badge 
            theme={theme}
          >
            <EditableText
              sectionId={sectionId}
              defaultValue={badgeText}
              contentPath={`badgeText`}
            />
          </Badge>

          {/* Title */}
          <MyHeading theme={theme} as='h1' className='text-center !text-[36px] max-w-[500px]'>
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
            className={`w-full max-w-[800px] rounded-[20px] overflow-hidden`}
            style={{
              backgroundColor: isDark ? "#FFFFFF10" : GLOBALCSS_VAR.primaryColor10,
              border: isDark ? '1px solid #ffffff20':'',
            }}
          >

            {/* Extra Text Header */}
            <div className="w-full my-8 px-12">
              <div className="w-full my-8 px-12">
                <MyHeading theme={theme} as='h1' className='text-center !text-[24px] md:!text-[30px] font-medium leading-[1.4]'>
                    <EditableText
                      sectionId={sectionId}
                      defaultValue={sectionTitle}
                      contentPath={`sectionTitle`}
                    />  
                </MyHeading>
              </div>

              {/* Problems List */}
              <div className="px-8 pb-8 flex flex-col gap-4">
              {(problems || []).map((problem, index) => (
                
                  <div key={index} className={
                      `flex items-start gap-6 p-6 rounded-[10px]
                      ${isDark ? 'bg-white border-white/[0.05]' : 'bg-white border-[#E4E4E7]'}
                      border
                      ${isDark ? '' : 'shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]'}
                    `}>
                    <div className="flex-shrink-0 text-xl leading-none mt-1">
                      <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1675 0C6.89872 0 0.171387 6.72733 0.171387 14.9961C0.171387 23.2649 6.89872 29.9922 15.1675 29.9922C23.4362 29.9922 30.1636 23.2649 30.1636 14.9961C30.1636 6.72733 23.4362 0 15.1675 0ZM20.5971 18.7949C20.7087 18.9009 20.798 19.0282 20.8596 19.1693C20.9213 19.3104 20.954 19.4624 20.956 19.6164C20.958 19.7704 20.9291 19.9231 20.8711 20.0658C20.8131 20.2084 20.7271 20.338 20.6182 20.4468C20.5094 20.5557 20.3798 20.6417 20.2372 20.6997C20.0945 20.7577 19.9417 20.7866 19.7878 20.7846C19.6338 20.7826 19.4818 20.7499 19.3407 20.6882C19.1996 20.6266 19.0723 20.5373 18.9663 20.4257L15.1675 16.6276L11.3687 20.4257C11.1506 20.6329 10.8602 20.7467 10.5594 20.7428C10.2586 20.739 9.97122 20.6178 9.7585 20.4051C9.54579 20.1924 9.42458 19.905 9.42073 19.6042C9.41688 19.3034 9.53069 19.013 9.73789 18.7949L13.5359 14.9961L9.73789 11.1973C9.53069 10.9792 9.41688 10.6888 9.42073 10.388C9.42458 10.0872 9.54579 9.79983 9.7585 9.58712C9.97122 9.3744 10.2586 9.25319 10.5594 9.24934C10.8602 9.24549 11.1506 9.3593 11.3687 9.5665L15.1675 13.3645L18.9663 9.5665C19.1843 9.3593 19.4747 9.24549 19.7755 9.24934C20.0763 9.25319 20.3637 9.3744 20.5765 9.58712C20.7892 9.79983 20.9104 10.0872 20.9142 10.388C20.9181 10.6888 20.8043 10.9792 20.5971 11.1973L16.799 14.9961L20.5971 18.7949Z" fill={GLOBALCSS_VAR.primaryColor}/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span style={{ color: 'var(--primary-color)' }} className="font-semibold">
                        <EditableText
                          sectionId={sectionId}
                          defaultValue={problem.title}
                          contentPath={`problems.${index}.title`}
                        />
                      </span>
                      <span className={'font-normal'} style={{ color: 'var(--text-color)' }}>
                        {' '}
                        <EditableText
                          sectionId={sectionId}
                          defaultValue={problem.description}
                          contentPath={`problems.${index}.description`}
                        />
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
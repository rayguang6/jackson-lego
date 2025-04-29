'use client';

import React, { useEffect } from 'react';
import { MySection } from '@/components/template-ui/MySection';
import { defaultProblemProps } from './types';
import { ProblemProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { styleGuide } from '@/lib/constants/styleGuide';
import { blendWithWhite } from '@/lib/utils';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { EditableText } from '@/components/editable/EditableText';
import { useDesignStore } from '@/lib/store/designStore';

export const ProblemV3: React.FC<ProblemProps> = ({
  theme = defaultProblemProps.theme,
  title = defaultProblemProps.title,
  subtitle = defaultProblemProps.subtitle,
  badgeText = defaultProblemProps.badgeText,
  problems = defaultProblemProps.problems,
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
      className={`w-full py-[100px] relative overflow-hidden`}
      backgroundColor={isDark ? GLOBALCSS_VAR.backgroundColorDark : GLOBALCSS_VAR.primaryColor10}
    >
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-[20px]">
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
         <MyHeading
            theme={theme}
            as='h1'
            className='text-center !text-[36px]'
          >
            <EditableText
              sectionId={sectionId}
              defaultValue={title}
              contentPath={`title`}
            />
          </MyHeading>

          {/* Subtitle */}  
          <MyParagraph
            theme={theme}
          >
            <EditableText
              sectionId={sectionId}
              defaultValue={subtitle}
              contentPath={`subtitle`}
            />
          </MyParagraph>

          {/* Problems Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-[20px]">

          {(problems || []).map((problem, index) => (

              <div key={index} className={`
                  flex items-start gap-6 p-6 rounded-[10px] border border-gray-200 bg-white
                  shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
                `}
              >
                <div className="flex-shrink-0 text-xl leading-none mt-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path stroke={GLOBALCSS_VAR.primaryColor} fillRule="evenodd" clipRule="evenodd" d="M1 8.00019C1.00024 4.66068 3.35944 1.78639 6.63483 1.1351C9.91021 0.483818 13.1895 2.23693 14.4673 5.32231C15.7451 8.40769 14.6655 11.966 11.8887 13.8212C9.11186 15.6764 5.41127 15.3117 3.05 12.9502C1.73728 11.6373 0.999866 9.85675 1 8.00019Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill={GLOBALCSS_VAR.primaryColor} d="M4.84477 10.0936C4.55182 10.3864 4.55173 10.8613 4.84457 11.1543C5.13741 11.4472 5.61228 11.4473 5.90523 11.1545L4.84477 10.0936ZM8.53023 8.53045C8.82318 8.23762 8.82327 7.76274 8.53043 7.46979C8.23759 7.17685 7.76272 7.17675 7.46977 7.46959L8.53023 8.53045ZM7.46947 7.4699C7.17669 7.7629 7.17687 8.23777 7.46987 8.53056C7.76288 8.82334 8.23775 8.82316 8.53053 8.53015L7.46947 7.4699ZM11.1545 5.90415C11.4473 5.61115 11.4471 5.13627 11.1541 4.84349C10.8611 4.55071 10.3862 4.55089 10.0935 4.8439L11.1545 5.90415ZM8.53023 7.46959C8.23728 7.17675 7.76241 7.17685 7.46957 7.46979C7.17673 7.76274 7.17682 8.23762 7.46977 8.53045L8.53023 7.46959ZM10.0948 11.1545C10.3877 11.4473 10.8626 11.4472 11.1554 11.1543C11.4483 10.8613 11.4482 10.3864 11.1552 10.0936L10.0948 11.1545ZM7.46957 8.53025C7.76241 8.8232 8.23728 8.82329 8.53023 8.53045C8.82318 8.23762 8.82327 7.76274 8.53043 7.46979L7.46957 8.53025ZM5.90543 4.84379C5.61259 4.55085 5.13772 4.55075 4.84477 4.84359C4.55182 5.13643 4.55173 5.6113 4.84457 5.90425L5.90543 4.84379ZM5.90523 11.1545L8.53023 8.53045L7.46977 7.46959L4.84477 10.0936L5.90523 11.1545ZM8.53053 8.53015L11.1545 5.90415L10.0935 4.8439L7.46947 7.4699L8.53053 8.53015ZM7.46977 8.53045L10.0948 11.1545L11.1552 10.0936L8.53023 7.46959L7.46977 8.53045ZM8.53043 7.46979L5.90543 4.84379L4.84457 5.90425L7.46957 8.53025L8.53043 7.46979Z"/>
                </svg>

                </div>
                <div className="flex-1 text-[16px]">
                <span style={{ color: GLOBALCSS_VAR.primaryColor   }} className="font-semibold">
                    <EditableText
                      sectionId={sectionId}
                      defaultValue={problem.title}
                      contentPath={`problems.${index}.title`}
                    />
                  </span>
                  <span className={'font-normal'} style={{ color: GLOBALCSS_VAR.textColor }}>
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
    </MySection>
  );
};

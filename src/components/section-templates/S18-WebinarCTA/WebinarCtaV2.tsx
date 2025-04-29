'use client';

import React from 'react';
import { WebinarCTAProps, defaultWebinarCTAProps } from './types';
import { MySection } from '@/components/template-ui/MySection'; 
import { EditableText } from '@/components/editable/EditableText';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import Image from 'next/image';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { Badge } from '@/components/template-ui/Badge';
import { ThemeType } from '@/lib/types';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';

export const WebinarCTAV2: React.FC<WebinarCTAProps> = ({
  date = defaultWebinarCTAProps.date,
  time = defaultWebinarCTAProps.time,
  location = defaultWebinarCTAProps.location,
  ctaText = defaultWebinarCTAProps.ctaText,
  theme = defaultWebinarCTAProps.theme,
  warningText = defaultWebinarCTAProps.warningText,
  sectionId = defaultWebinarCTAProps.sectionId || '',
  imageUrl = defaultWebinarCTAProps.imageUrl,
}: WebinarCTAProps) => {

  const isDark = theme === ThemeType.dark;

  return (
    <MySection theme={theme} className="py-8">
        <div className="max-w-md mx-auto border rounded-lg p-6" style={{borderColor: isDark ? '#4B5162' : GLOBALCSS_VAR.primaryColor }}>
        <div className="text-lg mt-5">
          <MyParagraph theme={theme} className="font-semibold">日期：
            <EditableText
              sectionId={sectionId} 
              contentPath="date"
              defaultValue={date}
            /></MyParagraph>
        </div>
        <div className="text-lg mt-5">
          <MyParagraph theme={theme} className="font-semibold">时间：<EditableText
              sectionId={sectionId}
              contentPath="time"
              defaultValue={time}
            /></MyParagraph>
        
        </div>
        <div className="text-center mb-4">
          <PrimaryButton theme={theme} className="px-6 py-3 mt-10">
            <EditableText
              sectionId={sectionId}
              contentPath="ctaText"
              defaultValue={ctaText}
            />
          </PrimaryButton>
        </div>
        <div className="text-sm text-gray-600">
          <EditableText
            sectionId={sectionId}
            contentPath="warningText"
            defaultValue={warningText}
          />
        </div>
      </div>
    </MySection>
  );
}; 
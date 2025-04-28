import React from 'react';
import { GuaranteeProps, defaultGuaranteeProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { EditableText } from '@/components/editable/EditableText';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { MyHeading } from '@/components/template-ui/MyHeading';
import Image from 'next/image';
import { Badge } from '@/components/template-ui/Badge';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { ThemeType } from '@/lib/types';

export const GuaranteeV2: React.FC<GuaranteeProps> = (props) => {
  const {
    title,
    subtitle,
    badgeText,
    imageUrl,
    theme,
    sectionId
  } = { ...defaultGuaranteeProps, ...props };

  const isDark = theme === 'dark';

  return (
    <MySection 
      theme={theme}
      className="relative overflow-hidden"
    >
      {/* Content */}
      <div className={` z-10 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto sm:px-6 lg:px-12 py-16 md:py-24 gap-8`}>

        {/* Text Content */}
        <div className="flex flex-col max-w-xl">
          <div className="max-w-[300px]">
            <Badge theme={theme}>
              {/* EditableText */}
              <EditableText
              sectionId={sectionId}
              contentPath="badgeText"
              defaultValue={badgeText || ''}
            />
            </Badge>
          </div>
          <MyHeading theme={theme} className="mt-5">
            {/* EditableText */}
            <EditableText
              sectionId={sectionId}
              contentPath="title"
              defaultValue={title}
            />
          </MyHeading>

          <MyParagraph theme={theme} className="mt-5">
            {/* EditableText */}
            <EditableText
              sectionId={sectionId}
              contentPath="subtitle"
              defaultValue={subtitle}
            />
          </MyParagraph>

     
        </div>

        {/* Image - added border to make it visible even when empty */}
        <div className="w-full md:w-auto">
          <div className={`rounded-lg overflow-hidden`}>
            <Image
              src={imageUrl || ''}
              alt="CTA Image"
              width={400}
              height={400}
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
              />
          </div>
        </div>
      </div>
    </MySection>
  );
}; 
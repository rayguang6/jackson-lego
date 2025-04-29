import React from 'react';
import { WhoIsThisForProps, defaultWhoIsThisForProps } from './types';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';   
import Image from 'next/image';
import { Badge } from '@/components/template-ui/Badge';
import { MySection } from '@/components/template-ui/MySection';
import { EditableText } from '@/components/editable/EditableText';

export const WhoIsThisForV2: React.FC<WhoIsThisForProps> = ({
  title = "If you think you are one of them...",
  subtitle = defaultWhoIsThisForProps.subtitle,
  profiles = defaultWhoIsThisForProps.profiles || [],
  theme = defaultWhoIsThisForProps.theme,
  badgeText = defaultWhoIsThisForProps.badgeText,
  sectionId
}) => {
  const isDark = theme === 'dark';

  return (
    <MySection theme={theme}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-center">
          <Badge theme={theme}>
            <EditableText
              sectionId={sectionId}
              contentPath="badgeText"
              defaultValue={badgeText || ''}
            />
          </Badge>
        </div>

        {/* Header */}
        <div className="text-center mt-5">
          <MyHeading as='h2' theme={theme} className="text-4xl font-bold">
            <EditableText
              sectionId={sectionId}
              contentPath="title"
              defaultValue={title}
            />
          </MyHeading>
          <MyHeading as='h2' style={{color: GLOBALCSS_VAR.primaryColor}} className="text-4xl font-bold">
            <EditableText
              sectionId={sectionId}
              contentPath="subtitle"
              defaultValue="We need to talk"
            />
          </MyHeading>
        </div>
        
        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {Array.isArray(profiles) && profiles.map((profile, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-xl transition-all duration-300 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <MyHeading as='h5' theme={theme} className="font-bold mb-2" style={{color: GLOBALCSS_VAR.primaryColor}}>
                <EditableText
                  sectionId={sectionId}
                  contentPath={`profiles.${index}.role`}
                  defaultValue={profile.role}
                />
              </MyHeading>
              <MyParagraph theme={theme} className="mb-4">
                <EditableText
                  sectionId={sectionId}
                  contentPath={`profiles.${index}.description`}
                  defaultValue={profile.description}
                />
              </MyParagraph>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
import React, { useEffect } from 'react';
import { WhoIsThisForProps, defaultWhoIsThisForProps } from './types';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';   
import Image from 'next/image';
import { Badge } from '@/components/template-ui/Badge';
import { MySection } from '@/components/template-ui/MySection';
import { EditableText } from '@/components/editable/EditableText';
import { useDesignStore } from '@/lib/store/designStore';

export const WhoIsThisForV1: React.FC<WhoIsThisForProps> = ({
  title = defaultWhoIsThisForProps.title,
  subtitle = defaultWhoIsThisForProps.subtitle,
  profiles = defaultWhoIsThisForProps.profiles || [],
  theme = defaultWhoIsThisForProps.theme,
  badgeText = defaultWhoIsThisForProps.badgeText,
  sectionId = defaultWhoIsThisForProps.sectionId || '',
}) => {
  const isDark = theme === 'dark';

  // Initialize the profiles array in the store to ensure it exists
  useEffect(() => {
    // Get the current section content
    const sectionContent = useDesignStore.getState().design.sections.find(s => s.id === sectionId)?.content || {};
    if (sectionId && !sectionContent.profiles) {
      useDesignStore.getState().updateSectionField(sectionId, 'profiles', JSON.parse(JSON.stringify(profiles)));
    }
  }, [sectionId, profiles]);

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
          <MyHeading as='h2' theme={theme} className="text-4xl font-bold mb-4">
            <EditableText
              sectionId={sectionId}
              contentPath="title"
              defaultValue={title}
            />
          </MyHeading>
          {subtitle && (
            <MyParagraph theme={theme} className="text-xl max-w-3xl mx-auto">
              <EditableText
                sectionId={sectionId}
                contentPath="subtitle"
                defaultValue={subtitle}
              />
            </MyParagraph>
          )}
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
              {profile.image && (
                <div className="mb-4 flex justify-center">
                  <Image 
                    src={profile.image} 
                    alt={profile.role} 
                    className="w-full h-auto rounded-lg object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
'use client';

import React from 'react';
import Image from 'next/image';
import { SolutionsProps, defaultSolutionsProps } from './types';

import { MySection } from '@/components/template-ui/MySection';
import { MyHeading   } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GridIcon } from '@/components/template-ui/icons/GridIcon';
import { Badge } from '@/components/template-ui/Badge';
import { ThemeType } from '@/lib/types';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
export const SolutionsV1: React.FC<SolutionsProps> = ({
  title = defaultSolutionsProps.title,
  subtitle = defaultSolutionsProps.subtitle,
  badgeText = defaultSolutionsProps.badgeText,
  sectionTitle = defaultSolutionsProps.sectionTitle,
  theme = defaultSolutionsProps.theme,
  imageUrl = defaultSolutionsProps.imageUrl,
  features = [
    {
        title: "Easy and intuitive",
        description: "Create reports with an easy to use drag-and-drop designer.",
      },
      {
        title: "Quick deployment",
        description: "Launch your website in minutes with our streamlined setup process.",
      },
      {
        title: "Customizable design",
        description: "Adapt every element to match your brand identity with flexible styling options.",
      }
  ]
}) => {
  const isDark = theme === ThemeType.dark;
  
  return (
    <MySection theme={theme} className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Left side - Image placeholder */}
          <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden">
            {/* Image placeholder */}
            <Image src={imageUrl || ''} alt="Solutions" width={500} height={500} className="object-cover" />  
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
            {/* Badge */}
            <Badge theme={theme}>
              {badgeText}
            </Badge>

            {/* Main heading */}
            <MyHeading theme={theme} as='h1' className="mb-4 mt-5">
              {title}
            </MyHeading>
            
            {/* Subtitle */}
            <MyParagraph theme={theme}>
              {subtitle}
            </MyParagraph>
            
            {/* Features section */}
            {sectionTitle && (
              <MyHeading theme={theme} as='h2' className="text-sm font-bold uppercase tracking-wider mt-5">
                {sectionTitle}
              </MyHeading>
            )}
            
            {/* Features list */}
            <div className="space-y-8 mt-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div 
                    className="flex-shrink-0 h-10 w-10 rounded flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${GLOBALCSS_VAR.primaryColor10}` }}
                  >
                    <GridIcon color={GLOBALCSS_VAR.primaryColor} className="h-5 w-5" />
                  </div>
                  <div>
                    <MyHeading theme={theme} as='h5' className="text-lg font-semibold mb-1">
                      {feature.title}
                    </MyHeading>
                    <MyParagraph theme={theme} className="text-base">
                      {feature.description}
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
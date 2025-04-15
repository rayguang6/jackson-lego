'use client';

import React from 'react';
import Image from 'next/image';
import { SolutionsProps, defaultSolutionsProps } from './types';
import { useDesign } from '@/lib/contexts/DesignContext';
import { MySection } from '@/components/template-ui/MySection';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GridIcon } from '@/components/template-ui/icons/GridIcon';
import { Badge } from '@/components/template-ui/Badge';

export const SolutionsV1: React.FC<SolutionsProps> = ({
  title = defaultSolutionsProps.title,
  subtitle = defaultSolutionsProps.subtitle,
  badgeText = defaultSolutionsProps.badgeText,
  sectionTitle = defaultSolutionsProps.sectionTitle,
  theme = defaultSolutionsProps.theme,
  features = [
    {
        title: "Easy and intuitive",
        description: "Create reports with an easy to use drag-and-drop designer.",
        iconColor: "#ef4444"
      },
      {
        title: "Quick deployment",
        description: "Launch your website in minutes with our streamlined setup process.",
        iconColor: "#ef4444"
      },
      {
        title: "Customizable design",
        description: "Adapt every element to match your brand identity with flexible styling options.",
        iconColor: "#ef4444"
      }
  ]
}) => {
  const { primaryColor, headingFont, bodyFont, textColor } = useDesign().styleGuide;
  const isDark = theme === 'dark';
  
  return (
    <MySection theme={theme} className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Left side - Image placeholder */}
          <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden bg-gray-200 aspect-[4/3]">
            {/* Image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span>Image Placeholder</span>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
            {/* Badge */}
            {badgeText && <Badge text={badgeText} theme={theme} className='mb-8' />}
            
            {/* Main heading */}
            <SectionHeading theme={theme} className="mb-4">
              {title}
            </SectionHeading>
            
            {/* Subtitle */}
            <MyParagraph theme={theme} text={subtitle} className="mb-10" />
            
            {/* Features section */}
            {sectionTitle && (
              <h3 
                className="text-sm font-bold uppercase tracking-wider mb-6"
                style={{ color: primaryColor, fontFamily: headingFont }}
              >
                {sectionTitle}
              </h3>
            )}
            
            {/* Features list */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div 
                    className="flex-shrink-0 h-10 w-10 rounded flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${primaryColor}10` }}
                  >
                    <GridIcon color={primaryColor} className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 
                      className="text-lg font-semibold mb-1"
                      style={{ 
                        color: isDark ? '#FFFFFF' : textColor,
                        fontFamily: headingFont 
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p 
                      style={{ 
                        color: isDark ? '#E5E5E5' : textColor,
                        fontFamily: bodyFont 
                      }}
                    >
                      {feature.description}
                    </p>
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
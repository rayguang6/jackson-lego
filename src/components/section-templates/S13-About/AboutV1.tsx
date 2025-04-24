import React from 'react';
import { AboutProps, defaultAboutProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';

export const AboutV1: React.FC<AboutProps> = ({
  title = defaultAboutProps.title,
  subtitle = defaultAboutProps.subtitle,
  badgeText = defaultAboutProps.badgeText,
  quote = defaultAboutProps.quote,
  imageUrl = defaultAboutProps.imageUrl,
  theme = defaultAboutProps.theme,
  features = defaultAboutProps.features,
}) => {
  const isDark = theme === 'dark';

  return (
    <MySection theme={theme}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="max-w-xl">
            {/* Badge */}
            <Badge theme={theme}>{badgeText}</Badge>

            {/* Title and Subtitle */}
            <MyHeading as='h2' theme={theme} className="text-4xl font-bold mb-4">{title}</MyHeading>
            <MyParagraph theme={theme} className="text-lg text-gray-600 mb-10">{subtitle}</MyParagraph>

            {/* Quote */}
            {quote && (
              <div className="bg-red-600 text-white p-8 rounded-lg">
                <div className="mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 25H5L10 15H15L12.5 25Z" stroke="white" strokeWidth="2" />
                    <path d="M27.5 25H20L25 15H30L27.5 25Z" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                {quote.heading && <MyHeading as='h5' className="text-xl text-white font-medium mb-4">{quote.heading}</MyHeading>}
                <MyParagraph className="text-lg mb-6 text-white">{quote.text}</MyParagraph>
                <MyParagraph className="text-sm text-white">– {quote.author}, {quote.position}</MyParagraph>
              </div>
            )}
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <img 
                src={imageUrl} 
                alt="About Us" 
                className="w-full h-auto rounded-lg object-cover shadow-lg" 
              />
            </div>
          )}
        </div>
      </div>  
    </MySection>
  );
}; 
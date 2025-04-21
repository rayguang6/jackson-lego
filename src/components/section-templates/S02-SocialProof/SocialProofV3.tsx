'use client';

import React from 'react';
import { SocialProofProps, defaultSocialProofProps } from './types';
import { MySection } from '@/components/template-ui/MySection';

export const SocialProofV3: React.FC<SocialProofProps> = ({
  logos = defaultSocialProofProps.logos,
  theme = defaultSocialProofProps.theme,
  sectionId
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const captionColor = isDark ? 'text-gray-400' : 'text-gray-500';
  const logoFilter = isDark ? 'brightness-0 invert opacity-60' : 'opacity-60';

  return (
    <MySection theme={theme} className="py-10 md:py-14">
      <div id={sectionId} className="container mx-auto px-4">
        {/* Caption */}
        <div className="text-center mb-8">
          <p className={`text-sm font-medium uppercase tracking-wider ${captionColor}`}>
            As seen on
          </p>
        </div>
        
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16 lg:gap-x-20">
          {logos?.map((logo, index) => (
            <div key={index} className="h-6 md:h-8">
              <img 
                src={logo.url} 
                alt={logo.alt}
                className={`h-full object-contain ${logoFilter}`}
              />
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
}; 
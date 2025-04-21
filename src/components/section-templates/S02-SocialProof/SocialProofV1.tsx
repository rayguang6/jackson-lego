'use client';

import React from 'react';
import { SocialProofProps, defaultSocialProofProps } from './types';
import { MySection } from '@/components/template-ui/MySection';

export const SocialProofV1: React.FC<SocialProofProps> = ({
  logos = defaultSocialProofProps.logos,
  theme = defaultSocialProofProps.theme,
  sectionId
}) => {
  const isDark = theme === 'dark';
  const logoFilter = isDark ? 'brightness-0 invert opacity-60' : 'opacity-60';

  return (
    <MySection theme={theme} className="py-8 md:py-10">
      <div id={sectionId} className="container mx-auto px-4">
        {/* Logos - simple row of grayscale logos with opacity */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16">
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
'use client';

import React from 'react';
import { SocialProofProps, defaultSocialProofProps } from './types';

export const SocialProofV2SingleImage: React.FC<SocialProofProps> = ({
  theme = defaultSocialProofProps.theme,
  sectionId
}) => {
  // For this design, we're using a red background regardless of the theme
  // since that's what's shown in Figma
  const bgColor = 'bg-[#EF083A]'; // Exact color from Figma
  const textColor = 'text-white';

  return (
    <div id={sectionId} className={`${bgColor} py-8 md:py-12`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
          {/* Caption */}
          <p className={`${textColor} text-base md:text-lg font-normal text-center`} style={{ fontFamily: 'Manrope, sans-serif' }}>
            As seen on
          </p>
          
          {/* Single combined image of all logos */}
          <div className="w-full max-w-4xl mx-auto">
            <img 
              src="/images/templates/logos/combined-logos.png" 
              alt="Partner Logos"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 
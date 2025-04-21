'use client';

import React from 'react';
import { SocialProofProps, defaultSocialProofProps } from './types';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
export const SocialProofV2: React.FC<SocialProofProps> = ({
  imageUrl = TEMPLATE_IMAGES.SOCIAL_PROOF.IMAGE_2,
  theme = defaultSocialProofProps.theme,
  sectionId
}) => {
  // For this design, we're using a red background regardless of the theme
  // since that's what's shown in Figma
  const textColor = 'text-white';
  const logoFilter = 'brightness-0 invert'; // White logos

  // Style to hide scrollbar
  const hideScrollbarStyle = `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `;

  const isDark = theme === 'dark';

  return (
    <div id={sectionId} className={`py-8 md:py-12`} style={{ backgroundColor: GLOBALCSS_VAR.primaryColor }}>
      <style jsx>{hideScrollbarStyle}</style>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
          {/* Caption */}
          { isDark && (
            <p className={`${textColor} text-base md:text-lg font-normal text-center`} style={{ fontFamily: 'Manrope, sans-serif' }}>
              As seen on
            </p>
          )}
          
          {/* Logos in a single line with horizontal scroll on small screens */}
          <div className="w-full overflow-x-auto hide-scrollbar" style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
          }}>
            <div className="flex items-center justify-center space-x-10 md:space-x-12 lg:space-x-16 min-w-max px-4">
              <div className="h-5 md:h-7 flex-shrink-0">
                <img 
                  src={imageUrl} 
                  alt="logo"
                  className={`h-full object-contain ${logoFilter}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 
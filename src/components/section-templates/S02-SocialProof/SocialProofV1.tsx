'use client';

import React from 'react';
import { SocialProofProps, defaultSocialProofProps } from './types';
import { MySection } from '@/components/template-ui/MySection';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
export const SocialProofV1: React.FC<SocialProofProps> = ({
  imageUrl = TEMPLATE_IMAGES.SOCIAL_PROOF.IMAGE_2,
  theme = defaultSocialProofProps.theme,
  sectionId
}) => {
  const isDark = theme === 'dark';
  const logoFilter = isDark ? 'brightness-0 invert opacity-60' : 'opacity-60';

  return (
    <MySection theme={theme} className="!px-0">
      <div id={sectionId} className="mx-auto">
        {/* Logos - simple row of grayscale logos with opacity */}
        <div className="flex justify-center items-center">

            <div className="h-6 md:h-8">
              <img 
                src={imageUrl} 
                className={`h-full object-contain ${logoFilter}`}
              />
            </div>
        </div>
      </div>
    </MySection>
  );
}; 
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CTASectionProps } from '@/lib/types';
import { useDesign } from '@/lib/contexts/DesignContext';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { SectionHeading } from '@/components/template-ui/SectionHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';

// Default props
const defaultProps: CTASectionProps = {
  title: 'Ready to Get Started?',
  subtitle: 'Join thousands of satisfied customers who trust our platform.',
  ctaText: 'Get Started Now',
  ctaUrl: '#',
  theme: 'light',
  alignment: 'center'
};

export const CTAV1: React.FC<CTASectionProps> = ({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  ctaText = defaultProps.ctaText,
  ctaUrl = defaultProps.ctaUrl,
  theme = defaultProps.theme,
  alignment = defaultProps.alignment,
  backgroundImage
}) => {
  const { primaryColor, headingFont, bodyFont } = useDesign().styleGuide;
  const isDark = theme === 'dark';

  // Alignment classes
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  } as const;

  // Ensure alignment is one of the valid options
  const validAlignment = (alignment || 'center') as keyof typeof alignmentClasses;

  return (
    <MySection 
      theme={theme}
      className={`relative overflow-hidden ${backgroundImage ? 'min-h-[400px]' : ''}`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              style={{ objectFit: 'cover' }}
            />
            {/* Overlay */}
            <div 
              className="absolute inset-0" 
              style={{ 
                background: isDark 
                  ? 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.8) 100%)'
                  : 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)'
              }}
            />
          </div>
        </>
      )}

      {/* Content */}
      <div className={`relative z-10 flex flex-col ${alignmentClasses[validAlignment]} max-w-3xl mx-auto`}>
        <SectionHeading theme={theme} className="mb-6">
          {title}
        </SectionHeading>

        <MyParagraph theme={theme} text={subtitle || ''} className="mb-8" />

        {/* CTA Button */}
        <Link 
          href={ctaUrl} 
          className="inline-flex items-center gap-3 text-white rounded-lg px-8 py-4 font-bold tracking-wide shadow-lg transition-all hover:scale-105"
          style={{ 
            backgroundColor: primaryColor,
            fontFamily: bodyFont,
            boxShadow: `0 10px 15px -3px ${primaryColor}20, 0 4px 6px -4px ${primaryColor}20`
          }}
        >
          <span>{ctaText}</span>
          <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center" style={{ color: primaryColor }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M1.5 11L6.5 6L1.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      </div>
    </MySection>
  );
}; 
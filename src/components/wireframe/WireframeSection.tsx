'use client';

import React from 'react';
import { Section, SectionType } from '@/lib/types';

interface WireframeSectionProps {
  section: Section;
  onClick: (sectionId: string) => void;
  isSelected: boolean;
}

const WireframeSection: React.FC<WireframeSectionProps> = ({
  section,
  onClick,
  isSelected,
}) => {
  // Get component height based on section type
  const getSectionHeight = () => {
    switch (section.type) {
      case SectionType.Hero:
        return 'h-80';
      case SectionType.CTA:
        return 'h-40';
      case SectionType.Guarantee:
        return 'h-60';
      case SectionType.CaseStudies:
        return 'h-96';
      case SectionType.About:
        return 'h-72';
      case SectionType.WhoIsThisFor:
        return 'h-64';
      case SectionType.Offer:
        return 'h-72';
      case SectionType.WorkWithUs:
        return 'h-60';
      case SectionType.BeforeAfter:
        return 'h-80';
      case SectionType.FAQs:
        return 'h-64';
      case SectionType.Testimonials:
        return 'h-72';
      case SectionType.HowItWorks:
        return 'h-72';
      case SectionType.FeaturesOrServices:
        return 'h-96';
      case SectionType.Solutions:
        return 'h-64';
      case SectionType.Problem:
        return 'h-60';
      case SectionType.SocialProof:
        return 'h-48';
      default:
        return 'h-48';
    }
  };

  // Generate placeholder content based on section type
  const renderContent = () => {
    switch (section.type) {
      case SectionType.Hero:
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 space-y-6">
            <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-5 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-12 w-40 bg-gray-300 rounded"></div>
          </div>
        );

      case SectionType.Problem:
        return (
          <div className="flex flex-col items-center h-full px-6 py-6 space-y-4">
            <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
            <div className="grid grid-cols-2 gap-4 w-full mt-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-start p-2">
                  <div className="h-8 w-8 bg-gray-300 rounded mr-2"></div>
                  <div className="flex flex-col space-y-1">
                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    <div className="h-3 w-32 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case SectionType.FeaturesOrServices:
        return (
          <div className="flex flex-col items-center h-full px-6 py-6 space-y-4">
            <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
            <div className="grid grid-cols-3 gap-4 w-full mt-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col items-center p-2">
                  <div className="h-12 w-12 bg-gray-300 rounded-full mb-2"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
                  <div className="h-3 w-32 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        );

      case SectionType.CTA:
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 space-y-4">
            <div className="h-8 w-2/3 bg-gray-300 rounded"></div>
            <div className="h-5 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-12 w-40 bg-gray-300 rounded"></div>
          </div>
        );

      case SectionType.Testimonials:
        return (
          <div className="flex flex-col items-center h-full px-6 py-6 space-y-4">
            <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
            <div className="flex justify-around w-full mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center p-2 w-1/4">
                  <div className="h-12 w-12 bg-gray-300 rounded-full mb-2"></div>
                  <div className="h-4 w-16 bg-gray-300 rounded mb-1"></div>
                  <div className="h-16 w-full bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-5 w-3/4 bg-gray-300 rounded mt-4"></div>
          </div>
        );
    }
  };

  return (
    <div
      className={`border-2 rounded-md overflow-hidden transition-all ${
        isSelected ? 'border-blue-500' : 'border-gray-200'
      } ${getSectionHeight()} mb-4 cursor-pointer`}
      onClick={() => onClick(section.id)}
    >
      <div className="p-2 bg-gray-100 border-b flex justify-between items-center">
        <span className="text-xs font-medium">{section.title}</span>
        <span className="text-xs text-gray-500">{section.type}</span>
      </div>
      <div className="bg-white w-full p-1">{renderContent()}</div>
    </div>
  );
};

export default WireframeSection; 
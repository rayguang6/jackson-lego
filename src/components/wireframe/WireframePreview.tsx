'use client';

import React, { useState } from 'react';
import { useDesign } from '@/lib/contexts/DesignContext';
import WireframeSection from './WireframeSection';
import { HeroLightV1, HeroDarkV3 } from '@/components/sections/Hero';
import { Section, SectionType } from '@/lib/types';

const WireframePreview: React.FC = () => {
  const { design } = useDesign();
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [selectedTemplateVariant, setSelectedTemplateVariant] = useState<'light' | 'dark'>('light');

  // Sort sections by order
  const sortedSections = [...design.sections].sort((a, b) => a.order - b.order);

  const handleSectionClick = (sectionId: string) => {
    setSelectedSectionId(sectionId);
  };

  // Create a skeleton placeholder based on section type
  const renderSectionSkeleton = (section: Section) => {
    switch (section.type) {
      case SectionType.Hero:
        return (
          <div className="flex flex-col items-center justify-center py-16 px-8 space-y-6 bg-white">
            <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-12 w-40 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-64 w-full max-w-2xl bg-gray-200 rounded-xl animate-pulse mt-8"></div>
          </div>
        );
      case SectionType.FeaturesOrServices:
        return (
          <div className="flex flex-col items-center py-16 px-8 space-y-8 bg-gray-50">
            <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="grid grid-cols-3 gap-6 w-full max-w-5xl mt-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="flex flex-col items-center p-4">
                  <div className="h-16 w-16 bg-gray-200 rounded-full animate-pulse mb-4"></div>
                  <div className="h-5 w-2/3 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-20 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        );
      case SectionType.Problem:
        return (
          <div className="flex flex-col items-center py-16 px-8 space-y-6 bg-white">
            <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="grid grid-cols-2 gap-8 w-full max-w-4xl mt-8">
              {[1, 2].map(i => (
                <div key={i} className="flex p-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse mr-4"></div>
                  <div className="flex-1">
                    <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse mb-3"></div>
                    <div className="h-20 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case SectionType.Solutions:
        return (
          <div className="flex flex-col items-center py-16 px-8 space-y-6 bg-gray-50">
            <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="grid grid-cols-3 gap-6 w-full max-w-5xl mt-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex flex-col p-6 bg-white rounded-lg shadow">
                  <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="h-32 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        );
      case SectionType.Testimonials:
        return (
          <div className="flex flex-col items-center py-16 px-8 space-y-6 bg-white">
            <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl mt-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg w-80">
                  <div className="h-16 w-16 bg-gray-200 rounded-full animate-pulse mb-4"></div>
                  <div className="h-5 w-1/3 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="h-24 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        );
      case SectionType.CTA:
        return (
          <div className="flex flex-col items-center justify-center py-12 px-8 space-y-6 bg-gray-50">
            <div className="h-8 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-12 w-40 bg-gray-200 rounded animate-pulse mt-4"></div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center py-16 px-8 space-y-6 bg-white">
            <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-40 w-full max-w-4xl bg-gray-200 rounded animate-pulse"></div>
          </div>
        );
    }
  };

  // Render an actual component or skeleton based on section type
  const renderActualTemplate = (section: Section) => {
    switch (section.type) {
      case SectionType.Hero:
        return selectedTemplateVariant === 'light' ? (
          <HeroLightV1 
            title="Multipurpose Page Blocks Designed for Maximum Efficiency"
            subtitle="Skip design frustration and launch your site fast with pre-designed, proven components."
            badgeText="The #1 Community for Game-Changers" 
            ctaText="GET INSTANT ACCESS"
          />
        ) : (
          <HeroDarkV3 
            title="AI-Powered Design Blocks for Maximum Efficiency"
            subtitle="Skip design frustration and launch your site fast with pre-designed, proven components."
            badgeText="Generative Business Intelligence for Teams"
            features={["Build for Speed", "Proven Design", "Launch Like A Pro"]}
            usersCount="Join 2,000+ Game-Changers Using YourBrand Today"
          />
        );
      default:
        // Use a skeleton placeholder for other section types
        return renderSectionSkeleton(section);
    }
  };

  // Get selected section
  const selectedSection = selectedSectionId 
    ? sortedSections.find(section => section.id === selectedSectionId)
    : sortedSections[0] || null;

  return (
    <div className="h-full flex flex-col bg-white rounded-lg border">
      <div className="bg-white border-b border-gray-200 p-3 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Website Preview</h2>
        <div className="flex border rounded overflow-hidden">
          <button 
            className={`px-4 py-1.5 text-sm transition-colors ${selectedTemplateVariant === 'light' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-white text-gray-700 border-r'}`}
            onClick={() => setSelectedTemplateVariant('light')}
          >
            Light
          </button>
          <button 
            className={`px-4 py-1.5 text-sm transition-colors ${selectedTemplateVariant === 'dark' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-white text-gray-700'}`}
            onClick={() => setSelectedTemplateVariant('dark')}
          >
            Dark
          </button>
        </div>
      </div>
      
      {sortedSections.length > 0 ? (
        <div className="flex-1 overflow-auto">
          <div className="bg-white">
            {/* Combined preview - renders all sections as a single website */}
            {sortedSections.map((section) => (
              <div 
                key={section.id} 
                className={`relative border-b border-gray-100 ${
                  section.id === selectedSectionId ? 'ring-2 ring-indigo-500' : ''
                }`}
                onClick={() => handleSectionClick(section.id)}
              >
                {/* Section label overlay */}
                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-xs font-medium z-10">
                  {section.title}
                </div>
                {renderActualTemplate(section)}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <p className="text-gray-500 text-lg">No sections to preview.</p>
            <p className="text-gray-400 mt-2">Add sections in the Structure panel to get started.</p>
          </div>
        </div>
      )}
      
      {/* Section wireframes panel removed - we're showing a full website preview instead */}
    </div>
  );
};

export default WireframePreview; 
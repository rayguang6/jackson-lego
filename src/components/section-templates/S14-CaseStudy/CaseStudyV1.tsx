import React from 'react';
import { CaseStudyProps, defaultCaseStudyProps } from './types';

export const CaseStudyV1: React.FC<CaseStudyProps> = (props) => {
  const {
    title,
    subtitle,
    badgeText,
    caseStudies,
    ctaText,
    ctaLink,
    theme
  } = { ...defaultCaseStudyProps, ...props };

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          {badgeText && (
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-red-200 mb-6">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L10.2 5.8L16 6.8L12 11.2L13.2 16L8 13.6L2.8 16L4 11.2L0 6.8L5.8 5.8L8 0Z" fill="#ef083a" />
              </svg>
              <span className="text-sm font-medium tracking-wider text-red-600 uppercase">{badgeText}</span>
            </div>
          )}
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">{subtitle}</p>
        </div>
        
        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
              <div className="p-8 flex flex-col md:flex-row gap-8">
                {/* Left side: Image */}
                <div className="w-full md:w-1/3 lg:w-1/4">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                    {caseStudy.personImage && (
                      <img 
                        src={caseStudy.personImage}
                        alt={`${caseStudy.companyName} case study`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                
                {/* Right side: Content */}
                <div className="flex-1">
                  {/* Company logo */}
                  {caseStudy.companyLogo && (
                    <div className="mb-4 h-8">
                      <img 
                        src={caseStudy.companyLogo}
                        alt={caseStudy.companyName}
                        className="h-full"
                      />
                    </div>
                  )}
                  
                  {/* Problem statement */}
                  <p className="text-gray-700 mb-6">{caseStudy.problem}</p>
                  
                  {/* After using statement */}
                  <div className="mb-4">
                    <p className="font-medium text-gray-800">After using YourBrand:</p>
                  </div>
                  
                  {/* Results */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex}>
                        <p className="text-3xl font-bold text-red-600">{result.value}</p>
                        <p className="text-gray-700">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        {ctaText && (
          <div className="mt-16 text-center">
            <a 
              href={ctaLink || '#'} 
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition-colors"
            >
              {ctaText}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}; 
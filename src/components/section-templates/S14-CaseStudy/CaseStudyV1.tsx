import React, { useEffect } from 'react';
import { CaseStudyProps, defaultCaseStudyProps } from './types';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
import { EditableText } from '@/components/editable/EditableText';
import { MySection } from '@/components/template-ui/MySection';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';
import { useDesignStore } from '@/lib/store/designStore';
export const CaseStudyV1: React.FC<CaseStudyProps> = ({
  title = defaultCaseStudyProps.title,
  subtitle = defaultCaseStudyProps.subtitle,
  badgeText = defaultCaseStudyProps.badgeText,
  ctaText = defaultCaseStudyProps.ctaText,
  caseStudies = defaultCaseStudyProps.caseStudies,
  theme = defaultCaseStudyProps.theme,
  sectionId = defaultCaseStudyProps.sectionId || '',
}: CaseStudyProps) => {

  // Initialize the caseStudies array in the store to ensure it exists
  useEffect(() => {
    // Get the current section content
    const sectionContent = useDesignStore.getState().design.sections.find(s => s.id === sectionId)?.content || {};
    if (sectionId && !sectionContent.caseStudies) {
      useDesignStore.getState().updateSectionField(sectionId, 'caseStudies', JSON.parse(JSON.stringify(caseStudies)));
    }
  }, [sectionId, caseStudies]);
  // Ensure caseStudies is always an array
  const safeStudies = Array.isArray(caseStudies) 
    ? caseStudies 
    : defaultCaseStudyProps.caseStudies;

  return (
    <MySection theme={theme} className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <Badge theme={theme}>
            <EditableText sectionId={sectionId} contentPath="badgeText" defaultValue={badgeText || ''} />
          </Badge>
          <MyHeading theme={theme} className="text-4xl font-bold mt-5">
            <EditableText sectionId={sectionId} contentPath="title" defaultValue={title} />
          </MyHeading>
          <MyParagraph theme={theme} className="text-xl max-w-3xl mx-auto mt-5">
            <EditableText sectionId={sectionId} contentPath="subtitle" defaultValue={subtitle} />
          </MyParagraph>
        </div>
        
        {/* Case Studies */}
        <div className="space-y-8 mt-5 max-w-5xl mx-auto flex flex-col gap-8">
          {safeStudies.map((caseStudy, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden"
              style={{ backgroundColor: theme === 'dark' ? '#fff' : '#F9F9FB' }}
            >
              <div className="p-8 flex flex-col md:flex-row gap-8">
                {/* Left side: Image - Now full size */}
                <div className="w-full md:w-1/2 lg:w-1/3">
                  <div className="relative overflow-hidden rounded-lg h-full">
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
                  
                  {/* Problem statement - now editable */}
                  <MyParagraph className="mb-6">

                    <EditableText 
                      sectionId={sectionId} 
                      contentPath={`caseStudies.${index}.problem`} 
                      defaultValue={caseStudy.problem} 
                    />
                  </MyParagraph>
                  
                  {/* After using statement - now editable */}
                  <div className="mb-4">
                    <MyParagraph className="!font-bold text-gray-800">
                      <EditableText 
                        sectionId={sectionId} 
                        contentPath={`caseStudies.${index}.afterUsingText`} 
                        defaultValue={caseStudy.afterUsingText || "After using YourBrand:"} 
                      />
                    </MyParagraph>
                  </div>
                  
                  {/* Results */}
                  <div className="grid grid-cols-1 gap-4">
                    {Array.isArray(caseStudy.results) && caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex}>
                        <MyHeading className="text-3xl font-bold" style={{ color: GLOBALCSS_VAR.primaryColor }}>
                          <EditableText 
                            sectionId={sectionId} 
                            contentPath={`caseStudies.${index}.results.${resultIndex}.value`} 
                            defaultValue={result.value} 
                          />
                        </MyHeading>
                        <MyParagraph className="">
                          <EditableText 
                            sectionId={sectionId} 
                            contentPath={`caseStudies.${index}.results.${resultIndex}.label`} 
                            defaultValue={result.label} 
                          />
                        </MyParagraph>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <PrimaryButton theme={theme} className="inline-flex items-center px-8 py-4 text-white font-medium rounded-full hover:bg-red-700 transition-colors">
            <EditableText sectionId={sectionId} contentPath="ctaText" defaultValue={ctaText || 'GET INSTANT ACCESS'} />
          </PrimaryButton>
        </div>
      </div>
    </MySection>
  );
}; 
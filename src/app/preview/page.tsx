'use client';

import React from 'react';
import { getTemplate, parseTemplateId } from '@/lib/templates';
import { ThemeType, VersionType, SectionType } from '@/lib/types';
import { useDesignStore } from '@/lib/store/designStore';

const PreviewContent = () => {
  const design = useDesignStore((state) => state.design);
  const [isHydrated, setIsHydrated] = React.useState(false);
  
  // Wait for hydration
  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Don't render anything until hydrated
  if (!isHydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading preview...</div>
      </div>
    );
  }
  
  // Sort sections by order
  const sortedSections = [...design.sections].sort((a, b) => a.order - b.order);

  // Render an actual component based on section type
  const renderSection = (section: any) => {
    let template;
    
    if (section.templateId) {
      // Parse the template ID safely
      const templateInfo = parseTemplateId(section.templateId);
      
      if (templateInfo) {
        // Use the parsed information to get the template
        template = getTemplate(
          section.type, 
          templateInfo.version, 
          templateInfo.theme
        );
      } else {
        // Fallback to default if parsing failed
        template = getTemplate(section.type, VersionType.v1, ThemeType.light);
      }
    } else {
      // If no template is selected, use default v1/light
      template = getTemplate(section.type, VersionType.v1, ThemeType.light);
    }
    
    if (template) {
      const Component = template.component;
      // Pass the section ID and content to ensure unique instances
      return <Component 
        theme={template.theme}
        sectionId={section.id}
        styleGuide={design.styleGuide}
        content={section.content}
      />;
    }
    
    return null;
  };

  return (
    <div className="min-h-screen">
      {sortedSections.map((section) => (
        <div key={section.id}>
          {renderSection(section)}
        </div>
      ))}
    </div>
  );
};

export default function PreviewPage() {
  return <PreviewContent />;
} 
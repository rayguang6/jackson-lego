'use client';

import React from 'react';
import { getTemplateById, getTemplateByTypeAndVersion } from '@/lib/templates';
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
      // If a template is selected, use it directly
      template = getTemplateById(section.templateId);
    } else {
      // If no template is selected, use a default one
      template = getTemplateByTypeAndVersion(section.type, 'light', 'v1');
    }
    
    if (template) {
      const Component = template.component;
      // Pass both theme and styleGuide to ensure proper styling
      return <Component theme={template.theme} styleGuide={design.styleGuide} {...section} />;
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
import React from 'react';
import { SectionType, ThemeType, VersionType, WebsiteSection } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';
import { StarIcon } from '@/components/template-ui/icons/StarIcon';
import { getTemplatesForSectionType } from '@/lib/templates';

interface FunnelSelectionDialogProps {
  onClose: () => void;
  onSelect: (sections: WebsiteSection[]) => void;
}

const FunnelSelectionDialog: React.FC<FunnelSelectionDialogProps> = ({ onClose, onSelect }) => {
  // Define all funnel options and their section sequences
  const funnelDefinitions: Array<{
    id: 'lead-magnet' | 'webinar' | 'vsl' | 'high-ticket' | 'course' | 'tripwire' | 'launch';
    name: string;
    desc: string;
    sectionTypes: SectionType[];
  }> = [
    { id: 'lead-magnet', name: 'Lead Magnet Funnel', desc: 'Collect emails for a free PDF, guide, or checklist', sectionTypes: [
      SectionType.S01_Hero, SectionType.S03_Problem, SectionType.S04_Solutions, SectionType.S05_FeaturesOrServices,
      SectionType.S13_About, SectionType.S07_Testimonials, SectionType.S08_FAQ, SectionType.S16_CTA
    ] },
    { id: 'webinar', name: 'Webinar Funnel', desc: 'Register for a live or automated webinar', sectionTypes: [
      SectionType.S17_WebinarHero, SectionType.S04_Solutions, SectionType.S05_FeaturesOrServices,
      SectionType.S12_WhoIsThisFor, SectionType.S13_About, SectionType.S07_Testimonials,
      SectionType.S08_FAQ, SectionType.S18_WebinarCTA
    ] },
    { id: 'vsl', name: 'VSL Funnel', desc: 'Sell through a video sales letter', sectionTypes: [
      SectionType.S01_Hero, SectionType.S03_Problem, SectionType.S09_BeforeAfter, SectionType.S04_Solutions,
      SectionType.S05_FeaturesOrServices, SectionType.S07_Testimonials, SectionType.S15_Guarantee, SectionType.S16_CTA
    ] },
    { id: 'high-ticket', name: 'High-Ticket Application Funnel', desc: 'Qualify and get people to book a call', sectionTypes: [
      SectionType.S01_Hero, SectionType.S03_Problem, SectionType.S12_WhoIsThisFor, SectionType.S04_Solutions,
      SectionType.S05_FeaturesOrServices, SectionType.S14_CaseStudy, SectionType.S13_About, SectionType.S08_FAQ, SectionType.S16_CTA
    ] },
    { id: 'course', name: 'Course Funnel', desc: 'Sell an online course', sectionTypes: [
      SectionType.S01_Hero, SectionType.S09_BeforeAfter, SectionType.S04_Solutions, SectionType.S05_FeaturesOrServices,
      SectionType.S12_WhoIsThisFor, SectionType.S07_Testimonials, SectionType.S08_FAQ, SectionType.S15_Guarantee, SectionType.S16_CTA
    ] },
    { id: 'tripwire', name: 'Tripwire Funnel', desc: 'Low-ticket product to acquire paying users', sectionTypes: [
      SectionType.S01_Hero, SectionType.S03_Problem, SectionType.S05_FeaturesOrServices, SectionType.S07_Testimonials,
      SectionType.S15_Guarantee, SectionType.S16_CTA
    ] },
    { id: 'launch', name: 'Product Launch Funnel', desc: 'Announce or launch a product/SaaS', sectionTypes: [
      SectionType.S01_Hero, SectionType.S05_FeaturesOrServices, SectionType.S06_HowItWorks, SectionType.S13_About,
      SectionType.S07_Testimonials, SectionType.S08_FAQ, SectionType.S16_CTA
    ] },
  ];

  const handleSelectFunnel = (id: typeof funnelDefinitions[number]['id']) => {
    const def = funnelDefinitions.find(f => f.id === id);
    if (!def) return;
    const sections: WebsiteSection[] = def.sectionTypes.map((type, idx) => {
      // Pick first available template variant; fallback to v1-light
      const variants = getTemplatesForSectionType(type);
      let templateId: string;
      let theme: ThemeType;
      if (variants.length > 0) {
        // Randomly pick a variant for diversity
        const chosen = variants[Math.floor(Math.random() * variants.length)];
        templateId = chosen.id;
        theme = chosen.theme;
    } else {
        templateId = `${type}-${VersionType.v1}-${ThemeType.light}`;
        theme = ThemeType.light;
      }
      return {
          id: uuidv4(),
        type,
        title: `${type.replace(/^[A-Z0-9]+_?/, '')} Section`,
        order: idx,
        templateId,
        theme,
          content: {},
      };
    });
    onSelect(sections);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-[480px] border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Select Funnel Type</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-3">
          {funnelDefinitions.map(f => (
          <button
              key={f.id}
              onClick={() => handleSelectFunnel(f.id)}
              className="w-full p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 text-left flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <StarIcon className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{f.name}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunnelSelectionDialog; 
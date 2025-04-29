import React from 'react';
import { SectionType, ThemeType, VersionType, WebsiteSection } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

interface FunnelSelectionDialogProps {
  onClose: () => void;
  onSelect: (sections: WebsiteSection[]) => void;
}

const FunnelSelectionDialog: React.FC<FunnelSelectionDialogProps> = ({ onClose, onSelect }) => {
  const handleSelectFunnel = (type: 'normal' | 'webinar') => {
    let sections: WebsiteSection[] = [];
    
    if (type === 'normal') {
      sections = [
        {
          id: uuidv4(),
          type: SectionType.S01_Hero,
          title: 'Hero Section',
          order: 0,
          templateId: `${SectionType.S01_Hero}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S03_Problem,
          title: 'Problem Section',
          order: 1,
          templateId: `${SectionType.S03_Problem}-${VersionType.v1}-${ThemeType.dark}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S04_Solutions,
          title: 'Solutions Section',
          order: 2,
          templateId: `${SectionType.S04_Solutions}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S05_FeaturesOrServices,
          title: 'Features Section',
          order: 3,
          templateId: `${SectionType.S05_FeaturesOrServices}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S06_HowItWorks,
          title: 'How It Works Section',
          order: 4,
          templateId: `${SectionType.S06_HowItWorks}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S07_Testimonials,
          title: 'Testimonials Section',
          order: 5,
          templateId: `${SectionType.S07_Testimonials}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S16_CTA,
          title: 'CTA Section',
          order: 6,
          templateId: `${SectionType.S16_CTA}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
      ];
    } else {
      sections = [
        {
          id: uuidv4(),
          type: SectionType.S17_WebinarHero,
          title: 'Webinar Hero Section',
          order: 0,
          templateId: `${SectionType.S17_WebinarHero}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S18_WebinarBenefits,
          title: 'Webinar Benefits Section',
          order: 1,
          templateId: `${SectionType.S18_WebinarBenefits}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S19_WebinarFeatures,
          title: 'Webinar Features Section',
          order: 2,
          templateId: `${SectionType.S19_WebinarFeatures}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S20_WebinarTestimonials,
          title: 'Webinar Testimonials Section',
          order: 3,
          templateId: `${SectionType.S20_WebinarTestimonials}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S21_WebinarPricing,
          title: 'Webinar Pricing Section',
          order: 4,
          templateId: `${SectionType.S21_WebinarPricing}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S22_WebinarSchedule,
          title: 'Webinar Schedule Section',
          order: 5,
          templateId: `${SectionType.S22_WebinarSchedule}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
        {
          id: uuidv4(),
          type: SectionType.S23_WebinarCTA,
          title: 'Webinar CTA Section',
          order: 6,
          templateId: `${SectionType.S23_WebinarCTA}-${VersionType.v1}-${ThemeType.light}`,
          theme: ThemeType.light,
          content: {},
        },
      ];
    }
    
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
          <button
            onClick={() => handleSelectFunnel('normal')}
            className="w-full p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Normal Funnel</h3>
                <p className="text-sm text-gray-500">Standard sales funnel with hero, problem, solutions, and more</p>
              </div>
            </div>
          </button>
          
          <button
            onClick={() => handleSelectFunnel('webinar')}
            className="w-full p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Webinar Funnel</h3>
                <p className="text-sm text-gray-500">Webinar-specific funnel with schedule, benefits, and registration</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunnelSelectionDialog; 
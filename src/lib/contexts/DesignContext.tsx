// 'use client';

// import React, { createContext, useContext, ReactNode } from 'react';
// import { WebsiteSection, StyleGuide, WebsiteDesign, SectionType } from '../types';
// import { useDesignStore } from '../store/designStore';
// import { styleGuide } from '../constants/styleGuide';

// export interface DesignContextProps {
//   design: WebsiteDesign;
//   styleGuide: StyleGuide;
//   addSection: (type: SectionType, templateId: string) => void; // Changed signature
//   removeSection: (sectionId: string) => void;
//   updateSection: (section: WebsiteSection) => void;
//   reorderSection: (sectionId: string, newOrder: number) => void;
//   updateStyleGuide: (styleGuide: StyleGuide) => void;
//   updatePrimaryColor: (color: string) => void;
//   updateSecondaryColor: (color: string) => void;
//   updateHeadingFont: (font: string) => void;
//   updateBodyFont: (font: string) => void;
//   updateSectionTemplate: (sectionId: string, templateId: string) => void;
//   resetDesign: () => void;
//   resetStyleGuide: () => void;
//   resetSections: () => void;
// }

// const DesignContext = createContext<DesignContextProps | undefined>(undefined);
// export { DesignContext };

// export const useDesign = () => {
//   const context = useContext(DesignContext);
  
//   // If we're in a server-side rendering context and context is undefined,
//   // return a complete mock object that implements DesignContextProps
//   if (typeof window === 'undefined' && !context) {
//     const ssrFallback: DesignContextProps = {
//       design: {
//         id: '',
//         name: '',
//         sections: [],
//         styleGuide: styleGuide,
//         createdAt: '',
//         updatedAt: ''
//       },
//       styleGuide: styleGuide,
//       addSection: () => {},
//       removeSection: () => {},
//       updateSection: () => {},
//       reorderSection: () => {},
//       updateStyleGuide: () => {},
//       updatePrimaryColor: () => {},
//       updateSecondaryColor: () => {},
//       updateHeadingFont: () => {},
//       updateBodyFont: () => {},
//       updateSectionTemplate: () => {},
//       resetDesign: () => {},
//       resetStyleGuide: () => {},
//       resetSections: () => {}
//     };
//     return ssrFallback;
//   }
  
//   if (!context) {
//     throw new Error('useDesign must be used within a DesignProvider');
//   }
//   return context;
// };

// interface DesignProviderProps {
//   children: ReactNode;
// }

// export const DesignProvider: React.FC<DesignProviderProps> = ({ children }) => {
//   const store = useDesignStore();

//   return (
//     <DesignContext.Provider
//       value={{
//         design: store.design,
//         styleGuide: store.design.styleGuide,
//         addSection: (type: SectionType, templateId: string) => store.addSection(type, templateId),
//         removeSection: (sectionId: string) => store.removeSection(sectionId),
//         updateSection: (section: WebsiteSection) => store.updateSection(section),
//         reorderSection: (sectionId: string, newOrder: number) => store.reorderSection(sectionId, newOrder),
//         updateStyleGuide: (styleGuide: StyleGuide) => store.updateStyleGuide(styleGuide),
//         updatePrimaryColor: store.updatePrimaryColor,
//         updateSecondaryColor: store.updateSecondaryColor,
//         updateHeadingFont: store.updateHeadingFont,
//         updateBodyFont: store.updateBodyFont,
//         updateSectionTemplate: store.updateSectionTemplate,
//         resetDesign: store.resetDesign,
//         resetStyleGuide: store.resetStyleGuide,
//         resetSections: store.resetSections,
//       }}
//     >
//       {children}
//     </DesignContext.Provider>
//   );
// }; 
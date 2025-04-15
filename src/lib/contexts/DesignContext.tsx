'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { Section, StyleGuide, WebsiteDesign } from '../types';
import { useDesignStore } from '../store/designStore';

export interface DesignContextProps {
  design: WebsiteDesign;
  styleGuide: StyleGuide;
  addSection: (section: Omit<Section, 'id' | 'order'>) => void;
  removeSection: (sectionId: string) => void;
  updateSection: (section: Section) => void;
  reorderSection: (sectionId: string, newOrder: number) => void;
  updateStyleGuide: (styleGuide: StyleGuide) => void;
  updatePrimaryColor: (color: string) => void;
  updateSecondaryColor: (color: string) => void;
  updateHeadingFont: (font: string) => void;
  updateBodyFont: (font: string) => void;
  updateSectionTemplate: (sectionId: string, templateId: string) => void;
  resetDesign: () => void;
  resetStyleGuide: () => void;
  resetSections: () => void;
}

const DesignContext = createContext<DesignContextProps | undefined>(undefined);
export { DesignContext };

export const useDesign = () => {
  const context = useContext(DesignContext);
  
  // If we're in a server-side rendering context and context is undefined,
  // return a complete mock object that implements DesignContextProps
  if (typeof window === 'undefined' && !context) {
    const ssrFallback: DesignContextProps = {
      design: {
        id: '',
        name: '',
        sections: [],
        styleGuide: {
          primaryColor: '#000000',
          secondaryColor: '#000000',
          accentColor: '#000000',
          backgroundColor: '#ffffff',
          backgroundColorDark: '#000000',
          textColor: '#000000',
          headingFont: 'Arial',
          bodyFont: 'Arial',
          fontFamily: 'Arial',
          h1Size: '48px',
          h1Weight: '700',
          h1LineHeight: '1.2',
          h2Size: '36px',
          h2Weight: '600',
          h2LineHeight: '1.3',
          bodySize: '16px',
          bodyWeight: '400',
          bodyLineHeight: '1.5',
          spacingXs: '8px',
          spacingSm: '16px',
          spacingMd: '24px',
          spacingLg: '32px',
          spacingXl: '48px',
          borderRadiusSm: '4px',
          borderRadiusMd: '8px',
          borderRadiusLg: '16px',
          borderRadiusFull: '9999px',
        },
        createdAt: '',
        updatedAt: ''
      },
      styleGuide: {
        primaryColor: '#000000',
        secondaryColor: '#000000',
        accentColor: '#000000',
        backgroundColor: '#ffffff',
        backgroundColorDark: '#000000',
        textColor: '#000000',
        headingFont: 'Arial',
        bodyFont: 'Arial',
        fontFamily: 'Arial',
        h1Size: '48px',
        h1Weight: '700',
        h1LineHeight: '1.2',
        h2Size: '36px',
        h2Weight: '600',
        h2LineHeight: '1.3',
        bodySize: '16px',
        bodyWeight: '400',
        bodyLineHeight: '1.5',
        spacingXs: '8px',
        spacingSm: '16px',
        spacingMd: '24px',
        spacingLg: '32px',
        spacingXl: '48px',
        borderRadiusSm: '4px',
        borderRadiusMd: '8px',
        borderRadiusLg: '16px',
        borderRadiusFull: '9999px',
      },
      addSection: () => {},
      removeSection: () => {},
      updateSection: () => {},
      reorderSection: () => {},
      updateStyleGuide: () => {},
      updatePrimaryColor: () => {},
      updateSecondaryColor: () => {},
      updateHeadingFont: () => {},
      updateBodyFont: () => {},
      updateSectionTemplate: () => {},
      resetDesign: () => {},
      resetStyleGuide: () => {},
      resetSections: () => {}
    };
    return ssrFallback;
  }
  
  if (!context) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
};

interface DesignProviderProps {
  children: ReactNode;
}

export const DesignProvider: React.FC<DesignProviderProps> = ({ children }) => {
  const store = useDesignStore();

  return (
    <DesignContext.Provider
      value={{
        design: store.design,
        styleGuide: store.design.styleGuide,
        addSection: store.addSection,
        removeSection: store.removeSection,
        updateSection: store.updateSection,
        reorderSection: store.reorderSection,
        updateStyleGuide: store.updateStyleGuide,
        updatePrimaryColor: store.updatePrimaryColor,
        updateSecondaryColor: store.updateSecondaryColor,
        updateHeadingFont: store.updateHeadingFont,
        updateBodyFont: store.updateBodyFont,
        updateSectionTemplate: store.updateSectionTemplate,
        resetDesign: store.resetDesign,
        resetStyleGuide: store.resetStyleGuide,
        resetSections: store.resetSections,
      }}
    >
      {children}
    </DesignContext.Provider>
  );
}; 
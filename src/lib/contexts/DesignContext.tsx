'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Section, StyleGuide, WebsiteDesign } from '../types';
import { defaultStyleGuide } from '../constants/defaultStyles';
import { defaultSections } from '../constants/defaultSections';
import { v4 as uuidv4 } from 'uuid';

interface DesignContextProps {
  design: WebsiteDesign;
  addSection: (section: Omit<Section, 'id' | 'order'>) => void;
  removeSection: (sectionId: string) => void;
  updateSection: (section: Section) => void;
  reorderSection: (sectionId: string, newOrder: number) => void;
  updateStyleGuide: (styleGuide: StyleGuide) => void;
  resetDesign: () => void;
}

const DesignContext = createContext<DesignContextProps | undefined>(undefined);

export const useDesign = () => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
};

interface DesignProviderProps {
  children: ReactNode;
}

export const DesignProvider: React.FC<DesignProviderProps> = ({ children }) => {
  const [design, setDesign] = useState<WebsiteDesign>({
    id: uuidv4(),
    name: 'New Website Design',
    sections: defaultSections,
    styleGuide: defaultStyleGuide,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const addSection = (sectionData: Omit<Section, 'id' | 'order'>) => {
    const newSection: Section = {
      id: uuidv4(),
      ...sectionData,
      order: design.sections.length,
    };

    setDesign((prevDesign) => ({
      ...prevDesign,
      sections: [...prevDesign.sections, newSection],
      updatedAt: new Date().toISOString(),
    }));
  };

  const removeSection = (sectionId: string) => {
    setDesign((prevDesign) => {
      // Filter out the removed section
      const newSections = prevDesign.sections.filter((s) => s.id !== sectionId);
      
      // Reorder the remaining sections
      const reorderedSections = newSections.map((section, index) => ({
        ...section,
        order: index,
      }));
      
      return {
        ...prevDesign,
        sections: reorderedSections,
        updatedAt: new Date().toISOString(),
      };
    });
  };

  const updateSection = (updatedSection: Section) => {
    setDesign((prevDesign) => ({
      ...prevDesign,
      sections: prevDesign.sections.map((section) =>
        section.id === updatedSection.id ? updatedSection : section
      ),
      updatedAt: new Date().toISOString(),
    }));
  };

  const reorderSection = (sectionId: string, newOrder: number) => {
    setDesign((prevDesign) => {
      const sectionToMove = prevDesign.sections.find((s) => s.id === sectionId);
      
      if (!sectionToMove) return prevDesign;
      
      const currentOrder = sectionToMove.order;
      
      // Bound the new order within valid limits
      const boundedNewOrder = Math.max(0, Math.min(prevDesign.sections.length - 1, newOrder));
      
      // If the order hasn't changed, return the current state
      if (currentOrder === boundedNewOrder) return prevDesign;
      
      // Create new array with updated orders
      const updatedSections = prevDesign.sections.map((section) => {
        // The section being moved
        if (section.id === sectionId) {
          return { ...section, order: boundedNewOrder };
        }
        
        // Adjust other sections' orders
        if (currentOrder < boundedNewOrder) {
          // Moving down: decrement orders for sections between current and new position
          if (section.order > currentOrder && section.order <= boundedNewOrder) {
            return { ...section, order: section.order - 1 };
          }
        } else {
          // Moving up: increment orders for sections between new and current position
          if (section.order >= boundedNewOrder && section.order < currentOrder) {
            return { ...section, order: section.order + 1 };
          }
        }
        
        // Leave other sections unchanged
        return section;
      });
      
      return {
        ...prevDesign,
        sections: updatedSections,
        updatedAt: new Date().toISOString(),
      };
    });
  };

  const updateStyleGuide = (styleGuide: StyleGuide) => {
    setDesign((prevDesign) => ({
      ...prevDesign,
      styleGuide,
      updatedAt: new Date().toISOString(),
    }));
  };

  const resetDesign = () => {
    setDesign({
      id: uuidv4(),
      name: 'New Website Design',
      sections: defaultSections,
      styleGuide: defaultStyleGuide,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <DesignContext.Provider
      value={{
        design,
        addSection,
        removeSection,
        updateSection,
        reorderSection,
        updateStyleGuide,
        resetDesign,
      }}
    >
      {children}
    </DesignContext.Provider>
  );
}; 
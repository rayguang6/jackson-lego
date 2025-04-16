// src/lib/store/designStore.ts
import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { WebsiteDesign, StyleGuide, SectionType, WebsiteSection } from '../types';
import { styleGuide as initialStyleGuide } from '../constants/styleGuide';
import { defaultSections } from '../constants/defaultSections';
import { v4 as uuidv4 } from 'uuid';

interface DesignStore {
  design: WebsiteDesign;
  
  // Section operations
  addSection: (type: SectionType, templateId: string) => void; // Changed signature
  removeSection: (sectionId: string) => void;
  updateSection: (section: WebsiteSection) => void;
  reorderSection: (sectionId: string, newOrder: number) => void;
  
  // Content operations - new!
  updateSectionContent: (sectionId: string, content: Record<string, any>) => void;
  updateSectionField: (sectionId: string, fieldPath: string, value: any) => void;
  
  // Style operations
  updateStyleGuide: (styleGuide: StyleGuide) => void;
  updatePrimaryColor: (color: string) => void;
  updateSecondaryColor: (color: string) => void;
  updateHeadingFont: (font: string) => void;
  updateBodyFont: (font: string) => void;
  
  // Template operations
  updateSectionTemplate: (sectionId: string, templateId: string) => void;
  
  // Reset operations
  resetDesign: () => void;
  resetStyleGuide: () => void;
  resetSections: () => void;
}

type DesignStorePersist = (
  config: StateCreator<DesignStore>,
  options: PersistOptions<DesignStore>
) => StateCreator<DesignStore>;

const getInitialState = (): WebsiteDesign => ({
  id: uuidv4(),
  name: 'New Website Design',
  sections: defaultSections,
  styleGuide: initialStyleGuide,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

export const useDesignStore = create<DesignStore>()(
  (persist as DesignStorePersist)(
    (set) => ({
      design: getInitialState(),
      
      // Update to match the interface
      addSection: (type: SectionType, templateId: string) => 
        set((state) => {  
          const theme = templateId.includes('dark') ? 'dark' : 'light';
          const newSection: WebsiteSection = {
            id: uuidv4(),
            type,
            title: `${type.charAt(0).toUpperCase() + type.slice(1)} Section`,
            order: state.design.sections.length,
            templateId,
            theme,
            content:{}
          };
          
          return {
            design: {
              ...state.design,
              sections: [...state.design.sections, newSection],
              updatedAt: new Date().toISOString()
            }
          };
        }),
      
      removeSection: (sectionId: string) =>
        set((state) => {
          const newSections = state.design.sections
            .filter((s) => s.id !== sectionId)
            .map((section, index) => ({
              ...section,
              order: index,
            }));

          return {
            design: {
              ...state.design,
              sections: newSections,
              updatedAt: new Date().toISOString(),
            },
          };
        }),

      updateSection: (updatedSection: WebsiteSection) =>
        set((state) => ({
          design: {
            ...state.design,
            sections: state.design.sections.map((section) =>
              section.id === updatedSection.id ? updatedSection : section
            ),
            updatedAt: new Date().toISOString(),
          },
        })),
        
      // Add the new content operations
      updateSectionContent: (sectionId: string, content: Record<string, any>) =>
        set((state) => ({
          design: {
            ...state.design,
            sections: state.design.sections.map((section) =>
              section.id === sectionId
                ? { ...section, content }
                : section
            ),
            updatedAt: new Date().toISOString(),
          },
        })),
        
      updateSectionField: (sectionId: string, fieldPath: string, value: any) =>
        set((state) => {
          const updatedSections = state.design.sections.map(section => {
            if (section.id !== sectionId) return section;
            
            // Create a deep copy of the content
            const updatedContent = JSON.parse(JSON.stringify(section.content || {}));
            
            // Handle dot notation path
            const pathParts = fieldPath.split('.');
            let current = updatedContent;
            
            // Navigate to the target object
            for (let i = 0; i < pathParts.length - 1; i++) {
              const part = pathParts[i];
              // Handle array indices
              if (!isNaN(Number(part))) {
                current = current[pathParts[i-1]][Number(part)];
              } else {
                if (!current[part]) current[part] = {};
                current = current[part];
              }
            }
            
            // Set the value on the target property
            current[pathParts[pathParts.length - 1]] = value;
            
            return {
              ...section,
              content: updatedContent
            };
          });
          
          return {
            design: {
              ...state.design,
              sections: updatedSections,
              updatedAt: new Date().toISOString()
            }
          };
        }),

      // Keep other operations as they were...
      reorderSection: (sectionId: string, newOrder: number) =>
        set((state) => {
          const sectionToMove = state.design.sections.find((s) => s.id === sectionId);
          if (!sectionToMove) return state;

          const currentOrder = sectionToMove.order;
          const boundedNewOrder = Math.max(0, Math.min(state.design.sections.length - 1, newOrder));

          if (currentOrder === boundedNewOrder) return state;

          const updatedSections = state.design.sections.map((section) => {
            if (section.id === sectionId) {
              return { ...section, order: boundedNewOrder };
            }

            if (currentOrder < boundedNewOrder) {
              if (section.order > currentOrder && section.order <= boundedNewOrder) {
                return { ...section, order: section.order - 1 };
              }
            } else {
              if (section.order >= boundedNewOrder && section.order < currentOrder) {
                return { ...section, order: section.order + 1 };
              }
            }

            return section;
          });

          return {
            design: {
              ...state.design,
              sections: updatedSections,
              updatedAt: new Date().toISOString(),
            },
          };
        }),

      updateStyleGuide: (styleGuide: StyleGuide) =>
        set((state) => ({
          design: {
            ...state.design,
            styleGuide,
            updatedAt: new Date().toISOString(),
          },
        })),

      // Other methods remain the same...
      updatePrimaryColor: (color: string) =>
        set((state) => ({
          design: {
            ...state.design,
            styleGuide: {
              ...state.design.styleGuide,
              primaryColor: color,
            },
            updatedAt: new Date().toISOString(),
          },
        })),

      updateSecondaryColor: (color: string) =>
        set((state) => ({
          design: {
            ...state.design,
            styleGuide: {
              ...state.design.styleGuide,
              secondaryColor: color,
            },
            updatedAt: new Date().toISOString(),
          },
        })),

      updateHeadingFont: (font: string) =>
        set((state) => ({
          design: {
            ...state.design,
            styleGuide: {
              ...state.design.styleGuide,
              headingFont: font,
            },
            updatedAt: new Date().toISOString(),
          },
        })),

      updateBodyFont: (font: string) =>
        set((state) => ({
          design: {
            ...state.design,
            styleGuide: {
              ...state.design.styleGuide,
              bodyFont: font,
            },
            updatedAt: new Date().toISOString(),
          },
        })),

      updateSectionTemplate: (sectionId: string, templateId: string) =>
        set((state) => ({
          design: {
            ...state.design,
            sections: state.design.sections.map((section) =>
              section.id === sectionId ? { ...section, templateId } : section
            ),
            updatedAt: new Date().toISOString(),
          },
        })),

      resetDesign: () =>
        set({
          design: getInitialState(),
        }),

      resetStyleGuide: () =>
        set((state) => ({
          design: {
            ...state.design,
            styleGuide: initialStyleGuide,
            updatedAt: new Date().toISOString(),
          },
        })),

      resetSections: () =>
        set((state) => ({
          design: {
            ...state.design,
            sections: defaultSections,
            updatedAt: new Date().toISOString(),
          },
        })),
    }),
    {
      name: 'jackson-lego-design-store',
    }
  )
);
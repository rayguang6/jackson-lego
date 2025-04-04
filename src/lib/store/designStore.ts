import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { WebsiteDesign, Section, StyleGuide, SectionType } from '../types';
import { styleGuide as initialStyleGuide } from '../constants/styleGuide';
import { defaultSections } from '../constants/defaultSections';
import { v4 as uuidv4 } from 'uuid';

interface DesignStore {
  design: WebsiteDesign;
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

      addSection: (sectionData: Omit<Section, 'id' | 'order'>) =>
        set((state: DesignStore) => {
          const newSection: Section = {
            id: uuidv4(),
            ...sectionData,
            order: state.design.sections.length,
          };

          return {
            design: {
              ...state.design,
              sections: [...state.design.sections, newSection],
              updatedAt: new Date().toISOString(),
            },
          };
        }),

      removeSection: (sectionId: string) =>
        set((state: DesignStore) => {
          const newSections = state.design.sections
            .filter((s: Section) => s.id !== sectionId)
            .map((section: Section, index: number) => ({
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

      updateSection: (updatedSection: Section) =>
        set((state: DesignStore) => ({
          design: {
            ...state.design,
            sections: state.design.sections.map((section) =>
              section.id === updatedSection.id ? updatedSection : section
            ),
            updatedAt: new Date().toISOString(),
          },
        })),

      reorderSection: (sectionId: string, newOrder: number) =>
        set((state: DesignStore) => {
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
        set((state: DesignStore) => ({
          design: {
            ...state.design,
            styleGuide,
            updatedAt: new Date().toISOString(),
          },
        })),

      updatePrimaryColor: (color: string) =>
        set((state: DesignStore) => ({
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
        set((state: DesignStore) => ({
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
        set((state: DesignStore) => ({
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
        set((state: DesignStore) => ({
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
        set((state: DesignStore) => ({
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
        set((state: DesignStore) => ({
          design: {
            ...state.design,
            styleGuide: initialStyleGuide,
            updatedAt: new Date().toISOString(),
          },
        })),

      resetSections: () =>
        set((state: DesignStore) => ({
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
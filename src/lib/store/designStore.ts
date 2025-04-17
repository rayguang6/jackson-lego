// src/lib/store/designStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import {
  WebsiteDesign,
  StyleGuide,
  SectionType,
  WebsiteSection,
  ThemeType,
} from '../types'
import { styleGuide as initialStyleGuide } from '../constants/styleGuide'
import { defaultSections } from '../constants/defaultSections'

interface DesignStore {
  design: WebsiteDesign

  // Section operations
  addSection: (type: SectionType, templateId: string) => void
  removeSection: (sectionId: string) => void
  updateSection: (section: WebsiteSection) => void
  updateSectionTemplate: (sectionId: string, templateId: string) => void
  reorderSection: (sectionId: string, newOrder: number) => void

  // Content operations
  updateSectionContent: (sectionId: string, content: Record<string, any>) => void
  updateSectionField: (sectionId: string, fieldPath: string, value: any) => void

  // Style operations
  updateStyleGuide: (patch: Partial<StyleGuide>) => void
  updatePrimaryColor: (color: string) => void
  updateSecondaryColor: (color: string) => void
  updateHeadingFont: (font: string) => void
  updateBodyFont: (font: string) => void

  // Reset / Import
  resetDesign: () => void
  resetSections: () => void
  resetStyleGuide: () => void
  loadDesign: (design: WebsiteDesign) => void
}

const getInitialDesign = (): WebsiteDesign => ({
  id: uuidv4(),
  name: 'New Website Design',
  sections: defaultSections,
  styleGuide: initialStyleGuide,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
})

export const useDesignStore = create<DesignStore>()(
  persist(
    (set) => {
      // ⚡️ mergeStyle is private to this closure
      const mergeStyle = (patch: Partial<StyleGuide>) => {
        set((state) => ({
          design: {
            ...state.design,
            styleGuide: { ...state.design.styleGuide, ...patch },
            updatedAt: new Date().toISOString(),
          },
        }))
      }

      return {
        // Initial state
        design: getInitialDesign(),

        // SECTION CRUD
        addSection: (type, templateId) =>
          set((state) => {
            const theme = templateId.includes('dark')
              ? ThemeType.dark
              : ThemeType.light
            const newSection: WebsiteSection = {
              id: uuidv4(),
              type,
              title: `${type.charAt(0).toUpperCase()}${type.slice(1)} Section`,
              order: state.design.sections.length,
              templateId,
              theme,
              content: {},
            }
            return {
              design: {
                ...state.design,
                sections: [...state.design.sections, newSection],
                updatedAt: new Date().toISOString(),
              },
            }
          }),

        removeSection: (sectionId) =>
          set((state) => {
            const filtered = state.design.sections
              .filter((s) => s.id !== sectionId)
              .map((s, i) => ({ ...s, order: i }))
            return {
              design: {
                ...state.design,
                sections: filtered,
                updatedAt: new Date().toISOString(),
              },
            }
          }),

        updateSection: (updated) =>
          set((state) => ({
            design: {
              ...state.design,
              sections: state.design.sections.map((s) =>
                s.id === updated.id ? updated : s
              ),
              updatedAt: new Date().toISOString(),
            },
          })),

        updateSectionTemplate: (sectionId, templateId) =>
          set((state) => ({
            design: {
              ...state.design,
              sections: state.design.sections.map((s) =>
                s.id === sectionId ? { ...s, templateId } : s
              ),
              updatedAt: new Date().toISOString(),
            },
          })),

        reorderSection: (sectionId, newOrder) =>
          set((state) => {
            const sections = [...state.design.sections]
            const target = sections.find((s) => s.id === sectionId)!
            const oldOrder = target.order
            const bounded = Math.max(0, Math.min(sections.length - 1, newOrder))
            if (oldOrder === bounded) return state

            const updated = sections.map((s) => {
              if (s.id === sectionId) return { ...s, order: bounded }
              if (oldOrder < bounded) {
                return s.order > oldOrder && s.order <= bounded
                  ? { ...s, order: s.order - 1 }
                  : s
              } else {
                return s.order >= bounded && s.order < oldOrder
                  ? { ...s, order: s.order + 1 }
                  : s
              }
            })

            return {
              design: {
                ...state.design,
                sections: updated,
                updatedAt: new Date().toISOString(),
              },
            }
          }),

        // CONTENT UPDATES
        updateSectionContent: (sectionId, content) =>
          set((state) => ({
            design: {
              ...state.design,
              sections: state.design.sections.map((s) =>
                s.id === sectionId ? { ...s, content } : s
              ),
              updatedAt: new Date().toISOString(),
            },
          })),

        updateSectionField: (sectionId, path, value) =>
          set((state) => {
            const updated = state.design.sections.map((s) => {
              if (s.id !== sectionId) return s
              const copy = JSON.parse(JSON.stringify(s.content || {}))
              const parts = path.split('.')
              let cur: any = copy
              for (let i = 0; i < parts.length - 1; i++) {
                if (!cur[parts[i]]) cur[parts[i]] = {}
                cur = cur[parts[i]]
              }
              cur[parts[parts.length - 1]] = value
              return { ...s, content: copy }
            })
            return {
              design: {
                ...state.design,
                sections: updated,
                updatedAt: new Date().toISOString(),
              },
            }
          }),

        // STYLE OPERATIONS (all call mergeStyle directly)
        updateStyleGuide: mergeStyle,
        updatePrimaryColor:    (c) => mergeStyle({ primaryColor:    c }),
        updateSecondaryColor:  (c) => mergeStyle({ secondaryColor:  c }),
        updateHeadingFont:     (f) => mergeStyle({ headingFont:     f }),
        updateBodyFont:        (f) => mergeStyle({ bodyFont:        f }),

        // RESET & IMPORT
        resetDesign:   () => set({ design: getInitialDesign() }),
        resetSections: () =>
          set((state) => ({
            design: {
              ...state.design,
              sections: defaultSections,
              updatedAt: new Date().toISOString(),
            },
          })),
        resetStyleGuide: () =>
          set((state) => ({
            design: {
              ...state.design,
              styleGuide: initialStyleGuide,
              updatedAt: new Date().toISOString(),
            },
          })),
        loadDesign: (design) => set({ design }),
      }
    },
    { name: 'jackson-lego-design-store' }
  )
)

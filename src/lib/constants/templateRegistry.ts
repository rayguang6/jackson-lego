import { SectionType } from '../types';
import { HeroLightV1, HeroDarkV3 } from '@/components/sections/Hero';

// Interface for template metadata
export interface TemplateVariant {
  id: string;
  name: string;
  component: React.ComponentType<any>;
  description: string;
  theme: 'light' | 'dark';
  previewImageUrl?: string;
}

// Interface for section type template collection
export interface SectionTemplates {
  light: Record<string, TemplateVariant>;
  dark: Record<string, TemplateVariant>;
}

// Main template registry
export const templateRegistry: Record<SectionType, SectionTemplates> = {
  [SectionType.Hero]: {
    light: {
      v1: {
        id: 'hero-light-v1',
        name: 'Hero Light V1',
        component: HeroLightV1,
        description: 'Clean, modern hero section with centered content and video thumbnail',
        theme: 'light',
        previewImageUrl: '/images/templates/hero-light-v1.png',
      },
    },
    dark: {
      v3: {
        id: 'hero-dark-v3',
        name: 'Hero Dark V3',
        component: HeroDarkV3,
        description: 'Bold, dark-themed hero with feature bullets and social proof',
        theme: 'dark',
        previewImageUrl: '/images/templates/hero-dark-v3.png',
      },
    },
  },
  
  // Add empty collections for other section types to start with
  [SectionType.CTA]: { light: {}, dark: {} },
  [SectionType.Guarantee]: { light: {}, dark: {} },
  [SectionType.CaseStudies]: { light: {}, dark: {} },
  [SectionType.About]: { light: {}, dark: {} },
  [SectionType.WhoIsThisFor]: { light: {}, dark: {} },
  [SectionType.Offer]: { light: {}, dark: {} },
  [SectionType.WorkWithUs]: { light: {}, dark: {} },
  [SectionType.BeforeAfter]: { light: {}, dark: {} },
  [SectionType.FAQs]: { light: {}, dark: {} },
  [SectionType.Testimonials]: { light: {}, dark: {} },
  [SectionType.HowItWorks]: { light: {}, dark: {} },
  [SectionType.FeaturesOrServices]: { light: {}, dark: {} },
  [SectionType.Solutions]: { light: {}, dark: {} },
  [SectionType.Problem]: { light: {}, dark: {} },
  [SectionType.SocialProof]: { light: {}, dark: {} },
};

// Helper functions for template discovery and selection

/**
 * Get all templates for a specific section type
 */
export function getTemplatesForSectionType(sectionType: SectionType): TemplateVariant[] {
  const sectionTemplates = templateRegistry[sectionType];
  if (!sectionTemplates) return [];

  const templates: TemplateVariant[] = [];
  
  // Collect light templates
  Object.values(sectionTemplates.light).forEach(template => {
    templates.push(template);
  });
  
  // Collect dark templates
  Object.values(sectionTemplates.dark).forEach(template => {
    templates.push(template);
  });
  
  return templates;
}

/**
 * Get a specific template by ID
 */
export function getTemplateById(templateId: string): TemplateVariant | null {
  // Search through all section types and themes
  for (const sectionType in templateRegistry) {
    const sectionTemplates = templateRegistry[sectionType as SectionType];
    
    // Check light templates
    for (const versionKey in sectionTemplates.light) {
      const template = sectionTemplates.light[versionKey];
      if (template.id === templateId) {
        return template;
      }
    }
    
    // Check dark templates
    for (const versionKey in sectionTemplates.dark) {
      const template = sectionTemplates.dark[versionKey];
      if (template.id === templateId) {
        return template;
      }
    }
  }
  
  return null;
}

/**
 * Get template by section type, theme and version
 */
export function getTemplate(
  sectionType: SectionType,
  theme: 'light' | 'dark' = 'light',
  version: string = 'v1'
): TemplateVariant | null {
  const sectionTemplates = templateRegistry[sectionType];
  if (!sectionTemplates) return null;
  
  const themeTemplates = sectionTemplates[theme];
  if (!themeTemplates) return null;
  
  return themeTemplates[version] || null;
} 
import { SectionType } from '../types';
import { TemplateVariant, SectionTemplates, TemplateRegistry } from './types';
import { heroTemplates } from '@/components/sections/Hero/register';
import { problemTemplates } from '@/components/sections/Problem/register';

// Main template registry
export const templateRegistry: TemplateRegistry = {
  [SectionType.Hero]: heroTemplates,
  [SectionType.Problem]: problemTemplates,
  
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
export function getTemplateByTypeAndVersion(
  sectionType: SectionType,
  theme: 'light' | 'dark',
  version: string
): TemplateVariant | null {
  const sectionTemplates = templateRegistry[sectionType];
  if (!sectionTemplates) return null;

  const themeTemplates = sectionTemplates[theme];
  if (!themeTemplates) return null;

  return themeTemplates[version] || null;
} 
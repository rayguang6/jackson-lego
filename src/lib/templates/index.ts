import { SectionType } from '../types';
import { TemplateRegistry, TemplateVariant, SectionTemplates } from './types';
import { heroTemplates } from './sections/hero';
import { problemTemplates } from './sections/problem';

// Function to ensure templates have IDs
function ensureTemplateIds(
  sectionType: SectionType, 
  templates: SectionTemplates
): SectionTemplates {
  const result: SectionTemplates = { light: {}, dark: {} };
  
  // Process light templates
  Object.entries(templates.light).forEach(([variant, template]) => {
    // Generate ID if not provided
    const newTemplate = { ...template };
    // Always set the ID to ensure consistency
    newTemplate.id = `${sectionType}-${template.theme}-${variant}`;
    result.light[variant] = newTemplate;
  });
  
  // Process dark templates
  Object.entries(templates.dark).forEach(([variant, template]) => {
    // Generate ID if not provided
    const newTemplate = { ...template };
    // Always set the ID to ensure consistency
    newTemplate.id = `${sectionType}-${template.theme}-${variant}`;
    result.dark[variant] = newTemplate;
  });
  
  return result;
}

// Create empty template collections for section types without implementations yet
const emptySection: SectionTemplates = { light: {}, dark: {} };

// Combine all section templates into a single registry with auto-generated IDs
export const templateRegistry: TemplateRegistry = {
  [SectionType.Hero]: ensureTemplateIds(SectionType.Hero, heroTemplates),
  [SectionType.Problem]: ensureTemplateIds(SectionType.Problem, problemTemplates),
  
  // Empty section types (to be implemented later)
  [SectionType.CTA]: emptySection,
  [SectionType.Guarantee]: emptySection,
  [SectionType.CaseStudies]: emptySection,
  [SectionType.About]: emptySection,
  [SectionType.WhoIsThisFor]: emptySection,
  [SectionType.Offer]: emptySection,
  [SectionType.WorkWithUs]: emptySection,
  [SectionType.BeforeAfter]: emptySection,
  [SectionType.FAQs]: emptySection,
  [SectionType.Testimonials]: emptySection,
  [SectionType.HowItWorks]: emptySection,
  [SectionType.FeaturesOrServices]: emptySection,
  [SectionType.Solutions]: emptySection,
  [SectionType.SocialProof]: emptySection,
};

// Helper functions

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
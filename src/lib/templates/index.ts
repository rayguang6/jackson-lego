import { heroTemplates } from '@/components/section-templates/S01-Hero/register';
import { problemTemplates } from '@/components/section-templates/S03-Problem/register';
import { howItWorksTemplates } from '@/components/section-templates/S06-HowItWorks/register';
import { featuresOrServicesTemplates } from '@/components/section-templates/S05-FeaturesOrServices/register';
import { testimonialsTemplates } from '@/components/section-templates/S07-Testimonials/register';
import { SectionType } from '../types';
import { TemplateRegistry, TemplateVariant, SectionTemplates } from './types';
import { solutionsTemplates } from '@/components/section-templates/S04-Solutions/register';


// Create empty template collections for section types without implementations yet
const emptySection: SectionTemplates = { variants: [] };

// Combine all section templates into a single registry with auto-generated IDs
export const templateRegistry: TemplateRegistry = {
  [SectionType.S01_Hero]: heroTemplates,
  // // [SectionType.S02_SocialProof]: emptySection,
  // [SectionType.S03_Problem]: ensureTemplateIds(SectionType.S03_Problem, problemTemplates),
  // [SectionType.S04_Solutions]: ensureTemplateIds(SectionType.S04_Solutions, solutionsTemplates),
  // [SectionType.S05_FeaturesOrServices]: ensureTemplateIds(SectionType.S05_FeaturesOrServices, featuresOrServicesTemplates),
  // [SectionType.S06_HowItWorks]: ensureTemplateIds(SectionType.S06_HowItWorks, howItWorksTemplates),
  // [SectionType.S07_Testimonials]: ensureTemplateIds(SectionType.S07_Testimonials, testimonialsTemplates),
  // [SectionType.S08_FAQs]: emptySection,
  // [SectionType.S09_BeforeAfter]: emptySection,
  // [SectionType.S10_WorkWithUs]: emptySection,
  // [SectionType.S11_Offer]: emptySection,
  // [SectionType.S12_WhoIsThisFor]: emptySection,
  // [SectionType.S13_About]: emptySection,
  // [SectionType.S14_CaseStudies]: emptySection,
  // [SectionType.S15_Guarantee]: emptySection,
  [SectionType.S16_CTA]: emptySection,
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
  sectionTemplates.variants.forEach(template => {
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
    for (const versionKey in sectionTemplates.variants) {
      const template = sectionTemplates.variants[versionKey];
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
  theme: 'light' | 'dark' = 'light',
  version: string = 'v1'
): TemplateVariant | null {
  const sectionTemplates = templateRegistry[sectionType];
  if (!sectionTemplates) return null;
  
  const themeTemplates = sectionTemplates.variants.filter(template => template.theme === theme);
  if (!themeTemplates) return null;
  
  return themeTemplates.find(template => template.id === `${sectionType}-${theme}-${version}`) || null;
}

/**
 * Alias for getTemplateByTypeAndVersion for backward compatibility
 */
export function getTemplate(
  sectionType: SectionType,
  theme: 'light' | 'dark' = 'light',
  version: string = 'v1'
): TemplateVariant | null {
  return getTemplateByTypeAndVersion(sectionType, theme, version);
}

export * from './types';
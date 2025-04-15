import { heroTemplates } from '@/components/section-templates/Hero/register';
import { problemTemplates } from '@/components/section-templates/Problem/register';
import { howItWorksTemplates } from '@/components/section-templates/HowItWorks/register';
import { featuresOrServicesTemplates } from '@/components/section-templates/FeaturesOrServices/register';
import { testimonialsTemplates } from '@/components/section-templates/Testimonials/register';
import { SectionType } from '../types';
import { TemplateRegistry, TemplateVariant, SectionTemplates } from './types';
import { solutionsTemplates } from '@/components/section-templates/Solutions/register';


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
  [SectionType.S01_Hero]: ensureTemplateIds(SectionType.S01_Hero, heroTemplates),
  [SectionType.S03_Problem]: ensureTemplateIds(SectionType.S03_Problem, problemTemplates),
  
  // Empty section types (to be implemented later)
  [SectionType.S16_CTA]: emptySection,
  [SectionType.S15_Guarantee]: emptySection,
  [SectionType.S14_CaseStudies]: emptySection,
  [SectionType.S13_About]: emptySection,
  [SectionType.S12_WhoIsThisFor]: emptySection,
  [SectionType.S11_Offer]: emptySection,
  [SectionType.S10_WorkWithUs]: emptySection,
  [SectionType.S09_BeforeAfter]: emptySection,
  [SectionType.S08_FAQs]: emptySection,
  [SectionType.S07_Testimonials]: ensureTemplateIds(SectionType.S07_Testimonials, testimonialsTemplates),
  [SectionType.S06_HowItWorks]: ensureTemplateIds(SectionType.S06_HowItWorks, howItWorksTemplates),
  [SectionType.S05_FeaturesOrServices]: ensureTemplateIds(SectionType.S05_FeaturesOrServices, featuresOrServicesTemplates),
  [SectionType.S04_Solutions]: ensureTemplateIds(SectionType.S04_Solutions, solutionsTemplates),
  [SectionType.S02_SocialProof]: emptySection,
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
export function getTemplateByTypeAndVersion(
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
export * from './registry'; 
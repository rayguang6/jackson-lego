// import { heroTemplates } from '@/components/section-templates/S01-Hero/register';
// import { problemTemplates } from '@/components/section-templates/S03-Problem/register';
// import { solutionsTemplates } from '@/components/section-templates/S04-Solutions/register';
// import { featuresOrServicesTemplates } from '@/components/section-templates/S05-FeaturesOrServices/register';
// import { testimonialsTemplates } from '@/components/section-templates/S07-Testimonials/register';
// import { howItWorksTemplates } from '@/components/section-templates/S06-HowItWorks/register';
// import { SectionType } from '../types';
// import { TemplateVariant, TemplateRegistry } from './types';

// // Main template registry
// export const templateRegistry: TemplateRegistry = {
//   [SectionType.S01_Hero]: heroTemplates,
//   [SectionType.S03_Problem]: problemTemplates,
//   [SectionType.S04_Solutions]: solutionsTemplates,
//   [SectionType.S05_FeaturesOrServices]: featuresOrServicesTemplates,
//   [SectionType.S07_Testimonials]: testimonialsTemplates,
//   [SectionType.S06_HowItWorks]: howItWorksTemplates,
  
//   // Add empty collections for other section types to start with
//   [SectionType.S16_CTA]: { light: {}, dark: {} },
//   [SectionType.S15_Guarantee]: { light: {}, dark: {} },
//   [SectionType.S14_CaseStudies]: { light: {}, dark: {} },
//   [SectionType.S13_About]: { light: {}, dark: {} },
//   [SectionType.S12_WhoIsThisFor]: { light: {}, dark: {} },
//   [SectionType.S11_Offer]: { light: {}, dark: {} },
//   [SectionType.S10_WorkWithUs]: { light: {}, dark: {} },
//   [SectionType.S09_BeforeAfter]: { light: {}, dark: {} },
//   [SectionType.S08_FAQs]: { light: {}, dark: {} },
//   [SectionType.S02_SocialProof]: { light: {}, dark: {} },
// };

// // Helper functions for template discovery and selection

// /**
//  * Get all templates for a specific section type
//  */
// export function getTemplatesForSectionType(sectionType: SectionType): TemplateVariant[] {
//   const sectionTemplates = templateRegistry[sectionType];
//   if (!sectionTemplates) return [];

//   const templates: TemplateVariant[] = [];
  
//   // Collect light templates
//   Object.values(sectionTemplates.light).forEach(template => {
//     templates.push(template);
//   });
  
//   // Collect dark templates
//   Object.values(sectionTemplates.dark).forEach(template => {
//     templates.push(template);
//   });
  
//   return templates;
// }

// /**
//  * Get a specific template by ID
//  */
// export function getTemplateById(templateId: string): TemplateVariant | null {
//   // Search through all section types and themes
//   for (const sectionType in templateRegistry) {
//     const sectionTemplates = templateRegistry[sectionType as SectionType];
    
//     // Check light templates
//     for (const versionKey in sectionTemplates.light) {
//       const template = sectionTemplates.light[versionKey];
//       if (template.id === templateId) {
//         return template;
//       }
//     }
    
//     // Check dark templates
//     for (const versionKey in sectionTemplates.dark) {
//       const template = sectionTemplates.dark[versionKey];
//       if (template.id === templateId) {
//         return template;
//       }
//     }
//   }
  
//   return null;
// }

// /**
//  * Get template by section type, theme and version
//  */
// export function getTemplateByTypeAndVersion(
//   sectionType: SectionType,
//   theme: 'light' | 'dark',
//   version: string
// ): TemplateVariant | null {
//   const sectionTemplates = templateRegistry[sectionType];
//   if (!sectionTemplates) return null;

//   const themeTemplates = sectionTemplates[theme];
//   if (!themeTemplates) return null;

//   return themeTemplates[version] || null;
// } 
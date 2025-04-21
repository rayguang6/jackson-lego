import { SectionType, ThemeType, VersionType } from '../types';
import { SectionTemplateRegistry, SectionTemplatesVariants, TemplateVariant } from './types';

// Create empty template collections for section types
const emptyTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {},
  [ThemeType.dark]: {}
};


/**
 * Get template by section type, theme and version
 */
export function getTemplate(
  sectionType: SectionType,
  version: VersionType = VersionType.v1,
  theme: ThemeType = ThemeType.light
): TemplateVariant | null   {
  const sectionTemplates = templateRegistry[sectionType];
  if (!sectionTemplates) return null;

  const themeTemplates = sectionTemplates[theme];
  if (!themeTemplates) return null;
  
  const template = themeTemplates[version];
  if (!template) return null;
  
  return template;
}

/**
 * Get all available templates for a section type
 */
export function getTemplatesForSectionType(sectionType: SectionType): TemplateVariant[] {
  const sectionTemplates = templateRegistry[sectionType];
  if (!sectionTemplates) return [];

  const allTemplates: TemplateVariant[] = [];
  
  // Collect templates from both themes and all versions
  Object.values(ThemeType).forEach(theme => {
    const themeTemplates = sectionTemplates[theme];
    if (!themeTemplates) return;

    Object.values(themeTemplates).forEach(template => {
      allTemplates.push(template);
    });
  });
  
  return allTemplates;
}

// Import templates AFTER defining functions
// This avoids circular dependency issues
import { heroTemplates } from '@/components/section-templates/S01-Hero/register';
import { problemTemplates } from '@/components/section-templates/S03-Problem/register';
import { solutionsTemplates } from '@/components/section-templates/S04-Solutions/register';
import { featuresOrServicesTemplates } from '@/components/section-templates/S05-FeaturesOrServices/register';
import { howItWorksTemplates } from '@/components/section-templates/S06-HowItWorks/register';
import { testimonialsTemplates } from '@/components/section-templates/S07-Testimonials/register';
import { ctaTemplates } from '@/components/section-templates/S16-CTA/register';
import { socialProofTemplates } from '@/components/section-templates/S02-SocialProof/register';
import { faqTemplates } from '@/components/section-templates/S08-FAQ/register';
import { beforeAfterTemplates } from '@/components/section-templates/S09-BeforeAfter/register';
import { workWithUsTemplates } from '@/components/section-templates/S10-WorkWithUs/register';
import { offerTemplates } from '@/components/section-templates/S11-Offer/register';
import { whoIsThisForTemplates } from '@/components/section-templates/S12-WhoIsThisFor/register';
import { aboutTemplates } from '@/components/section-templates/S13-About/register';
import { guaranteeTemplates } from '@/components/section-templates/S15-Guarantee/register';
import { caseStudyTemplates } from '@/components/section-templates/S14-CaseStudy/register';

// Combine all section templates into a single registry
export const templateRegistry: Partial<SectionTemplateRegistry> = {
  [SectionType.S01_Hero]: heroTemplates,
  [SectionType.S02_SocialProof]: socialProofTemplates,
  [SectionType.S03_Problem]: problemTemplates,
  [SectionType.S04_Solutions]: solutionsTemplates,
  [SectionType.S05_FeaturesOrServices]: featuresOrServicesTemplates,
  [SectionType.S06_HowItWorks]: howItWorksTemplates,
  [SectionType.S07_Testimonials]: testimonialsTemplates,
  [SectionType.S08_FAQ]: faqTemplates,
  [SectionType.S09_BeforeAfter]: beforeAfterTemplates,
  [SectionType.S10_WorkWithUs]: workWithUsTemplates,
  [SectionType.S11_Offer]: offerTemplates,
  [SectionType.S12_WhoIsThisFor]: whoIsThisForTemplates,
  [SectionType.S13_About]: aboutTemplates,
  [SectionType.S14_CaseStudy]: caseStudyTemplates,
  [SectionType.S15_Guarantee]: guaranteeTemplates,
  [SectionType.S16_CTA]: ctaTemplates,
};

export * from './types';
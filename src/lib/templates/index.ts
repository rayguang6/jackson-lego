import { SectionType, ThemeType, VersionType } from '../types';
import { SectionTemplateRegistry, SectionTemplatesVariants, TemplateVariant } from './types';

// Create empty template collections for section types
const emptyTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {},
  [ThemeType.dark]: {}
};

/**
 * Generate a consistent template ID from section type, version and theme
 */
// export function generateTemplateId(
//   sectionType: SectionType, 
//   version: VersionType = VersionType.v1, 
//   theme: ThemeType = ThemeType.light
// ): string {
//   return `${sectionType}-${version}-${theme}`;
// }

/**
 * Parse a template ID safely and return its components
 */
// export function parseTemplateId(templateId: string): { 
//   sectionType: SectionType; 
//   version: VersionType; 
//   theme: ThemeType 
// } | null {
//   try {
//     const parts = templateId.split('-');
    
//     // Validate we have at least 3 parts (section-version-theme)
//     if (parts.length < 3) {
//       console.error(`Invalid templateId format: ${templateId}`);
//       return null;
//     }
    
//     // The section type could have hyphens (e.g., "features-or-services")
//     // So we need to ensure we get the right split for version and theme
//     const sectionType = parts.slice(0, -2).join('-') as SectionType;
//     const version = parts[parts.length - 2] as VersionType;
//     const themeStr = parts[parts.length - 1];
//     const theme = themeStr === 'light' ? ThemeType.light : ThemeType.dark;
    
//     return { sectionType, version, theme };
//   } catch (error) {
//     console.error(`Error parsing templateId: ${templateId}`, error);
//     return null;
//   }
// }

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

// Combine all section templates into a single registry
export const templateRegistry: SectionTemplateRegistry = {
  [SectionType.S01_Hero]: heroTemplates,
};

export * from './types';
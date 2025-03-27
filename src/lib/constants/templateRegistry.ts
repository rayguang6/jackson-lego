import { SectionType } from '../types';
import { HeroV1 } from '@/components/sections/Hero/HeroV1';
import { ProblemV1 } from '@/components/sections/Problem/ProblemV1';
import { ProblemV2 } from '@/components/sections/Problem/ProblemV2';
import { ProblemV3 } from '@/components/sections/Problem/ProblemV3';
import { HeroV3 } from "@/components/sections/Hero/HeroV3";

// Interface for template metadata
export interface TemplateVariant {
  id: string;
  name: string;
  component: React.ComponentType<any>;
  description: string;
  theme: 'light' | 'dark';
  preview?: {
    theme: 'light' | 'dark';
    // All other preview properties are optional
    badge?: string;
    title?: string;
    subtitle?: string;
    extraText?: string;
    problems?: {
      title?: string;
      description?: string;
      text?: string;
      icon?: string;
      highlight?: string;
    }[];
    // Hero-specific properties
    badgeText?: string;
    ctaText?: string;
    features?: string[];
    usersCount?: string;
  };
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
        component: HeroV1,
        description: 'Clean, modern hero section with centered content and video thumbnail',
        theme: 'light',
        preview: {
          theme: 'light'
        }
      },
      v3: {
        id: 'hero-light-v3',
        name: 'Hero Light V3',
        component: HeroV3,
        description: 'A modern hero section with video thumbnail and feature list',
        theme: 'light',
        preview: {
          theme: 'light'
        }
      }
    },
    dark: {
      v1: {
        id: 'hero-dark-v1',
        name: 'Hero Dark V1',
        component: HeroV1,
        description: 'Clean, modern hero section with centered content - Dark theme',
        theme: 'dark',
        preview: {
          theme: 'dark'
        }
      },
      v3: {
        id: 'hero-dark-v3',
        name: 'Hero Dark V3',
        component: HeroV3,
        description: 'A modern hero section with video thumbnail and feature list',
        theme: 'dark',
        preview: {
          theme: 'dark'
        }
      }
    }
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
  [SectionType.Problem]: { 
    light: {
      v1: {
        id: 'problem-light-v1',
        name: 'Problem Light V1',
        component: ProblemV1,
        description: 'Icon-based problem statements with clean layout',
        theme: 'light',
        preview: {
          theme: 'light'
        }
      },
      v2: {
        id: 'problem-light-v2',
        name: 'Problem Light V2',
        component: ProblemV2,
        description: 'Problem section with accent container',
        theme: 'light',
        preview: {
          theme: 'light'
        }
      },
      v3: {
        id: 'problem-light-v3',
        name: 'Problem Light V3',
        component: ProblemV3,
        description: 'Grid layout with modern design',
        theme: 'light',
        preview: {
          theme: 'light'
        }
      }
    }, 
    dark: {
      v1: {
        id: 'problem-dark-v1',
        name: 'Problem Dark V1',
        component: ProblemV1,
        description: 'Icon-based problem statements with dark theme',
        theme: 'dark',
        preview: {
          theme: 'dark'
        }
      },
      v2: {
        id: 'problem-dark-v2',
        name: 'Problem Dark V2',
        component: ProblemV2,
        description: 'Problem section with accent container - Dark theme',
        theme: 'dark',
        preview: {
          theme: 'dark'
        }
      },
      v3: {
        id: 'problem-dark-v3',
        name: 'Problem Dark V3',
        component: ProblemV3,
        description: 'Grid layout with modern design - Dark theme',
        theme: 'dark',
        preview: {
          theme: 'dark'
        }
      }
    } 
  },
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
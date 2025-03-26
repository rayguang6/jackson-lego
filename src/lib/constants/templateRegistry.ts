import { SectionType } from '../types';
import { HeroLightV1 } from '@/components/sections/Hero';
import { ProblemV1 } from '@/components/sections/Problem/variants/ProblemV1';
import { ProblemV2 } from '@/components/sections/Problem/variants/ProblemV2';
import { ProblemV3 } from '@/components/sections/Problem/variants/ProblemV3';
import { HeroV3 } from "@/components/sections/Hero/variants/HeroV3";

// Interface for template metadata
export interface TemplateVariant {
  id: string;
  name: string;
  component: React.ComponentType<any>;
  description: string;
  theme: 'light' | 'dark';
  previewImageUrl: string;
  preview?: {
    theme: 'light' | 'dark';
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
        component: HeroLightV1,
        description: 'Clean, modern hero section with centered content and video thumbnail',
        theme: 'light',
        previewImageUrl: '/images/templates/hero-light-v1.png',
        preview: {
          theme: 'light',
          title: "Multipurpose Page Blocks Designed for Maximum Efficiency",
          subtitle: "Skip design frustration and launch your site fast with pre-designed, proven components.",
          badgeText: "The #1 Community for Game-Changers",
          ctaText: "GET INSTANT ACCESS"
        }
      },
      v3: {
        id: 'hero-light-v3',
        name: 'Hero Light V3',
        component: HeroV3,
        description: 'A modern hero section with video thumbnail and feature list',
        theme: 'light',
        previewImageUrl: '/images/templates/hero-light-v3.png',
        preview: {
          title: "Multipurpose Page Blocks Designed for Maximum Efficiency",
          subtitle: "Skip design frustration and launch your site fast with pre-designed, proven components.",
          ctaText: "GET INSTANT ACCESS",
          badgeText: "Generative Business Intelligence for Team",
          features: ["Build for Speed", "Proven, High Impact Design", "Launch Like A Pro"],
          usersCount: "2,000+",
          theme: 'light'
        }
      }
    },
    dark: {
      v1: {
        id: 'hero-dark-v1',
        name: 'Hero Dark V1',
        component: HeroLightV1,
        description: 'Clean, modern hero section with centered content - Dark theme',
        theme: 'dark',
        previewImageUrl: '/images/templates/hero-dark-v1.png',
        preview: {
          theme: 'dark',
          title: "Multipurpose Page Blocks Designed for Maximum Efficiency",
          subtitle: "Skip design frustration and launch your site fast with pre-designed, proven components.",
          badgeText: "The #1 Community for Game-Changers",
          ctaText: "GET INSTANT ACCESS"
        }
      },
      v3: {
        id: 'hero-dark-v3',
        name: 'Hero Dark V3',
        component: HeroV3,
        description: 'A modern hero section with video thumbnail and feature list',
        theme: 'dark',
        previewImageUrl: '/images/templates/hero-dark-v3.png',
        preview: {
          title: "Multipurpose Page Blocks Designed for Maximum Efficiency",
          subtitle: "Skip design frustration and launch your site fast with pre-designed, proven components.",
          ctaText: "GET INSTANT ACCESS",
          badgeText: "Generative Business Intelligence for Team",
          features: ["Build for Speed", "Proven, High Impact Design", "Launch Like A Pro"],
          usersCount: "2,000+",
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
        previewImageUrl: '/images/templates/problem-light-v1.png',
        preview: {
          theme: 'light',
          badge: "PROBLEM",
          title: "Are you tired of running into these problems?",
          subtitle: "It's time to take control and design like a pro — fast and easy.",
          problems: [
            {
              text: "Confused by complex design tools that take more time than they're worth?",
              icon: "🤔"
            },
            {
              text: "Wasting hours on designs that don't drive results or conversions?",
              icon: "⏰"
            },
            {
              text: "Struggling with technical issues slowing down your site's performance?",
              icon: "🔧"
            },
            {
              text: "Losing potential customers because your site is not visually appealing or engaging enough?",
              icon: "📉"
            }
          ]
        }
      },
      v2: {
        id: 'problem-light-v2',
        name: 'Problem Light V2',
        component: ProblemV2,
        description: 'Problem section with accent container',
        theme: 'light',
        previewImageUrl: '/images/templates/problem-light-v2.png',
        preview: {
          theme: 'light',
          badge: "PROBLEM",
          title: "Does this sound like you?",
          subtitle: "It's time to take control and design like a pro — fast and easy.",
          extraText: "... and a lot more, but I don't want to keep you here for an hour.",
          problems: [
            {
              highlight: "Confused by complex design tools",
              text: " that take more time than they're worth?"
            },
            {
              highlight: "Wasting hours",
              text: " on designs that don't drive results or conversions?"
            },
            {
              highlight: "Struggling with technical issues",
              text: " slowing down your site's performance?"
            },
            {
              highlight: "Losing potential customers",
              text: " because your site is not visually appealing or engaging enough?"
            }
          ]
        }
      },
      v3: {
        id: 'problem-light-v3',
        name: 'Problem Light V3',
        component: ProblemV3,
        description: 'Grid layout with modern design',
        theme: 'light',
        previewImageUrl: '/images/templates/problem-light-v3.png',
        preview: {
          theme: 'light',
          badge: "PROBLEM",
          title: "Are you tired of running into these problems?",
          subtitle: "It's time to take control and design like a pro — fast and easy.",
          problems: [
            {
              title: "Limited Flexibility",
              description: "Traditional design tools often restrict your creativity with rigid templates and preset structures."
            },
            {
              title: "Time-Consuming",
              description: "Spending countless hours refining designs in slow, inefficient tools can delay your projects."
            },
            {
              title: "Inconsistent Results",
              description: "Achieving a polished, professional look is challenging with outdated tools that lack cohesion."
            },
            {
              title: "Slow Performance",
              description: "Unresponsive tools hinder your workflow, slowing down design processes and frustrating your progress."
            }
          ]
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
        previewImageUrl: '/images/templates/problem-dark-v1.png',
        preview: {
          theme: 'dark',
          badge: "PROBLEM",
          title: "Are you tired of running into these problems?",
          subtitle: "It's time to take control and design like a pro — fast and easy.",
          problems: [
            {
              text: "Confused by complex design tools that take more time than they're worth?",
              icon: "🤔"
            },
            {
              text: "Wasting hours on designs that don't drive results or conversions?",
              icon: "⏰"
            },
            {
              text: "Struggling with technical issues slowing down your site's performance?",
              icon: "🔧"
            },
            {
              text: "Losing potential customers because your site is not visually appealing or engaging enough?",
              icon: "📉"
            }
          ]
        }
      },
      v2: {
        id: 'problem-dark-v2',
        name: 'Problem Dark V2',
        component: ProblemV2,
        description: 'Problem section with accent container - Dark theme',
        theme: 'dark',
        previewImageUrl: '/images/templates/problem-dark-v2.png',
        preview: {
          theme: 'dark',
          badge: "PROBLEM",
          title: "Does this sound like you?",
          subtitle: "It's time to take control and design like a pro — fast and easy.",
          extraText: "... and a lot more, but I don't want to keep you here for an hour.",
          problems: [
            {
              highlight: "Confused by complex design tools",
              text: " that take more time than they're worth?"
            },
            {
              highlight: "Wasting hours",
              text: " on designs that don't drive results or conversions?"
            },
            {
              highlight: "Struggling with technical issues",
              text: " slowing down your site's performance?"
            },
            {
              highlight: "Losing potential customers",
              text: " because your site is not visually appealing or engaging enough?"
            }
          ]
        }
      },
      v3: {
        id: 'problem-dark-v3',
        name: 'Problem Dark V3',
        component: ProblemV3,
        description: 'Grid layout with modern design - Dark theme',
        theme: 'dark',
        previewImageUrl: '/images/templates/problem-dark-v3.png',
        preview: {
          theme: 'dark',
          badge: "PROBLEM",
          title: "Are you tired of running into these problems?",
          subtitle: "It's time to take control and design like a pro — fast and easy.",
          problems: [
            {
              title: "Limited Flexibility",
              description: "Traditional design tools often restrict your creativity with rigid templates and preset structures."
            },
            {
              title: "Time-Consuming",
              description: "Spending countless hours refining designs in slow, inefficient tools can delay your projects."
            },
            {
              title: "Inconsistent Results",
              description: "Achieving a polished, professional look is challenging with outdated tools that lack cohesion."
            },
            {
              title: "Slow Performance",
              description: "Unresponsive tools hinder your workflow, slowing down design processes and frustrating your progress."
            }
          ]
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
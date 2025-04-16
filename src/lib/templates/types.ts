import { SectionType } from '../types';

// Template metadata - simplified to essential fields
export interface TemplateVariant {
  id: string;  // e.g., 'hero-v1'
  component: React.ComponentType<any>;
  theme: 'light' | 'dark';
}

// will have list of template variants  Hero v1 light, hero v1 dark ...
export interface SectionTemplates {
  // light: Record<string, TemplateVariant>;
  // dark: Record<string, TemplateVariant>;
  variants: TemplateVariant[];
}

// Template registry map type
export type TemplateRegistry = Record<SectionType, SectionTemplates>; 
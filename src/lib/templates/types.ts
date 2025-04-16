import { SectionType, ThemeType, VersionType } from '../types';

// Template metadata - simplified to essential fields
export interface TemplateVariant {
  id: string;  
  component: React.ComponentType<any>;
  theme: ThemeType // 'light' | 'dark';
}

export interface SectionTemplatesVariants {
  [ThemeType.light]: Partial<Record<VersionType, TemplateVariant>>;
  [ThemeType.dark]: Partial<Record<VersionType, TemplateVariant>>;
} 

export type SectionTemplateRegistry = Record<SectionType, SectionTemplatesVariants>;  
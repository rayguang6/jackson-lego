import { ReactNode } from 'react';
import { SectionType } from '../types';

// Template metadata - simplified to essential fields
export interface TemplateVariant {
  id: string;  // e.g., 'hero-v1'
  component: React.ComponentType<any>;
  theme: 'light' | 'dark';
}

// Section template collection
export interface SectionTemplates {
  light: Record<string, TemplateVariant>;
  dark: Record<string, TemplateVariant>;
}

// Template registry map type
export type TemplateRegistry = Record<SectionType, SectionTemplates>; 
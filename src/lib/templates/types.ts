import { ReactNode } from 'react';
import { SectionType } from '../types';

// Template metadata
export interface TemplateVariant {
  // ID is required for proper template identification
  id: string;  
  name: string;
  component: React.ComponentType<any>;
  description: string;
  theme: 'light' | 'dark';
  // Preview props for the component
  preview?: {
    [key: string]: any;
  };
}

// Section template collection
export interface SectionTemplates {
  light: Record<string, TemplateVariant>;
  dark: Record<string, TemplateVariant>;
}

// Template registry map type
export type TemplateRegistry = Record<SectionType, SectionTemplates>; 
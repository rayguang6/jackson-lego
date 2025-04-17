export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export enum VersionType {
  v1 = 'v1',
  v2 = 'v2',
  v3 = 'v3',
  v4 = 'v4',
  v5 = 'v5', 
  v6 = 'v6',
  v7 = 'v7',
  v8 = 'v8',
  v9 = 'v9',
  v10 = 'v10'
}

// Section types
export enum SectionType {
  S01_Hero = 'hero',
  // S16_CTA = 'cta',
}

// Template interface
export interface Template {
  id: string;
  sectionType: SectionType;
  name: string;
  previewImage?: string;
}

// Style Guide interface
export interface StyleGuide {
  // Colors
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  backgroundColorDark: string;
  textColor: string;
  
  // Typography
  headingFont: string;
  bodyFont: string;
  
  // Typography Sizes and Weights
  h1Size: string;
  h1Weight: string;
  h1LineHeight: string;
  h2Size: string;
  h2Weight: string;
  h2LineHeight: string;
  bodySize: string;
  bodyWeight: string;
  bodyLineHeight: string;
}


// The complete website design
export interface WebsiteDesign {
  id: string;
  name: string;
  sections: WebsiteSection[];  // Ordered list of all sections
  styleGuide: StyleGuide;
  createdAt: string;
  updatedAt: string;
}

// A single section in the website
export interface WebsiteSection {
  id: string;
  type: SectionType;        // Hero, Features, etc.
  title: string;            // Display name for UI
  order: number;            // Position in layout
  
  // Template information
  templateId: string;       // "hero-dark-v3"
  theme: ThemeType;         // Theme variant using ThemeType enum
  
  // The actual content for this specific section instance
  content: Record<string, any>;  // Section-specific content
}
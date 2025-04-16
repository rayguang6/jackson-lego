// export * from './sectionTypes';

// Section types
export enum SectionType {
  S01_Hero = 'hero',
  // S02_SocialProof = 's02-social-proof',
  // S03_Problem = 'problem',
  // S04_Solutions = 'solutions',
  // S05_FeaturesOrServices = 'features-or-services',
  // S06_HowItWorks = 'how-it-works',
  // S07_Testimonials = 'testimonials',
  // S08_FAQs = 'faqs',
  // S09_BeforeAfter = 'before-after',
  // S10_WorkWithUs = 'work-with-us',
  // S11_Offer = 'offer',
  // S12_WhoIsThisFor = 'who-is-this-for',
  // S13_About = 'about',
  // S14_CaseStudies = 'case-studies',
  // S15_Guarantee = 'guarantee',
  S16_CTA = 'cta',
}

// Base interface for all section props
export interface BaseSectionProps {
  // Common props for all sections
  theme?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
  badge?: string;
  badgeText?: string;
  ctaText?: string;
  ctaUrl?: string;
  features?: string[];
  
  // Component-specific props can be handled through extensions
  [key: string]: any; // Allow additional props to be passed
}

// Section interface
export interface Section {
  id: string;
  type: SectionType;
  title: string;
  order: number;
  templateId?: string;
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
  fontFamily: string;
  
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
  
  // Spacing
  spacingXs: string;
  spacingSm: string;
  spacingMd: string;
  spacingLg: string;
  spacingXl: string;
  
  // Border Radius
  borderRadiusSm: string;
  borderRadiusMd: string;
  borderRadiusLg: string;
  borderRadiusFull: string;
}

// Complete website design
export interface WebsiteDesign {
  id: string;
  name: string;
  sections: Section[];
  styleGuide: StyleGuide;
  createdAt: string;
  updatedAt: string;
}
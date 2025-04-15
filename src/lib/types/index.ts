// export * from './sectionTypes';

// Section types
export enum SectionType {
  S01_Hero = 's01-hero',
  S02_SocialProof = 's02-social-proof',
  S03_Problem = 's03-problem',
  S04_Solutions = 's04-solutions',
  S05_FeaturesOrServices = 's05-features-or-services',
  S06_HowItWorks = 's06-how-it-works',
  S07_Testimonials = 's07-testimonials',
  S08_FAQs = 's08-faqs',
  S09_BeforeAfter = 's09-before-after',
  S10_WorkWithUs = 's10-work-with-us',
  S11_Offer = 's11-offer',
  S12_WhoIsThisFor = 's12-who-is-this-for',
  S13_About = 's13-about',
  S14_CaseStudies = 's14-case-studies',
  S15_Guarantee = 's15-guarantee',
  S16_CTA = 's16-cta',
}

// Common shared props that most sections might need
interface CommonSectionProps {
  theme?: 'light' | 'dark';
  className?: string;
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

// Hero Section Props
export interface HeroSectionProps extends CommonSectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaUrl?: string;
  badge?: string;
  badgeText?: string;
  badgeIconColor?: string;
  features?: string[];
  videoThumbnailUrl?: string;
  usersCount?: string;
}

// Problem Section Props
export interface ProblemSectionProps extends CommonSectionProps {
  title: string;
  description: string;
  painPoints: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  statistics?: Array<{
    value: string;
    label: string;
  }>;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
}

// CTA Section Props
export interface CTASectionProps extends CommonSectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaUrl: string;
  backgroundImage?: string;
  alignment?: 'left' | 'center' | 'right';
}

// Features/Services Section Props
export interface FeaturesOrServicesSectionProps extends CommonSectionProps {
  title: string;
  subtitle?: string;
  features: Array<{
    title: string;
    description: string;
    icon?: string;
    imageUrl?: string;
  }>;
  layout?: 'grid' | 'list';
  columns?: 2 | 3 | 4;
}

// Testimonials Section Props
export interface TestimonialsSectionProps extends CommonSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Array<{
    quote: string;
    author: string;
    role?: string;
    company?: string;
    avatarUrl?: string;
    rating?: number;
  }>;
  layout?: 'grid' | 'carousel' | 'list';
}

// FAQ Section Props
export interface FAQSectionProps extends CommonSectionProps {
  title: string;
  subtitle?: string;
  faqs: Array<{
    question: string;
    answer: string;
    category?: string;
  }>;
  layout?: 'accordion' | 'grid';
  categorized?: boolean;
}

// How It Works Section Props
export interface HowItWorksSectionProps extends CommonSectionProps {
  title: string;
  subtitle?: string;
  steps: Array<{
    title: string;
    description: string;
    icon?: string;
    imageUrl?: string;
  }>;
  layout?: 'horizontal' | 'vertical';
  numbered?: boolean;
}

// About Section Props
export interface AboutSectionProps extends CommonSectionProps {
  title: string;
  subtitle?: string;
  content: string;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  team?: Array<{
    name: string;
    role: string;
    bio?: string;
    imageUrl?: string;
    socialLinks?: {
      linkedin?: string;
      twitter?: string;
      [key: string]: string | undefined;
    };
  }>;
}

// Social Proof Section Props
export interface SocialProofSectionProps extends CommonSectionProps {
  title?: string;
  subtitle?: string;
  logos: Array<{
    name: string;
    imageUrl: string;
    url?: string;
  }>;
  layout?: 'grid' | 'carousel';
  grayscale?: boolean;
}

// Case Studies Section Props
export interface CaseStudiesSectionProps extends CommonSectionProps {
  title: string;
  subtitle?: string;
  caseStudies: Array<{
    title: string;
    description: string;
    client: string;
    industry?: string;
    results: Array<{
      metric: string;
      value: string;
    }>;
    imageUrl?: string;
    ctaText?: string;
    ctaUrl?: string;
  }>;
  layout?: 'grid' | 'list' | 'carousel';
}

// Guarantee Section Props
export interface GuaranteeSectionProps extends CommonSectionProps {
  title: string;
  subtitle?: string;
  guarantees: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  mainGuarantee?: {
    title: string;
    description: string;
    icon?: string;
    badgeText?: string;
  };
}

// Solutions Section Props
export interface SolutionsSectionProps extends CommonSectionProps {
  title: string;
  subtitle?: string;
  solutions: Array<{
    title: string;
    description: string;
    features?: string[];
    imageUrl?: string;
    ctaText?: string;
    ctaUrl?: string;
    price?: {
      amount: number;
      currency: string;
      period?: string;
    };
  }>;
  layout?: 'grid' | 'list';
  comparison?: boolean;
} 
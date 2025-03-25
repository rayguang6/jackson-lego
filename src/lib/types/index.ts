// Section types
export enum SectionType {
  Header = 'header',
  Hero = 'hero',
  Features = 'features',
  FeaturesList = 'features-list',
  Testimonials = 'testimonials',
  Pricing = 'pricing',
  FAQ = 'faq',
  Contact = 'contact',
  Footer = 'footer',
  CTA = 'cta',
}

// Section interface
export interface Section {
  id: string;
  type: SectionType;
  title: string;
  order: number;
  templateId?: string; // Reference to the selected template for this section
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
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  typography: {
    fontFamily: string;
    headingFont: string;
    bodyFont: string;
    h1: {
      size: string;
      weight: string;
      lineHeight: string;
    };
    h2: {
      size: string;
      weight: string;
      lineHeight: string;
    };
    body: {
      size: string;
      weight: string;
      lineHeight: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
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
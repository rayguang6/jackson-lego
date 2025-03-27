// Section types enum
export enum SectionType {
  Hero = 'hero',
  Problem = 'problem',
}

// Common shared props that most sections might need
export interface CommonSectionProps {
  theme?: 'light' | 'dark';
  className?: string;
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

// Union type for all section props
export type SectionProps = HeroSectionProps | ProblemSectionProps; 
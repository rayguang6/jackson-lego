import { BaseSectionProps, ThemeType } from '@/lib/types';

export interface ComparisonItem {
  before: string;
  after: string;
}

export interface BeforeAfterProps extends BaseSectionProps {
  title: string;
  subtitle: string;
  badgeText: string;
  comparisonItems: ComparisonItem[];
  beforeLabel: string;
  afterLabel: string;
  beforeHeading: string;
  afterHeading: string;
  ctaText: string;
}

export const defaultBeforeAfterProps: BeforeAfterProps = {
  title: 'YourBrand is a shortcut for you',
  subtitle: 'Save you time, simplify your workflow, and deliver results faster.',
  badgeText: 'FAST TRACK YOUR SUCCESS',
  beforeLabel: 'BEFORE using YourBrand:',
  afterLabel: 'AFTER using YourBrand:',
  beforeHeading: 'Traditional Methods That Slow You Down',
  afterHeading: 'Smart Solutions That Enhance Efficiency',
  comparisonItems: [
    {
      before: 'Hours wasted on designs',
      after: 'Designs done in minutes'
    },
    {
      before: 'Disconnected, clunky tools',
      after: 'Streamlined, intuitive templates'
    },
    {
      before: 'Inconsistent branding',
      after: 'Polished, consistent branding'
    },
    {
      before: 'Low funnel conversions',
      after: 'Proven structure that convert leads fast'
    },
    {
      before: 'Manual, delayed tasks',
      after: 'Simple processes'
    },
    {
      before: 'Poor audience engagement',
      after: 'Engaged, growing audiences'
    }
  ],
  ctaText: 'GET INSTANT ACCESS',
  theme: ThemeType.light,
}; 
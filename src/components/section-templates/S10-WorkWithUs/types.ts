import { BaseSectionProps, ThemeType } from '@/lib/types';

export interface CardItem {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  iconId?: string;
}

export interface WorkWithUsProps extends BaseSectionProps {
  eyebrowText?: string;
  title?: string;
  subtitle?: string;
  cards?: CardItem[];
}

export const defaultWorkWithUsProps: WorkWithUsProps = {
  eyebrowText: 'JOIN THE SUCCESS JOURNEY',
  title: 'Stay Connected, Stay Ahead.',
  subtitle: 'Join our network for valuable insights, updates, and resources to fuel your growth.',
  cards: [
    {
      title: 'Join Our Community',
      description: 'Connect with a network of growth-driven individuals and gain valuable insights.',
      ctaText: 'Join The #1 Community Today!',
      ctaLink: '#community',
      iconId: 'community-icon'
    },
    {
      title: 'Subscribe Our Newsletter',
      description: 'Receive the latest industry trends, expert advice, and exclusive offers directly to your inbox.',
      ctaText: 'Subscribe Weekly Insights Now',
      ctaLink: '#newsletter',
      iconId: 'newsletter-icon'
    }
  ],
  theme: ThemeType.light,
}; 
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import { BaseSectionProps, ThemeType } from '@/lib/types';


export interface WorkWithUsProps extends BaseSectionProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  cardItems: {
    title: string;
    description: string;
    ctaText: string;
    iconId?: string;
    image?: string;
  }[];
}

export const defaultWorkWithUsProps: WorkWithUsProps = {
  badgeText: 'JOIN THE SUCCESS JOURNEY',
  title: 'Stay Connected, Stay Ahead.',
  subtitle: 'Join our network for valuable insights, updates, and resources to fuel your growth.',
  cardItems: [
    {
      title: 'Join Our Community',
      description: 'Connect with a network of growth-driven individuals and gain valuable insights.',
      ctaText: 'Join The #1 Community Today!',
      iconId: 'community-icon',
      image: TEMPLATE_IMAGES.WORK_WITH_US.IMAGE_1
    },
    {
      title: 'Subscribe Our Newsletter',
      description: 'Receive the latest industry trends, expert advice, and exclusive offers directly to your inbox.',
      ctaText: 'Subscribe Weekly Insights Now',
      iconId: 'newsletter-icon',
      image: TEMPLATE_IMAGES.WORK_WITH_US.IMAGE_2
    }
  ],
  theme: ThemeType.light,
}; 
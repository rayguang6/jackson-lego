import { BaseSectionProps, ThemeType } from '@/lib/types';

export interface WebinarHeroProps extends BaseSectionProps {
  topBannerText: string;
  mainTitle: string;
  subTitle: string;
  highlightedText: string;
  description: string;
  ctaText: string;
  timeRange: string;
  registrationLimit: string;
}

export const defaultWebinarHeroProps: WebinarHeroProps = {
  theme: ThemeType.dark,
  sectionId: 's17-webinar-hero',
  topBannerText: 'Limited Time Offer - Register Now!',
  mainTitle: 'Unlock the Power of',
  subTitle: 'AI Automation',
  highlightedText: 'Transform Your Business Today',
  description: 'Join industry experts as they reveal proven strategies to implement AI automation in your business workflow.',
  ctaText: 'Reserve Your Spot Now',
  timeRange: 'Thursday, April 25th | 2:00 PM - 3:30 PM EST',
  registrationLimit: 'Only 100 spots available - Register before they\'re gone!'
}; 
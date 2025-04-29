import { BaseSectionProps, ThemeType } from '@/lib/types';

export interface WebinarPricingProps extends BaseSectionProps {
  originalPrice: string;
  currentPrice: string;
  description: string;
  ctaText: string;
}

export const defaultWebinarPricingProps: WebinarPricingProps = {
  theme: ThemeType.dark,
  sectionId: 's21-webinar-pricing',
  originalPrice: 'RM3,997',
  currentPrice: '免费!',
  description: '8PM-11PM',
  ctaText: '立即报名 马上开始'
}; 
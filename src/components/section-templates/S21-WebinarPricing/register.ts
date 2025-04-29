import { SectionTemplatesVariants } from '@/lib/templates/types';
import { S21WebinarPricing } from './index';
import { ThemeType, VersionType } from '@/lib/types';

export const webinarPricingTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 's21-webinar-pricing-v1-light',
      component: S21WebinarPricing,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 's21-webinar-pricing-v1-dark',
      component: S21WebinarPricing,
      theme: ThemeType.dark
    }
  }
}; 
import { SectionTemplatesVariants } from '@/lib/templates/types';
import { S18WebinarBenefits } from './index';
import { ThemeType, VersionType } from '@/lib/types';

export const webinarBenefitsTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 's18-webinar-benefits-v1-light',
      component: S18WebinarBenefits,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 's18-webinar-benefits-v1-dark',
      component: S18WebinarBenefits,
      theme: ThemeType.dark
    }
  }
}; 
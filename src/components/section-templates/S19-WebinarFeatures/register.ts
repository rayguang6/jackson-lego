import { SectionTemplatesVariants } from '@/lib/templates/types';
import { S19WebinarFeatures } from './index';
import { ThemeType, VersionType } from '@/lib/types';

export const webinarFeaturesTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 's19-webinar-features-v1-light',
      component: S19WebinarFeatures,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 's19-webinar-features-v1-dark',
      component: S19WebinarFeatures,
      theme: ThemeType.dark
    }
  }
}; 
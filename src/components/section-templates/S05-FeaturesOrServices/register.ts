import { SectionTemplatesVariants } from '@/lib/templates/types';
import { ThemeType, VersionType } from '@/lib/types';
import { FeaturesOrServicesV1 } from './FeaturesOrServicesV1';
import { FeaturesOrServicesV3 } from './FeaturesOrServicesV3';

export const featuresOrServicesTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'features_or_services-v1-light',
      component: FeaturesOrServicesV1,
      theme: ThemeType.light
    },
    [VersionType.v2]: {
      id: 'features_or_services-v3-light',
      component: FeaturesOrServicesV3,
      theme: ThemeType.light
    },
    
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'features_or_services-v1-dark',
      component: FeaturesOrServicesV1,
      theme: ThemeType.dark
    },
    [VersionType.v2]: {
      id: 'features_or_services-v3-dark',
      component: FeaturesOrServicesV3,
      theme: ThemeType.dark
    },
  }
}; 
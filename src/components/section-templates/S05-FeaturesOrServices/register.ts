import { SectionTemplatesVariants } from '@/lib/templates/types';
import { SectionType, ThemeType, VersionType } from '@/lib/types';
import { FeaturesOrServicesV1 } from './FeaturesOrServicesV1';
import { FeaturesOrServicesV3 } from './FeaturesOrServicesV3';

export const featuresOrServicesTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id:`${SectionType.S05_FeaturesOrServices}-${VersionType.v1}-${ThemeType.light}`,
      component: FeaturesOrServicesV1,
      theme: ThemeType.light
    },
    [VersionType.v3]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v3}-${ThemeType.light}`,
      component: FeaturesOrServicesV3,
      theme: ThemeType.light
    },
    
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v1}-${ThemeType.dark}`,
      component: FeaturesOrServicesV1,
      theme: ThemeType.dark
    },
    [VersionType.v3]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v3}-${ThemeType.dark}`,
      component: FeaturesOrServicesV3,
      theme: ThemeType.dark
    },
  }
}; 
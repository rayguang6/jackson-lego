import { SectionTemplatesVariants } from '@/lib/templates/types';
import { SectionType, ThemeType, VersionType } from '@/lib/types';
import { FeaturesOrServicesV1 } from './FeaturesOrServicesV1';
import { FeaturesOrServicesV3 } from './FeaturesOrServicesV3';
import { FeaturesOrServicesV2 } from './FeaturesOrServicesV2';
import { FeaturesOrServicesV4 } from './FeaturesOrServicesV4';
import { FeaturesOrServicesV5 } from './FeaturesOrServicesV5';
export const featuresOrServicesTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id:`${SectionType.S05_FeaturesOrServices}-${VersionType.v1}-${ThemeType.light}`,
      component: FeaturesOrServicesV1,
      theme: ThemeType.light
    },
    [VersionType.v2]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v2}-${ThemeType.light}`,
      component: FeaturesOrServicesV2,
      theme: ThemeType.light
    },
    [VersionType.v3]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v3}-${ThemeType.light}`,
      component: FeaturesOrServicesV3,
      theme: ThemeType.light
    },
    [VersionType.v4]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v4}-${ThemeType.light}`,
      component: FeaturesOrServicesV4,
      theme: ThemeType.light
    },  
    [VersionType.v5]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v5}-${ThemeType.light}`,
      component: FeaturesOrServicesV5,
      theme: ThemeType.light
    },
        
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v1}-${ThemeType.dark}`,
      component: FeaturesOrServicesV1,
      theme: ThemeType.dark
    },
    [VersionType.v2]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v2}-${ThemeType.dark}`,
      component: FeaturesOrServicesV2,
      theme: ThemeType.dark
    },
    [VersionType.v3]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v3}-${ThemeType.dark}`,
      component: FeaturesOrServicesV3,
      theme: ThemeType.dark
    },
    [VersionType.v4]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v4}-${ThemeType.dark}`,
      component: FeaturesOrServicesV4,
      theme: ThemeType.dark
    },
    [VersionType.v5]: {
      id: `${SectionType.S05_FeaturesOrServices}-${VersionType.v5}-${ThemeType.dark}`,
      component: FeaturesOrServicesV5,
      theme: ThemeType.dark
    },
  }
}; 
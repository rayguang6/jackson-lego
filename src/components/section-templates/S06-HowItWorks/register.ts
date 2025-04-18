import { SectionTemplatesVariants } from '@/lib/templates/types';
import { HowItWorksV1 } from './HowItWorksV1';
import { HowItWorksV2 } from './HowItWorksV2';
import { HowItWorksV3 } from './HowItWorksV3';
import { ThemeType, VersionType } from '@/lib/types';

export const howItWorksTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'how_it_works-v1-light',
      component: HowItWorksV1, 
      theme: ThemeType.light
    },
    [VersionType.v2]: {
      id: 'how_it_works-v2-light',
      component: HowItWorksV2,
      theme: ThemeType.light
    },
    [VersionType.v3]: {
      id: 'how_it_works-v3-light',
      component: HowItWorksV3,
      theme: ThemeType.light
    },
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'how_it_works-v1-dark',
      component: HowItWorksV1,
      theme: ThemeType.dark
    },
    [VersionType.v2]: {
      id: 'how_it_works-v2-dark',
      component: HowItWorksV2,
      theme: ThemeType.dark
    },
    [VersionType.v3]: {
      id: 'how_it_works-v3-dark',
      component: HowItWorksV3,
      theme: ThemeType.dark
    },
  }
}; 
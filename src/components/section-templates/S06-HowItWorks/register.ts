import { SectionTemplatesVariants } from '@/lib/templates/types';
import { HowItWorksV1 } from './HowItWorksV1';
import { HowItWorksV2 } from './HowItWorksV2';
import { HowItWorksV3 } from './HowItWorksV3';
import { HowItWorksV4 } from './HowItWorksV4';
import { HowItWorksV5 } from './HowItWorksV5';
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
    [VersionType.v4]: {
      id: 'how_it_works-v4-light',
      component: HowItWorksV4,
      theme: ThemeType.light
    },
    [VersionType.v5]: {
      id: 'how_it_works-v5-light',
      component: HowItWorksV5,
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
    [VersionType.v4]: {
      id: 'how_it_works-v4-dark',
      component: HowItWorksV4,
      theme: ThemeType.dark
    },
    [VersionType.v5]: {
      id: 'how_it_works-v5-dark',
      component: HowItWorksV5,
      theme: ThemeType.dark
    },
  }
}; 
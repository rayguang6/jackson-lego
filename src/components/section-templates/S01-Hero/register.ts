import { SectionTemplatesVariants } from '@/lib/templates/types';
import { HeroV1 } from './HeroV1';
import { HeroV2 } from './HeroV2';
import { HeroV3 } from './HeroV3';
import { ThemeType, VersionType } from '@/lib/types';

export const heroTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'hero-v1-light',
      component: HeroV1,
      theme: ThemeType.light
    },
    [VersionType.v2]: {
      id: 'hero-v2-light',
      component: HeroV2,
      theme: ThemeType.light
    },
    [VersionType.v3]: {
      id: 'hero-v3-light',
      component: HeroV3,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'hero-v1-dark',
      component: HeroV1,
      theme: ThemeType.dark
    },
    [VersionType.v2]: {
      id: 'hero-v2-dark',
      component: HeroV2,
      theme: ThemeType.dark
    },
    [VersionType.v3]: {
      id: 'hero-v3-dark',
      component: HeroV3,
      theme: ThemeType.dark
    }
  }
}; 
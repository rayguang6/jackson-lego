import { SectionTemplatesVariants } from '@/lib/templates/types';
import { WebinarHeroV1 } from './WebinarHeroV1';
import { ThemeType, VersionType } from '@/lib/types';

export const webinarHeroTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'webinarHero-v1-light',
      component: WebinarHeroV1,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'webinarHero-v1-dark',
      component: WebinarHeroV1,
      theme: ThemeType.dark
    }
  }
}; 
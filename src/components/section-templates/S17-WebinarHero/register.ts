import { SectionTemplatesVariants } from '@/lib/templates/types';
import { S17WebinarHero } from './index';
import { ThemeType, VersionType } from '@/lib/types';

export const webinarHeroTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 's17-webinar-hero-v1-light',
      component: S17WebinarHero,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 's17-webinar-hero-v1-dark',
      component: S17WebinarHero,
      theme: ThemeType.dark
    }
  }
}; 
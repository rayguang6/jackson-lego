import { SectionTemplatesVariants } from '@/lib/templates/types';
import { ThemeType, VersionType } from '@/lib/types';
import { AboutV1 } from './AboutV1';
import { AboutV2 } from './AboutV2';
import { AboutV3 } from './AboutV3';

/**
 * Template registry for About section
 * - Contains light and dark theme variants
 * - Each theme can have multiple versions
 */
export const aboutTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'about-v1-light',
      component: AboutV1,
      theme: ThemeType.light,
    },
    [VersionType.v2]: {
      id: 'about-v2-light',
      component: AboutV2,
      theme: ThemeType.light,
    },
    [VersionType.v3]: {
      id: 'about-v3-light',
      component: AboutV3,
      theme: ThemeType.light,
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'about-v1-dark',
      component: AboutV1,
      theme: ThemeType.dark,
    },
    [VersionType.v2]: {
      id: 'about-v2-dark',
      component: AboutV2,
      theme: ThemeType.dark,
    },
    [VersionType.v3]: {
      id: 'about-v3-dark',
      component: AboutV3,
      theme: ThemeType.dark,
    }
  },
}; 
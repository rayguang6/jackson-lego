import { SectionTemplatesVariants } from '@/lib/templates/types';
import { CTAV1 } from './CTAV1';
import { CTAV2 } from './CTAV2';
import { CTAV3 } from './CTAV3';
import { ThemeType, VersionType } from '@/lib/types';

export const ctaTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'cta-v1-light',
      component: CTAV1,
      theme: ThemeType.light
    },
    [VersionType.v2]: {
      id: 'cta-v2-light',
      component: CTAV2,
      theme: ThemeType.light
    },
    [VersionType.v3]: {
      id: 'cta-v3-light',
      component: CTAV3,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'cta-v1-dark',
      component: CTAV1,
      theme: ThemeType.dark
    },
    [VersionType.v2]: {
      id: 'cta-v2-dark',
      component: CTAV2,
      theme: ThemeType.dark
    },
    [VersionType.v3]: {
      id: 'cta-v3-dark',
      component: CTAV3,
      theme: ThemeType.dark
    }
  }
}; 
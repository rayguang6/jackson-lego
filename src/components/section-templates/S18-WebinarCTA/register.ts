import { SectionTemplatesVariants } from '@/lib/templates/types';
import { WebinarCTAV1 } from './WebinarCtaV1';
import { ThemeType, VersionType } from '@/lib/types';
import { WebinarCTAV2 } from './WebinarCtaV2';

export const webinarCTATemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'webinarCTA-v1-light',
      component: WebinarCTAV1,
      theme: ThemeType.light
    },
    [VersionType.v2]: {
      id: 'webinarCTA-v2-light',
      component: WebinarCTAV2,
      theme: ThemeType.light
    }
  },


  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'webinarCTA-v1-dark',
      component: WebinarCTAV1,
      theme: ThemeType.dark
    },
    [VersionType.v2]: {
      id: 'webinarCTA-v2-dark',
      component: WebinarCTAV2,
      theme: ThemeType.dark
    }
  }
}; 
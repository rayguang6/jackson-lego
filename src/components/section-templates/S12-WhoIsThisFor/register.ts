import { SectionTemplatesVariants } from '@/lib/templates/types';
import { ThemeType, VersionType } from '@/lib/types';
import { WhoIsThisForV1 } from './WhoIsThisForV1';
import { WhoIsThisForV2 } from './WhoIsThisForV2';

/**
 * Template registry for WhoIsThisFor section
 * - Contains light and dark theme variants
 * - Each theme can have multiple versions
 */
export const whoIsThisForTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'whoisthisfor-v1-light',
      component: WhoIsThisForV1,
      theme: ThemeType.light,
    },
    [VersionType.v2]: {
      id: 'whoisthisfor-v2-light',
      component: WhoIsThisForV2,
      theme: ThemeType.light,
    },
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'whoisthisfor-v1-dark',
      component: WhoIsThisForV1,
      theme: ThemeType.dark,
    },
    [VersionType.v2]: {
      id: 'whoisthisfor-v2-dark',
      component: WhoIsThisForV2,
      theme: ThemeType.dark,
    },
  },
}; 
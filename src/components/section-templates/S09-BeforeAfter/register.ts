import { SectionTemplatesVariants } from '@/lib/templates/types';
import { ThemeType, VersionType } from '@/lib/types';
import { BeforeAfterV1 } from './BeforeAfterV1';
import { BeforeAfterV2 } from './BeforeAfterV2';

/**
 * Template registry for BeforeAfter section
 * - Contains light and dark theme variants
 * - Each theme can have multiple versions
 */
export const beforeAfterTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'beforeafter-v1-light',
      component: BeforeAfterV1,
      theme: ThemeType.light,
    },
    [VersionType.v2]: {
      id: 'beforeafter-v2-light',
      component: BeforeAfterV2,
      theme: ThemeType.light,
    },
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'beforeafter-v1-dark',
      component: BeforeAfterV1,
      theme: ThemeType.dark,
    },
    [VersionType.v2]: {
      id: 'beforeafter-v2-dark',
      component: BeforeAfterV2,
      theme: ThemeType.dark,
    },
  },
}; 
import { SectionTemplatesVariants } from '@/lib/templates/types';
import { ThemeType, VersionType } from '@/lib/types';
import { GuaranteeV1 } from './GuaranteeV1';
import { GuaranteeV2 } from './GuaranteeV2';

/**
 * Template registry for Guarantee section
 * - Contains light and dark theme variants
 * - Each theme can have multiple versions
 */
export const guaranteeTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'guarantee-v1-light',
      component: GuaranteeV1,
      theme: ThemeType.light,
    },
    [VersionType.v2]: {
      id: 'guarantee-v2-light',
      component: GuaranteeV2,
      theme: ThemeType.light,
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'guarantee-v1-dark',
      component: GuaranteeV1,
      theme: ThemeType.dark,
    },
    [VersionType.v2]: {
      id: 'guarantee-v2-dark',
      component: GuaranteeV2,
      theme: ThemeType.dark,
    }
  },
}; 
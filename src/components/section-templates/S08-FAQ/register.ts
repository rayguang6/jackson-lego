import { SectionTemplatesVariants } from '@/lib/templates/types';
import { ThemeType, VersionType } from '@/lib/types';
import { FAQV1 } from './FAQV1';
import { FAQV2 } from './FAQV2';

/**
 * Template registry for FAQ section
 * - Contains light and dark theme variants
 * - Each theme can have multiple versions (v1, v2, etc.)
 */
export const faqTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'faq-v1-light',
      component: FAQV1,
      theme: ThemeType.light,
    },
    [VersionType.v2]: {
      id: 'faq-v2-light',
      component: FAQV2,
      theme: ThemeType.light,
    },
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'faq-v1-dark',
      component: FAQV1,
      theme: ThemeType.dark,
    },
    [VersionType.v2]: {
      id: 'faq-v2-dark',
      component: FAQV2,
      theme: ThemeType.dark,
    },
  },
}; 
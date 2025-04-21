import { SectionTemplatesVariants } from '@/lib/templates/types';
import { ThemeType, VersionType } from '@/lib/types';
import { OfferV1 } from './OfferV1';
import { OfferV3 } from './OfferV3';

/**
 * Template registry for Offer section
 * - Contains light and dark theme variants
 * - Each theme can have multiple versions
 */
export const offerTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'offer-v1-light',
      component: OfferV1,
      theme: ThemeType.light,
    },
    [VersionType.v3]: {
      id: 'offer-v3-light',
      component: OfferV3,
      theme: ThemeType.light,
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'offer-v1-dark',
      component: OfferV1,
      theme: ThemeType.dark,
    },
    [VersionType.v3]: {
      id: 'offer-v3-dark',
      component: OfferV3,
      theme: ThemeType.dark,
    }
  },
}; 
import { SectionTemplatesVariants } from '@/lib/templates/types';
import { SocialProofV1 } from './SocialProofV1';
import { SocialProofV2 } from './SocialProofV2';
import { SocialProofV3 } from './SocialProofV3';
import { ThemeType, VersionType } from '@/lib/types';

export const socialProofTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'social-proof-v1-light',
      component: SocialProofV1,
      theme: ThemeType.light
    },
    [VersionType.v2]: {
      id: 'social-proof-v2-light',
      component: SocialProofV2,
      theme: ThemeType.light
    },
    [VersionType.v3]: {
      id: 'social-proof-v3-light',
      component: SocialProofV3,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'social-proof-v1-dark',
      component: SocialProofV1,
      theme: ThemeType.dark
    },
    [VersionType.v2]: {
      id: 'social-proof-v2-dark',
      component: SocialProofV2,
      theme: ThemeType.dark
    },
    [VersionType.v3]: {
      id: 'social-proof-v3-dark',
      component: SocialProofV3,
      theme: ThemeType.dark
    }
  }
}; 
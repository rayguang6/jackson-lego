import { SectionTemplatesVariants } from '@/lib/templates/types';
import { ThemeType, VersionType } from '@/lib/types';
import { ProblemV1 } from './ProblemV1';
import { ProblemV2 } from './ProblemV2';
import { ProblemV3 } from './ProblemV3';
import { ProblemV4 } from './ProblemV4';

export const problemTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'problem-v1-light',
      component: ProblemV1,
      theme: ThemeType.light
    },
    [VersionType.v2]: { 
      id: 'problem-v2-light',
      component: ProblemV2,
      theme: ThemeType.light
    },
    [VersionType.v3]: {
      id: 'problem-v3-light',
      component: ProblemV3,
      theme: ThemeType.light
    },
    [VersionType.v4]: {
      id: 'problem-v4-light',
      component: ProblemV4,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'problem-v1-dark',
      component: ProblemV1,
      theme: ThemeType.dark
    },
    [VersionType.v2]: {
      id: 'problem-v2-dark',
      component: ProblemV2,
      theme: ThemeType.dark
    },
    [VersionType.v3]: {
      id: 'problem-v3-dark',
      component: ProblemV3,
      theme: ThemeType.dark
    },
    [VersionType.v4]: {
      id: 'problem-v4-dark',
      component: ProblemV4,
      theme: ThemeType.dark
    }
  }
}; 
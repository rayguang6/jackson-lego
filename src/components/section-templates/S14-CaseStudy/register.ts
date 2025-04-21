import { SectionTemplatesVariants } from '@/lib/templates/types';
import { ThemeType, VersionType } from '@/lib/types';
import { CaseStudyV1 } from './CaseStudyV1';
import { CaseStudyV2 } from './CaseStudyV2';

/**
 * Template registry for Case Study section
 * - Contains light and dark theme variants
 * - Each theme can have multiple versions
 */
export const caseStudyTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'casestudy-v1-light',
      component: CaseStudyV1,
      theme: ThemeType.light,
    },
    [VersionType.v2]: {
      id: 'casestudy-v2-light',
      component: CaseStudyV2,
      theme: ThemeType.light,
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'casestudy-v1-dark',
      component: CaseStudyV1,
      theme: ThemeType.dark,
    },
    [VersionType.v2]: {
      id: 'casestudy-v2-dark',
      component: CaseStudyV2,
      theme: ThemeType.dark,
    }
  },
}; 
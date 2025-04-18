import { SectionTemplatesVariants } from '@/lib/templates/types';
import { ThemeType, VersionType } from '@/lib/types';
import { SolutionsV1 } from './SolutionsV1';
import { SolutionsV2 } from './SolutionsV2';
import { SolutionsV3 } from './SolutionsV3';

export const solutionsTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'solutions-v1-light',
      component: SolutionsV1,
      theme: ThemeType.light
    },
    [VersionType.v2]: {
      id: 'solutions-v2-light',
      component: SolutionsV2,
      theme: ThemeType.light
    },
    [VersionType.v3]: {
      id: 'solutions-v3-light',
      component: SolutionsV3,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'solutions-v1-dark',
      component: SolutionsV1,
      theme: ThemeType.dark
    },
    [VersionType.v2]: {
      id: 'solutions-v2-dark',
      component: SolutionsV2,
      theme: ThemeType.dark
    },
    [VersionType.v3]: {
      id: 'solutions-v3-dark',
      component: SolutionsV3,
      theme: ThemeType.dark
    }
  }
}; 
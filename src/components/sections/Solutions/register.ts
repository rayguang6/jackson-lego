import { SectionType } from '@/lib/types';
import { SectionTemplates } from '@/lib/templates/types';
import { SolutionsV1 } from './SolutionsV1';
import { SolutionsV2 } from './SolutionsV2';    
import { SolutionsV3 } from './SolutionsV3';

// Register all Solutions templates
export const solutionsTemplates: SectionTemplates = {
  light: {
    v1: {
      id: 'solutions-light-v1',
      component: SolutionsV1,
      theme: 'light'
    },
    v2: {
      id: 'solutions-light-v2',
      component: SolutionsV2,
      theme: 'light'
    },
    v3: {
      id: 'solutions-light-v3',
      component: SolutionsV3,
      theme: 'light'
    }
  },
  dark: {
    v1: {
      id: 'solutions-dark-v1',
      component: SolutionsV1,
      theme: 'dark'
    },
    v2: {
      id: 'solutions-dark-v2',
      component: SolutionsV2,
      theme: 'dark'
    },
    v3: {
      id: 'solutions-dark-v3',
      component: SolutionsV3,
      theme: 'dark'
    }
  }
}; 
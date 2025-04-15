import { SectionType } from '@/lib/types';
import { SectionTemplates } from '@/lib/templates/types';
import { ProblemV1 } from './ProblemV1';
import { ProblemV2 } from './ProblemV2';
import { ProblemV3 } from './ProblemV3';
import { ProblemV4 } from './ProblemV4';

// Register all Problem templates
export const problemTemplates: SectionTemplates = {
  light: {
    v1: {
      id: 'problem-v1',
      component: ProblemV1,
      theme: 'light'
    },
    v2: {
      id: 'problem-v2',
      component: ProblemV2,
      theme: 'light'
    },
    v3: {
      id: 'problem-v3',
      component: ProblemV3,
      theme: 'light'
    },
    v4: {
      id: 'problem-v4',
      component: ProblemV4,
      theme: 'light'
    }
  },
  dark: {
    v1: {
      id: 'problem-v1',
      component: ProblemV1,
      theme: 'dark'
    },
    v2: {
      id: 'problem-v2',
      component: ProblemV2,
      theme: 'dark'
    },
    v3: {
      id: 'problem-v3',
      component: ProblemV3,
      theme: 'dark'
    },
    v4: {
      id: 'problem-v4',
      component: ProblemV4,
      theme: 'dark'
    }
  }
}; 
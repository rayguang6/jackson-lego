import { ProblemV1 } from '@/components/sections/Problem/ProblemV1';
import { ProblemV2 } from '@/components/sections/Problem/ProblemV2';
import { ProblemV3 } from '@/components/sections/Problem/ProblemV3';
import { SectionTemplates } from '../types';

// Problem section templates
export const problemTemplates: SectionTemplates = {
  light: {
    v1: {
      id: 'problem-light-v1',
      name: 'Problem V1',
      component: ProblemV1,
      description: 'Icon-based problem statements with clean layout',
      theme: 'light',
      preview: {
        theme: 'light'
      }
    },
    v2: {
      id: 'problem-light-v2',
      name: 'Problem V2',
      component: ProblemV2,
      description: 'Problem section with accent container',
      theme: 'light',
      preview: {
        theme: 'light'
      }
    },
    v3: {
      id: 'problem-light-v3',
      name: 'Problem V3',
      component: ProblemV3,
      description: 'Grid layout with modern design',
      theme: 'light',
      preview: {
        theme: 'light'
      }
    }
  },
  dark: {
    v1: {
      id: 'problem-dark-v1',
      name: 'Problem V1',
      component: ProblemV1,
      description: 'Icon-based problem statements with dark theme',
      theme: 'dark',
      preview: {
        theme: 'dark'
      }
    },
    v2: {
      id: 'problem-dark-v2',
      name: 'Problem V2',
      component: ProblemV2,
      description: 'Problem section with accent container',
      theme: 'dark',
      preview: {
        theme: 'dark'
      }
    },
    v3: {
      id: 'problem-dark-v3',
      name: 'Problem V3',
      component: ProblemV3,
      description: 'Grid layout with modern design',
      theme: 'dark',
      preview: {
        theme: 'dark'
      }
    }
  }
}; 
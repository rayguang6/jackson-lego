import { SectionType } from '@/lib/types';
import { SectionTemplates } from '@/lib/templates/types';
import { HowItWorksV1 } from './HowItWorksV1';
import { HowItWorksV2 } from './HowItWorksV2';
import { HowItWorksV3 } from './HowItWorksV3';

// Register all HowItWorks templates
export const howItWorksTemplates: SectionTemplates = {
  light: {
    v1: {
      id: 'how-it-works-light-v1',
      component: HowItWorksV1,
      theme: 'light'
    },
    v2: {
      id: 'how-it-works-light-v2',
      component: HowItWorksV2,
      theme: 'light'
    },
    v3: {
      id: 'how-it-works-light-v3',
      component: HowItWorksV3,
      theme: 'light'
    }
  },
  dark: {
    v1: {
      id: 'how-it-works-dark-v1',
      component: HowItWorksV1,
      theme: 'dark'
    },
    v2: {
      id: 'how-it-works-dark-v2',
      component: HowItWorksV2,
      theme: 'dark'
    },
    v3: {
      id: 'how-it-works-dark-v3',
      component: HowItWorksV3,
      theme: 'dark'
    }
  }
}; 
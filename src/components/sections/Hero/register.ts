import { SectionType } from '@/lib/types';
import { SectionTemplates } from '@/lib/templates/types';
import { HeroV1 } from './HeroV1';
import { HeroV2 } from './HeroV2';
import { HeroV3 } from './HeroV3';

// Register all Hero templates
export const heroTemplates: SectionTemplates = {
  light: {
    v1: {
      id: 'hero-v1',
      component: HeroV1,
      theme: 'light'
    },
    v2: {
      id: 'hero-v2',
      component: HeroV2,
      theme: 'light'
    },
    v3: {
      id: 'hero-v3',
      component: HeroV3,
      theme: 'light'
    }
  },
  dark: {
    v1: {
      id: 'hero-v1',
      component: HeroV1,
      theme: 'dark'
    },
    v2: {
      id: 'hero-v2',
      component: HeroV2,
      theme: 'dark'
    },
    v3: {
      id: 'hero-v3',
      component: HeroV3,
      theme: 'dark'
    }
  }
}; 
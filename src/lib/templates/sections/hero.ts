import { HeroV1 } from '@/components/sections/Hero/HeroV1';
import { HeroV3 } from '@/components/sections/Hero/HeroV3';
import { SectionTemplates } from '../types';

// Hero section templates
export const heroTemplates: SectionTemplates = {
  light: {
    v1: {
      id: 'hero-light-v1',
      name: 'Hero V1',
      component: HeroV1,
      description: 'Clean, modern hero section with centered content and video thumbnail',
      theme: 'light',
      preview: {
        theme: 'light'
      }
    },
    v3: {
      id: 'hero-light-v3',
      name: 'Hero V3',
      component: HeroV3,
      description: 'A modern hero section with video thumbnail and feature list',
      theme: 'light',
      preview: {
        theme: 'light'
      }
    }
  },
  dark: {
    v1: {
      id: 'hero-dark-v1',
      name: 'Hero V1',
      component: HeroV1,
      description: 'Clean, modern hero section with centered content',
      theme: 'dark',
      preview: {
        theme: 'dark'
      }
    },
    v3: {
      id: 'hero-dark-v3',
      name: 'Hero V3',
      component: HeroV3,
      description: 'A modern hero section with video thumbnail and feature list',
      theme: 'dark',
      preview: {
        theme: 'dark'
      }
    }
  }
}; 
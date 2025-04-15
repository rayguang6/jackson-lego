import { SectionType } from '@/lib/types';
import { SectionTemplates } from '@/lib/templates/types';
import { CTAV1 } from './CTAV1';

// Register all CTA templates
export const ctaTemplates: SectionTemplates = {
  light: {
    v1: {
      id: 'cta-light-v1',
      component: CTAV1,
      theme: 'light'
    }
  },
  dark: {
    v1: {
      id: 'cta-dark-v1',
      component: CTAV1,
      theme: 'dark'
    }
  }
}; 
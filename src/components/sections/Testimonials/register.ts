import { SectionType } from '@/lib/types';
import { SectionTemplates } from '@/lib/templates/types';
import { TestimonialsV2 } from './TestimonialsV2';

// Register all Testimonials templates
export const testimonialsTemplates: SectionTemplates = {
  light: {
    v1: {
      id: 'testimonials-light-v1',
      component: TestimonialsV2,
      theme: 'light'
    },
    v2: {
      id: 'testimonials-light-v2',
      component: TestimonialsV2,
      theme: 'light'
    }
  },
  dark: {
    v1: {
      id: 'testimonials-dark-v1',
      component: TestimonialsV2,
      theme: 'dark'
    },
    v2: {
      id: 'testimonials-dark-v2',
      component: TestimonialsV2,
      theme: 'dark'
    }
  }
}; 
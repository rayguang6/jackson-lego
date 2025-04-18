import { SectionTemplatesVariants } from '@/lib/templates/types';
import { TestimonialsV1 } from './TestimonialsV1';
import { ThemeType, VersionType } from '@/lib/types';
import { TestimonialsV2 } from './TestimonialsV2';

export const testimonialsTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'testimonials-v1-light',
      component: TestimonialsV1,
      theme: ThemeType.light
    },
    [VersionType.v2]: {
      id: 'testimonials-v2-light',
      component: TestimonialsV2,
      theme: ThemeType.light
    },    
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'testimonials-v1-dark',
      component: TestimonialsV1,
      theme: ThemeType.dark
    },
    [VersionType.v2]: {
      id: 'testimonials-v2-dark',
      component: TestimonialsV2,
      theme: ThemeType.dark
    },
  }
}; 
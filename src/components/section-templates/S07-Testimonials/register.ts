import { SectionTemplatesVariants } from '@/lib/templates/types';
import { TestimonialsV1 } from './TestimonialsV1';
import { ThemeType, VersionType } from '@/lib/types';
import { TestimonialsV2 } from './TestimonialsV2';
import { TestimonialsV3 } from './TestimonialsV3';
import { TestimonialsV4 } from './TestimonialsV4';
import { TestimonialsV5 } from './TestimonialsV5';
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
    [VersionType.v3]: {
      id: 'testimonials-v3-light',
      component: TestimonialsV3,
      theme: ThemeType.light
    },
    [VersionType.v4]: {
      id: 'testimonials-v4-light',
      component: TestimonialsV4,
      theme: ThemeType.light
    },
    [VersionType.v5]: {
      id: 'testimonials-v5-light',
      component: TestimonialsV5,
      theme: ThemeType.light
    }
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
    [VersionType.v3]: {
      id: 'testimonials-v3-dark',
      component: TestimonialsV3,
      theme: ThemeType.dark
    },
    [VersionType.v4]: {
      id: 'testimonials-v4-dark',
      component: TestimonialsV4,
      theme: ThemeType.dark
    },
    [VersionType.v5]: {
      id: 'testimonials-v5-dark',
      component: TestimonialsV5,
      theme: ThemeType.dark
    }
  }
}; 
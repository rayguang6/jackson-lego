import { SectionTemplatesVariants } from '@/lib/templates/types';
import { S20WebinarTestimonials } from './index';
import { ThemeType, VersionType } from '@/lib/types';

export const webinarTestimonialsTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 's20-webinar-testimonials-v1-light',
      component: S20WebinarTestimonials,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 's20-webinar-testimonials-v1-dark',
      component: S20WebinarTestimonials,
      theme: ThemeType.dark
    }
  }
}; 
import { Section, SectionType } from '../types';

export const defaultSections: Section[] = [
  {
    id: 'header-1',
    type: SectionType.Header,
    title: 'Navbar',
    order: 0,
  },
  {
    id: 'hero-1',
    type: SectionType.Hero,
    title: 'Hero Header Section',
    order: 1,
  },
  {
    id: 'features-1',
    type: SectionType.Features,
    title: 'Feature Section',
    order: 2,
  },
  {
    id: 'features-list-1',
    type: SectionType.FeaturesList,
    title: 'Features List Section',
    order: 3,
  },
  {
    id: 'testimonials-1',
    type: SectionType.Testimonials,
    title: 'Testimonials Section',
    order: 4,
  },
  {
    id: 'cta-1',
    type: SectionType.CTA,
    title: 'Call to Action',
    order: 5,
  },
  {
    id: 'footer-1',
    type: SectionType.Footer,
    title: 'Footer',
    order: 6,
  },
]; 
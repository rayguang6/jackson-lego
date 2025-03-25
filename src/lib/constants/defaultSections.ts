import { Section, SectionType } from '../types';

export const defaultSections: Section[] = [
  {
    id: 'hero-1',
    type: SectionType.Hero,
    title: 'Hero Section',
    order: 0,
  },
  {
    id: 'problem-1',
    type: SectionType.Problem,
    title: 'Problem Section',
    order: 1,
  },
  {
    id: 'solutions-1',
    type: SectionType.Solutions,
    title: 'Solutions Section',
    order: 2,
  },
  {
    id: 'features-1',
    type: SectionType.FeaturesOrServices,
    title: 'Features or Services Section',
    order: 3,
  },
  {
    id: 'how-it-works-1',
    type: SectionType.HowItWorks,
    title: 'How It Works Section',
    order: 4,
  },
  {
    id: 'testimonials-1',
    type: SectionType.Testimonials,
    title: 'Testimonials Section',
    order: 5,
  },
  {
    id: 'social-proof-1',
    type: SectionType.SocialProof,
    title: 'Social Proof Section',
    order: 6,
  },
  {
    id: 'cta-1',
    type: SectionType.CTA,
    title: 'Call to Action Section',
    order: 7,
  },
]; 
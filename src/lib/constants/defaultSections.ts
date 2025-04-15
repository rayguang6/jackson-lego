import { Section, SectionType } from '../types';

export const defaultSections: Section[] = [
  {
    id: 'hero-1',
    type: SectionType.S01_Hero,
    title: 'Hero Section',
    order: 0,
  },
  {
    id: 'problem-1',
    type: SectionType.S03_Problem,
    title: 'Problem Section',
    order: 1,
  },
  {
    id: 'solutions-1',
    type: SectionType.S04_Solutions,
    title: 'Solutions Section',
    order: 2,
  },
  {
    id: 'features-1',
    type: SectionType.S05_FeaturesOrServices,
    title: 'Features or Services Section',
    order: 3,
  },
  {
    id: 'how-it-works-1',
    type: SectionType.S06_HowItWorks,
    title: 'How It Works Section',
    order: 4,
  },
  {
    id: 'testimonials-1',
    type: SectionType.S07_Testimonials,
    title: 'Testimonials Section',
    order: 5,
    templateId: 'testimonials-light-v2',
  },
  {
    id: 'social-proof-1',
    type: SectionType.S02_SocialProof,
    title: 'Social Proof Section',
    order: 6,
  },
]; 
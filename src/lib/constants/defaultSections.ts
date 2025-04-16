import { Section, SectionType } from '../types';
import { v4 as uuidv4 } from 'uuid';
export const defaultSections: Section[] = [
  {
    id: uuidv4(),
    type: SectionType.S01_Hero,
    title: 'Hero Section',
    order: 0,
  },
  // {
  //   id: uuidv4(),
  //   type: SectionType.S03_Problem,
  //   title: 'Problem Section',
  //   order: 1,
  // },
  // {
  //   id: uuidv4(),
  //   type: SectionType.S04_Solutions,
  //   title: 'Solutions Section',
  //   order: 2,
  // },
  // {
  //   id: uuidv4(),
  //   type: SectionType.S05_FeaturesOrServices,
  //   title: 'Features or Services Section',
  //   order: 3,
  // },
  // {
  //   id: uuidv4(),
  //   type: SectionType.S06_HowItWorks,
  //   title: 'How It Works Section',
  //   order: 4,
  // },
  // {
  //   id: uuidv4(),
  //   type: SectionType.S07_Testimonials,
  //   title: 'Testimonials Section',
  //   order: 5,
  // },
  // {
  //   id: uuidv4(),
  //   type: SectionType.S02_SocialProof,
  //   title: 'Social Proof Section',
  //   order: 6,
  // },
]; 
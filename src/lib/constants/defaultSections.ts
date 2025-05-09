import { SectionType, ThemeType, VersionType, WebsiteSection } from '../types';
// import { generateTemplateId } from '../templates';
import { v4 as uuidv4 } from 'uuid';

export const defaultSections: WebsiteSection[] = [
  {
    id: uuidv4(),
    type: SectionType.S01_Hero,
    title: 'Hero Section',
    order: 0,
    templateId: `${SectionType.S01_Hero}-${VersionType.v1}-${ThemeType.light}`,
    theme: ThemeType.light,
    content: {},
  },
  {
    id: uuidv4(),
    type: SectionType.S03_Problem,
    title: 'Problem Section',
    order: 1,
    templateId: `${SectionType.S03_Problem}-${VersionType.v1}-${ThemeType.dark}`,
    theme: ThemeType.light,
    content: {},
  },
  {
    id: uuidv4(),
    type: SectionType.S04_Solutions,
    title: 'Solutions Section',
    order: 2,
    templateId: `${SectionType.S04_Solutions}-${VersionType.v1}-${ThemeType.light}`,
    theme: ThemeType.light,
    content: {},
  },
  {
    id: uuidv4(),
    type: SectionType.S05_FeaturesOrServices,
    title: 'Features Section',
    order: 3,
    templateId: `${SectionType.S05_FeaturesOrServices}-${VersionType.v1}-${ThemeType.light}`,
    theme: ThemeType.light,
    content: {},
  },
  {
    id: uuidv4(),
    type: SectionType.S06_HowItWorks,
    title: 'How It Works Section',
    order: 4,
    templateId: `${SectionType.S06_HowItWorks}-${VersionType.v1}-${ThemeType.light}`,
    theme: ThemeType.light,
    content: {},
  },
  {
    id: uuidv4(),
    type: SectionType.S07_Testimonials,
    title: 'Testimonials Section',
    order: 5,
    templateId: `${SectionType.S07_Testimonials}-${VersionType.v1}-${ThemeType.light}`,
    theme: ThemeType.light,
    content: {},
  },
  {
    id: uuidv4(),
    type: SectionType.S16_CTA,
    title: 'CTA Section',
    order: 6,
    templateId: `${SectionType.S16_CTA}-${VersionType.v1}-${ThemeType.light}`,
    theme: ThemeType.light,
    content: {},
  },

]; 
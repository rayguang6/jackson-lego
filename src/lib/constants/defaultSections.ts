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
    type: SectionType.S01_Hero,
    title: 'Hero Section',
    order: 1,
    templateId: `${SectionType.S01_Hero}-${VersionType.v1}-${ThemeType.dark}`,
    theme: ThemeType.dark,
    content: {},
  },
  {
    id: uuidv4(),
    type: SectionType.S16_CTA,
    title: 'CTA Section',
    order: 2,
    templateId: `${SectionType.S16_CTA}-${VersionType.v1}-${ThemeType.light}`,
    theme: ThemeType.light,
    content: {},
  },
]; 
import { SectionTemplatesVariants } from '@/lib/templates/types';
import { ThemeType, VersionType } from '@/lib/types';
import { WorkWithUsV1 } from './WorkWithUsV1';
import { WorkWithUsV2 } from './WorkWithUsV2';

/**
 * Template registry for WorkWithUs section
 * - Contains light and dark theme variants
 * - Each theme can have multiple versions
 */
export const workWithUsTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 'workwithus-v1-light',
      component: WorkWithUsV1,
      theme: ThemeType.light,
    },
    [VersionType.v2]: {
      id: 'workwithus-v2-light',
      component: WorkWithUsV2,
      theme: ThemeType.light,
    },
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 'workwithus-v1-dark',
      component: WorkWithUsV1,
      theme: ThemeType.dark,
    },
    [VersionType.v2]: {
      id: 'workwithus-v2-dark',
      component: WorkWithUsV2,
      theme: ThemeType.dark,
    },
  },
}; 
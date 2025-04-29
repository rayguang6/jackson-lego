import { SectionTemplatesVariants } from '@/lib/templates/types';
import { S22WebinarSchedule } from './index';
import { ThemeType, VersionType } from '@/lib/types';

export const webinarScheduleTemplates: SectionTemplatesVariants = {
  [ThemeType.light]: {
    [VersionType.v1]: {
      id: 's22-webinar-schedule-v1-light',
      component: S22WebinarSchedule,
      theme: ThemeType.light
    }
  },
  [ThemeType.dark]: {
    [VersionType.v1]: {
      id: 's22-webinar-schedule-v1-dark',
      component: S22WebinarSchedule,
      theme: ThemeType.dark
    }
  }
}; 
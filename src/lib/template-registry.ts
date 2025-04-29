import { S22WebinarSchedule } from '@/components/section-templates/S22-WebinarSchedule';
import { defaultWebinarScheduleProps } from '@/components/section-templates/S22-WebinarSchedule/types';
import { WebinarScheduleProps } from '@/components/section-templates/S22-WebinarSchedule/types';

type TemplateComponents = {
  'S22-WebinarSchedule': {
    Component: typeof S22WebinarSchedule;
    defaultProps: WebinarScheduleProps;
  };
};

export const templateRegistry: TemplateComponents = {
  'S22-WebinarSchedule': {
    Component: S22WebinarSchedule,
    defaultProps: defaultWebinarScheduleProps,
  },
} as const; 
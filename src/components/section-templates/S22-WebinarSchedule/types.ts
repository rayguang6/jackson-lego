import { BaseSectionProps, ThemeType } from '@/lib/types';

export interface ScheduleItem {
  title: string;
  description: string;
}

export interface WebinarScheduleProps extends BaseSectionProps {
  title: string;
  description: string;
  webinars: Array<{
    id: string;
    title: string;
    date: string;
    time: string;
    description: string;
    speakerName: string;
    speakerTitle: string;
    speakerImage: string;
    registrationLink: string;
  }>;
}

export const defaultWebinarScheduleProps: WebinarScheduleProps = {
  theme: ThemeType.dark,
  title: "Upcoming Webinars",
  description: "Join our expert-led webinars to learn more about LEGO® Education solutions and teaching strategies.",
  webinars: [
    {
      id: "1",
      title: "Getting Started with LEGO® Education SPIKE™ Prime",
      date: "2024-04-15",
      time: "3:00 PM EST",
      description: "Learn how to implement SPIKE™ Prime in your classroom and engage students in hands-on STEAM learning.",
      speakerName: "Sarah Johnson",
      speakerTitle: "LEGO® Education Master Trainer",
      speakerImage: "/images/speakers/sarah-johnson.jpg",
      registrationLink: "https://register.webinar.com/spike-prime"
    }
  ]
}; 
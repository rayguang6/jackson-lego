import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface WhoIsThisForProps extends BaseSectionProps {
  title: string;
  subtitle: string;
  badgeText: string;
  profiles: {
    role: string;
    description: string;
    image?: string;
  }[];
}

export const defaultWhoIsThisForProps: WhoIsThisForProps = {
  title: 'Made for everyone',
  badgeText: 'WHO IS THIS FOR?',
  subtitle: 'Join our network for valuable insights, updates, and resources to fuel your growth.',
  profiles: [
    {
      role: 'For Designers',
      image: TEMPLATE_IMAGES.WHO_IS_THIS_FOR.PROFILE_IMAGE_1,
      description: "Customize templates effortlessly for unique designs."
    },
    {
      role: 'For Startups',
      image: TEMPLATE_IMAGES.WHO_IS_THIS_FOR.PROFILE_IMAGE_2,
      description: "Launch your business quickly with ready-made templates."
    },
    {
      role: 'For Agencies',
      image: TEMPLATE_IMAGES.WHO_IS_THIS_FOR.PROFILE_IMAGE_3,
      description: "Manage client projects with fast, adaptable templates."
    }
  ],
  theme: ThemeType.light
}; 
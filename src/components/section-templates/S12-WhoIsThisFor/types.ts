import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface WhoIsThisForProps extends BaseSectionProps {
  title: string;
  subtitle?: string;
  profiles: {
    name: string;
    role: string;
    image?: string;
    description: string;
  }[];
}

export const defaultWhoIsThisForProps: WhoIsThisForProps = {
  title: 'Who is this for?',
  subtitle: 'This program is designed for individuals who want to transform their careers.',
  profiles: [
    {
      name: 'Career Changers',
      role: 'Looking for a new path',
      image: TEMPLATE_IMAGES.FEATURES_OR_SERVICES.FEATURES_IMAGE_1,
      description: 'Professionals seeking to pivot to a new industry with transferable skills.'
    },
    {
      name: 'Entrepreneurs',
      role: 'Building the future',
      image: TEMPLATE_IMAGES.FEATURES_OR_SERVICES.FEATURES_IMAGE_2,
      description: 'Visionaries who want to start their own business and make an impact.'
    },
    {
      name: 'Skills Upgraders',
      role: 'Advancing expertise',
      image: TEMPLATE_IMAGES.FEATURES_OR_SERVICES.FEATURES_IMAGE_3,
      description: 'Individuals looking to enhance their current skill set with cutting-edge knowledge.'
    }
  ],
  theme: ThemeType.light
}; 
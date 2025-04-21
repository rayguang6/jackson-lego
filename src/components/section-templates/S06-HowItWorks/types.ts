import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface HowItWorksProps extends BaseSectionProps {
  // Common props
  title: string;
  subtitle: string;
  badgeText: string;
  features?: {
    title: string;
    description: string;
  }[];
  image: string;
  ctaText?: string;
}

// Default values that can be used by any Hero variant
export const defaultHowItWorksProps: HowItWorksProps = {
  title: "Design Faster with Effortless Customization",
  subtitle: "Easily create stunning designs in just a few simple steps with our intuitive, multipurpose templates.",
  badgeText: "HOW IT WORKS?",
  theme: ThemeType.light, 
  image: TEMPLATE_IMAGES.HOW_IT_WORKS.IMAGE_1,  
  features: [
        {
            title: "Choose Your Template",
            description: "Pick a pre-designed template that suits your needs.",
        },
        {
            title: "Customize Easily",
            description: "Personalize with drag-and-drop.",
        },
        {
            title: "Launch Fast",
            description: "Quickly publish your site.",
        }   
  ],
  ctaText: "GET INSTANT ACCESS",
}; 
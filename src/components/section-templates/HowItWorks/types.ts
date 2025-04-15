import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";

export interface HowItWorksProps {
  // Common props
  title: string;
  subtitle: string;
  badgeText: string;
  theme: 'light' | 'dark';
  features?: {
    title: string;
    description: string;
  }[];
  buttonText?: string;
  buttonUrl?: string;
}

// Default values that can be used by any Hero variant
export const defaultHowItWorksProps: HowItWorksProps = {
  title: "Design Faster with Effortless Customization",
  subtitle: "Easily create stunning designs in just a few simple steps with our intuitive, multipurpose templates.",
  badgeText: "HOW IT WORKS?",
  theme: 'light',
  features: [
        {
            title: "1. Choose Your Template",
            description: "Pick a pre-designed template that suits your needs.",
        },
        {
            title: "2. Customize Easily",
            description: "Personalize with drag-and-drop.",
        },
        {
            title: "3. Launch Fast",
            description: "Quickly publish your site.",
        }   
  ],
  buttonText: "GET INSTANT ACCESS",
  buttonUrl: "#"
}; 
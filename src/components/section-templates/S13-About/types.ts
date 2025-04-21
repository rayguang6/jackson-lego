import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface AboutProps extends BaseSectionProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  quote?: {
    text: string;
    author: string;
    position: string;
    heading?: string;
  };
  features?: {
    icon?: string;
    title: string;
    description: string;
  }[];
  imageUrl?: string;
}

export const defaultAboutProps: AboutProps = {
  title: 'Simplify, Scale, Succeed.',
  subtitle: 'Our modular templates aren\'t just about customization — they\'re about delivering results.',
  badgeText: 'ABOUT US',
  quote: {
    heading: 'Tailor to deliver results, every step of the way.',
    text: 'With 7 years of experience in the market, we know what works. Our proven systems and tailored solutions are designed to help your business thrive and grow.',
    author: 'John Doe',
    position: 'CEO at YourBrand'
  },
  features: [
    {
      title: 'Proven Success',
      description: '7+ years of delivering results with scalable, high-performing solutions.'
    },
    {
      title: 'Custom Tailored Strategies',
      description: 'We craft solutions uniquely tailored to your business needs.'
    },
    {
      title: 'Speed & Efficiency',
      description: 'Save time with our streamlined templates and automated workflows.'
    }
  ],
  imageUrl: TEMPLATE_IMAGES.FEATURES_OR_SERVICES.FEATURES_IMAGE_1,
  theme: ThemeType.light
}; 
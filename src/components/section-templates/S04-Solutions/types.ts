import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface SolutionsProps extends BaseSectionProps {
  // Common props
  title: string;
  subtitle: string;
  theme: ThemeType;
  badgeText: string;
  sectionTitle?: string;
  imageUrl?: string;
  // Solutions specific props - now using an array of features
  features: Array<{
    title: string;
    description: string;
  }>;
}

// Default values that can be used by any Solutions variant
export const defaultSolutionsProps: SolutionsProps = {
  title: "YourBrand.com",
  subtitle: "We craft modular templates designed to deliver results — perfect for freelancers, agencies, and marketers like you.",
  theme: ThemeType.light,
  imageUrl: TEMPLATE_IMAGES.SOLUTIONS.SOLUTION_IMAGE, 
  badgeText: "THE SOLUTION",
  sectionTitle: "OUR WINNING FORMULA",
  features: [
    {
      title: "Easy and intuitive",
      description: "Create reports with an easy to use drag-and-drop designer."
    },
    {
      title: "Quick deployment",
      description: "Launch your website in minutes with our streamlined setup process."
    },
    {
      title: "Customizable design",
      description: "Adapt every element to match your brand identity with flexible styling options."
    },
    {
      title: "SEO optimized",
      description: "Rank higher in search results with built-in SEO best practices."
    },
    {
      title: "Performance focused",
      description: "Deliver lightning-fast experiences with optimized code and assets."
    },
    {
      title: "Mobile responsive",
      description: "Ensure perfect display on all devices with responsive layouts."
    }
  ]
};
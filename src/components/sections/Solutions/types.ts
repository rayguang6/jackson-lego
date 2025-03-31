import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";

export interface SolutionsProps {
  // Common props
  title: string;
  subtitle: string;
  theme: 'light' | 'dark';
  badgeText?: string;
  // Solutions specific props
  sectionTitle?: string;
  features: Array<{
    title: string;
    description: string;
    iconColor?: string;
  }>;
}

// Default values that can be used by any Solutions variant
export const defaultSolutionsProps: SolutionsProps = {
  title: "Our Winning Formular — YourBrand.com",
  subtitle: "We craft modular templates designed to deliver results — perfect for freelancers, agencies, and marketers like you.",
  theme: 'light',
  badgeText: "THE SOLUTION",
  sectionTitle: "OUR WINNING FORMULA",
  features: [
    {
      title: "Easy and intuitive",
      description: "Create reports with an easy to use drag-and-drop designer.",
      iconColor: "#ef4444"
    },
    {
      title: "Quick deployment",
      description: "Launch your website in minutes with our streamlined setup process.",
      iconColor: "#ef4444"
    },
    {
      title: "Customizable design",
      description: "Adapt every element to match your brand identity with flexible styling options.",
      iconColor: "#ef4444"
    },
    {
      title: "SEO optimized",
      description: "Rank higher in search results with built-in SEO best practices.",
      iconColor: "#ef4444"
    },
    {
      title: "Performance focused",
      description: "Deliver lightning-fast experiences with optimized code and assets.",
      iconColor: "#ef4444"
    },
    {
      title: "Mobile responsive",
      description: "Ensure perfect display on all devices with responsive layouts.",
      iconColor: "#ef4444"
    }
  ]
}; 
import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface FeaturesOrServicesProps extends BaseSectionProps  {
  // Common props
  title: string;
  subtitle: string;
  badgeText?: string;
  // CTA button
  ctaText?: string;
  // Service cards
  services: Array<{
    title: string;
    description: string;
    imageSrc: string;
    bulletPoints: string[];
  }>;
}

// Default values that can be used by any FeaturesOrServices variant
export const defaultFeaturesOrServicesProps: FeaturesOrServicesProps = {
  title: "Design Faster. Deliver Better.",
  subtitle: "From design to automation, we provide services that streamline processes and help your business scale efficiently.",
  theme: ThemeType.light,
  badgeText: "OUR SERVICES",
  ctaText: "GET INSTANT ACCESS",
  services: [
    {
      title: "Funnel Build & Design",
      description: "High-converting funnels that guide users from interest to sale.",
      imageSrc: "/images/service-v3-image-1.svg",
      bulletPoints: [
        "Regularly updated with new templates to stay on trend.",
        "Easy to customize, ensuring unique results.",
        "Built for professional standards and polished output."
      ]
    },
    {
      title: "Automation Workflow",
      description: "Tailored automation to save time and boost efficiency.",
      imageSrc: "/images/service-v3-image-2.svg",
      bulletPoints: [
        "Regularly updated with new templates to stay on trend.",
        "Easy to customize, ensuring unique results.",
        "Built for professional standards and polished output."
      ]
    },
    {
      title: "Social Media Management",
      description: "Strategic management to grow your brand's online presence.",
      imageSrc: "/images/service-v3-image-3.svg",
      bulletPoints: [
        "Regularly updated with new templates to stay on trend.",
        "Easy to customize, ensuring unique results.",
        "Built for professional standards and polished output."
      ]
    },
    {
      title: "Versatile Templates",
      description: "A wide range of pre-designed templates that cater to any project, industry, or style.",
      imageSrc: "/images/service-image-4.svg",
      bulletPoints: [
        "Regularly updated with new templates to stay on trend.",
        "Easy to customize, ensuring unique results.",
        "Built for professional standards and polished output."
      ]
    },
    {
      title: "General Admin",
      description: "Comprehensive administrative support to keep your business running smoothly.",
      imageSrc: "/images/service-image-3.svg",
      bulletPoints: [
        "Regularly updated with new templates to stay on trend.",
        "Easy to customize, ensuring unique results.",
        "Built for professional standards and polished output."
      ]
    }
  ]
}; 
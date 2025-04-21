import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface SocialProofProps extends BaseSectionProps {
  // Common props
  title?: string;
  subtitle?: string;
  theme: ThemeType;
  
  // Social proof specific props
  logos?: {
    url: string;
    alt: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatarUrl?: string;
  };
  stats?: {
    value: string;
    label: string;
  }[];
  sectionId?: string;
}

export const defaultSocialProofProps: SocialProofProps = {
  title: "Trusted by innovative teams",
  subtitle: "Join thousands of companies using our platform to accelerate their business",
  theme: ThemeType.light,
  logos: [
    { url: "/images/templates/logos/logo-1.svg", alt: "Company Logo 1" },
    { url: "/images/templates/logos/logo-2.svg", alt: "Company Logo 2" },
    { url: "/images/templates/logos/logo-3.svg", alt: "Company Logo 3" },
    { url: "/images/templates/logos/logo-4.svg", alt: "Company Logo 4" },
    { url: "/images/templates/logos/logo-5.svg", alt: "Company Logo 5" },
    { url: "/images/templates/logos/logo-6.svg", alt: "Company Logo 6" },
  ],
  stats: [
    { value: "10k+", label: "Users" },
    { value: "500+", label: "Clients" },
    { value: "95%", label: "Satisfaction" },
  ],
  testimonial: {
    quote: "This platform has completely transformed how our team works. The efficiency gains have been remarkable.",
    author: "Alex Morgan",
    role: "CEO at TechCorp",
    avatarUrl: "/images/templates/testimonials/avatar.png",
  }
};

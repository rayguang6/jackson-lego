import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";

export interface CTAProps {
  // Common props
  title: string;
  subtitle: string;
  ctaText: string;
  theme: 'light' | 'dark';
  imageUrl?: string;
  sectionId?: string;
}

// Default values that can be used by any Hero variant
export const defaultCTAProps: CTAProps = {
  title: "Start building high performing website & grow your business fast.",
  subtitle: "Ideation and solutions are in a constant state of XYZ",
  ctaText: "GET INSTANT ACCESS",
  theme: 'light',
  imageUrl: TEMPLATE_IMAGES.CTA.CTA_IMAGE,
}; 


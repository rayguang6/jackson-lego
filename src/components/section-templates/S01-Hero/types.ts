import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";

export interface HeroProps {
  // Common props
  title: string;
  subtitle: string;
  ctaText: string;
  badgeText: string;
  theme: 'light' | 'dark';
  videoThumbnailUrl?: string;
  features?: string[];
  sectionId?: string;
  credibilityText?: string;
}

// Default values that can be used by any Hero variant
export const defaultHeroProps: HeroProps = {
  title: "Multipurpose Page Blocks Designed for Maximum Efficiency",
  subtitle: "Skip design frustration and launch your site fast with pre-designed, proven components.",
  ctaText: "GET INSTANT ACCESS",
  badgeText: "The #1 Community for Game-Changers",
  theme: 'light',
  videoThumbnailUrl: TEMPLATE_IMAGES.HERO.VIDEO_THUMBNAIL_1,
  features: ["Build for Speed", "Proven, High Impact Design", "Launch Like A Pro"],
  credibilityText: "Join 2,000+ Game-Changers Using YourBrand Today."
}; 
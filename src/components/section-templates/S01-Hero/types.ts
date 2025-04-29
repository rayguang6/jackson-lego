import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface HeroProps extends BaseSectionProps { 
  // Common props
  logoName: string;
  title: string;
  subtitle: string;
  ctaText: string;
  badgeText: string;
  imageUrl?: string;
  credibilityText: string;
  highlightText: string;
  feature1: string;
  feature2: string;
  feature3: string;
}

// Default values that can be used by any Hero variant
export const defaultHeroProps: HeroProps = {
  logoName: "YourBrand",
  title: "Multipurpose Page Blocks Designed for ",
  highlightText: "Maximum Efficiency",
  subtitle: "Skip design frustration and launch your site fast with pre-designed, proven components.",
  ctaText: "GET INSTANT ACCESS",
  badgeText: "The #1 Community for Game-Changers",
  theme: ThemeType.light,
  imageUrl: TEMPLATE_IMAGES.HERO.VIDEO_THUMBNAIL_1,
  credibilityText: "Join 2,000+ Game-Changers Using YourBrand Today.",
  feature1: "Build for Speed",
  feature2: "Proven, High Impact Design",
  feature3: "Launch Like A Pro",
}; 
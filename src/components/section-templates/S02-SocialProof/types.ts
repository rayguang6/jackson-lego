import { BaseSectionProps, ThemeType } from "@/lib/types";
import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
export interface SocialProofProps extends BaseSectionProps {
  // Common props
  title?: string;
  theme: ThemeType;
  imageUrl?: string;
}

export const defaultSocialProofProps: SocialProofProps = {
  theme: ThemeType.light,
  imageUrl: TEMPLATE_IMAGES.SOCIAL_PROOF.IMAGE_1,
};

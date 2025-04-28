import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface GuaranteeProps extends BaseSectionProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  badgeIcon?: string;
  imageUrl?: string;
}

export const defaultGuaranteeProps: GuaranteeProps = {
  title: '100% Satisfaction Guarantee',
  subtitle: 'All Pro And Enterprise Plans Come With A 30-Day Money-Back Guarantee. Try Risk-Free!',
  badgeText: 'MONEY-BACK GUARANTEE',
  imageUrl: TEMPLATE_IMAGES.GUARANTEE.BADGE,
  theme: ThemeType.light
}; 
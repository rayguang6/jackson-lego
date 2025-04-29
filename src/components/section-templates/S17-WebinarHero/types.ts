import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import { BaseSectionProps, ThemeType } from '@/lib/types';

export interface WebinarHeroProps extends BaseSectionProps {
  topBannerText: string;
  mainTitle: string;
  subTitle: string;
  highlightedText: string;
  description: string;
  ctaText: string;
  timeRange: string;
  registrationLimit: string;
  imageUrl: string;
}

export const defaultWebinarHeroProps: WebinarHeroProps = {
  theme: ThemeType.dark,
  topBannerText: '96%的 [目标受众群体] 还不会用 [你的独特方法] 提高 [实现的目标]',
  mainTitle: '如何用 [方法] 在 [具体时间范围] 内 [实现具体可量化的结果]，就算',
  subTitle: '[常见异议，如"没有经验"/"以前失败过"]',
  highlightedText: 'Transform Your Business Today',
  description: '尤其适合 [目标受众特征] 的 [目标受众群体]',
  ctaText: '剩下最后20位 免费报名',
  timeRange: '星期四，4月25日 | 2:00 PM - 3:30 PM EST',
  registrationLimit: '名额有限，马上报名！',
  imageUrl: TEMPLATE_IMAGES.SOLUTIONS.SOLUTION_IMAGE,
}; 
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import { BaseSectionProps, ThemeType } from '@/lib/types';

export interface WebinarCTAProps extends BaseSectionProps {
  // Text content
  title: string;          // e.g. '不要错过这个改变[关键领域]的机会'
  subtitle: string;    // e.g. '如何通过[你的方法名称]在[具体时间范围]内[实现具体可量化的结果]即使你[常见异议，如"没有经验"/"以前失败过"]'
  ctaText: string;
  warningText: string;
  
  date: string;          // e.g. 'Thursday, April 25th'
  time: string;          // e.g. '2:00 PM - 3:30 PM'   // e.g. 'EST'
  location: string;      // e.g. 'Online'
  imageUrl: string;
}

export const defaultWebinarCTAProps: WebinarCTAProps = {
  theme: ThemeType.dark,
  title: '不要错过这个改变[关键领域]的机会',
  subtitle: '如何通过[你的方法名称]在[具体时间范围]内[实现具体可量化的结果]即使你[常见异议，如"没有经验"/"以前失败过"]',
  date: 'April 25, 2025 , Thursday',
  time: '2:00 PM - 3:30 PM EST',
  location: 'Online',
  ctaText: '名额有限，马上报名！',
  warningText: '⚠️ 重要提醒：本次网络研讨会不会录制，请确保准时参加！',
  imageUrl: TEMPLATE_IMAGES.SOLUTIONS.SOLUTION_IMAGE,
}; 
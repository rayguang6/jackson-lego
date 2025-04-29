import { BaseSectionProps, ThemeType } from '@/lib/types';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface WebinarBenefitsProps extends BaseSectionProps {
  title: string;
  benefits: BenefitItem[];
}

export const defaultWebinarBenefitsProps: WebinarBenefitsProps = {
  theme: ThemeType.dark,
  sectionId: 's18-webinar-benefits',
  title: '你是不是也遇到以下的问题？',
  benefits: [
    {
      icon: TEMPLATE_IMAGES.WEBINAR.BENEFITS.CHECK_ICON,
      title: '完全搞不懂数据怎么看',
      description: '不知道如何分析数据，无法做出正确的营销决策'
    },
    {
      icon: TEMPLATE_IMAGES.WEBINAR.BENEFITS.GROUP_ICON,
      title: '总是一个人在工作',
      description: '缺乏团队支持和指导，进步缓慢'
    },
    {
      icon: TEMPLATE_IMAGES.WEBINAR.BENEFITS.CHAT_ICON,
      title: '不会和客户有效沟通',
      description: '无法准确传达价值主张，错失成交机会'
    }
  ]
}; 
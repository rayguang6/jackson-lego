import { BaseSectionProps, ThemeType } from '@/lib/types';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface WebinarFeaturesProps extends BaseSectionProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

export const defaultWebinarFeaturesProps: WebinarFeaturesProps = {
  theme: ThemeType.dark,
  sectionId: 's19-webinar-features',
  title: '相信对AI自动化，让你的',
  subtitle: '分享会让你不再上班10X',
  features: [
    {
      icon: TEMPLATE_IMAGES.WEBINAR.FEATURES.FEATURE_1,
      title: '数据分析',
      description: '学会如何利用AI工具快速分析和理解数据，做出更好的决策'
    },
    {
      icon: TEMPLATE_IMAGES.WEBINAR.FEATURES.FEATURE_2,
      title: '自动化工作流程',
      description: '使用AI自动化处理重复性任务，提高工作效率'
    },
    {
      icon: TEMPLATE_IMAGES.WEBINAR.FEATURES.FEATURE_3,
      title: '客户沟通',
      description: '掌握AI辅助沟通技巧，提升客户满意度和转化率'
    },
    {
      icon: TEMPLATE_IMAGES.WEBINAR.FEATURES.FEATURE_4,
      title: '团队协作',
      description: '利用AI工具促进团队合作，提高项目执行效率'
    },
    {
      icon: TEMPLATE_IMAGES.WEBINAR.FEATURES.FEATURE_5,
      title: '市场营销',
      description: 'AI驱动的营销策略，让你的营销效果倍增'
    },
    {
      icon: TEMPLATE_IMAGES.WEBINAR.FEATURES.FEATURE_6,
      title: '持续学习',
      description: '建立AI辅助的学习系统，保持竞争优势'
    }
  ]
}; 
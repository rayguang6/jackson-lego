import { BaseSectionProps, ThemeType } from '@/lib/types';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';

export interface TestimonialItem {
  image: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
}

export interface WebinarTestimonialsProps extends BaseSectionProps {
  title: string;
  subtitle: string;
  testimonials: TestimonialItem[];
}

export const defaultWebinarTestimonialsProps: WebinarTestimonialsProps = {
  theme: ThemeType.dark,
  sectionId: 's20-webinar-testimonials',
  title: '经我们手把手的企业板',
  subtitle: '每个月业绩都在6-8位数以上',
  testimonials: [
    {
      image: TEMPLATE_IMAGES.WEBINAR.TESTIMONIALS.TESTIMONIAL_1,
      name: '张先生',
      role: 'CEO',
      company: '科技公司',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: TEMPLATE_IMAGES.WEBINAR.TESTIMONIALS.TESTIMONIAL_2,
      name: '李女士',
      role: '营销总监',
      company: '电商平台',
      testimonial: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image: TEMPLATE_IMAGES.WEBINAR.TESTIMONIALS.TESTIMONIAL_3,
      name: '王先生',
      role: '创始人',
      company: '教育机构',
      testimonial: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ]
}; 
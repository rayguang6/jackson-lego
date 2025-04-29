import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface CaseStudyProps extends BaseSectionProps {
  title: string;
  subtitle: string;
  badgeText: string;
  ctaText: string;
  caseStudies: {
    companyName: string;
    companyLogo?: string;
    problem: string;
    personImage?: string;
    afterUsingText?: string;
    results: {
      value: string;
      label: string;
    }[];
  }[];
}

// export interface CaseStudyItem {
//   companyName: string;
//   companyLogo?: string;
//   problem: string;
//   personImage?: string;
//   results: ResultItem[];
// }

// export interface ResultItem {
//   value: string;
//   label: string;
// }

export const defaultCaseStudyProps: CaseStudyProps = {
  title: 'We love to see you grow',
  subtitle: 'Join the countless businesses we\'ve helped scale with ease and efficiency.',
  badgeText: 'SUCCESS STORIES',
  ctaText: 'GET INSTANT ACCESS',
  caseStudies: [
    {
      companyName: 'Adobe',
      companyLogo: TEMPLATE_IMAGES.CASE_STUDY.CS_LOGO_1,
      problem: 'Adobe Startup struggled with inefficient workflows, low engagement on social platforms, and inconsistent sales funnels',
      personImage: TEMPLATE_IMAGES.CASE_STUDY.CS_HUMAN_1,
      afterUsingText: 'After using YourBrand:',
      results: [
        {
          value: '40%',
          label: 'Faster project completion'
        },
        {
          value: '20%',
          label: 'Increase in sales conversion'
        }
      ]
    },
    {
      companyName: 'Zapier',
      companyLogo: TEMPLATE_IMAGES.CASE_STUDY.CS_LOGO_2,
      problem: 'Zapier agency struggled to meet tight deadlines, juggling multiple clients, and dealing with lengthy project timelines.',
      personImage: TEMPLATE_IMAGES.CASE_STUDY.CS_HUMAN_2,
      afterUsingText: 'After using YourBrand:',
      results: [
        {
          value: '70%',
          label: 'Reduction in turnaround time'
        },
        {
          value: '55%',
          label: 'Improvement in lead generation'
        }
      ]
    }
  ],
  theme: ThemeType.light
}; 
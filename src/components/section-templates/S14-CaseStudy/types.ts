import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface CaseStudyProps extends BaseSectionProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  ctaText?: string;
  ctaLink?: string;
  caseStudies: CaseStudyItem[];
}

export interface CaseStudyItem {
  companyName: string;
  companyLogo?: string;
  problem: string;
  personImage?: string;
  results: ResultItem[];
}

export interface ResultItem {
  value: string;
  label: string;
}

export const defaultCaseStudyProps: CaseStudyProps = {
  title: 'We love to see you grow',
  subtitle: 'Join the countless businesses we\'ve helped scale with ease and efficiency.',
  badgeText: 'SUCCESS STORIES',
  ctaText: 'GET INSTANT ACCESS',
  ctaLink: '#',
  caseStudies: [
    {
      companyName: 'Adobe',
      companyLogo: '/images/templates/casestudy/adobe-logo.png',
      problem: 'Adobe Startup struggled with inefficient workflows, low engagement on social platforms, and inconsistent sales funnels',
      personImage: '/images/templates/casestudy/person-1.jpg',
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
      companyLogo: '/images/templates/casestudy/zapier-logo.png',
      problem: 'Zapier agency struggled to meet tight deadlines, juggling multiple clients, and dealing with lengthy project timelines.',
      personImage: '/images/templates/casestudy/person-2.jpg',
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
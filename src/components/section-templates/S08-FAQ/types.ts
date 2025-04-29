import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import { BaseSectionProps, ThemeType } from '@/lib/types';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps extends BaseSectionProps {
  title: string;
  subtitle: string;
  faqs?: FAQItem[];
  ctaText: string;
  badgeText: string;
}

export const defaultFAQProps: FAQProps = {
  title: 'Frequently Asked Questions',
  subtitle: 'Everything you need to know about the product and billing. ',
  badgeText: 'FAQS',
  ctaText: 'GET INSTANT ACCESS',
  faqs: [
    {
      question: 'What is this product?',
      answer: 'Our product is a comprehensive solution designed to help businesses streamline their operations and increase efficiency.'
    },
    {
      question: 'How does pricing work?',
      answer: 'We offer flexible pricing plans tailored to businesses of all sizes. Contact us for a personalized quote.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features.'
    },
    {
      question: 'How do I get support?',
      answer: 'Our dedicated support team is available 24/7 via email, chat, and phone.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time without any penalties.'
    }
  ],
  theme: ThemeType.light,
}; 
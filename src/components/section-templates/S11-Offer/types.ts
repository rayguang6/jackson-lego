import { BaseSectionProps, ThemeType } from '@/lib/types';

export interface OfferProps extends BaseSectionProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  image?: string;

  offers?:{
    offerNumber: string;
    title: string;
    description: string;
    imageUrl?: string;
  }[];
  specialOfferTitle?: string;
  specialOfferSubtitle?: string;
  specialOfferPrice?: string;
  specialOfferOriginalPrice?: string;
  ctaText?: string;
  footerText?: string;
}

export const defaultOfferProps: OfferProps = {
  badgeText: 'LIMITED TIME OFFER',
  title: "Here's what you'll get...",
  subtitle: 'Join us for the newly launched by YourBrand - save time and work more efficiently!',
  offers: [
    {
      offerNumber: 'OFFER 1',
      title: 'Custom Funnel Template',
      description: 'High-converting, pre-designed funnels that guide you seamlessly through your journey, driving leads and conversions.'
    },
    {
      offerNumber: 'OFFER 2',
      title: 'Modular Templates',
      description: 'Customizable, scalable templates designed to grow with your business and adapt to your evolving needs.'
    },
    {
      offerNumber: 'OFFER 3',
      title: 'Launch Checklist',
      description: 'An actionable, step-by-step guide that ensures smooth and flawless launches every time, reducing risk and maximizing impact.'
    },
    {
      offerNumber: 'OFFER 4',
      title: 'Brand Style Guide',
      description: 'A comprehensive guide to help you maintain consistent visuals and messaging, ensuring a unified brand identity across all platforms.'
    }
  ],
  specialOfferTitle: 'Special Offer',
  specialOfferSubtitle: 'limited-time promotion',
  specialOfferPrice: 'ONLY $499',
  specialOfferOriginalPrice: 'Original Price: $997',
  ctaText: 'GET INSTANT ACCESS',
  footerText: 'Join 4,600+ People and Accelerate Your Growth: Save Time, Get Sales',
  theme: ThemeType.light,
}; 
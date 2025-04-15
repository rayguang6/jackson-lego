import { TestimonialsSectionProps as BaseTestimonialsSectionProps } from '@/lib/types';

export interface TestimonialsProps extends BaseTestimonialsSectionProps {
  // Additional props specific to our implementation if needed
  badgeText?: string;
}

// Default values for testimonials
export const defaultTestimonialsProps: TestimonialsProps = {
  title: "What our customer are saying...",
  subtitle: "See how our solutions are making a difference for businesses like yours.",
  theme: 'light',
  badgeText: "TESTIMONIALS",
  testimonials: [
    {
      quote: "I was looking for a way to streamline my design process and the XYZ's Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!",
      author: "Sarah K.",
      role: "UX Designer",
      company: "Brello",
      rating: 5,
      avatarUrl: "/images/testimonial-avatar-1.jpg"
    },
    {
      quote: "The XYZ solution has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!",
      author: "Michael L.",
      role: "Creative Director",
      company: "Yo",
      rating: 4,
      avatarUrl: "/images/testimonial-avatar-2.jpg"
    },
    {
      quote: "This has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently.",
      author: "Lauren M.",
      role: "UI Designer",
      company: "Boo",
      rating: 5,
      avatarUrl: "/images/testimonial-avatar-3.jpg"
    }
  ],
  layout: 'grid'
}; 
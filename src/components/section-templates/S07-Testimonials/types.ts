import { BaseSectionProps, ThemeType } from "@/lib/types";
import { TEMPLATE_IMAGES } from "@/lib/constants/imagePaths";
export interface TestimonialsProps extends BaseSectionProps {
  // Additional props specific to our implementation if needed
  title: string;
  subtitle: string;
  badgeText: string;
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
    avatarUrl: string;
    thumbnailUrl: string;
  }[];
  ctaText: string;
}

// Default values for testimonials
export const defaultTestimonialsProps: TestimonialsProps = {
  title: "What our customer are saying...",
  subtitle: "See how our solutions are making a difference for businesses like yours.",
  theme: ThemeType.light,
  badgeText: "TESTIMONIALS",
  ctaText: "Get Instant Access",
  testimonials: [
    {
      quote: "I was looking for a way to streamline my design process and the XYZ's Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!",
      author: "Sarah K.",
      role: "UX Designer",
      company: "Brello",
      rating: 5,
      avatarUrl: TEMPLATE_IMAGES.TESTIMONIALS.IMAGE_1,
      thumbnailUrl: TEMPLATE_IMAGES.TESTIMONIALS.THUMBNAIL_1
    },
    {
      quote: "The XYZ solution has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!",
      author: "Michael L.",
      role: "Creative Director",
      company: "Yo",
      rating: 5,
      avatarUrl: TEMPLATE_IMAGES.TESTIMONIALS.IMAGE_2,
      thumbnailUrl: TEMPLATE_IMAGES.TESTIMONIALS.THUMBNAIL_1
    },
    {
      quote: "This has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently.",
      author: "Lauren M.",
      role: "UI Designer",
      company: "Boo",
      rating: 5,
      avatarUrl: TEMPLATE_IMAGES.TESTIMONIALS.IMAGE_3,
      thumbnailUrl: TEMPLATE_IMAGES.TESTIMONIALS.THUMBNAIL_1
    },
    {
      quote: "I've been using this kit for a while now and it's been a great help. The pre-designed components and templates have saved me a lot of time and effort. Highly recommend!",
      author: "Mack M.",
      role: "Developer",
      company: "Google",
      rating: 5,
      avatarUrl: TEMPLATE_IMAGES.TESTIMONIALS.IMAGE_3,
      thumbnailUrl: TEMPLATE_IMAGES.TESTIMONIALS.THUMBNAIL_1
    }
  ]
}; 
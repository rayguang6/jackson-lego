import { BaseSectionProps, ThemeType } from "@/lib/types";

export interface ProblemProps extends BaseSectionProps {
  // Common props
  title: string;
  subtitle: string;
  badgeText: string;
  sectionTitle: string;
  highlightText: string;
  problems: {
    title: string;
    description: string;
  }[];
}

// Default values that can be used by any Hero variant
export const defaultProblemProps: ProblemProps = {
  title: "Are you tired of running into these problems?",
  subtitle: "It's time to take control and design like a pro — fast and easy.",
  badgeText: "PROBLEM",
  theme: ThemeType.light,
  sectionTitle: "... and a lot more, but I don’t want to keep you here for an hour.",
  highlightText: " you?",
  problems: [
    { 
      title: "Confused by complex design tools",
      description: "that take more time than they’re worth?",
    },
    {
      title: "Wasting hours",
      description: "on designs that don’t drive results or conversions? ",
    },
    {
      title: "Struggling with technical issues",
      description: "slowing down your site’s performance? ",
    }, 
    {
      title: "Losing potential customers",
      description: "because your site is not visually appealing or engaging enough?",
    }, 
  ],
}; 

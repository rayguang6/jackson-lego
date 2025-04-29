// Template image paths

export const TEMPLATE_IMAGES = {
  // Hero section
  HERO: {
    VIDEO_THUMBNAIL_1: '/images/templates/hero/video-thumbnail-1.png',
    VIDEO_THUMBNAIL_2: '/images/templates/hero/video-thumbnail-2.png',
    VIDEO_THUMBNAIL_3: '/images/templates/hero/video-thumbnail-3.png',
    VIDEO_THUMBNAIL_4: '/images/templates/hero/video-thumbnail-4.png',
    VIDEO_THUMBNAIL_5: '/images/templates/hero/video-thumbnail-5.png',
    AVATAR_GROUP: '/images/templates/hero/avatar-group.png',
    WEBINAR_HERO_IMAGE: '/images/templates/hero/webinar-hero.png',
  },

  // S02 - social proof
  SOCIAL_PROOF: {
    IMAGE_1: '/images/templates/social-proof/logo1.png',
    IMAGE_2: '/images/templates/social-proof/logo2.png',
    IMAGE_3: '/images/templates/social-proof/logo3.png',
    IMAGE_4: '/images/templates/social-proof/logo4.png',
  },
  
  // Problem section
  PROBLEM: {
    SOLUTION_IMAGE: '/images/templates/problem/solution-image.png',
  },

  // Solutions section
  SOLUTIONS: {
    SOLUTION_IMAGE: '/images/templates/solutions/solution-image.png',
  },

  // Features or services section
  FEATURES_OR_SERVICES: {
    FEATURES_IMAGE_1: '/images/templates/features/features_1.png',
    FEATURES_IMAGE_2: '/images/templates/features/features_2.png',
    FEATURES_IMAGE_3: '/images/templates/features/features_3.png',
    FEATURES_IMAGE_4: '/images/templates/features/features_4.png',
    SERVICE_CHECK_ICON: '/images/templates/features/service-check-icon.svg',
  },

  // How it works section
  HOW_IT_WORKS: {
    IMAGE_1: '/images/templates/how-it-works/workflow1.png',
  },

  // Testimonials section
  TESTIMONIALS: {
    IMAGE_1: '/images/templates/testimonials/1.png',
    IMAGE_2: '/images/templates/testimonials/2.png',
    IMAGE_3: '/images/templates/testimonials/3.png',
    THUMBNAIL_1: '/images/templates/testimonials/thumbnail1.png',
    THUMBNAIL_2: '/images/templates/testimonials/thumbnail2.png',
  },

  // Work with us section
  WORK_WITH_US: {
    IMAGE_1: '/images/templates/work-with-us/1.png',
    IMAGE_2: '/images/templates/work-with-us/2.png',
  },

  //offer
  OFFER: {
    BUNDLE_IMAGE: '/images/templates/offer/bundle.png',
    DESKTOP_IMAGE: '/images/templates/offer/desktop.png',
    PEOPLE_IMAGE: '/images/templates/offer/people.png',
    RATING_IMAGE: '/images/templates/offer/rating.png',
  },

  // Who is this for section
  WHO_IS_THIS_FOR: {
    PROFILE_IMAGE_1: '/images/templates/who-is-this-for/1.png',
    PROFILE_IMAGE_2: '/images/templates/who-is-this-for/2.png',
    PROFILE_IMAGE_3: '/images/templates/who-is-this-for/3.png',
  },

  //Case Study
  CASE_STUDY: {
    CS_LOGO_1: '/images/templates/case-study/cs-logo-1.png',
    CS_LOGO_2: '/images/templates/case-study/cs-logo-2.png',
    CS_HUMAN_1: '/images/templates/case-study/cs-human-1.png',
    CS_HUMAN_2: '/images/templates/case-study/cs-human-2.png',
  },

  // Guarantee section
  GUARANTEE: {
    BADGE: '/images/templates/guarantee/guarantee-badge.png',
  },

  // CTA section
  CTA: {
    CTA_IMAGE: '/images/templates/cta/cta-image.png',
  },
  
  COMMON: {
    HUMAN_IMAGE_1: '/images/templates/common/human-1.png',
    HUMAN_IMAGE_2: '/images/templates/common/human-2.png',
    HUMAN_IMAGE_3: '/images/templates/common/human-3.png',
    HUMAN_IMAGE_4: '/images/templates/common/human-4.png',
    HUMAN_IMAGE_5: '/images/templates/common/human-5.png',
  },

  // CTA section
};

// App images
export const APP_IMAGES = {
  LOGO: {
    LIGHT: '/images/brand-logo.png',
    DARK: '/images/brand-logo-dark.png',
  },
  ICONS: {
    AI: '/images/ai-icon.svg',
  }
};

// // Base paths
// const PATHS = {
//   TEMPLATES: '/images/templates',
//   APP: '/images',
// };

// /**
//  * Helper function to get an image path
//  * @param type - 'app' or 'template'
//  * @param filename - The name of the file (with extension)
//  * @returns The full path to the image
//  */
// export function getImagePath(type: 'app' | 'template', filename: string): string {
//   const basePath = type === 'app' ? PATHS.APP : PATHS.TEMPLATES;
//   return `${basePath}/${filename}`;
// }

// // Export a default object with all images
// const IMAGES = {
//   TEMPLATES: TEMPLATE_IMAGES,
//   APP: APP_IMAGES,
//   getPath: getImagePath,
// };

// export default IMAGES; 
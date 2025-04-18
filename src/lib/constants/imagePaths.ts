// Template image paths

export const TEMPLATE_IMAGES = {
  // Hero section
  HERO: {
    VIDEO_THUMBNAIL_1: '/images/templates/hero/video-thumbnail-1.png',
    VIDEO_THUMBNAIL_2: '/images/templates/hero/video-thumbnail-2.png',
    VIDEO_THUMBNAIL_3: '/images/templates/hero/video-thumbnail-3.png',
    VIDEO_THUMBNAIL_4: '/images/templates/hero/video-thumbnail-4.png',
    AVATAR_GROUP: '/images/templates/hero/avatar-group.png',
  },
  
  // Problem section
  PROBLEM: {
    SOLUTION_IMAGE: '/images/templates/problem/solution-image.png',
  },

  // Solutions section
  SOLUTIONS: {
    SOLUTION_IMAGE: '/images/templates/solutions/solution-image.png',
  },

  // CTA section
  CTA: {
    CTA_IMAGE: '/images/templates/cta/cta-image.png',
  },
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
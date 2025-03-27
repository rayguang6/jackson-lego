// Template image paths
export const TEMPLATE_IMAGES = {
  // Hero section
  HERO: {
    VIDEO_THUMBNAIL: '/images/templates/video-thumbnail.png',
    VIDEO_THUMBNAIL_2: '/images/templates/video-thumbnail-2.png',
    AVATAR_GROUP: '/images/templates/avatar-group.png',
  },
  
  // Problem section
  PROBLEM: {
    SOLUTION_IMAGE: '/images/templates/solution-image.png',
  },
  
  // Shared images
  SHARED: {
    GRID_PATTERN: '/images/grid-pattern.svg',
  }
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

// Base paths
const PATHS = {
  TEMPLATES: '/images/templates',
  APP: '/images',
};

/**
 * Helper function to get an image path
 * @param type - 'app' or 'template'
 * @param filename - The name of the file (with extension)
 * @returns The full path to the image
 */
export function getImagePath(type: 'app' | 'template', filename: string): string {
  const basePath = type === 'app' ? PATHS.APP : PATHS.TEMPLATES;
  return `${basePath}/${filename}`;
}

// Export a default object with all images
const IMAGES = {
  TEMPLATES: TEMPLATE_IMAGES,
  APP: APP_IMAGES,
  getPath: getImagePath,
};

export default IMAGES; 
export const typography = {
  h1: 'text-3xl sm:text-4xl lg:text-5xl', // 30px -> 36px -> 48px
  h2: 'text-2xl sm:text-3xl lg:text-4xl', // 24px -> 30px -> 36px
  h3: 'text-xl sm:text-2xl lg:text-3xl',  // 20px -> 24px -> 30px
  h4: 'text-lg sm:text-xl lg:text-2xl',   // 18px -> 20px -> 24px
  body: 'text-base sm:text-lg',            // 16px -> 18px
  small: 'text-sm sm:text-base',           // 14px -> 16px
  xs: 'text-xs sm:text-sm',                // 12px -> 14px
} as const;

export const fontWeights = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

export const lineHeights = {
  tight: 'leading-tight',     // 1.25
  normal: 'leading-normal',   // 1.5
  relaxed: 'leading-relaxed', // 1.625
  loose: 'leading-loose',     // 2
} as const;

// Helper function to combine typography classes
export const getTypographyClass = ({
  size,
  weight = 'regular',
  lineHeight = 'normal',
}: {
  size: keyof typeof typography;
  weight?: keyof typeof fontWeights;
  lineHeight?: keyof typeof lineHeights;
}) => {
  return `${typography[size]} ${fontWeights[weight]} ${lineHeights[lineHeight]}`;
}; 
import { StyleGuide } from '../types';

export const brandStyleGuide: StyleGuide = {
  colors: {
    primary: "#FF2E69",
    secondary: "#142444",
    accent: "#3267FF",
    background: "#FFFFFF",
    text: "#1A1A1A"
  },
  typography: {
    fontFamily: 'var(--font-archivo), system-ui, sans-serif', // Using Archivo as default font family
    headingFont: 'var(--font-manrope), system-ui, sans-serif',
    bodyFont: 'var(--font-archivo), system-ui, sans-serif',
    h1: {
      size: '3rem',
      weight: '700',
      lineHeight: '1.2',
    },
    h2: {
      size: '2.25rem',
      weight: '600',
      lineHeight: '1.25',
    },
    body: {
      size: '1rem',
      weight: '400',
      lineHeight: '1.5',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '4rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
}; 
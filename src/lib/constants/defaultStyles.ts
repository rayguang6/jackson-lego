import { StyleGuide } from '../types';

export const defaultStyleGuide: StyleGuide = {
  colors: {
    primary: '#3b82f6', // blue-500
    secondary: '#10b981', // emerald-500
    accent: '#f59e0b', // amber-500
    background: '#ffffff',
    text: '#1f2937', // gray-800
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    headingFont: 'Inter, system-ui, sans-serif',
    bodyFont: 'Inter, system-ui, sans-serif',
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
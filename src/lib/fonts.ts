import { Manrope, Archivo, Inter, Montserrat, Merriweather, Poppins, Roboto } from "next/font/google";

// Font configurations
export const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
});

export const archivo = Archivo({
  subsets: ["latin"],
  variable: '--font-archivo',
});

export const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-merriweather',
});

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: '--font-roboto',
});

// Helper to combine all font variables for the html element
export const fontVariables = `${manrope.variable} ${archivo.variable} ${inter.variable} ${montserrat.variable} ${merriweather.variable} ${poppins.variable} ${roboto.variable}`;

// Font options for font selector component
export const FONT_OPTIONS = [
  { name: 'Manrope', value: 'var(--font-manrope), system-ui, sans-serif' },
  { name: 'Archivo', value: 'var(--font-archivo), system-ui, sans-serif' },
  { name: 'Inter', value: 'var(--font-inter), system-ui, sans-serif' },
  { name: 'Merriweather', value: 'var(--font-merriweather), serif' }, 
  { name: 'Montserrat', value: 'var(--font-montserrat), system-ui, sans-serif' },
  { name: 'Poppins', value: 'var(--font-poppins), system-ui, sans-serif' },
  { name: 'Roboto', value: 'var(--font-roboto), system-ui, sans-serif' }
]; 
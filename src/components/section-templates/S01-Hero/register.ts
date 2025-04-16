import { SectionTemplates } from '@/lib/templates/types';
import { HeroV1 } from './HeroV1';
import { HeroV2 } from './HeroV2';
import { HeroV3 } from './HeroV3';

// Register all Hero templates
export const heroTemplates: SectionTemplates = {
  variants: [
    // V1 templates
    { id: 'hero-light-v1', component: HeroV1, theme: 'light' },
    { id: 'hero-dark-v1', component: HeroV1, theme: 'dark' },
    
    // V2 templates
    { id: 'hero-light-v2', component: HeroV2, theme: 'light' },
    { id: 'hero-dark-v2', component: HeroV2, theme: 'dark' },
    
    // V3 templates
    { id: 'hero-light-v3', component: HeroV3, theme: 'light' },
    { id: 'hero-dark-v3', component: HeroV3, theme: 'dark' }
  ]
}; 

// Export the components directly from register.ts

// export { HeroV1, HeroV2, HeroV3 };
// export * from './types';
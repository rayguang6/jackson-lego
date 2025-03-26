import React from 'react';
import { HeroLightV1 } from './variants/HeroLightV1';
import { HeroDarkV3 } from './variants/HeroDarkV3';

// Export the variants
export { HeroLightV1, HeroDarkV3 };

// Placeholder component that uses HeroLightV1 
export const HeroComponent = HeroLightV1;

// For backward compatibility with the sections index exports
export default HeroComponent; 
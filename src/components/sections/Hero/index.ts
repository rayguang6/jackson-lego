import React from 'react';
import { HeroLightV1 } from './variants/HeroLightV1';
import { HeroV3 } from './variants/HeroV3';

// Export the variants
export { HeroLightV1, HeroV3 };

// Placeholder component that uses HeroLightV1 
export const HeroComponent = HeroLightV1;

// For backward compatibility with the sections index exports
export default HeroComponent; 
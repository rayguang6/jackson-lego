import React from 'react';
import { HeroV1 } from './HeroV1';
import { HeroV2 } from './HeroV2';
import { HeroV3 } from './HeroV3';

// Export the variants
export { HeroV1, HeroV2, HeroV3 };

// Placeholder component that uses HeroV1
export const HeroComponent = HeroV1;

// For backward compatibility with the sections index exports
export default HeroComponent; 
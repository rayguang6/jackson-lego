import React from 'react';
import { HowItWorksV1 } from './HowItWorksV1';
import { HowItWorksV2 } from './HowItWorksV2';
import { HowItWorksV3 } from './HowItWorksV3';

// Export the variants
export { HowItWorksV1, HowItWorksV2, HowItWorksV3 };

// Placeholder component that uses HowItWorksV1
export const HowItWorksComponent = HowItWorksV1;

// For backward compatibility with the sections index exports
export default HowItWorksComponent;

// Export types and register
export * from './types';
export * from './register'; 
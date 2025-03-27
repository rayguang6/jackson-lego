import React from 'react';
import { ProblemV1 } from './ProblemV1';
import { ProblemV2 } from './ProblemV2';
import { ProblemV3 } from './ProblemV3';

// Export the variants
export { ProblemV1, ProblemV2, ProblemV3 };

// Default component
export const ProblemComponent = ProblemV1;

// For backward compatibility with the sections index exports
export default ProblemComponent; 
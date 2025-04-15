import React from 'react';
import { ProblemV1 } from './ProblemV1';
import { ProblemV2 } from './ProblemV2';
import { ProblemV3 } from './ProblemV3';
import { ProblemV4 } from './ProblemV4';

// Export the variants
export { ProblemV1, ProblemV2, ProblemV3, ProblemV4 };

// Default component
export const ProblemComponent = ProblemV3;

// For backward compatibility with the sections index exports
export default ProblemComponent; 
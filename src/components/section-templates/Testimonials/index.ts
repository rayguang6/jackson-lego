import React from 'react';
import { TestimonialsV1 } from './TestimonialsV1';
import { TestimonialsV2 } from './TestimonialsV2';

// Export the variants
export { TestimonialsV1, TestimonialsV2 };

// Placeholder component that uses TestimonialsV2
export const TestimonialsComponent = TestimonialsV2;

// For backward compatibility with the sections index exports
export default TestimonialsComponent;

// Export types and register
export * from './types';
export * from './register'; 
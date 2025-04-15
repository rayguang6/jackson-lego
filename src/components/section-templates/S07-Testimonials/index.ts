import { TestimonialsV1 } from "./TestimonialsV1";
import { TestimonialsV2 } from "./TestimonialsV2";

// Export the variants
export { TestimonialsV1, TestimonialsV2 };

// Export the V1 component as the default 
export const TestimonialsComponent = TestimonialsV1;

// For backward compatibility with the sections index exports
export default TestimonialsComponent; 
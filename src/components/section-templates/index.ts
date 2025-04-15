// Export all section components from this file
import HeroComponent from './S01-Hero';
import ProblemComponent from './S03-Problem'; 
import HowItWorksComponent from './S06-HowItWorks';
import FeaturesOrServicesComponent from './S05-FeaturesOrServices';
import TestimonialsComponent from './S07-Testimonials';

// Named exports for each section
export { HeroComponent, ProblemComponent, HowItWorksComponent, FeaturesOrServicesComponent, TestimonialsComponent };

// For easier importing of all sections at once
const sections = {
  Hero: HeroComponent,
  Problem: ProblemComponent,
  HowItWorks: HowItWorksComponent,
  FeaturesOrServices: FeaturesOrServicesComponent,
  Testimonials: TestimonialsComponent
};

export default sections; 
// Export all section components from this file
import HeroComponent from './Hero';
import ProblemComponent from './Problem'; 
import HowItWorksComponent from './HowItWorks';
import FeaturesOrServicesComponent from './FeaturesOrServices';
import TestimonialsComponent from './Testimonials';

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
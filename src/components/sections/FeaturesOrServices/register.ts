import { SectionType } from '@/lib/types';
import { SectionTemplates } from '@/lib/templates/types';
import { FeaturesOrServicesV1 } from './FeaturesOrServicesV1';
import { FeaturesOrServicesV3 } from './FeaturesOrServicesV3';

// Register all FeaturesOrServices templates
export const featuresOrServicesTemplates: SectionTemplates = {
  light: {
    v1: {
      id: 'features-or-services-light-v1',
      component: FeaturesOrServicesV1,
      theme: 'light'
    },
    v3: {
      id: 'features-or-services-light-v3',
      component: FeaturesOrServicesV3,
      theme: 'light'
    }
  },
  dark: {
    v1: {
      id: 'features-or-services-dark-v1',
      component: FeaturesOrServicesV1,
      theme: 'dark'
    },
    v3: {
      id: 'features-or-services-dark-v3',
      component: FeaturesOrServicesV3,
      theme: 'dark'
    }
  }
}; 
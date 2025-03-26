import { exportComponentToHtml } from '../utils/exportUtils';
import { LogoIcon } from '../components/icons/LogoIcon';

/**
 * Export the LogoIcon component in different variations
 */
async function exportLogoIcons() {
  try {
    // Export light mode logo
    await exportComponentToHtml(
      LogoIcon, 
      { 
        theme: 'light',
        brandColor: '#EF083A',
        width: 180,
        height: 50
      }, 
      'logo-light'
    );

    // Export dark mode logo
    await exportComponentToHtml(
      LogoIcon, 
      { 
        theme: 'dark',
        brandColor: '#EF083A',
        width: 180,
        height: 50
      }, 
      'logo-dark'
    );

    console.log('Logos exported successfully!');
  } catch (error) {
    console.error('Error exporting logos:', error);
  }
}

// Run the export function
exportLogoIcons(); 
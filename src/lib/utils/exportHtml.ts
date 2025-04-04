import { WebsiteDesign } from '../types';
import { getTemplateById, getTemplateByTypeAndVersion } from '@/lib/templates';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { useDesignStore } from '@/lib/store/designStore';
import JSZip from 'jszip';
import { DesignContext } from '@/lib/contexts/DesignContext';

// Helper function to extract image URLs from HTML
const extractImageUrls = (html: string): string[] => {
  // Look for Next.js Image components and regular img tags
  const patterns = [
    /<img[^>]+src=["']([^"']+)["']/g,  // Regular img tags
    /data-src=["']([^"']+)["']/g,      // Next.js Image data-src
    /srcSet=["']([^"']+)["']/g,        // srcSet attributes
  ];

  const urls = new Set<string>();
  
  patterns.forEach(pattern => {
    const matches = [...html.matchAll(pattern)];
    matches.forEach(match => {
      const url = match[1];
      
      // For srcSet, we need to handle multiple URLs
      if (pattern.toString().includes('srcSet')) {
        // Split the srcSet value by commas to get individual URL descriptors
        const srcSetParts = url.split(',');
        srcSetParts.forEach(part => {
          // Extract just the URL (before the size descriptor)
          const srcUrl = part.trim().split(' ')[0];
          if (srcUrl && (srcUrl.startsWith('/') || srcUrl.startsWith('http'))) {
            urls.add(srcUrl);
          }
        });
      } else {
        // Handle regular URLs
        if (url && (url.startsWith('/') || url.startsWith('http'))) {
          urls.add(url);
        }
      }
    });
  });

  return Array.from(urls);
};

// Helper function to clean Next.js image URL
const cleanNextImageUrl = (url: string): string => {
  try {
    // If it's a Next.js image URL
    if (url.includes('/_next/image')) {
      const params = new URLSearchParams(url.split('?')[1]);
      let originalUrl = params.get('url');
      if (originalUrl) {
        // Decode the URL if it's encoded
        originalUrl = decodeURIComponent(originalUrl);
        return originalUrl;
      }
    }
    return url;
  } catch (error) {
    console.warn('Error cleaning Next.js image URL:', error);
    return url;
  }
};

// Helper function to download an image
const downloadImage = async (url: string): Promise<{ blob: Blob; filename: string }> => {
  try {
    // Clean the URL if it's a Next.js image URL
    const cleanUrl = cleanNextImageUrl(url);
    
    // Handle both absolute and full URLs
    const fullUrl = cleanUrl.startsWith('http') ? cleanUrl : `${window.location.origin}${cleanUrl}`;
    
    const response = await fetch(fullUrl, {
      headers: {
        'Accept': 'image/*, */*'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${fullUrl} (${response.status})`);
    }
    
    const blob = await response.blob();
    const filename = cleanUrl.split('/').pop() || 'image.jpg';
    
    return { blob, filename };
  } catch (error) {
    console.error(`Error downloading image ${url}:`, error);
    throw error;
  }
};

const generateHtml = async (design: WebsiteDesign): Promise<{ html: string; images: { url: string; blob: Blob; filename: string }[] }> => {
  try {
    // Validate design object
    if (!design.sections || !Array.isArray(design.sections)) {
      throw new Error('Invalid design sections');
    }

    if (!design.styleGuide) {
      throw new Error('Missing style guide');
    }

    // Track all images to download
    const allImages: { url: string; blob: Blob; filename: string }[] = [];

    // Create font imports
    const fontImports = `
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    `;

    // Create CSS variables for the style guide
    const cssVariables = `
      :root {
        --primary-color: ${design.styleGuide.primaryColor};
        --secondary-color: ${design.styleGuide.secondaryColor};
        --accent-color: ${design.styleGuide.accentColor};
        --background-color: ${design.styleGuide.backgroundColor};
        --background-color-dark: ${design.styleGuide.backgroundColorDark};
        --text-color: ${design.styleGuide.textColor};
        
        --heading-font: ${design.styleGuide.headingFont};
        --body-font: ${design.styleGuide.bodyFont};
        
        --h1-size: ${design.styleGuide.h1Size};
        --h1-weight: ${design.styleGuide.h1Weight};
        --h1-line-height: ${design.styleGuide.h1LineHeight};
        --h2-size: ${design.styleGuide.h2Size};
        --h2-weight: ${design.styleGuide.h2Weight};
        --h2-line-height: ${design.styleGuide.h2LineHeight};
        --body-size: ${design.styleGuide.bodySize};
        --body-weight: ${design.styleGuide.bodyWeight};
        --body-line-height: ${design.styleGuide.bodyLineHeight};
        
        --spacing-xs: ${design.styleGuide.spacingXs};
        --spacing-sm: ${design.styleGuide.spacingSm};
        --spacing-md: ${design.styleGuide.spacingMd};
        --spacing-lg: ${design.styleGuide.spacingLg};
        --spacing-xl: ${design.styleGuide.spacingXl};
        
        --border-radius-sm: ${design.styleGuide.borderRadiusSm};
        --border-radius-md: ${design.styleGuide.borderRadiusMd};
        --border-radius-lg: ${design.styleGuide.borderRadiusLg};
        --border-radius-full: ${design.styleGuide.borderRadiusFull};
      }
    `;

    // Generate content from sections
    const sortedSections = [...design.sections].sort((a, b) => a.order - b.order);
    const content = await Promise.all(sortedSections.map(async (section) => {
      let template;
    
      if (section.templateId) {
        template = getTemplateById(section.templateId);
        if (!template) {
          console.error(`Template not found for ID: ${section.templateId}`);
          return '';
        }
      } else if (section.type) {
        template = getTemplateByTypeAndVersion(section.type, 'light', 'v1') || 
                  getTemplateByTypeAndVersion(section.type, 'dark', 'v1');
                  
        if (!template) {
          console.error(`Template not found for type: ${section.type}`);
          return '';
        }
      }
        
      if (!template || !template.component) {
        console.error('Invalid template or missing component');
        return '';
      }
      
      const Component = template.component;
      
      try {
        // Create mock store for DesignProvider
        const mockStore = {
          design,
          styleGuide: design.styleGuide,
          addSection: () => {},
          removeSection: () => {},
          updateSection: () => {},
          reorderSection: () => {},
          updateStyleGuide: () => {},
          updatePrimaryColor: () => {},
          updateHeadingFont: () => {},
          updateBodyFont: () => {},
          updateSectionTemplate: () => {},
          resetDesign: () => {},
          resetStyleGuide: () => {},
          resetSections: () => {},
        };

        // Get the section data from the design store to ensure we have all content
        const sectionData = design.sections.find(s => s.id === section.id);
        if (!sectionData) {
          console.error(`Section data not found for ID: ${section.id}`);
          return '';
        }

        // Render the component with DesignProvider and all section data
        const componentHtml = ReactDOMServer.renderToString(
          React.createElement(
            DesignContext.Provider,
            { value: mockStore },
            React.createElement(Component, {
              // Only pass theme and styleGuide like the preview page does
              // This prevents section titles from showing up
              theme: template.theme,
              styleGuide: design.styleGuide
            })
          )
        );
        
        // Extract and process images
        const imageUrls = extractImageUrls(componentHtml);
        let updatedHtml = componentHtml;
        
        for (const imageUrl of imageUrls) {
          try {
            const { blob, filename } = await downloadImage(imageUrl);
            allImages.push({ url: imageUrl, blob, filename });
            
            // Get the original URL by cleaning the Next.js URL
            const cleanUrl = cleanNextImageUrl(imageUrl);
            
            // Create two patterns for replacement
            // 1. The exact URL pattern
            const exactUrlPattern = new RegExp(imageUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            
            // 2. Any URL containing this image path (for srcSet and other variations)
            const partialUrlPattern = new RegExp(`[^"']*${cleanUrl.split('/').pop()?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"']*`, 'g');
            
            // Replace all instances
            updatedHtml = updatedHtml.replace(exactUrlPattern, `images/${filename}`);
            
            // For srcSet URLs, we need to replace each URL with our local path
            // This specific replacement handles srcSet values like "url1 1x, url2 2x"
            if (updatedHtml.includes('srcSet')) {
              // Create a regex that matches srcSet attribute values
              const srcSetPattern = /(srcSet=["'])(.*?)(["'])/g;
              updatedHtml = updatedHtml.replace(srcSetPattern, (match, prefix, srcSetValue, suffix) => {
                // Replace each URL in the srcSet with our local path
                const updatedSrcSet = srcSetValue.replace(partialUrlPattern, `images/${filename}`);
                return `${prefix}${updatedSrcSet}${suffix}`;
              });
            }
          } catch (error) {
            console.error(`Failed to process image ${imageUrl}:`, error);
          }
        }
        return `${updatedHtml}`;
        // return `
        //   <section 
        //     class="section ${section.type.toLowerCase()}-section"
        //     data-section-id="${section.id}"
        //     data-template-id="${section.templateId || `${section.type}-v1`}"
        //   >
        //     ${updatedHtml}
        //   </section>
        // `;
      } catch (error) {
        console.error(`Error rendering section:`, error);
        return '';
      }
    }));

    // Filter out empty sections
    const validContent = content.filter(Boolean);
    
    if (validContent.length === 0) {
      throw new Error('No valid sections were generated');
    }

    // Create the HTML document
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${design.name}</title>
        ${fontImports}
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          ${cssVariables}
          
          /* Base styles */
          body {
            font-family: var(--body-font);
            font-size: var(--body-size);
            font-weight: var(--body-weight);
            line-height: var(--body-line-height);
            color: var(--text-color);
            background-color: var(--background-color);
            margin: 0;
            padding: 0;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--heading-font);
          }
          
          h1 {
            font-size: var(--h1-size);
            font-weight: var(--h1-weight);
            line-height: var(--h1-line-height);
          }
          
          h2 {
            font-size: var(--h2-size);
            font-weight: var(--h2-weight);
            line-height: var(--h2-line-height);
          }

          .section {
            padding: var(--spacing-lg) 0;
          }

          .section:first-child {
            padding-top: 0;
          }

          .section:last-child {
            padding-bottom: 0;
          }

          .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--spacing-md);
          }

          @media (max-width: 768px) {
            .container {
              padding: 0 var(--spacing-sm);
            }
          }
        </style>
      </head>
      <body>
        <div id="root">
          ${validContent.join('')}
        </div>
      </body>
      </html>
    `.trim();

    return { html, images: allImages };
  } catch (error) {
    console.error('Error during HTML generation:', error);
    throw error;
  }
};

export const downloadHtml = async (design: WebsiteDesign) => {
  try {
    // Generate HTML and get images
    const { html, images } = await generateHtml(design);
    
    // Create a zip file
    const zip = new JSZip();
    
    // Add HTML file
    zip.file('index.html', html);
    
    // Create images directory and add images
    const imagesFolder = zip.folder('images');
    if (imagesFolder) {
      for (const { filename, blob } of images) {
        imagesFolder.file(filename, blob);
      }
    }
    
    // Generate zip file and trigger download
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${design.name.toLowerCase().replace(/\s+/g, '-')}.zip`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error during export:', error);
    throw error;
  }
};

export default {
  generateHtml,
  downloadHtml,
}; 
import { WebsiteDesign, SectionType } from '../types';
import { getTemplate } from '@/lib/templates';
import { parseTemplateId } from '@/lib/utils';
import { ThemeType, VersionType } from '@/lib/types';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import JSZip from 'jszip';
import { extractImageUrls, cleanNextImageUrl, downloadImage, extractFontFamily } from './exportUtils';
import { useFilePoolStore } from '../store/filePoolStore';

// Helper function to convert data URL to Blob
const dataURLtoBlob = (dataURL: string): Blob => {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new Blob([u8arr], { type: mime });
};

const resolveTempHandle = (
  value: string,
  sectionId: string,
  key: string,
  allImages: { url: string; blob: Blob; filename: string }[]
): string => {
  const id = value.replace('temp://', '');
  const file = useFilePoolStore.getState().getFile(id);
  if (!file) {
    console.warn('Missing file for temp handle', id);
    return '';
  }
  const filename = `${sectionId}-${key}-${file.name}`;
  allImages.push({ url: 'temp', blob: file, filename });
  return `images/${filename}`;
};

// ADD THIS NEW FUNCTION: Restructures content with dotted paths into nested objects
const restructureContent = (content: Record<string, any>): Record<string, any> => {
  const result: Record<string, any> = {};
  
  for (const [key, value] of Object.entries(content)) {
    // Keep objects and arrays as-is
    if (value !== null && typeof value === 'object') {
      result[key] = value;
      continue;
    }
    
    // Process dotted paths
    if (key.includes('.')) {
      const parts = key.split('.');
      let current = result;
      
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (current[part] === undefined) {
          const nextPart = parts[i + 1];
          current[part] = !isNaN(Number(nextPart)) ? [] : {};
        }
        current = current[part];
      }
      
      const lastPart = parts[parts.length - 1];
      current[lastPart] = value;
    } else {
      result[key] = value;
    }
  }
  
  return result;
};

// Recursive function to process content (Images, URLs, etc.)
const processContentRecursively = (
  content: any,
  sectionId: string,
  allImages: { url: string; blob: Blob; filename: string }[]
): any => {
  // If content is an array, process each item
  if (Array.isArray(content)) {
    return content.map((item, index) => 
      processContentRecursively(item, sectionId, allImages)
    );
  }
  
  // If content is an object, process each property
  if (content !== null && typeof content === 'object') {
    const result: Record<string, any> = {};
    for (const [key, value] of Object.entries(content)) {
      result[key] = processContentRecursively(value, sectionId, allImages);
    }
    return result;
  }
  
  // Process string values (for image URLs)
  if (typeof content === 'string') {
    if (content.startsWith('temp://')) {
      return resolveTempHandle(content, sectionId, 'content', allImages);
    } else if (content.startsWith('data:image')) {
      try {
        const filename = `local-${sectionId}-${Date.now()}.png`;
        const blob = dataURLtoBlob(content);
        allImages.push({ url: content, blob, filename });
        return `images/${filename}`;
      } catch (err) {
        console.error(`Failed to process data URL:`, err);
      }
    }
  }
  
  // Return unchanged for other types
  return content;
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

    // Extract font information
    const headingFontInfo = extractFontFamily(design.styleGuide.headingFont);
    const bodyFontInfo = extractFontFamily(design.styleGuide.bodyFont);
    
    // Only include the fonts actually used in the design
    const fontImports = `
      ${headingFontInfo.fontImport ? `<link href="${headingFontInfo.fontImport}" rel="stylesheet">` : ''}
      ${bodyFontInfo.fontImport && bodyFontInfo.fontImport !== headingFontInfo.fontImport ? 
        `<link href="${bodyFontInfo.fontImport}" rel="stylesheet">` : ''}
    `;

    // Create proper CSS font variables
    const cssVariables = `
      :root {
        /* Font family declarations */
        --font-${headingFontInfo.fontName}: '${headingFontInfo.fontName.charAt(0).toUpperCase() + headingFontInfo.fontName.slice(1)}', ${headingFontInfo.fontName === 'merriweather' ? 'serif' : 'sans-serif'};
        --font-${bodyFontInfo.fontName}: '${bodyFontInfo.fontName.charAt(0).toUpperCase() + bodyFontInfo.fontName.slice(1)}', ${bodyFontInfo.fontName === 'merriweather' ? 'serif' : 'sans-serif'};
        
        /* Direct font family references */
        --heading-font: var(--font-${headingFontInfo.fontName});
        --body-font: var(--font-${bodyFontInfo.fontName});
        
        /* Color variables */
        --primary-color: ${design.styleGuide.primaryColor};
        --secondary-color: ${design.styleGuide.secondaryColor};
        --accent-color: ${design.styleGuide.accentColor};
        --background-color: ${design.styleGuide.backgroundColor};
        --background-color-dark: ${design.styleGuide.backgroundColorDark};
        --text-color: ${design.styleGuide.textColor};
        
        /* Typography Sizes and Weights */
        --h1-size: ${design.styleGuide.h1Size};
        --h1-weight: ${design.styleGuide.h1Weight};
        --h1-line-height: ${design.styleGuide.h1LineHeight};
        --h2-size: ${design.styleGuide.h2Size};
        --h2-weight: ${design.styleGuide.h2Weight};
        --h2-line-height: ${design.styleGuide.h2LineHeight};
        --body-size: ${design.styleGuide.bodySize};
        --body-weight: ${design.styleGuide.bodyWeight};
        --body-line-height: ${design.styleGuide.bodyLineHeight};
        
        /* Spacing */
        --spacing-sm: 1rem;
        --spacing-md: 2rem;
        --spacing-lg: 4rem;
      }
    `;

    // Generate content from sections
    const sortedSections = [...design.sections].sort((a, b) => a.order - b.order);
    const content = await Promise.all(sortedSections.map(async (section) => {
      let template;
    
      if (section.templateId) {
        // Parse the template ID safely
        const templateInfo = parseTemplateId(section.templateId);
      
        if (templateInfo) {
          // Use the parsed information to get the template
          template = getTemplate(
            section.type, 
            templateInfo.version, 
            templateInfo.theme
          );
        } else {
          // Fallback to default if parsing failed
          template = getTemplate(section.type as SectionType, VersionType.v1, ThemeType.light);
        }
      }
        
      if (!template || !template.component) {
        console.error('Invalid template or missing component');
        return '';
      }
      
      const Component = template.component;
      
      try {
        // Get the section data from the design store to ensure we have all content
        const sectionData = design.sections.find(s => s.id === section.id);
        if (!sectionData) {
          console.error(`Section data not found for ID: ${section.id}`);
          return '';
        }

        // Create a deep copy of the content object for the export
        const contentCopy = JSON.parse(JSON.stringify(sectionData.content || {}));
        
        // CHANGE HERE: Restructure the content to handle dotted paths
        const structuredContent = restructureContent(contentCopy);
        
        // Process all content recursively, including nested objects and arrays
        const processedContent = processContentRecursively(structuredContent, section.id, allImages);

        // Render the component with the processed content
        const componentProps = {
          theme: template.theme,
          sectionId: section.id,
          ...processedContent,
        };

        const componentHtml = ReactDOMServer.renderToString(
          React.createElement(Component, componentProps)
        );
        
        // Extract and process regular image URLs from the rendered HTML
        const imageUrls = extractImageUrls(componentHtml);
        let updatedHtml = componentHtml;
        
        for (const imageUrl of imageUrls) {
          // Skip data URLs as they're already processed
          if (imageUrl.startsWith('data:')) continue;
          
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
        return updatedHtml;

      } catch (error) {
        console.error(`Error rendering section:`, error);
        return '';
      }
    }));

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
          
          /* Fix for SVG elements with hardcoded colors */
          svg [fill="#EF083A"],
          path[fill="#EF083A"],
          circle[fill="#EF083A"] {
            fill: var(--primary-color) !important;
          }
          
          /* Fix inline styles that might be referencing variables */
          [style*="color: primaryColor"],
          [style*="color:primaryColor"] {
            color: var(--primary-color) !important;
          }
          
          [style*="fill:"] {
            fill: var(--primary-color);
          }
          
          [style*="fontFamily:"] {
            font-family: inherit !important;
          }
          
          /* Fix font family references */
          .font-archivo, .font-manrope, .font-inter, 
          .font-poppins, .font-montserrat, .font-merriweather {
            font-family: inherit !important;
          }
        </style>
      </head>
      <body>
        <div id="root">
          ${content.join('')}
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
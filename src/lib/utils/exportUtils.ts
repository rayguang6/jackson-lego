// Helper function to extract image URLs from HTML
export const extractImageUrls = (html: string): string[] => {
    // Look for Next.js Image components and regular img tags
    const patterns = [
      /<img[^>]+src=["']([^"']+)["']/g,  // Regular img tags
      /data-src=["']([^"']+)["']/g,      // Next.js Image data-src
      /srcSet=["']([^"']+)["']/g,        // srcSet attributes
      /background-image:\s*url\(['"]?([^'"]+)['"]?\)/g, // CSS background-image
      /url\(['"]?([^'"]+)['"]?\)/g,      // CSS url() function
      /content=["']image\/[^;]+;base64,[^"']+["']/g, // Complete data URLs in meta tags
    ];
  
    const urls = new Set<string>();
    
    patterns.forEach(pattern => {
      const matches = [...html.matchAll(pattern)];
      matches.forEach(match => {
        let url = match[1];
        
        // Skip if no URL was matched
        if (!url) return;
        
        // For data URLs in meta tags, we need to extract the URL differently
        if (pattern.toString().includes('content=')) {
          const contentMatch = match[0].match(/content=["']([^"']+)["']/);
          if (contentMatch && contentMatch[1]) {
            url = contentMatch[1];
          }
        }
        
        // For srcSet, we need to handle multiple URLs
        if (pattern.toString().includes('srcSet')) {
          // Split the srcSet value by commas to get individual URL descriptors
          const srcSetParts = url.split(',');
          srcSetParts.forEach(part => {
            // Extract just the URL (before the size descriptor)
            const srcUrl = part.trim().split(' ')[0];
            if (srcUrl) {
              // Include all valid URLs - data URLs and other valid sources
              if (srcUrl.startsWith('data:') || srcUrl.startsWith('/') || srcUrl.startsWith('http') || srcUrl.startsWith('./') || srcUrl.startsWith('../')) {
                urls.add(srcUrl);
              }
            }
          });
        } else {
          // Handle regular URLs and data URLs
          if (url) {
            if (url.startsWith('data:') || url.startsWith('/') || url.startsWith('http') || url.startsWith('./') || url.startsWith('../')) {
              urls.add(url);
            }
          }
        }
      });
    });
  
    return Array.from(urls);
  };
  
  // Helper function to clean Next.js image URL
  export const cleanNextImageUrl = (url: string): string => {
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
  export const downloadImage = async (url: string): Promise<{ blob: Blob; filename: string }> => {
    try {
      // Handle data URLs
      if (url.startsWith('data:')) {
        // Extract MIME type from data URL
        const mimeMatch = url.match(/data:([^;]+);base64,/);
        const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
        const extension = mimeType.split('/')[1] || 'png';
        
        // Convert data URL to blob
        const byteString = atob(url.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeType });
        
        // Generate a unique filename
        const filename = `image-${Date.now()}.${extension}`;
        return { blob, filename };
      }
      
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

  // Helper function to extract font family name from CSS variable
export const extractFontFamily = (fontString: string): { fontName: string, fontImport: string } => {
    // Extract font name from strings like "var(--font-manrope), system-ui, sans-serif"
    const fontMatch = fontString.match(/var\(--font-([a-zA-Z]+)\)/);
    if (fontMatch && fontMatch[1]) {
      const fontName = fontMatch[1].toLowerCase();
      // Map font name to import URL
      const fontImportMap: Record<string, string> = {
        archivo: 'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap',
        manrope: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap',
        inter: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        merriweather: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap',
        montserrat: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
        poppins: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
      };
      
      return {
        fontName: fontName,
        fontImport: fontImportMap[fontName] || ''
      };
    }
    
    // Fallback for direct font names
    const directFontMatch = fontString.match(/['"]([a-zA-Z]+)['"]/);
    if (directFontMatch && directFontMatch[1]) {
      const fontName = directFontMatch[1].toLowerCase();
      return {
        fontName: fontName,
        fontImport: `https://fonts.googleapis.com/css2?family=${fontName}:wght@400;500;600;700&display=swap`
      };
    }
    
    // Default fallback
    return { fontName: 'sans-serif', fontImport: '' };
  };

export const downloadImagesAndUpdateHtml = async (html: string): Promise<string> => {
  try {
    const imageUrls = extractImageUrls(html);
    let updatedHtml = html;
    
    for (const url of imageUrls) {
      // Skip data URLs as they're already embedded
      if (url.startsWith('data:')) {
        continue;
      }
      
      try {
        const { blob, filename } = await downloadImage(url);
        const reader = new FileReader();
        
        // Convert blob to data URL
        const dataUrl = await new Promise<string>((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
        
        // Clean the URL if it's a Next.js image URL
        const cleanUrl = cleanNextImageUrl(url);
        
        // Escape special characters for use in regex
        const escapedUrl = cleanUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // Replace all direct occurrences of the URL in the HTML
        const urlRegex = new RegExp(escapedUrl, 'g');
        updatedHtml = updatedHtml.replace(urlRegex, dataUrl);
        
        // Replace in various HTML attributes and CSS properties
        const replacements = [
          { attr: 'src', regex: new RegExp(`src=["']${escapedUrl}["']`, 'g'), replacement: `src="${dataUrl}"` },
          { attr: 'data-src', regex: new RegExp(`data-src=["']${escapedUrl}["']`, 'g'), replacement: `data-src="${dataUrl}"` },
          { attr: 'href', regex: new RegExp(`href=["']${escapedUrl}["']`, 'g'), replacement: `href="${dataUrl}"` },
          { attr: 'srcset', regex: new RegExp(`(srcSet|srcset)=["']([^"']*)${escapedUrl}([^"']*)["']`, 'g'), replacement: `$1="${dataUrl}$3"` },
          { attr: 'background', regex: new RegExp(`background=["']${escapedUrl}["']`, 'g'), replacement: `background="${dataUrl}"` },
          { attr: 'poster', regex: new RegExp(`poster=["']${escapedUrl}["']`, 'g'), replacement: `poster="${dataUrl}"` },
          { css: 'background-image', regex: new RegExp(`background-image:\\s*url\\(['"]?${escapedUrl}['"]?\\)`, 'g'), replacement: `background-image: url(${dataUrl})` },
          { css: 'url', regex: new RegExp(`url\\(['"]?${escapedUrl}['"]?\\)`, 'g'), replacement: `url(${dataUrl})` }
        ];
        
        // Apply all replacements
        for (const { regex, replacement } of replacements) {
          updatedHtml = updatedHtml.replace(regex, replacement);
        }
      } catch (error) {
        console.error(`Failed to process image ${url}:`, error);
        // Continue with other images
      }
    }
    
    return updatedHtml;
  } catch (error) {
    console.error('Error processing images:', error);
    return html;
  }
};
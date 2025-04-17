// Helper function to extract image URLs from HTML
export const extractImageUrls = (html: string): string[] => {
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
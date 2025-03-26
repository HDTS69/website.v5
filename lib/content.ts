import { cache } from 'react';

export interface PageContent {
  title: string;
  description: string;
  lastUpdated: string;
  content: string;
}

/**
 * Normalize the content path to ensure it points to the correct location
 * and has the correct extension
 */
function normalizeContentPath(slug: string): string {
  // Remove any query parameters
  const cleanSlug = slug.split('?')[0];
  
  // Remove leading slash if present
  const trimmedSlug = cleanSlug.startsWith('/') ? cleanSlug.slice(1) : cleanSlug;
  
  // Add .txt extension if not present
  const withExtension = trimmedSlug.endsWith('.txt') ? trimmedSlug : `${trimmedSlug}.txt`;
  
  // Ensure the path starts with /content/
  return withExtension.startsWith('content/') ? `/${withExtension}` : `/content/${withExtension}`;
}

/**
 * Get content for a specific page
 * This function is cached to prevent unnecessary fetches
 */
export const getPageContent = cache(async (slug: string): Promise<PageContent | null> => {
  try {
    const contentPath = normalizeContentPath(slug);
    const response = await fetch(contentPath);
    
    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`Content not found: ${contentPath}`);
        return null;
      }
      throw new Error(`Failed to fetch content: ${response.statusText}`);
    }

    const text = await response.text();
    
    // Split metadata and content
    const [metadataStr, ...contentParts] = text.split('\n\n');
    
    try {
      // Parse metadata
      const metadata = JSON.parse(metadataStr);
      
      // Validate metadata
      if (!metadata.title || !metadata.description || !metadata.lastUpdated) {
        throw new Error('Invalid metadata format');
      }
      
      return {
        title: metadata.title,
        description: metadata.description,
        lastUpdated: metadata.lastUpdated,
        content: contentParts.join('\n\n')
      };
    } catch (e) {
      console.error('Error parsing content metadata:', e);
      return null;
    }
  } catch (error) {
    console.error('Error loading content:', error);
    return null;
  }
}); 
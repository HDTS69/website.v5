/**
 * Utility functions for managing image loading behavior across the site
 */

/**
 * Image priority levels
 */
export enum ImagePriority {
  HIGH = 'high',
  CRITICAL = 'critical', // New priority level for absolutely critical images like hero
  LOW = 'low',
}

/**
 * Returns the appropriate loading props for an image based on its priority level
 * @param priority The priority level of the image (CRITICAL for hero, HIGH for header, LOW for everything else)
 * @returns Object with loading, priority, fetchPriority, and quality props
 */
export function getImageLoadingProps(priority: ImagePriority = ImagePriority.LOW) {
  const isHighPriority = priority === ImagePriority.HIGH || priority === ImagePriority.CRITICAL;
  const isCritical = priority === ImagePriority.CRITICAL;
  
  // For critical images, provide all possible optimization properties
  if (isCritical) {
    return {
      loading: 'eager' as const,
      priority: true,
      fetchPriority: 'high' as const,
      quality: 95,
      decoding: 'sync' as const,
    };
  }
  
  // For high priority images
  if (isHighPriority) {
    return {
      loading: 'eager' as const,
      priority: true,
      fetchPriority: 'high' as const,
      quality: 90,
    };
  }
  
  // For low priority images
  return {
    loading: 'lazy' as const,
    priority: false,
    fetchPriority: 'auto' as const,
    quality: 75,
  };
}

/**
 * Constants for common image sizes to use with the Next.js Image component
 */
export const IMAGE_SIZES = {
  FULL_WIDTH: '100vw',
  FULL_SCREEN: '100vw',
  HERO: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  HERO_PORTRAIT: '(max-width: 768px) 60vw, 35vw',
  HERO_MOBILE: '60vw',
  CARD: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  THUMBNAIL: '(max-width: 768px) 50vw, 150px',
  FOUNDER: '(max-width: 1024px) 100vw, 41.666667vw' // 5/12 columns on lg screens
} as const; 
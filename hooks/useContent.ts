import { useState, useEffect } from 'react';
import { getPageContent, type PageContent } from '@/lib/content';

export function useContent(slug: string) {
  const [content, setContent] = useState<PageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadContent() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getPageContent(slug);
        
        if (isMounted) {
          if (!data) {
            setError('Content not found');
          } else {
            setContent(data);
          }
        }
      } catch (err) {
        console.error('Error loading content:', err);
        if (isMounted) {
          setError('Failed to load content');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadContent();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return { content, isLoading, error };
}

// Prefetch content for faster navigation
export function prefetchContent(slug: string): void {
  // Start loading the content in the background
  getPageContent(slug).catch(() => {
    // Silently handle prefetch errors
  });
} 
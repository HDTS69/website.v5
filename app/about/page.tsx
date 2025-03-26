'use client';

import { useContent } from '@/hooks/useContent';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';
import { Suspense } from 'react';

function AboutContent() {
  const { content, isLoading, error } = useContent('about');

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 relative inline-block">
            Loading...
          </h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-500 mb-4 relative inline-block">
            Error loading content
          </h1>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 relative inline-block">
            Content not found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 relative inline-block">
          {content.title}
        </h1>
        <p className="text-gray-300">{content.description}</p>
      </div>
      <div 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <BackgroundSparkles />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Suspense fallback={
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4 relative inline-block">
                Loading...
              </h1>
            </div>
          </div>
        }>
          <AboutContent />
        </Suspense>
      </main>
    </div>
  );
} 
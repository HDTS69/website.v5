'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the RiveDebug component to avoid loading it unnecessarily
const RiveDebugComponent = dynamic(() => import('./RiveDebug').then(mod => ({ default: mod.RiveDebug })), {
  ssr: false,
  loading: () => <div className="p-4 bg-gray-900 text-white">Loading debugger...</div>
});

export function RiveDebugInitializer() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <>
      {/* Floating button to show debug panel */}
      <button
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full z-50 shadow-lg"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Hide' : 'Debug Rive'}
      </button>
      
      {/* Render debug panel if visible */}
      {isVisible && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-40 p-4 overflow-auto">
          <div className="max-w-2xl w-full">
            <RiveDebugComponent />
            <button 
              className="mt-4 w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
              onClick={() => setIsVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
} 
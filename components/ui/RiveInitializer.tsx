'use client';

import { useEffect, useState } from 'react';
import { RuntimeLoader } from '@rive-app/canvas';

/**
 * This component initializes Rive and preloads WASM
 * It should be included once at the top level of the application
 * Following Rive documentation: https://rive.app/docs/runtimes/overview/web#rive-wasm
 */
export function RiveInitializer() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Skip on server-side
    if (typeof window === 'undefined') return;

    const initializeRiveWasm = async () => {
      try {
        // Only initialize if not already initialized
        if (!isInitialized && !RuntimeLoader.hasInstance) {
          // Use a CDN URL for the WASM file in production/static export
          if (process.env.NODE_ENV === 'production') {
            RuntimeLoader.setWasmUrl('https://unpkg.com/@rive-app/canvas@2.7.0/rive.wasm');
          } else {
            // In development, use the local WASM file
            const wasmModule = await import('@rive-app/canvas/rive.wasm');
            if (wasmModule.default) {
              RuntimeLoader.setWasmUrl(wasmModule.default);
            }
          }
          
          // Wait for the runtime to be ready
          await new Promise<void>((resolve) => {
            const checkInstance = () => {
              if (RuntimeLoader.hasInstance) {
                resolve();
              } else {
                setTimeout(checkInstance, 100);
              }
            };
            checkInstance();
          });
          
          setIsInitialized(true);
          console.log('Rive WASM initialized successfully');
        }
      } catch (err) {
        console.warn('Failed to initialize Rive WASM:', err);
        // Set a flag in localStorage to indicate Rive failed to load
        try {
          localStorage.setItem('rive-load-failed', 'true');
        } catch (e) {
          console.warn('Could not access localStorage:', e);
        }
      }
    };

    initializeRiveWasm();
  }, [isInitialized]);

  // This is a utility component with no UI
  return null;
} 
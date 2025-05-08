/**
 * Performance optimization utilities
 * This module contains functions to detect device capabilities and optimize performance
 */

/**
 * Detects if the current device is a mobile device
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  return (
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
    window.innerWidth < 768 ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0
  );
}

/**
 * Detects if the device is likely to have performance issues
 * Now always returns false to ensure animations run everywhere
 */
export function isLowPerformanceDevice(): boolean {
  return false; // Always return false to enable animations
}

/**
 * Mark the device as having performance issues
 * Now a no-op function that removes any existing performance flags
 */
export function markPerformanceIssues(): void {
  if (typeof window === 'undefined') return;
  // Instead of setting the flag, we remove it to ensure animations run
  localStorage.removeItem('had-scroll-issues');
  document.documentElement.classList.remove('reduce-animations');
}

/**
 * Setup performance monitoring
 * Now a no-op function that doesn't monitor for performance issues
 */
export function setupPerformanceMonitoring(): void {
  // No-op - we don't monitor performance anymore to ensure animations always run
  return;
}

/**
 * Apply performance optimizations for the current device
 * Now ensures animations are always enabled
 */
export function applyPerformanceOptimizations(): void {
  if (typeof window === 'undefined') return;
  
  // Remove any existing performance flags
  localStorage.removeItem('had-scroll-issues');
  document.documentElement.classList.remove('reduce-animations');
  document.documentElement.classList.remove('reduce-image-quality');
  
  // Enable animations
  const style = document.createElement('style');
  style.innerHTML = `
    .animated-element {
      animation: all !important;
      transition: all !important;
    }
  `;
  document.head.appendChild(style);
}

// Auto-initialize when imported on client side
if (typeof window !== 'undefined') {
  // Wait for page to load before applying optimizations
  if (document.readyState === 'complete') {
    applyPerformanceOptimizations();
  } else {
    window.addEventListener('load', applyPerformanceOptimizations);
  }
} 
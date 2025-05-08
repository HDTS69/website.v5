'use client'

import { useEffect } from 'react'
import Analytics from '@/components/ui/Analytics'
import { applyPerformanceOptimizations } from '@/lib/performance'

// Performance monitor component
function PerformanceMonitor() {
  useEffect(() => {
    // Apply performance optimizations on component mount
    applyPerformanceOptimizations();
    
    return () => {
      // Cleanup if needed
    }
  }, [])

  return null
}

export function ClientComponents() {
  return (
    <>
      <Analytics />
      <PerformanceMonitor />
    </>
  )
}

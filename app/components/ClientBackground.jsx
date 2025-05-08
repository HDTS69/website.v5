'use client'

import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'

// Global background component with sparkles everywhere
export default function ClientBackground() {
  // Always use the full sparkles effect for all devices
  return <BackgroundSparkles zIndex={5} />
}

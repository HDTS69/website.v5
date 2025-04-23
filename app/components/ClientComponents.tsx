'use client'

import { useEffect } from 'react'
import Analytics from '@/components/ui/Analytics'

// Silent version of the particle debugger without console logs
function ParticleDebugger() {
  useEffect(() => {
    // No console logs
    return () => {}
  }, [])

  return null
}

export function ClientComponents() {
  return (
    <>
      <Analytics />
      <ParticleDebugger />
    </>
  )
}

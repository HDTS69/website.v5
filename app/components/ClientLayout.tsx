'use client'

import React from 'react'
import Header from '@/src/components/ui/header'
import Footer from '@/src/components/ui/footer'
import { MobileHeader } from '@/src/components/mobile'
import { Navigation } from '@/src/components/ui/Navigation'
import { navigationItems, actionItems } from '@/src/lib/navigation'
import Analytics from '@/src/components/ui/Analytics'
import { APIProvider } from '@vis.gl/react-google-maps'
import { GOOGLE_MAPS_API_KEY } from '../../src/config/google-maps'

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <MobileHeader />
        <Navigation items={navigationItems} actionItems={actionItems} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
      <Analytics />
    </APIProvider>
  )
}

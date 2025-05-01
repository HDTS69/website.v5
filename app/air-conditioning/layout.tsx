'use client'

import { Navigation } from '@/src/components/ui/Navigation'
import { navigationItems, actionItems } from '@/src/lib/navigation'
import Footer from '@/src/components/ui/footer'

export default function AirConditioningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Navigation items={navigationItems} actionItems={actionItems} />
      </div>

      <main className="flex-grow pt-[var(--mobile-header-height)] md:pt-0">
        {children}
      </main>

      <Footer />
    </div>
  )
}

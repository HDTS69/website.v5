'use client'

import Header from '@/src/components/ui/header'
import { MobileHeader } from '@/src/components/mobile'
import Footer from '@/src/components/ui/footer'
import { Navigation } from '@/src/components/ui/Navigation'
import { navigationItems, actionItems } from '@/src/lib/navigation'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* Mobile Header */}
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <Navigation items={navigationItems} actionItems={actionItems} />
      </nav>

      <main className="flex-grow pt-[var(--mobile-header-height)] md:pt-0">
        {children}
      </main>
      <Footer />
    </div>
  )
}

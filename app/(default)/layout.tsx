'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Header from '@/src/components/ui/header'
import Footer from '@/src/components/ui/footer'
import { Navigation } from '@/src/components/ui/Navigation'
import { navigationItems, actionItems } from '@/src/lib/navigation'
import { MobileHeader } from '@/src/components/mobile/MobileHeader'
import AOS from 'aos'
import 'aos/dist/aos.css'

function DefaultLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  }, [])

  // Handle scroll position
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    }

    const handleLoad = () => {
      const scrollPosition = sessionStorage.getItem('scrollPosition')
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition))
        sessionStorage.removeItem('scrollPosition')
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

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

      <main className="flex-grow pt-[calc(var(--mobile-header-height)+env(safe-area-inset-top))] md:pt-0">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DefaultLayoutInner>{children}</DefaultLayoutInner>
    </Suspense>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { OpenNowIndicator } from '../ui/OpenNowIndicator'

// Throttle function to limit how often a callback can fire
const throttle = (callback: Function, delay: number) => {
  let lastCall = 0
  return (...args: any[]) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      callback(...args)
    }
  }
}

export function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const openNowRef = useRef<HTMLDivElement>(null)
  const mainHeaderRef = useRef<HTMLDivElement>(null)

  // Use a single useEffect to set up all header styles and event listeners
  useEffect(() => {
    // Simple static header setup without dynamic style changes
    if (!openNowRef.current || !mainHeaderRef.current) return

    // Function to update header positioning
    const updateHeaderPositioning = () => {
      const openNowHeight = openNowRef.current?.offsetHeight || 0
      const mainHeaderHeight = mainHeaderRef.current?.offsetHeight || 0
      
      // Update main header position
      if (mainHeaderRef.current) {
        mainHeaderRef.current.style.position = 'fixed'
        mainHeaderRef.current.style.top = `${openNowHeight}px`
        mainHeaderRef.current.style.left = '0'
        mainHeaderRef.current.style.right = '0'
        mainHeaderRef.current.style.width = '100%'
        mainHeaderRef.current.style.zIndex = '49'
      }
      
      // Ensure OpenNow is fixed at the top
      if (openNowRef.current) {
        openNowRef.current.style.position = 'fixed'
        openNowRef.current.style.top = '0'
        openNowRef.current.style.left = '0'
        openNowRef.current.style.right = '0'
        openNowRef.current.style.width = '100%'
        openNowRef.current.style.zIndex = '50'
      }
      
      // Calculate header height for CSS variable
      const totalHeaderHeight = openNowHeight + mainHeaderHeight
      document.documentElement.style.setProperty(
        '--mobile-header-height',
        `${totalHeaderHeight}px`
      )
      
      // Add padding to the top of the body to prevent content from being hidden
      document.body.style.paddingTop = `${totalHeaderHeight}px`
    }

    // Update positioning after a short delay to ensure all elements are rendered
    const initialPositionTimer = setTimeout(() => {
      updateHeaderPositioning()
    }, 100)

    // Add meta viewport tag for proper mobile rendering
    let viewportMeta = document.querySelector('meta[name="viewport"]')
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta')
      viewportMeta.setAttribute('name', 'viewport')
      document.head.appendChild(viewportMeta)
    }
    viewportMeta.setAttribute(
      'content',
      'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover',
    )
    
    // Throttled scroll handler to reduce execution frequency
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 0)
      // Update positioning after scroll to ensure header stays fixed
      setTimeout(() => {
        updateHeaderPositioning()
      }, 50)
    }, 150) // Only check every 150ms instead of on every scroll event
    
    // Simple resize handler - only recalculate when dimensions actually change
    let lastWidth = window.innerWidth
    let lastHeight = window.innerHeight
    
    const handleResize = throttle(() => {
      const currentWidth = window.innerWidth
      const currentHeight = window.innerHeight
      
      // Only run this if dimensions actually changed
      if (currentWidth !== lastWidth || currentHeight !== lastHeight) {
        lastWidth = currentWidth
        lastHeight = currentHeight
        
        updateHeaderPositioning()
      }
    }, 250)

    // Initial positioning
    updateHeaderPositioning()

    // Attach event listeners with passive option where possible
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('orientationchange', handleResize, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
      clearTimeout(initialPositionTimer)
    }
  }, [])

  const LogoContent = () => (
    <div className="relative flex w-full items-center">
      {/* Main Logo Section with logos */}
      <div className="relative flex w-full items-center justify-between px-0">
        {/* Left-aligned Icon Logo */}
        <div className="flex-shrink-0 pl-0">
          <Image
            src="/images/icon-logo.webp"
            alt="HD Trade Services Logo"
            width={64}
            height={64}
            className="h-16 w-16"
            priority
            sizes="64px"
          />
        </div>

        {/* Centered Text Logo */}
        <div className="absolute left-1/2 flex -translate-x-1/2 transform items-center justify-center">
          <Image
            src="/images/text-logo.webp"
            alt="HD Trade Services"
            width={600}
            height={130}
            style={{ objectFit: 'contain' }}
            className="max-h-[130px] w-auto"
            sizes="(max-width: 768px) 80vw, 600px"
            loading="eager"
          />
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Open Now Indicator */}
      <div
        ref={openNowRef}
        id="mobile-open-now"
        className="fixed-header block shadow-md md:hidden"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 50,
          backgroundColor: 'rgba(0,0,0,0.95)',
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: '0.25rem',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
        }}
      >
        <div className="flex w-full items-center justify-center px-4 py-1">
          <OpenNowIndicator showTime={false} className="text-sm font-medium" />
        </div>
      </div>

      {/* Main header */}
      <header
        ref={mainHeaderRef}
        id="mobile-main-header"
        className={cn(
          'fixed block shadow-md md:hidden sticky top-0',
          'transition-all duration-300 ease-in-out',
        )}
        style={{
          position: 'fixed',
          top: openNowRef.current
            ? `${openNowRef.current.offsetHeight}px`
            : '30px', // Fallback height if ref not available
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 49,
          backgroundColor: 'rgba(0,0,0,0.85)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
        }}
      >
        <div className="py-3">
          {isHomePage ? (
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full cursor-pointer"
              aria-label="Return to top"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              <LogoContent />
            </div>
          ) : (
            <Link href="/" className="w-full" aria-label="Return to homepage">
              <LogoContent />
            </Link>
          )}
        </div>
      </header>
    </>
  )
}

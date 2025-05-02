import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

// Re-use the NavigationItem interface (or import if defined elsewhere)
interface NavigationItem {
  label: string
  href?: string
  dropdownItems?: NavigationItem[]
  subDropdownItems?: NavigationItem[]
}

interface MobileNavigationProps {
  items: NavigationItem[]
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  items,
}: MobileNavigationProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {},
  )

  // Close menu on screen resize if switching to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false)
    }
  }, [isMobile, isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isMobile) {
    return null // Don't render on desktop
  }

  const toggleMenu = (): void => setIsOpen(!isOpen)

  const toggleExpandItem = (itemKey: string): void => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }))
  }

  const renderNavLinks = (
    navItems: NavigationItem[],
    level = 0,
  ): React.ReactNode[] => {
    return navItems.map((item, index) => {
      const itemKey = `${item.label}-${level}-${index}`
      const hasChildren = !!(
        item.dropdownItems?.length || item.subDropdownItems?.length
      )
      const isExpanded = expandedItems[itemKey]

      return (
        <div key={itemKey} className="py-1">
          <div className="flex items-center">
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  'block w-full py-3 text-base font-medium transition-colors',
                  'text-gray-800 hover:text-black active:text-black',
                  level === 0 ? 'border-b border-gray-100' : '',
                )}
                onClick={() => setIsOpen(false)}
                style={{ paddingLeft: `${16 + level * 16}px` }}
              >
                {item.label}
              </Link>
            ) : (
              <button
                onClick={() => toggleExpandItem(itemKey)}
                className={cn(
                  'flex w-full items-center justify-between py-3 text-base font-semibold transition-colors',
                  'text-gray-800 hover:text-black active:text-black',
                  level === 0 ? 'border-b border-gray-100' : '',
                  isExpanded ? 'text-black' : '',
                )}
                style={{ paddingLeft: `${16 + level * 16}px` }}
              >
                <span>{item.label}</span>
                {hasChildren && (
                  <ChevronRight
                    className={cn(
                      'mr-4 h-4 w-4 transition-transform duration-200',
                      isExpanded ? 'rotate-90' : '',
                    )}
                  />
                )}
              </button>
            )}
          </div>

          {hasChildren && (
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {item.dropdownItems && (
                    <div className={cn('ml-6 border-l-2 border-gray-200')}>
                      {renderNavLinks(item.dropdownItems, level + 1)}
                    </div>
                  )}
                  {item.subDropdownItems && (
                    <div className={cn('ml-6 border-l-2 border-gray-200')}>
                      {renderNavLinks(item.subDropdownItems, level + 2)}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      )
    })
  }

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <Button
            variant="default"
            className="h-14 w-14 rounded-full bg-[#28DF99] p-0 text-white shadow-lg hover:bg-[#20c287]"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </motion.div>
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/5 backdrop-blur-sm"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-full max-w-md overflow-hidden bg-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between border-b border-gray-100 p-4">
                {/* Logo area */}
                <div className="flex items-center">
                  <div className="relative mr-2 h-10 w-10">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                  <h2 className="text-lg font-bold text-black">
                    HD Trade Services
                  </h2>
                </div>

                <Button
                  variant="ghost"
                  className="h-10 w-10 rounded-full p-0 hover:bg-gray-100"
                  onClick={toggleMenu}
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <motion.nav
                className="h-[calc(100vh-80px)] overflow-y-auto pb-20 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {renderNavLinks(items)}

                {/* Contact Info */}
                <div className="mt-6 border-t border-gray-100 px-6 pb-4 pt-8">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Contact Us
                  </h3>
                  <a
                    href="tel:1300136336"
                    className="flex items-center py-2 text-lg font-bold text-[#28DF99]"
                  >
                    1300 136 336
                  </a>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>Available 24/7 for emergency service</p>
                  </div>
                </div>

                {/* Book Now Button */}
                <div className="px-6 pb-8">
                  <Button
                    className="w-full bg-black py-6 text-base font-medium text-white hover:bg-gray-800"
                    onClick={() => {
                      window.location.href = '/book'
                      setIsOpen(false)
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNavigation

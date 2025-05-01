import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Phone } from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'
import { useMediaQuery } from '@/src/hooks/useMediaQuery'
import {
  NavItem,
  DropdownNavItem,
  SubNavItem,
} from '@/src/types/navigation/types'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedBookNowButton } from '@/src/components/ui/AnimatedBookNowButton'

interface MobileNavigationProps {
  items: NavItem[]
}

// Custom styles for the animated buttons
const customButtonStyles = `
  .book-online-btn .points_wrapper .point {
    background-color: white !important;
  }
  
  .call-now-btn .points_wrapper .point {
    background-color: #00E6CA !important;
  }
  
  .call-now-btn {
    background: white !important;
  }
  
  .call-now-btn .inner {
    color: #00E6CA !important;
  }
  
  .call-now-btn::after {
    background: white !important;
  }
  
  /* Make hero buttons the same width */
  .hero-buttons-container .animated-book-now-button {
    min-width: 180px !important;
    width: 180px !important;
    text-align: center;
    justify-content: center;
    transition: all 0.3s ease !important;
  }
  
  .hero-buttons-container .inner {
    justify-content: center;
    width: 100%;
  }
  
  /* Glow effects on hover */
  .hero-buttons-container .book-online-btn:hover {
    box-shadow: 0 0 25px 4px rgba(0, 230, 202, 0.6) !important;
  }
  
  .hero-buttons-container .call-now-btn:hover {
    box-shadow: 0 0 25px 4px rgba(255, 255, 255, 0.5) !important;
  }
`

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

  // Reset expanded items when menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedItems({})
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

  // Helper function to check if item has children
  const hasChildren = (item: NavItem | DropdownNavItem): boolean => {
    return (
      ('dropdownItems' in item &&
        Array.isArray(item.dropdownItems) &&
        item.dropdownItems.length > 0) ||
      ('subItems' in item &&
        Array.isArray(item.subItems) &&
        item.subItems.length > 0)
    )
  }

  const renderNavLinks = (
    navItems: NavItem[] | DropdownNavItem[],
    level = 0,
  ): React.ReactNode[] => {
    return navItems.map((item, index) => {
      const itemKey = `${item.name}-${level}-${index}`
      const itemHasChildren = hasChildren(item)
      const isExpanded = !!expandedItems[itemKey]

      return (
        <div key={itemKey} className="py-1">
          <div className="flex w-full items-center">
            {item.url ? (
              <Link
                href={item.url}
                className={cn(
                  'block w-full py-3 text-base font-medium transition-colors',
                  'text-white hover:text-[#00E6CA] active:text-[#00E6CA]',
                  level === 0 ? 'border-b border-zinc-800' : '',
                  'isHighlighted' in item &&
                    item.isHighlighted &&
                    'font-semibold text-[#00E6CA]',
                )}
                onClick={() => setIsOpen(false)}
                style={{ paddingLeft: `${16 + level * 16}px` }}
              >
                <span className="flex items-center">
                  {'icon' in item && item.icon && (
                    <item.icon className="mr-2 h-5 w-5" />
                  )}
                  {item.name}
                </span>
              </Link>
            ) : (
              <button
                onClick={() => toggleExpandItem(itemKey)}
                className={cn(
                  'flex w-full items-center justify-between py-3 text-base font-semibold transition-colors',
                  'text-white hover:text-[#00E6CA] active:text-[#00E6CA]',
                  level === 0 ? 'border-b border-zinc-800' : '',
                  isExpanded ? 'text-[#00E6CA]' : '',
                  'isHighlighted' in item &&
                    item.isHighlighted &&
                    'text-[#00E6CA]',
                )}
                style={{ paddingLeft: `${16 + level * 16}px` }}
              >
                <span className="flex items-center">
                  {'icon' in item && item.icon && (
                    <item.icon className="mr-2 h-5 w-5" />
                  )}
                  {item.name}
                </span>
                {itemHasChildren && (
                  <ChevronRight
                    className={cn(
                      'mr-4 h-4 w-4 transition-transform duration-200',
                      isExpanded ? 'rotate-90 text-[#00E6CA]' : '',
                    )}
                  />
                )}
              </button>
            )}
          </div>

          {itemHasChildren && (
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  {'dropdownItems' in item && item.dropdownItems && (
                    <div className={cn('ml-6 border-l border-zinc-700')}>
                      {renderNavLinks(item.dropdownItems, level + 1)}
                    </div>
                  )}
                  {'subItems' in item && item.subItems && (
                    <div className={cn('ml-6 border-l border-zinc-700')}>
                      {item.subItems.map((subItem, subIndex) => (
                        <div
                          key={`${subItem.name}-${level + 2}-${subIndex}`}
                          className="py-1"
                        >
                          <Link
                            href={subItem.url}
                            className={cn(
                              'text-md block py-2 font-medium text-gray-300 transition-colors hover:text-[#00E6CA]',
                              'pl-[calc(16px+((level+2)*16px))]',
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </div>
                      ))}
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
      {/* Inject global styles needed for animated buttons */}
      <style jsx global>
        {customButtonStyles}
      </style>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <Button
            variant="default"
            className="h-14 w-14 rounded-full bg-[#00E6CA] p-0 text-white shadow-lg hover:bg-[#00E6CA]/90"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            style={{
              position: 'fixed',
              bottom: 'max(env(safe-area-inset-bottom, 16px) + 8px, 24px)',
              right: 'max(env(safe-area-inset-right, 16px) + 8px, 24px)',
            }}
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
            style={{
              paddingTop: 'env(safe-area-inset-top, 0)',
              paddingBottom: 'env(safe-area-inset-bottom, 0)',
              paddingLeft: 'env(safe-area-inset-left, 0)',
              paddingRight: 'env(safe-area-inset-right, 0)',
            }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-[72px] h-[calc(100%-72px)] w-full max-w-md overflow-hidden bg-black shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <motion.nav
                className="pb-safe h-full overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="py-4">{renderNavLinks(items)}</div>

                {/* Contact Info */}
                <div className="mt-2 border-t border-zinc-800 px-6 pb-4 pt-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Contact Us
                  </h3>
                  <a
                    href="tel:1300136336"
                    className="flex items-center py-2 text-lg font-bold text-[#00E6CA]"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    1300 136 336
                  </a>
                  <div className="mt-2 text-sm text-gray-400">
                    <p>Available 24/7 for emergency service</p>
                  </div>
                </div>

                {/* Hero Section Buttons */}
                <div className="hero-buttons-container mt-4 flex justify-center gap-4 px-6 pb-16">
                  <AnimatedBookNowButton
                    href="tel:1300136336"
                    className="call-now-btn bg-white text-[#00E6CA]"
                  >
                    Call Now
                  </AnimatedBookNowButton>

                  <AnimatedBookNowButton
                    href="/book"
                    className="book-online-btn bg-[#00E6CA] text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Online
                  </AnimatedBookNowButton>
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

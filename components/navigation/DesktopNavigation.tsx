"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion" // Kept for active indicator (optional, can remove if no animations desired)
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LucideIcon, ChevronDown, ChevronRight, Phone, Calendar } from "lucide-react"
import { cn, scrollToElement } from "@/lib/utils"
import type { NavItem, ActionItem } from "@/types/navigation/types"
import { useMediaQuery } from '@/hooks/useMediaQuery'
import DesktopLogo from '@/components/ui/DesktopLogo'

interface NavBarProps {
  items: NavItem[]
  actionItems?: ActionItem[] // Ensured actionItems is optional but will render if provided
  className?: string
}

export function NavBar({ items, actionItems = [], className }: NavBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState('')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0) // Track exact scroll position for smooth movement
  const [isAnyItemActive, setIsAnyItemActive] = useState(false) // New state to track if any item is being used
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)
  const [hoverIntent, setHoverIntent] = useState<string | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const headerHeight = 96 // Assuming your header is 96px tall
      const stickyThreshold = 10 // Sticky when navbar is 10px from the top

      // Update scroll position for smooth interpolation
      setScrollPosition(currentScrollY)

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMobile, isHomePage])

  // Close dropdowns when clicking outside (kept as is)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.nav-item')) {
        setOpenDropdown(null)
        setOpenSubDropdown(null)
        setIsAnyItemActive(false) // Reset active state when clicking outside
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleItemClick = (item: NavItem, isDropdownToggle: boolean = false) => {
    if (isDropdownToggle) {
      setActiveTab(item.name)
      setOpenDropdown(openDropdown === item.name ? null : item.name)
      setOpenSubDropdown(null)
      setIsAnyItemActive(true) // Set active when clicked
    } else {
      setActiveTab(item.name)
      setOpenDropdown(null)
      setOpenSubDropdown(null)
      setIsAnyItemActive(true) // Set active when clicked
    }
  }

  const handleItemHover = (item: NavItem) => {
    if (!isMobile && item.dropdownItems && item.dropdownItems.length > 0) {
      // Clear any existing close timeout
      if (closeTimeout) {
        clearTimeout(closeTimeout)
        setCloseTimeout(null)
      }

      // Set states immediately
      setActiveTab(item.name)
      setOpenDropdown(item.name)
      setIsAnyItemActive(true)
      setHoverIntent(item.name)
    }
  }

  const handleItemLeave = () => {
    // Only close dropdowns when mouse leaves the entire navigation area
    // We'll handle this in the parent div onMouseLeave event
  }

  const handleNavLeave = () => {
    if (!isMobile) {
      const timeout = setTimeout(() => {
        setOpenDropdown(null)
        setOpenSubDropdown(null)
        setIsAnyItemActive(false)
        setHoverIntent(null)
      }, 100) // Reduced from 200ms to 100ms for faster response
      setCloseTimeout(timeout)
    }
  }

  const handleDropdownHover = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
  }

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout)
      }
    }
  }, [closeTimeout])

  const handleSubItemClick = (e: React.MouseEvent, itemName: string) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenSubDropdown(openSubDropdown === itemName ? null : itemName)
    setIsAnyItemActive(true) // Set active when sub-item is clicked
  }

  const handleSubItemHover = (itemName: string) => {
    if (!isMobile) {
      if (closeTimeout) {
        clearTimeout(closeTimeout)
        setCloseTimeout(null)
      }
      setOpenSubDropdown(itemName)
      setIsAnyItemActive(true)
    }
  }

  const handleBookingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/book")
  }

  const linkBaseClasses = "relative flex items-center gap-1.5 text-xs font-medium transition-all duration-300 text-gray-400 hover:text-[#00E6CA]"
  const linkActiveClasses = "text-gray-400"
  const linkHighlightedClasses = "text-gray-400 hover:text-[#00E6CA]"

  return (
    <div 
      className={cn(
        "hidden md:block w-full",
        isHomePage ? "max-w-[700px]" : "max-w-[800px]",
        "mx-auto z-[60]",
        "fixed left-0 right-0",
        "transition-none",
        "touch-auto",
        className
      )}
      style={{
        top: `${Math.max(96 - scrollPosition, 10)}px`,
        touchAction: 'manipulation',
        zIndex: 9999 // Ensure navbar stays on top
      }}
    >
      <motion.div 
        className={cn(
          "border border-[#00E6CA]/20 bg-black/90 backdrop-blur-md pointer-events-auto w-full rounded-full",
          "transition-none"
        )}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.8
        }}
      >
        <div 
          className={cn(
            "flex items-center justify-between",
            isMobile ? "px-2 gap-1 py-2" : cn(
              "py-2",
              isHomePage ? "px-4" : "px-8"
            )
          )}
          onMouseLeave={handleNavLeave}
        >
          {/* Navigation Items */}
          <div 
            className="flex items-center gap-3"
            onMouseLeave={handleNavLeave}
          >
            {items
              .filter(item => !(isHomePage && item.name === "Home"))
              .map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={activeTab === item.name}
                  isAnyItemActive={isAnyItemActive}
                  openDropdown={openDropdown}
                  openSubDropdown={openSubDropdown}
                  isMobile={isMobile}
                  onItemClick={handleItemClick}
                  onItemHover={handleItemHover}
                  onItemLeave={handleItemLeave}
                  onSubItemClick={handleSubItemClick}
                  onSubItemHover={handleSubItemHover}
                  onDropdownHover={handleDropdownHover}
                  setOpenDropdown={setOpenDropdown}
                  setOpenSubDropdown={setOpenSubDropdown}
                  linkBaseClasses={linkBaseClasses}
                  linkActiveClasses={linkActiveClasses}
                  linkHighlightedClasses={linkHighlightedClasses}
                />
              ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {actionItems.length > 0 && (
              <div className="flex items-center gap-3">
                {actionItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={item.name === "Book Online" ? handleBookingClick : undefined}
                    className={cn(
                      linkBaseClasses,
                      isMobile 
                        ? "flex-col items-center gap-0.5 px-2 py-1" 
                        : "gap-1.5 px-2 py-1.5",
                      "text-gray-400 hover:text-[#00E6CA]",
                      "[text-shadow:0_0_10px_rgba(0,230,202,0.5)] hover:[text-shadow:0_0_20px_rgba(0,230,202,0.8)]"
                    )}
                  >
                    <item.icon size={isMobile ? 20 : 14} strokeWidth={2} className="flex-shrink-0" />
                    <span className={cn(
                      isMobile ? "text-[10px] leading-tight" : "text-xs whitespace-nowrap",
                      "text-center font-medium"
                    )}>{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function NavItem({
  item,
  isActive,
  isAnyItemActive,
  openDropdown,
  openSubDropdown,
  isMobile,
  onItemClick,
  onItemHover,
  onItemLeave,
  onSubItemClick,
  onSubItemHover,
  onDropdownHover,
  setOpenDropdown,
  setOpenSubDropdown,
  linkBaseClasses,
  linkActiveClasses,
  linkHighlightedClasses,
}: NavItemProps) {
  const Icon = item.icon
  const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0
  const isHomeItem = item.name === "Home"

  return (
    <div 
      className={cn(
        "relative nav-item group",
        "before:content-[''] before:absolute before:top-0 before:left-[-4px] before:right-[-4px] before:h-full",
        "after:content-[''] after:absolute after:top-full after:left-[-4px] after:right-[-4px] after:h-4"
      )}
      onMouseEnter={() => onItemHover(item)}
      onMouseLeave={onItemLeave}
    >
      <div className={cn(
        "flex items-center",
        isMobile ? "px-2" : "px-2"
      )}>
        {isHomeItem ? (
          <Link
            href="/"
            className={cn(
              linkBaseClasses,
              isActive && !item.isHighlighted && linkActiveClasses,
              item.isHighlighted && linkHighlightedClasses,
              isMobile ? "flex-col items-center gap-0.5 py-1" : "py-2"
            )}
          >
            <Icon size={isMobile ? 20 : 16} strokeWidth={2} className="flex-shrink-0" />
            <span className={cn(
              isMobile ? "text-[10px] leading-tight" : "hidden md:inline whitespace-nowrap",
              "text-center"
            )}>{item.name}</span>
          </Link>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onItemClick(item, true)
            }}
            className={cn(
              linkBaseClasses,
              isActive && !item.isHighlighted && linkActiveClasses,
              item.isHighlighted && linkHighlightedClasses,
              isMobile ? "flex-col items-center gap-0.5 py-1" : "py-2"
            )}
          >
            <Icon size={isMobile ? 20 : 16} strokeWidth={2} className="flex-shrink-0" />
            <span className={cn(
              isMobile ? "text-[10px] leading-tight" : "hidden md:inline whitespace-nowrap",
              "text-center"
            )}>{item.name}</span>
          </button>
        )}
        {hasDropdown && (
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onItemClick(item, true)
            }}
            className={cn(
              "flex items-center ml-1 text-gray-400 hover:text-[#00E6CA] transition-colors",
              openDropdown === item.name && "text-gray-400"
            )}
          >
            <ChevronDown
              size={12}
              className={cn(
                "transition-transform duration-200",
                openDropdown === item.name && "rotate-180"
              )}
            />
          </button>
        )}
      </div>

      {/* Main Dropdown Menu */}
      {hasDropdown && openDropdown === item.name && (
        <div
          className={cn(
            "absolute w-64 py-3 bg-black/90 backdrop-blur-lg border border-[#00E6CA]/20 shadow-xl shadow-black/20",
            isMobile 
              ? "fixed bottom-[80px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-xl" 
              : "top-[calc(100%+8px)] left-0 rounded-xl",
            "z-50",
            "before:content-[''] before:absolute before:top-[-8px] before:left-0 before:right-0 before:h-8",
            "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-4"
          )}
          onMouseEnter={onDropdownHover}
          onMouseLeave={onItemLeave}
        >
          {item.dropdownItems?.map((dropdownItem) => (
            <div 
              key={dropdownItem.url} 
              className="relative group"
              onMouseEnter={() => dropdownItem.subItems && onSubItemHover(dropdownItem.name)}
            >
              <div className="flex items-center justify-between px-4 py-2.5 hover:bg-[#00E6CA]/5">
                <Link
                  href={dropdownItem.url}
                  onClick={() => onItemClick(item)}
                  className="flex-1 text-sm text-gray-400 hover:text-[#00E6CA] transition-colors hover:[text-shadow:0_0_10px_rgba(0,230,202,0.5)]"
                >
                  {dropdownItem.name}
                </Link>
                {dropdownItem.subItems && (
                  <button
                    onClick={(e) => onSubItemClick(e, dropdownItem.name)}
                    className={cn(
                      "p-1.5 text-gray-400 hover:text-[#00E6CA] transition-colors",
                      openSubDropdown === dropdownItem.name && "text-gray-400"
                    )}
                  >
                    <ChevronRight
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        openSubDropdown === dropdownItem.name && "rotate-90"
                      )}
                    />
                  </button>
                )}
              </div>

              {/* Sub Dropdown Menu */}
              {dropdownItem.subItems && openSubDropdown === dropdownItem.name && (
                <div 
                  className={cn(
                    "absolute py-3 bg-black/90 backdrop-blur-lg border border-[#00E6CA]/20 shadow-xl shadow-black/20 z-50",
                    isMobile
                      ? "fixed bottom-[80px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-xl"
                      : "left-full top-0 w-64 ml-2 rounded-xl",
                    "before:content-[''] before:absolute before:top-0 before:left-[-8px] before:w-8 before:h-full",
                    "after:content-[''] after:absolute after:top-0 after:right-[-8px] before:w-8 after:h-full"
                  )}
                  onMouseEnter={onDropdownHover}
                  onMouseLeave={onItemLeave}
                >
                  <div className="max-h-[50vh] overflow-y-auto">
                    {dropdownItem.subItems.map((subItem) => (
                      <Link
                        key={subItem.url}
                        href={subItem.url}
                        onClick={() => {
                          onItemClick(item)
                          setOpenSubDropdown(null)
                        }}
                        className="block px-4 py-2.5 text-sm text-gray-400 hover:text-[#00E6CA] transition-colors hover:[text-shadow:0_0_10px_rgba(0,230,202,0.5)] hover:bg-[#00E6CA]/5"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Active indicator - Only show when an item is active and isAnyItemActive is true */}
      {isActive && !item.isHighlighted && isAnyItemActive && (
        <motion.div
          layoutId="lamp"
          className="absolute inset-0 w-full bg-[#00E6CA]/5 rounded-full -z-10"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#00E6CA] rounded-t-full opacity-30">
            <div className="absolute w-12 h-6 bg-[#00E6CA]/10 rounded-full blur-md -top-2 -left-2" />
            <div className="absolute w-8 h-6 bg-[#00E6CA]/10 rounded-full blur-md -top-1" />
            <div className="absolute w-4 h-4 bg-[#00E6CA]/10 rounded-full blur-sm top-0 left-2" />
          </div>
        </motion.div>
      )}
    </div>
  )
}

interface NavItemProps {
  item: NavItem
  isActive: boolean
  isAnyItemActive: boolean
  openDropdown: string | null
  openSubDropdown: string | null
  isMobile: boolean
  onItemClick: (item: NavItem, isDropdownToggle?: boolean) => void
  onItemHover: (item: NavItem) => void
  onItemLeave: () => void
  onSubItemClick: (e: React.MouseEvent, itemName: string) => void
  onSubItemHover: (itemName: string) => void
  onDropdownHover: () => void
  setOpenDropdown: (value: string | null) => void
  setOpenSubDropdown: (value: string | null) => void
  linkBaseClasses: string
  linkActiveClasses: string
  linkHighlightedClasses: string
}
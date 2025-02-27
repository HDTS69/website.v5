"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion" // Kept for active indicator (optional, can remove if no animations desired)
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon, ChevronDown, ChevronRight, Phone, Calendar } from "lucide-react"
import { cn, scrollToElement } from "@/lib/utils"
import type { NavItem } from "@/types/navigation/types"

interface NavBarProps {
  items: NavItem[]
  actionItems?: NavItem[] // Ensured actionItems is optional but will render if provided
  className?: string
}

export function NavBar({ items, actionItems = [], className }: NavBarProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState('')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0) // Track exact scroll position for smooth movement

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
    } else {
      setActiveTab(item.name)
      setOpenDropdown(null)
      setOpenSubDropdown(null)
    }
  }

  const handleSubItemClick = (e: React.MouseEvent, itemName: string) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenSubDropdown(openSubDropdown === itemName ? null : itemName)
  }

  const handleBookingClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    if (pathname === '/') {
      scrollToElement('book')
    } else {
      window.location.href = url
    }
  }

  // Add the missing isItemActive function
  const isItemActive = (item: NavItem): boolean => {
    if (pathname === '/' && item.name === 'Home') return true;
    if (item.url && pathname.startsWith(item.url) && item.url !== '/') return true;
    if (item.url === pathname) return true;
    return false;
  }

  const linkBaseClasses = "relative flex items-center gap-1.5 text-sm font-medium transition-all duration-300 text-gray-400 hover:text-[#00E6CA]"
  const linkActiveClasses = "text-[#00E6CA]"
  const linkHighlightedClasses = "text-gray-400 hover:text-[#00E6CA]"

  // Animation variants for the navbar container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  // Animation variants for individual nav items
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <div 
      className={cn(
        isMobile 
          ? "fixed bottom-0 left-0 right-0 w-full !min-w-0 px-4 pb-4 md:hidden z-[60]" 
          : cn(
              "w-full max-w-[800px] mx-auto z-[60]",
              "fixed left-0 right-0", // Always fixed, but top position adjusts dynamically
              "transition-none" // No transitions for natural movement
            ),
        className
      )}
      style={{
        // Dynamically calculate top position for smooth movement
        top: `${Math.max(96 - scrollPosition, 10)}px`, // Start at 96px (below header), move to 10px when scrolled past header
      }}
    >
      <motion.div 
        className={cn(
          "border border-[#00E6CA]/20 bg-black/90 backdrop-blur-md pointer-events-auto",
          isMobile ? "rounded-2xl mx-auto max-w-md mb-0" : "rounded-full",
          "transition-none" // No transitions for natural movement
        )}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 1
        }}
        variants={containerVariants}
      >
        <motion.div 
          className={cn(
            "flex items-center justify-center py-2",
            isMobile ? "px-2 gap-1" : "px-2"
          )}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* All Navigation Items (Main Items with Dropdowns) */}
          {items.map((item, index) => (
            <motion.div key={`${item.name}-${index}`} variants={itemVariants}>
              <SimpleNavItem
                item={item}
                isActive={isItemActive(item)}
                className={cn(
                  linkBaseClasses,
                  isItemActive(item) ? linkActiveClasses : "",
                  item.isHighlighted ? linkHighlightedClasses : "",
                  "px-3 py-2 rounded-full hover:bg-white/5"
                )}
                onClick={item.onClick}
              />
            </motion.div>
          ))}

          {/* Action Items (Call Now, Book Online) */}
          {actionItems.map((item, index) => (
            <motion.div key={`action-${item.name}-${index}`} variants={itemVariants}>
              {item.name === 'Book Online' ? (
                <button
                  onClick={(e) => handleBookingClick(e, item.url)}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full",
                    "bg-gradient-to-r from-[#00E6CA] to-[#00A2FF] text-black",
                    "hover:from-[#00A2FF] hover:to-[#00E6CA] transition-all duration-300"
                  )}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.name}
                </button>
              ) : (
                <SimpleNavItem
                  item={item}
                  isActive={false}
                  className={cn(
                    linkBaseClasses,
                    "px-3 py-2 rounded-full hover:bg-white/5"
                  )}
                  onClick={item.onClick}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Create a simplified NavItem component that accepts className
interface SimpleNavItemProps {
  item: NavItem;
  isActive: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

function SimpleNavItem({ item, isActive, className, onClick }: SimpleNavItemProps) {
  const Icon = item.icon;
  
  return (
    <div className="relative nav-item">
      {onClick ? (
        <button
          onClick={onClick}
          className={className}
        >
          {Icon && <Icon className="w-4 h-4" />}
          <span>{item.name}</span>
        </button>
      ) : (
        <Link
          href={item.url}
          className={className}
        >
          {Icon && <Icon className="w-4 h-4" />}
          <span>{item.name}</span>
        </Link>
      )}
      
      {/* Active indicator */}
      {isActive && (
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
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#00E6CA] rounded-t-full opacity-50">
            <div className="absolute w-12 h-6 bg-[#00E6CA]/20 rounded-full blur-md -top-2 -left-2" />
            <div className="absolute w-8 h-6 bg-[#00E6CA]/20 rounded-full blur-md -top-1" />
            <div className="absolute w-4 h-4 bg-[#00E6CA]/20 rounded-full blur-sm top-0 left-2" />
          </div>
        </motion.div>
      )}
    </div>
  );
}

interface NavItemProps {
  item: NavItem
  isActive: boolean
  openDropdown: string | null
  openSubDropdown: string | null
  isMobile: boolean
  onItemClick: (item: NavItem, isDropdownToggle?: boolean) => void
  onSubItemClick: (e: React.MouseEvent, itemName: string) => void
  setOpenDropdown: (value: string | null) => void
  setOpenSubDropdown: (value: string | null) => void
  linkBaseClasses: string
  linkActiveClasses: string
  linkHighlightedClasses: string
}

function NavItem({
  item,
  isActive,
  openDropdown,
  openSubDropdown,
  isMobile,
  onItemClick,
  onSubItemClick,
  setOpenDropdown,
  setOpenSubDropdown,
  linkBaseClasses,
  linkActiveClasses,
  linkHighlightedClasses,
}: NavItemProps) {
  const Icon = item.icon
  const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0

  return (
    <div className="relative nav-item group">
      <div className="flex items-center">
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onItemClick(item, true) // Trigger dropdown toggle
          }}
          className={cn(
            linkBaseClasses,
            isActive && !item.isHighlighted && linkActiveClasses,
            item.isHighlighted && linkHighlightedClasses,
            isMobile && "flex-col items-center gap-0.5 px-2 py-1"
          )}
        >
          <Icon size={isMobile ? 20 : 16} strokeWidth={2} className="flex-shrink-0" />
          <span className={cn(
            isMobile ? "text-[10px] leading-tight" : "hidden md:inline whitespace-nowrap",
            "text-center"
          )}>{item.name}</span>
        </button>
        {hasDropdown && (
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onItemClick(item, true) // Trigger dropdown toggle via chevron too
            }}
            className={cn(
              "flex items-center ml-0.5 text-gray-400 hover:text-[#00E6CA] transition-colors",
              openDropdown === item.name && "text-[#00E6CA]"
            )}
          >
            <ChevronDown
              size={14}
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
            "absolute w-64 py-2 bg-black/90 backdrop-blur-lg border border-[#00E6CA]/20 shadow-xl shadow-black/20",
            isMobile 
              ? "fixed bottom-[80px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-xl" 
              : "top-[calc(100%+0.5rem)] left-0 rounded-xl",
            "z-50"
          )}
        >
          {/* Dropdown header navigates to the parent item's URL */}
          <div className="px-4 py-2 border-b border-[#00E6CA]/10 mb-1">
            <Link
              href={item.url}
              onClick={() => {
                onItemClick(item)
                setOpenDropdown(null)
              }}
              className="text-sm font-semibold text-[#00E6CA] hover:text-[#00E6CA] hover:[text-shadow:0_0_10px_rgba(0,230,202,0.5)]"
            >
              {item.name}
            </Link>
          </div>
          {item.dropdownItems?.map((dropdownItem) => (
            <div key={dropdownItem.url} className="relative group">
              <div className="flex items-center justify-between px-4 py-2">
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
                      "p-1 text-gray-400 hover:text-[#00E6CA] transition-colors",
                      openSubDropdown === dropdownItem.name && "text-[#00E6CA]"
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
                <div className={cn(
                  "absolute py-2 bg-black/90 backdrop-blur-lg border border-[#00E6CA]/20 shadow-xl shadow-black/20 z-50",
                  isMobile
                    ? "fixed bottom-[80px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md rounded-xl"
                    : "left-full top-0 w-64 ml-2 rounded-xl"
                )}>
                  <div className="px-4 py-2 border-b border-[#00E6CA]/10">
                    <h4 className="text-xs font-medium text-[#00E6CA]">{dropdownItem.name}</h4>
                  </div>
                  <div className="max-h-[50vh] overflow-y-auto">
                    {dropdownItem.subItems.map((subItem) => (
                      <Link
                        key={subItem.url}
                        href={subItem.url}
                        onClick={() => {
                          onItemClick(item)
                          setOpenSubDropdown(null)
                        }}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-[#00E6CA] transition-colors hover:[text-shadow:0_0_10px_rgba(0,230,202,0.5)]"
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

      {/* Active indicator (Optional: Remove if no animations desired) */}
      {isActive && !item.isHighlighted && (
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
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#00E6CA] rounded-t-full opacity-50">
            <div className="absolute w-12 h-6 bg-[#00E6CA]/20 rounded-full blur-md -top-2 -left-2" />
            <div className="absolute w-8 h-6 bg-[#00E6CA]/20 rounded-full blur-md -top-1" />
            <div className="absolute w-4 h-4 bg-[#00E6CA]/20 rounded-full blur-sm top-0 left-2" />
          </div>
        </motion.div>
      )}
    </div>
  )
}
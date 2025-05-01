'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavItem, ActionItem, BaseNavigationProps } from '@/types/navigation/types'
import { AnimatedBookNowButton } from './AnimatedBookNowButton'

export function Navigation({ items, actionItems, className }: BaseNavigationProps) {
  const pathname = usePathname()
  
  return (
    <nav className={cn("hidden md:flex items-center space-x-4", className)}>
      <ul className="flex flex-1 items-center">
        {items.map((item: NavItem, index: number) => (
          <li key={`nav-${index}`} className="relative group py-2 px-3">
            <Link 
              href={item.url}
              className={cn(
                "text-white hover:text-teal-400 transition-colors duration-200",
                pathname === item.url ? "text-teal-400" : "text-white"
              )}
            >
              {item.label}
            </Link>
            
            {/* Dropdown Menu */}
            {item.dropdownItems && item.dropdownItems.length > 0 && (
              <div className="absolute left-0 top-full mt-1 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block z-50">
                <div className="py-1">
                  {item.dropdownItems.map((dropdownItem, idx) => (
                    <Link 
                      key={`dropdown-${idx}`}
                      href={dropdownItem.url}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      
      {/* Action Items */}
      {actionItems && actionItems.length > 0 && (
        <div className="flex items-center space-x-4">
          {actionItems.map((item: ActionItem, index: number) => (
            item.isHighlighted ? (
              <AnimatedBookNowButton 
                key={`action-${index}`}
                href={item.url}
                className="bg-teal-400 text-white px-4 py-2 rounded-md"
              >
                {item.label}
              </AnimatedBookNowButton>
            ) : (
              <Link 
                key={`action-${index}`}
                href={item.url}
                className="text-white hover:text-teal-400 transition-colors duration-200 flex items-center"
              >
                {item.icon && <item.icon className="mr-1 h-4 w-4" />}
                {item.label}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  )
}

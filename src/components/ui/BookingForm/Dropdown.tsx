'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface DropdownProps {
  value: string
  placeholder: string
  isOpen: boolean
  onToggle: () => void
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  placeholder,
  isOpen,
  onToggle,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'flex w-full items-center justify-between rounded-md border border-gray-700 bg-gray-900',
        'px-2 py-1',
        'text-xs',
        'whitespace-normal text-left text-gray-300 shadow-sm',
        'h-auto min-h-[2.5rem]',
        'dropdown-trigger hover:border-teal-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500',
        className,
      )}
    >
      <span className="flex-grow text-gray-300">{value || placeholder}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          'ml-1 flex-shrink-0 transition-transform duration-200',
          isOpen && 'rotate-180',
        )}
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  )
}

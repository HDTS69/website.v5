'use client'

import * as React from 'react'
import { format, startOfToday } from 'date-fns'
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import * as Popover from '@radix-ui/react-popover'
import { cn } from '@/src/lib/utils'
import { useFormStatus } from 'react-dom'
import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/src/components/ui/button'
import { DayPicker } from 'react-day-picker'

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  name: string
  min?: string
  placeholder?: string
  defaultValue?: string
  onDateSelect?: (date: string) => void
  isOpen?: boolean
  onToggle?: () => void
}

export function DatePicker({
  value,
  name,
  min,
  placeholder = 'Select date',
  className,
  defaultValue,
  onDateSelect,
  isOpen = false,
  onToggle,
  ...props
}: DatePickerProps) {
  const [isClient, setIsClient] = React.useState(false)
  const [open, setOpen] = useState(isOpen)
  const [selectionMethod, setSelectionMethod] = useState<
    'calendar' | 'thisWeek' | 'nextWeek'
  >('calendar')

  // Check if we are on the client-side
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  const today = startOfToday()
  const [currentDate, setCurrentDate] = React.useState(
    value ? new Date(value) : today,
  )
  const selectedDate = value ? new Date(value) : undefined
  const minDate = min ? new Date(min) : today
  const { pending } = useFormStatus()

  // Update current date view when value changes
  React.useEffect(() => {
    if (value) {
      setCurrentDate(new Date(value))
    }
  }, [value])

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate()

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay()

  const handleDateSelect = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()
      console.log('DatePicker: handleDateSelect triggered')

      const day = parseInt(e.currentTarget.getAttribute('data-day') || '0', 10)
      if (!day) {
        console.log('DatePicker: No day found')
        return
      }

      const newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day,
      )

      if (newDate < minDate) {
        console.log('DatePicker: Date is before minDate')
        return
      }

      // Format date as YYYY-MM-DD
      const formattedDate = format(newDate, 'yyyy-MM-dd')

      if (onDateSelect) {
        console.log('DatePicker: Calling onDateSelect with', formattedDate)
        onDateSelect(formattedDate)
      }

      // Close the popover after selection
      if (onToggle) {
        console.log('DatePicker: Calling onToggle to close popover')
        onToggle()
      }
    },
    [currentDate, minDate, onDateSelect, onToggle],
  )

  const handlePrevMonth = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1,
      )
      setCurrentDate(newDate)
    },
    [currentDate],
  )

  const handleNextMonth = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1,
      )
      setCurrentDate(newDate)
    },
    [currentDate],
  )

  const handleQuickDateSelect = React.useCallback(
    (date: Date, method: 'calendar' | 'thisWeek' | 'nextWeek' = 'calendar') => {
      const formattedDate = format(date, 'yyyy-MM-dd')
      if (onDateSelect) {
        onDateSelect(formattedDate)
      }
      if (onToggle) {
        onToggle()
      }
      setSelectionMethod(method)
    },
    [onDateSelect, onToggle],
  )

  const handleThisWeekSelection = () => {
    const today = new Date()
    const endOfWeek = new Date(today)
    endOfWeek.setDate(today.getDate() + (6 - today.getDay()))

    // Set the date and track that it was selected via "This Week" button
    handleQuickDateSelect(endOfWeek, 'thisWeek')
    setOpen(false)
  }

  const handleNextWeekSelection = () => {
    const today = new Date()
    const endOfNextWeek = new Date(today)
    endOfNextWeek.setDate(today.getDate() + (13 - today.getDay()))

    // Set the date and track that it was selected via "Next Week" button
    handleQuickDateSelect(endOfNextWeek, 'nextWeek')
    setOpen(false)
  }

  const handleCalendarSelect = (date: Date | undefined) => {
    if (onDateSelect) {
      onDateSelect(date ? format(date, 'yyyy-MM-dd') : '')
    }
    if (onToggle) {
      onToggle()
    }
    setSelectionMethod('calendar')
    setOpen(false)
  }

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // Custom styling for the calendar
  const customClassNames = {
    button:
      'hover:bg-[#252e3f] text-gray-300 hover:text-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#141821]',
    day_selected:
      'bg-teal-500 text-gray-900 hover:bg-teal-600 hover:text-gray-900 focus:ring-teal-500',
    day_today: 'bg-[#1c2230] text-gray-300',
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <input
        type="hidden"
        name={name}
        id={`${name}-input`}
        defaultValue={defaultValue}
        aria-label={`Selected date: ${value ? format(new Date(value), 'dd MMMM yyyy') : 'No date selected'}`}
        suppressHydrationWarning
      />

      {/* Trigger Button wrapped in Popover.Trigger */}
      <Popover.Trigger asChild>
        <button
          type="button"
          id={`${name}-trigger`}
          aria-label={`Select date${value ? `, selected date is ${format(new Date(value), 'dd MMMM yyyy')}` : ''}`}
          disabled={pending}
          suppressHydrationWarning
          className={cn(
            'flex w-full items-center justify-between rounded-md border border-gray-700 bg-[#141821]',
            'px-2 py-1',
            'text-xs',
            'whitespace-normal text-left text-gray-300 shadow-sm',
            'h-auto min-h-[2.5rem]',
            'dropdown-trigger hover:border-teal-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500',
            pending && 'cursor-not-allowed opacity-50',
            className,
          )}
        >
          <span className="flex-grow text-gray-300" suppressHydrationWarning>
            {isClient
              ? value
                ? (() => {
                    const selectedDate = new Date(value)

                    // Only show week ranges for dates selected via the specific buttons
                    if (selectionMethod === 'thisWeek') {
                      const today = new Date()
                      const startOfThisWeek = new Date(today)
                      startOfThisWeek.setDate(today.getDate() - today.getDay())
                      const endOfThisWeek = new Date(today)
                      endOfThisWeek.setDate(
                        today.getDate() + (6 - today.getDay()),
                      )

                      return `This Week (${format(startOfThisWeek, 'MMM d')} - ${format(endOfThisWeek, 'MMM d')})`
                    } else if (selectionMethod === 'nextWeek') {
                      const today = new Date()
                      const startOfNextWeek = new Date(today)
                      startOfNextWeek.setDate(
                        today.getDate() + (7 - today.getDay()),
                      )
                      const endOfNextWeek = new Date(today)
                      endOfNextWeek.setDate(
                        today.getDate() + (13 - today.getDay()),
                      )

                      return `Next Week (${format(startOfNextWeek, 'MMM d')} - ${format(endOfNextWeek, 'MMM d')})`
                    }

                    // Always show the specific date format for calendar selections
                    return format(selectedDate, 'dd MMMM yyyy')
                  })()
                : placeholder
              : placeholder}
          </span>
          <CalendarIcon
            className="ml-1 h-4 w-4 flex-shrink-0 text-gray-400 transition-colors hover:text-teal-500"
            aria-hidden="true"
          />
        </button>
      </Popover.Trigger>

      {/* Calendar Dropdown wrapped in Popover.Portal and Popover.Content */}
      <Popover.Portal>
        <Popover.Content
          sideOffset={4}
          align="start"
          className="z-50"
          onOpenAutoFocus={(e) => e.preventDefault()}
          data-datepicker-popover
        >
          <div
            id={`${name}-calendar`}
            role="dialog"
            aria-label="Date picker calendar"
          >
            <div
              className="dropdown-backdrop w-[280px] rounded-lg border border-gray-700/50 bg-[#141821]/95 p-4 shadow-lg"
              role="application"
              aria-label="Calendar"
            >
              <div
                className="mb-4 px-3"
                role="group"
                aria-label="Quick date selection"
              >
                <div className="flex items-center justify-between space-x-2">
                  <button
                    type="button"
                    id={`${name}-today`}
                    aria-label="Select today"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleQuickDateSelect(new Date(), 'calendar')
                    }}
                    className="flex-1 rounded bg-[#1c2230] py-1.5 text-sm text-teal-500 transition-colors hover:bg-[#252e3f] hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#141821] active:scale-95 active:transform"
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    id={`${name}-tomorrow`}
                    aria-label="Select tomorrow"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      const tomorrow = new Date()
                      tomorrow.setDate(tomorrow.getDate() + 1)
                      handleQuickDateSelect(tomorrow, 'calendar')
                    }}
                    className="flex-1 rounded bg-[#1c2230] py-1.5 text-sm text-teal-500 transition-colors hover:bg-[#252e3f] hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#141821] active:scale-95 active:transform"
                  >
                    Tomorrow
                  </button>
                </div>
                <div className="mt-2 flex items-center justify-between space-x-2">
                  <button
                    type="button"
                    id={`${name}-this-week`}
                    aria-label="Select end of this week"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      const thisWeek = new Date()
                      const endOfThisWeek = new Date(thisWeek)
                      // Adjust to end of week (Saturday)
                      endOfThisWeek.setDate(
                        thisWeek.getDate() + (6 - thisWeek.getDay()),
                      )
                      // Mark as selected via "This Week" button
                      handleQuickDateSelect(endOfThisWeek, 'thisWeek')
                    }}
                    className="flex-1 rounded bg-[#1c2230] py-1.5 text-sm text-teal-500 transition-colors hover:bg-[#252e3f] hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#141821] active:scale-95 active:transform"
                  >
                    This Week
                  </button>
                  <button
                    type="button"
                    id={`${name}-next-week`}
                    aria-label="Select next week"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      const nextWeek = new Date()
                      const endOfNextWeek = new Date(nextWeek)
                      // Move to end of next week
                      endOfNextWeek.setDate(
                        nextWeek.getDate() + (13 - nextWeek.getDay()),
                      )
                      // Mark as selected via "Next Week" button
                      handleQuickDateSelect(endOfNextWeek, 'nextWeek')
                    }}
                    className="flex-1 rounded bg-[#1c2230] py-1.5 text-sm text-teal-500 transition-colors hover:bg-[#252e3f] hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#141821] active:scale-95 active:transform"
                  >
                    Next Week
                  </button>
                </div>
              </div>

              <div className="mb-4 px-3">
                <div
                  className="text-xs text-gray-400"
                  id={`${name}-calendar-label`}
                >
                  Or select a specific date:
                </div>
              </div>

              <div
                className="calendar-navigation mb-4 flex items-center justify-between"
                role="group"
                aria-label="Calendar navigation"
              >
                <button
                  onClick={handlePrevMonth}
                  type="button"
                  id={`${name}-prev-month`}
                  aria-label="Previous month"
                  className="rounded-md p-1 text-gray-400 transition-colors hover:bg-[#1c2230] hover:text-teal-500"
                >
                  <ChevronLeft
                    className="h-4 w-4"
                    data-testid="chevron-left"
                    aria-hidden="true"
                  />
                </button>
                <div
                  className="font-medium text-gray-300"
                  role="heading"
                  aria-level={2}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </div>
                <button
                  onClick={handleNextMonth}
                  type="button"
                  id={`${name}-next-month`}
                  aria-label="Next month"
                  className="rounded-md p-1 text-gray-400 transition-colors hover:bg-[#1c2230] hover:text-teal-500"
                >
                  <ChevronRight
                    className="h-4 w-4"
                    data-testid="chevron-right"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="mb-2 grid grid-cols-7 gap-1" role="row">
                {days.map((day) => (
                  <div
                    key={day}
                    className="text-center text-[0.8rem] font-medium text-gray-400"
                    role="columnheader"
                    aria-label={day}
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div
                className="grid grid-cols-7 gap-1"
                data-testid="calendar-grid"
                role="grid"
                aria-labelledby={`${name}-calendar-label`}
              >
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                  <div
                    key={`empty-${index}`}
                    className="h-8 w-8"
                    role="gridcell"
                    aria-hidden="true"
                  />
                ))}
                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const day = index + 1
                  const currentDateToCheck = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day,
                  )
                  const isDisabled = currentDateToCheck < minDate
                  const isSelected =
                    selectedDate?.getDate() === day &&
                    selectedDate?.getMonth() === currentDate.getMonth() &&
                    selectedDate?.getFullYear() === currentDate.getFullYear()
                  const isToday =
                    today.getDate() === day &&
                    today.getMonth() === currentDate.getMonth() &&
                    today.getFullYear() === currentDate.getFullYear()

                  const formattedDate = format(
                    currentDateToCheck,
                    'dd MMMM yyyy',
                  )

                  return (
                    <button
                      key={day}
                      type="button"
                      id={`${name}-day-${day}`}
                      data-day={day}
                      onClick={handleDateSelect}
                      disabled={isDisabled || pending}
                      aria-label={`${formattedDate}${isToday ? ', Today' : ''}${isSelected ? ', Selected' : ''}`}
                      aria-selected={isSelected}
                      aria-disabled={isDisabled || pending}
                      aria-current={isToday ? 'date' : undefined}
                      role="gridcell"
                      tabIndex={isSelected ? 0 : -1}
                      className={cn(
                        'calendar-day flex h-8 w-8 items-center justify-center rounded-md text-sm',
                        'transition-colors hover:bg-[#1c2230] hover:text-teal-400',
                        'focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#141821]',
                        isSelected &&
                          'bg-teal-500 text-white hover:bg-teal-600 hover:text-white',
                        isToday &&
                          !isSelected &&
                          'bg-[#1c2230] text-teal-500 ring-2 ring-teal-500/30',
                        !isSelected && !isToday && 'text-gray-300',
                        (isDisabled || pending) &&
                          'cursor-not-allowed opacity-50 hover:bg-transparent hover:text-gray-300',
                      )}
                      data-testid={`calendar-day-${day}`}
                    >
                      <span aria-hidden="true">{day}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

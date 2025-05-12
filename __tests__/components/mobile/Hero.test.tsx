import { render, screen, fireEvent, act } from '@testing-library/react'
import { Hero } from '@/components/mobile/Hero'

describe('Mobile Hero Call Button', () => {
  const originalWindow = window

  beforeEach(() => {
    // Mock window.location
    Object.defineProperty(window, 'location', {
      value: { href: '' },
      writable: true
    })
  })

  afterEach(() => {
    // Restore original window
    Object.defineProperty(window, 'location', {
      value: originalWindow.location,
      writable: true
    })
    
    // Clear all timers
    jest.clearAllTimers()
  })

  it('handles call button click correctly with visual feedback', () => {
    jest.useFakeTimers()
    
    render(<Hero />)
    
    const callButton = screen.getByRole('link', { name: /call now/i })
    
    // Verify initial state
    expect(callButton).toHaveAttribute('href', 'tel:1300420911')
    expect(callButton).toHaveClass('bg-white', 'text-[#00E6CA]')
    expect(callButton.dataset.clicked).toBe(undefined)
    
    // First click should work and show visual feedback
    fireEvent.click(callButton)
    expect(callButton.dataset.clicked).toBe('true')
    expect(callButton).toHaveClass('opacity-50')
    
    // Second immediate click should be prevented
    const mockPreventDefault = jest.fn()
    fireEvent.click(callButton, { preventDefault: mockPreventDefault })
    expect(mockPreventDefault).toHaveBeenCalled()
    expect(callButton.dataset.clicked).toBe('true')
    expect(callButton).toHaveClass('opacity-50')
    
    // After delay, button should reset
    act(() => {
      jest.advanceTimersByTime(2000)
    })
    expect(callButton.dataset.clicked).toBe('false')
    expect(callButton).not.toHaveClass('opacity-50')
    
    jest.useRealTimers()
  })
}) 
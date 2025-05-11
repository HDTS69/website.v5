import { render, screen } from '@testing-library/react'
import BookingSuccessPage from '@/app/booking/success/page'

describe('BookingSuccessPage', () => {
  it('renders thank you message and components', () => {
    render(<BookingSuccessPage />)
    
    // Check for main thank you message
    expect(screen.getByText(/Thank You/i)).toBeInTheDocument()
    expect(screen.getByText(/Your booking request has been received/i)).toBeInTheDocument()
    
    // Check for back to home button
    expect(screen.getByRole('button', { name: /back to home/i })).toBeInTheDocument()
    
    // Check for conversion tracking
    expect(screen.getByTestId('conversion-tracking')).toBeInTheDocument()
  })
}) 
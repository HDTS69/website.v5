import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Import the layout and page components using path aliases
import DefaultLayout from '@/app/(default)/layout';
import BookingPage from '@/app/(default)/book/page';

// Mock next/navigation components
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/book'),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

// Mock AOS
jest.mock('aos', () => ({
  init: jest.fn(),
}));

// Mock Google Maps Script
jest.mock('@/components/ui/BookingForm/GoogleMapsScript', () => () => <div data-testid="mock-google-maps"></div>);


describe('Booking Page Layout', () => {
  it('should render the default layout header and navigation on the booking page', () => {
    render(
      <DefaultLayout>
        <BookingPage />
      </DefaultLayout>
    );

    // TODO: Add specific assertions here using screen.getBy...
    // Example: expect(screen.getByAltText(/HD Trade Services Logo/i)).toBeInTheDocument();
    // Example: expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument();
    
    // Basic check for page content
    expect(screen.getByRole('heading', { name: /Book Your Service/i, level: 1 })).toBeInTheDocument();

  });
}); 
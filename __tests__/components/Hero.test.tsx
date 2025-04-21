import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hero } from '@/components/Hero';
import { useMediaQuery } from '@/hooks/useMediaQuery';

// Mock the useMediaQuery hook
jest.mock('@/hooks/useMediaQuery');
const mockUseMediaQuery = useMediaQuery as jest.Mock;

describe('Hero Component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders desktop view correctly', () => {
    // Mock desktop view
    mockUseMediaQuery.mockReturnValue(false);

    render(<Hero />);

    // Check for main heading
    expect(screen.getByRole('heading', { name: /trade services/i })).toBeInTheDocument();
    
    // Check for description text
    expect(screen.getByText(/professional plumbing/i)).toBeInTheDocument();
    
    // Check for hero image
    const heroImage = screen.getByAltText(/hero image/i);
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveClass('object-cover');
    
    // Check for booking form
    expect(screen.getByTestId('booking-form')).toBeInTheDocument();
  });

  it('renders mobile view correctly', () => {
    // Mock mobile view
    mockUseMediaQuery.mockReturnValue(true);

    render(<Hero />);

    // Check for mobile-specific elements
    expect(screen.getByTestId('mobile-hero')).toBeInTheDocument();
  });

  it('applies scroll animations correctly', () => {
    mockUseMediaQuery.mockReturnValue(false);
    render(<Hero />);

    // Check initial animation classes
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toHaveClass('opacity-0');

    // Simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    // Check animation classes after scroll
    expect(heroSection).toHaveClass('opacity-100');
  });

  it('handles scroll-to-top functionality', () => {
    mockUseMediaQuery.mockReturnValue(false);
    const scrollToSpy = jest.spyOn(window, 'scrollTo');
    
    render(<Hero />);
    
    const scrollTopButton = screen.getByTestId('scroll-top-button');
    fireEvent.click(scrollTopButton);
    
    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
  });
}); 
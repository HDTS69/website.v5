import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LocationLayout from '@/components/layouts/LocationLayout';

// Mock components
jest.mock('@/components/ui/PaymentIcons', () => ({
  __esModule: true,
  default: () => <div data-testid="payment-icons">Payment Icons</div>
}));

jest.mock('@/components/ui/BookingForm', () => ({
  __esModule: true,
  default: () => <div data-testid="booking-form">Booking Form</div>
}));

jest.mock('@/components/ui/GoogleReviews', () => ({
  __esModule: true,
  default: () => <div data-testid="google-reviews">Google Reviews</div>
}));

jest.mock('@/components/ui/Testimonials', () => ({
  __esModule: true,
  default: () => <div data-testid="testimonials">Testimonials</div>
}));

jest.mock('@/components/ui/LordIcon', () => ({
  __esModule: true,
  default: () => <div data-testid="lord-icon">Lord Icon</div>
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} data-testid="next-image" />
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, ...props }: any) => <a {...props}>{children}</a>
}));

const mockProps = {
  locationName: 'Test Location',
  heroImage: '/test-hero.jpg',
  serviceAreas: [
    {
      name: 'Area 1',
      postcodes: ['2000', '2001']
    },
    {
      name: 'Area 2',
      postcodes: ['2002', '2003']
    }
  ],
  emergencyServices: [
    {
      title: 'Emergency Service 1',
      description: 'Description 1',
      icon: 'icon1.json'
    },
    {
      title: 'Emergency Service 2',
      description: 'Description 2',
      icon: 'icon2.json'
    }
  ],
  services: [
    {
      category: 'Test Category',
      items: [
        {
          title: 'Test Service',
          description: 'Test Description',
          link: '/test-link'
        }
      ]
    }
  ],
  stats: [
    {
      value: '1000+',
      label: 'Jobs Completed'
    },
    {
      value: '10+',
      label: 'Years Experience'
    },
    {
      value: '4.9',
      label: 'Google Rating'
    },
    {
      value: '500+',
      label: 'Reviews'
    }
  ]
};

describe('LocationLayout', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the location name in hero section', () => {
    render(<LocationLayout {...mockProps} />);
    expect(screen.getByText(mockProps.locationName)).toBeInTheDocument();
  });

  it('renders the hero image', () => {
    render(<LocationLayout {...mockProps} />);
    const heroImage = screen.getByTestId('next-image');
    expect(heroImage).toHaveAttribute('src', mockProps.heroImage);
  });

  it('renders service areas section', () => {
    render(<LocationLayout {...mockProps} />);
    mockProps.serviceAreas.forEach(area => {
      expect(screen.getByText(area.name)).toBeInTheDocument();
      area.postcodes.forEach(postcode => {
        expect(screen.getByText(postcode)).toBeInTheDocument();
      });
    });
  });

  it('renders emergency services section', () => {
    render(<LocationLayout {...mockProps} />);
    mockProps.emergencyServices.forEach(service => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });

  it('renders services grid', () => {
    render(<LocationLayout {...mockProps} />);
    mockProps.services.forEach(serviceCategory => {
      expect(screen.getByText(serviceCategory.category)).toBeInTheDocument();
      serviceCategory.items.forEach(item => {
        expect(screen.getByText(item.title)).toBeInTheDocument();
        expect(screen.getByText(item.description)).toBeInTheDocument();
      });
    });
  });

  it('renders stats section', () => {
    render(<LocationLayout {...mockProps} />);
    mockProps.stats.forEach(stat => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it('renders call-to-action buttons', () => {
    render(<LocationLayout {...mockProps} />);
    expect(screen.getByText(/book now/i)).toBeInTheDocument();
    expect(screen.getByText(/call us/i)).toBeInTheDocument();
  });

  it('renders all required sections', () => {
    render(<LocationLayout {...mockProps} />);
    expect(screen.getByTestId('payment-icons')).toBeInTheDocument();
    expect(screen.getByTestId('booking-form')).toBeInTheDocument();
    expect(screen.getByTestId('google-reviews')).toBeInTheDocument();
    expect(screen.getByTestId('testimonials')).toBeInTheDocument();
  });
}); 
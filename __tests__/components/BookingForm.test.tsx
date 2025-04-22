import { render, fireEvent, screen } from '@testing-library/react';
import { BookingForm } from '@/components/ui/BookingForm/BookingForm';

describe('BookingForm Service Selection', () => {
  it('should allow selection of multiple main service categories', () => {
    render(<BookingForm />);
    
    // Open services dropdown
    const servicesDropdown = screen.getByText('Services Required');
    fireEvent.click(servicesDropdown);
    
    // Select Plumbing
    const plumbingCheckbox = screen.getByRole('checkbox', { name: 'Plumbing' });
    fireEvent.click(plumbingCheckbox);
    
    // Select Gas Fitting
    const gasFittingCheckbox = screen.getByRole('checkbox', { name: 'Gas Fitting' });
    fireEvent.click(gasFittingCheckbox);
    
    // Both should be checked
    expect(plumbingCheckbox).toBeChecked();
    expect(gasFittingCheckbox).toBeChecked();
  });

  it('should allow independent selection of sub-services', () => {
    render(<BookingForm />);
    
    // Open services dropdown
    const servicesDropdown = screen.getByText('Services Required');
    fireEvent.click(servicesDropdown);
    
    // Expand Plumbing category
    const plumbingHeader = screen.getByText('Plumbing');
    fireEvent.click(plumbingHeader);
    
    // Select a sub-service
    const hotWaterCheckbox = screen.getByRole('checkbox', { name: 'Hot Water Systems' });
    fireEvent.click(hotWaterCheckbox);
    
    // Only the sub-service should be checked
    expect(hotWaterCheckbox).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Plumbing' })).not.toBeChecked();
  });
}); 
import { render, fireEvent, screen } from '@testing-library/react';
import { AddressInput } from '@/components/ui/BookingForm/AddressInput';

// Mock the Google Maps API
const mockGoogleMaps = {
  maps: {
    places: {
      Autocomplete: jest.fn().mockImplementation(() => ({
        addListener: jest.fn(),
        getPlace: jest.fn().mockReturnValue({ formatted_address: '123 Test St' }),
      })),
    },
  },
};

global.google = mockGoogleMaps;

describe('AddressInput Google Places Styling', () => {
  it('should apply correct styles to Google Places suggestions', () => {
    render(
      <AddressInput
        value=""
        onChange={() => {}}
        onFocus={() => {}}
        manualEntry={false}
        onManualEntryChange={() => {}}
        showManualEntry={true}
      />
    );

    // Get the pac-container element (added by Google Places)
    const pacContainer = document.querySelector('.pac-container');
    if (pacContainer) {
      const styles = window.getComputedStyle(pacContainer);
      
      expect(styles.backgroundColor).toBe('#000000');
      expect(styles.border).toBe('1px solid #333333');
      expect(styles.borderRadius).toBe('0.5rem');
      
      // Check suggestion items
      const pacItems = pacContainer.querySelectorAll('.pac-item');
      pacItems.forEach(item => {
        const itemStyles = window.getComputedStyle(item);
        expect(itemStyles.backgroundColor).toBe('#000000');
        expect(itemStyles.color).toBe('#00E6CA');
        
        // Check main text
        const mainText = item.querySelector('.pac-item-query');
        if (mainText) {
          const mainTextStyles = window.getComputedStyle(mainText);
          expect(mainTextStyles.color).toBe('#00E6CA');
        }
        
        // Check secondary text
        const secondaryText = item.querySelector('.pac-secondary-text');
        if (secondaryText) {
          const secondaryTextStyles = window.getComputedStyle(secondaryText);
          expect(secondaryTextStyles.color).toBe('#00E6CA');
        }
      });
    }
  });
}); 
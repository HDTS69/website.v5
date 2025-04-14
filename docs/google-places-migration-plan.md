# Google Places API Migration Plan

## Background

Google has announced that the current `google.maps.places.Autocomplete` API will be deprecated as of March 1st, 2025. The replacement is the new `google.maps.places.PlaceAutocompleteElement` which is a Web Component rather than a JavaScript class.

## Timeline

- **Now to Q3 2024**: Continue using existing implementation with monitoring
- **Q4 2024**: Develop and test new implementation using PlaceAutocompleteElement
- **Q1 2025**: Deploy new implementation and remove legacy code before March 1st, 2025

## Key Differences

| Current (Autocomplete) | New (PlaceAutocompleteElement) |
|------------------------|--------------------------------|
| JavaScript class | Web Component |
| Attaches to existing input | Renders its own UI |
| Event-based API | Event-based API with different event names |
| More control over styling | Less control but more consistent UI |

## Implementation Steps

### 1. Create a New Hook (Q4 2024)

Create a new `usePlaceAutocompleteElement` hook that will:

```tsx
import { useEffect, useRef, useState } from 'react';

export function usePlaceAutocompleteElement({
  onPlaceSelect,
  disabled = false,
  config = {}
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const autocompleteRef = useRef<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Initialize the PlaceAutocompleteElement
  useEffect(() => {
    if (disabled || !containerRef.current || typeof window === 'undefined') return;
    
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      console.warn('Google Maps not loaded yet');
      return;
    }
    
    try {
      // Clean up any existing instance
      if (autocompleteRef.current) {
        containerRef.current.removeChild(autocompleteRef.current);
      }
      
      // Create new instance
      autocompleteRef.current = new window.google.maps.places.PlaceAutocompleteElement({
        inputPlaceholder: config.placeholder || 'Enter a location',
        types: config.types || ['address'],
        componentRestrictions: { country: config.country || 'au' },
        fields: config.fields || [
          'address_components', 
          'formatted_address', 
          'place_id', 
          'geometry'
        ]
      });
      
      // Add to DOM
      containerRef.current.appendChild(autocompleteRef.current);
      
      // Add event listener
      autocompleteRef.current.addEventListener('gmp-placeselect', (event) => {
        const place = event.detail.place;
        onPlaceSelect(place.formattedAddress, place);
      });
      
      setIsInitialized(true);
    } catch (error) {
      console.error('Error initializing PlaceAutocompleteElement:', error);
    }
    
    // Cleanup function
    return () => {
      if (autocompleteRef.current && containerRef.current) {
        try {
          containerRef.current.removeChild(autocompleteRef.current);
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
    };
  }, [disabled, config, onPlaceSelect]);
  
  return {
    containerRef,
    isInitialized
  };
}
```

### 2. Create a New Component (Q4 2024)

Create a new `PlaceAutocompleteInput` component:

```tsx
import { usePlaceAutocompleteElement } from './usePlaceAutocompleteElement';

export function PlaceAutocompleteInput({
  onPlaceSelect,
  disabled,
  placeholder,
  country = 'au',
  className
}) {
  const { containerRef, isInitialized } = usePlaceAutocompleteElement({
    onPlaceSelect,
    disabled,
    config: {
      placeholder,
      country,
      types: ['address']
    }
  });
  
  return (
    <div className={className}>
      <div 
        ref={containerRef} 
        className="place-autocomplete-container"
      />
      
      {!isInitialized && (
        <div className="fallback-input">
          <input 
            type="text" 
            placeholder={placeholder || "Enter address manually"} 
            disabled={disabled}
          />
        </div>
      )}
    </div>
  );
}
```

### 3. Update the Script Loading (Q4 2024)

Update the Google Maps script loading to include the new libraries:

```tsx
// GoogleMapsScript.tsx
script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&v=weekly&callback=initGooglePlacesAutocomplete&loading=async`;
```

### 4. Test with Feature Flag (Q1 2025)

Add a feature flag to toggle between implementations:

```tsx
function AddressField({ useLegacy = false, ...props }) {
  if (useLegacy) {
    return <EnhancedAddressInput {...props} />;
  }
  
  return <PlaceAutocompleteInput {...props} />;
}
```

### 5. Full Migration (Before March 1st, 2025)

1. Remove the feature flag
2. Remove all legacy components
3. Update all forms to use the new component
4. Update all tests
5. Remove all legacy imports and exports

## CSS Styling Considerations

The `PlaceAutocompleteElement` will require additional styling to match our design system. 

Example CSS:

```css
/* Target the web component */
gmp-placeautocomplete {
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
}

/* Target the input inside the web component (using shadow DOM pierce selector) */
gmp-placeautocomplete::part(input) {
  width: 100%;
  padding: 0.75rem;
  font-family: inherit;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}
```

## Testing Strategy

1. Create unit tests for the new hook
2. Create integration tests with mock Google API
3. Create end-to-end tests with real API calls
4. Test on mobile devices
5. Test with keyboard navigation
6. Test with screen readers

## Documentation

Update internal documentation to explain:
- The reason for migration
- How to use the new components
- CSS customization options
- Common troubleshooting items

## Resources

- [Places API Documentation](https://developers.google.com/maps/documentation/javascript/places)
- [PlaceAutocompleteElement Reference](https://developers.google.com/maps/documentation/javascript/reference/places-widget#PlaceAutocompleteElement)
- [Google Maps Web Components](https://developers.google.com/maps/documentation/javascript/web-components) 
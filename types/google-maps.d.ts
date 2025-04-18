/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// TypeScript Definitions for PlaceAutocompleteElement Web Component

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gmp-place-autocomplete': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        // Define attributes the component accepts
        'component-restrictions'?: string; // e.g., "country:au"
        'placeholder'?: string;
        'required'?: boolean;
        'value'?: string; // If we need to control its value programmatically
        'id'?: string;
        'name'?: string;
        // Add className for basic styling attempts
        className?: string;
      };
    }
  }
  // Augment HTMLElement to potentially include the 'place' property
  // Note: This might not be strictly necessary if we cast event.target
  interface HTMLElement {
      place?: google.maps.places.PlaceResult | null;
  }
}

// Define a more specific type for the custom event if possible
// Using 'any' for the event target initially for simplicity
interface PlaceAutocompleteCustomEvent extends Event {
    target: HTMLElement & { value?: string }; // Target is an HTMLElement, might have place and value
}

// Export something to make it a module (if needed, often not for global declarations)
export {}; 
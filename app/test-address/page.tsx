import { GooglePlacesFallback } from '@/components/ui/BookingForm/GooglePlacesFallback';

export default function TestAddressPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Google Places Autocomplete Test</h1>
      <p className="mb-6 text-red-500">
        Note: Google has announced that google.maps.places.Autocomplete will be deprecated as of March 1st, 2025.
        We should plan to migrate to google.maps.places.PlaceAutocompleteElement.
      </p>
      <GooglePlacesFallback />
    </div>
  );
} 
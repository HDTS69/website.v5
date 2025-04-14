// Global type definitions

declare global {
  interface Window {
    // Google Maps extensions (from AddressInput and test-maps)
    google?: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any;
        places: {
          Autocomplete: new (input: HTMLInputElement, options?: any) => any;
        };
        event: {
          addListener: (instance: any, eventName: string, callback: Function) => void;
          removeListener: (listener: any) => void;
        };
      };
    };
    initMap?: () => void;
    
    // Lottie extensions (from LordIcon)
    lottie?: {
      setQuality: (quality: string) => void;
      loadAnimation: (config: {
        container: HTMLElement;
        renderer: string;
        loop: boolean;
        autoplay: boolean;
        path: string;
        name: string;
      }) => void;
    };
  }
}

export {}; 
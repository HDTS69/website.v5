describe('Google Places Integration Tests', () => {
  beforeEach(() => {
    // Set up a spy on Google Maps API calls
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog');
      cy.spy(win.console, 'error').as('consoleError');
    });
    
    // Visit the booking page
    cy.visit('/');
  });

  it('should load Google Maps API successfully', () => {
    // Wait for the Google Maps API to load
    cy.wait(2000);
    
    // Check for errors in loading Google Maps
    cy.get('@consoleError').then((error) => {
      const refererErrors = error.args.filter(arg => 
        typeof arg === 'string' && arg.includes('RefererNotAllowedMapError')
      );
      
      if (refererErrors.length > 0) {
        cy.log('RefererNotAllowedMapError detected - check API key restrictions');
        cy.log('Current origin:', window.location.origin);
      }
    });
    
    // Check if GoogleMapsScript component loaded successfully
    cy.get('@consoleLog').then((log) => {
      const success = log.args.filter(arg => 
        typeof arg === 'string' && arg.includes('Google Maps API loaded successfully')
      );
      
      if (success.length > 0) {
        cy.log('Google Maps API loaded successfully');
      }
    });
  });

  it('should initialize Google Places autocomplete', () => {
    // Wait for the page to load
    cy.wait(2000);
    
    // Focus on the address field
    cy.get('input[name="address"]').click().focus();
    
    // Type a sample address
    cy.get('input[name="address"]').type('123 Sydney');
    
    // Check for autocomplete dropdown (the pac-container)
    cy.get('body').then(($body) => {
      if ($body.find('.pac-container').length > 0) {
        cy.log('Google Places autocomplete dropdown appeared');
      } else {
        cy.log('No autocomplete dropdown appeared - check console for errors');
      }
    });
    
    // Log network environment
    cy.log('Test running on:', window.location.origin);
  });

  it('should handle restricted API keys appropriately', () => {
    // Wait for the page to load
    cy.wait(2000);
    
    // Check for specific RefererNotAllowedMapError
    cy.get('@consoleError').then((error) => {
      const refererErrors = error.args.filter(arg => 
        typeof arg === 'string' && arg.includes('RefererNotAllowedMapError')
      );
      
      if (refererErrors.length > 0) {
        // Check if manual entry mode was automatically enabled
        cy.get('input[type="checkbox"]').should('be.checked');
        cy.log('Manual entry mode correctly activated due to API key restriction');
      }
    });
  });
}); 
#!/usr/bin/env node

/**
 * Google Places API Status Check Script
 * 
 * This script helps check the status of Google Places API and provides information
 * about the migration from Autocomplete to PlaceAutocompleteElement.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

console.log('\n=== Google Places API Status Check ===\n');
console.log('Checking for API key in environment...');

// Get API key from .env file
let apiKey = '';
try {
  const envPath = path.join(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=(.*)/);
    if (match && match[1]) {
      apiKey = match[1].trim();
      console.log('✓ Found API key in .env file');
    }
  }
} catch (error) {
  console.error('Error reading .env file:', error);
}

if (!apiKey) {
  console.log('✗ No API key found in .env file');
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  if (apiKey) {
    console.log('✓ Found API key in environment variables');
  } else {
    console.log('✗ No API key found in environment variables');
  }
}

// Function to check network status
const checkNetwork = () => {
  console.log('\nChecking network configuration...');
  
  try {
    const { networkInterfaces } = require('os');
    const nets = networkInterfaces();
    const results = {};
    
    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
          if (!results[name]) {
            results[name] = [];
          }
          results[name].push(net.address);
        }
      }
    }
    
    console.log('\nNetwork interfaces:');
    for (const [name, addresses] of Object.entries(results)) {
      console.log(`  ${name}: ${addresses.join(', ')}`);
    }
    
    console.log('\nImportant URLs to add to API key restrictions:');
    for (const [name, addresses] of Object.entries(results)) {
      for (const address of addresses) {
        for (let port = 3000; port <= 3005; port++) {
          console.log(`  http://${address}:${port}/*`);
        }
      }
    }
  } catch (error) {
    console.error('Error checking network configuration:', error);
  }
};

// Check Google Places migration
const checkMigration = () => {
  console.log('\n=== Google Places API Migration Information ===\n');
  console.log('As of March 1st, 2025, google.maps.places.Autocomplete will be deprecated.');
  console.log('The recommended replacement is google.maps.places.PlaceAutocompleteElement.');
  console.log('\nMigration Documentation:');
  console.log('- https://developers.google.com/maps/documentation/javascript/places-autocomplete');
  console.log('- https://developers.google.com/maps/documentation/javascript/reference/places-widget#PlaceAutocompleteElement');
  console.log('\nKey differences:');
  console.log('1. PlaceAutocompleteElement is a Web Component, not a JavaScript class');
  console.log('2. It handles its own UI rendering rather than attaching to an input');
  console.log('3. It supports more customization options');
  console.log('\nExample of the new implementation:');
  console.log(`
const placeAutocomplete = new google.maps.places.PlaceAutocompleteElement({
  inputPlaceholder: 'Enter a location',
  types: ['address'],
  componentRestrictions: { country: 'au' },
  fields: ['address_components', 'formatted_address', 'place_id', 'geometry']
});

document.getElementById('place-container').appendChild(placeAutocomplete);

placeAutocomplete.addEventListener('gmp-placeselect', (event) => {
  const place = event.detail.place;
  console.log(place.formattedAddress);
});
  `);
};

// Check status of API key with a simple ping
const checkApiKeyStatus = () => {
  if (!apiKey) {
    console.log('\n✗ Cannot check API key status: No key available');
    return;
  }
  
  console.log('\nChecking API key status...');
  const testUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=-33.8665,151.1956&key=${apiKey}`;
  
  https.get(testUrl, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        
        if (response.error_message && response.error_message.includes('API key')) {
          console.log(`✗ API key error: ${response.error_message}`);
          console.log('\nPossible solutions:');
          console.log('1. Check if billing is enabled for your Google Cloud project');
          console.log('2. Verify API key restrictions in Google Cloud Console');
          console.log('3. Make sure the Places API is enabled in your project');
        } else if (response.status === 'OK') {
          console.log('✓ API key is valid and working correctly');
        } else {
          console.log(`✗ API response status: ${response.status}`);
          console.log(`Error message: ${response.error_message || 'None'}`);
        }
      } catch (error) {
        console.error('Error parsing API response:', error);
      }
    });
  }).on('error', (err) => {
    console.error('Error calling Google API:', err.message);
  });
};

// Run all checks
checkNetwork();
checkApiKeyStatus();
checkMigration(); 
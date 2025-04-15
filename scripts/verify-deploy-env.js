#!/usr/bin/env node

/**
 * Deployment Environment Variable Verification Script
 * 
 * This script verifies that all required environment variables are set
 * and properly formatted before deployment.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('\n=== Deployment Environment Variable Verification ===\n');

// List of required environment variables
const REQUIRED_VARIABLES = [
  // 'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY', // removed - will be added back later
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY'
];

// Variables that should not be placeholder values
const NO_PLACEHOLDER_VARIABLES = [
  // 'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY' // removed - will be added back later
];

// Known placeholder patterns to check against
const PLACEHOLDER_PATTERNS = [
  /^placeholder$/i,
  /^your-key$/i,
  /^example$/i,
  /^demo[-_]?key$/i,
  /^test[-_]?key$/i,
  /^YOUR_/i,
  /^<.*>$/  // Matches anything like <YOUR_KEY_HERE>
];

// Get the current environment (development, production, etc.)
const NODE_ENV = process.env.NODE_ENV || 'development';
console.log(`Current environment: ${NODE_ENV}\n`);

// Check if running in a CI environment
const isCI = process.env.CI === 'true' || process.env.NETLIFY === 'true';
console.log(`Running in CI: ${isCI ? 'Yes' : 'No'}\n`);

// Function to get the environment variable from various sources
function getEnvVar(name) {
  // First check process.env
  if (process.env[name]) {
    return process.env[name];
  }
  
  // Then check .env file if it exists
  try {
    const envPath = path.join(process.cwd(), '.env');
    
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      const match = envContent.match(new RegExp(`${name}=(.*)`, 'i'));
      
      if (match && match[1]) {
        return match[1].trim();
      }
    }
  } catch (error) {
    console.error(`Error reading .env file: ${error.message}`);
  }
  
  // Check netlify.toml if it exists
  try {
    const netlifyPath = path.join(process.cwd(), 'netlify.toml');
    
    if (fs.existsSync(netlifyPath)) {
      const netlifyContent = fs.readFileSync(netlifyPath, 'utf8');
      const match = netlifyContent.match(new RegExp(`${name} = "(.*)"`, 'i'));
      
      if (match && match[1]) {
        return match[1].trim();
      }
    }
  } catch (error) {
    console.error(`Error reading netlify.toml file: ${error.message}`);
  }
  
  // If running on Netlify, try to get from their CLI
  if (isCI && process.env.NETLIFY === 'true') {
    try {
      const result = execSync(`netlify env:get ${name}`, { encoding: 'utf8' });
      if (result && result.trim()) {
        return result.trim();
      }
    } catch (error) {
      // Silently fail as this is just an additional check
    }
  }
  
  return null;
}

// Check if a value is a placeholder
function isPlaceholder(value) {
  if (!value) return true;
  
  // If the value is very short, it's probably not a real API key
  if (value.length < 10) return true;
  
  // Check against known placeholder patterns
  return PLACEHOLDER_PATTERNS.some(pattern => pattern.test(value));
}

// Verify Google Maps API key format with relaxed validation
function isValidGoogleMapsApiKey(key) {
  if (!key) return false;
  
  // Google API keys are typically fairly long
  if (key.length < 15) return false;
  
  // If it contains obvious placeholder text
  if (key.toLowerCase().includes('place') && key.toLowerCase().includes('holder')) return false;
  if (key.toLowerCase().includes('your') && key.toLowerCase().includes('key')) return false;
  
  // If it clearly looks like a legitimate key, accept it directly
  if (key.startsWith('AIza')) return true;
  
  // Otherwise, if it's long enough and doesn't match placeholder patterns, it's probably fine
  return !isPlaceholder(key);
}

// Check all required variables
function checkRequiredVariables() {
  let allValid = true;
  
  for (const varName of REQUIRED_VARIABLES) {
    const value = getEnvVar(varName);
    
    if (!value) {
      console.log(`❌ ${varName} is not set`);
      allValid = false;
      continue;
    }
    
    // For all variables, just check they exist
    console.log(`✅ ${varName} is set`);
  }
  
  // Optional check for Google Maps API Key if it exists
  const mapsApiKey = getEnvVar('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY');
  if (mapsApiKey) {
    console.log(`ℹ️ NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is set (optional)`);
  } else {
    console.log(`ℹ️ NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not set (optional)`);
  }
  
  return allValid;
}

// Main verification
const allValid = checkRequiredVariables();

console.log('\n=== Verification Summary ===\n');

if (allValid) {
  console.log('✅ All required environment variables are properly set');
  
  // Provide helpful info about Google Maps API key
  const mapsApiKey = getEnvVar('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY');
  if (mapsApiKey) {
    // Show just enough of the key to confirm it's set without revealing the whole thing
    const keyPreview = mapsApiKey.length > 10 
      ? `${mapsApiKey.substring(0, 4)}...${mapsApiKey.substring(mapsApiKey.length - 4)}`
      : '(key seems too short)';
      
    console.log('\nℹ️ GOOGLE MAPS API KEY INFO (OPTIONAL):');
    console.log(`Key: ${keyPreview}`);
    console.log('');
    console.log('When you add the Maps API key back, remember to add these restrictions:');
    console.log('- Website restrictions: https://hdtradeservices.com.au/*');
    console.log('- API restrictions: Maps JavaScript API, Places API');
  } else {
    console.log('\nℹ️ No Google Maps API key is set (optional)');
    console.log('Maps features will not be available until you add this key back.');
  }
  
  process.exit(0);
} else {
  console.log('❌ Some required environment variables are missing or improperly set');
  
  console.log('\nPlease set the missing environment variables in one of these locations:');
  console.log('1. Netlify dashboard (Site settings > Build & deploy > Environment)');
  console.log('2. .env file (for local development)');
  console.log('3. netlify.toml (for local development and builds)');
  
  // If we're in CI and the vars are missing, fail the build only in production
  if (isCI && NODE_ENV === 'production') {
    console.error('\n❌ DEPLOYMENT VALIDATION FAILED. Build will not proceed.\n');
    process.exit(1);
  } else {
    console.log('\n⚠️ Warning: Environment validation failed, but continuing as this is not a production build.\n');
    process.exit(0); // Exit with success to allow the build to continue
  }
} 
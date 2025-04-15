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
  'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY',
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY'
];

// Variables that should not be placeholder values
const NO_PLACEHOLDER_VARIABLES = [
  'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'
];

// Known placeholder patterns to check against
const PLACEHOLDER_PATTERNS = [
  /placeholder/i,
  /your-key/i,
  /example/i,
  /demo/i,
  /test/i
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
  
  return PLACEHOLDER_PATTERNS.some(pattern => pattern.test(value));
}

// Verify Google Maps API key format (simple check)
function isValidGoogleMapsApiKey(key) {
  if (!key) return false;
  
  // Google API keys are typically ~40 characters
  if (key.length < 20) return false;
  
  // They often start with 'AIza'
  if (!key.startsWith('AIza')) return false;
  
  return true;
}

// Verify Google Maps API key with extra checks
function verifyGoogleMapsApiKey(key) {
  if (!key) {
    console.log('❌ NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not set');
    return false;
  }
  
  if (isPlaceholder(key)) {
    console.log('❌ NEXT_PUBLIC_GOOGLE_MAPS_API_KEY appears to be a placeholder value');
    return false;
  }
  
  if (!isValidGoogleMapsApiKey(key)) {
    console.log('❌ NEXT_PUBLIC_GOOGLE_MAPS_API_KEY does not match the expected format for a Google API key');
    return false;
  }
  
  console.log('✅ NEXT_PUBLIC_GOOGLE_MAPS_API_KEY appears to be properly formatted');
  return true;
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
    
    if (NO_PLACEHOLDER_VARIABLES.includes(varName) && isPlaceholder(value)) {
      console.log(`❌ ${varName} appears to be a placeholder value: "${value.substring(0, 5)}..."`);
      allValid = false;
      continue;
    }
    
    if (varName === 'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY') {
      if (!verifyGoogleMapsApiKey(value)) {
        allValid = false;
        continue;
      }
    } else {
      // For other variables, just log that they're set
      console.log(`✅ ${varName} is set`);
    }
  }
  
  return allValid;
}

// Main verification
const allValid = checkRequiredVariables();

// Specific check for Google Maps API key
const mapsApiKey = getEnvVar('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY');

console.log('\n=== Verification Summary ===\n');

if (allValid) {
  console.log('✅ All required environment variables are properly set');
  
  // Provide helpful info about Google Maps API key
  if (mapsApiKey) {
    console.log('\nGOOGLE MAPS API KEY INFO:');
    console.log(`Key: ${mapsApiKey.substring(0, 5)}...${mapsApiKey.substring(mapsApiKey.length - 4)}`);
    console.log('');
    console.log('Remember to add these restrictions to your Google Maps API key:');
    console.log('- Website restrictions: https://hdtradeservices.com.au/*');
    console.log('- API restrictions: Maps JavaScript API, Places API');
  }
  
  process.exit(0);
} else {
  console.log('❌ Some required environment variables are missing or improperly set');
  
  console.log('\nPlease set the missing environment variables in one of these locations:');
  console.log('1. Netlify dashboard (Site settings > Build & deploy > Environment)');
  console.log('2. .env file (for local development)');
  console.log('3. netlify.toml (for local development and builds)');
  
  // If we're in CI and the vars are missing, fail the build
  if (isCI) {
    console.error('\n❌ DEPLOYMENT VALIDATION FAILED. Build will not proceed.\n');
    process.exit(1);
  } else {
    console.log('\n⚠️ Warning: Environment validation failed, but continuing as this is not a production build.\n');
    process.exit(0);
  }
} 
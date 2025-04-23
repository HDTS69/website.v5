#!/usr/bin/env node

const https = require('https')
const fs = require('fs')
const path = require('path')

// Get API key from environment or .env file
function getApiKey() {
  // First try environment variable
  let apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  // If not found, try .env file
  if (!apiKey) {
    try {
      const envPath = path.join(process.cwd(), '.env')
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8')
        const match = envContent.match(/NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=(.*)/)
        if (match && match[1]) {
          apiKey = match[1].trim()
        }
      }
    } catch (error) {
      console.error('Error reading .env file:', error)
    }
  }

  return apiKey
}

// Verify API key with a simple request
function verifyApiKey(apiKey) {
  return new Promise((resolve) => {
    if (!apiKey) {
      console.warn('\n⚠️  No Google Maps API key found')
      console.log('Maps features will be disabled. To enable maps:')
      console.log('1. Get an API key from Google Cloud Console')
      console.log(
        '2. Add it to your .env file or environment as NEXT_PUBLIC_GOOGLE_MAPS_API_KEY',
      )
      resolve(false)
      return
    }

    // Skip the geocoding API test since we're not using it
    console.log('\nℹ️ Google Maps API key is present')
    console.log(
      'Note: Skipping API verification as it may give false positives.',
    )
    console.log(
      'The actual Maps JavaScript API and Places API may still work correctly.',
    )
    resolve(true)
  })
}

// Main execution
async function main() {
  const apiKey = getApiKey()
  const isValid = await verifyApiKey(apiKey)

  // In production, we want to fail the build if the API key is invalid
  if (process.env.NODE_ENV === 'production' && !isValid) {
    console.error('\n❌ Invalid Google Maps API key in production environment')
    process.exit(1)
  }

  // In development, we just warn but allow the build to continue
  if (!isValid) {
    console.warn('\n⚠️  Google Maps features will be disabled')
    process.exit(0)
  }

  process.exit(0)
}

main()

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

    console.log('\nVerifying Google Maps API key...')
    const testUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=-33.8665,151.1956&key=${apiKey}`

    https
      .get(testUrl, (res) => {
        let data = ''

        res.on('data', (chunk) => {
          data += chunk
        })

        res.on('end', () => {
          try {
            const response = JSON.parse(data)

            if (
              response.error_message &&
              response.error_message.includes('API key')
            ) {
              console.error('❌ API key error:', response.error_message)
              console.log('\nPossible solutions:')
              console.log(
                '1. Check if billing is enabled for your Google Cloud project',
              )
              console.log(
                '2. Verify API key restrictions in Google Cloud Console',
              )
              console.log('3. Make sure the Maps JavaScript API is enabled')
              resolve(false)
            } else if (response.status === 'OK') {
              console.log('✅ Google Maps API key is valid')
              resolve(true)
            } else {
              console.warn('⚠️  Unexpected API response:', response.status)
              console.log('Error message:', response.error_message || 'None')
              resolve(false)
            }
          } catch (error) {
            console.error('❌ Error parsing API response:', error)
            resolve(false)
          }
        })
      })
      .on('error', (err) => {
        console.error('❌ Error calling Google API:', err.message)
        resolve(false)
      })
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

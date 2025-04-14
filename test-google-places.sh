#!/bin/bash

echo "===== Testing Google Places Integration ====="
echo "1. Killing any running Next.js processes..."
pkill -f "next"

echo "2. Clearing Next.js build cache..."
rm -rf .next/cache

echo "3. Clearing Node modules cache..."
npm cache clean --force

echo "4. Creating API key test file..."
cat > .env.test << EOL
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=$NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
EOL

echo "5. Starting Next.js in development mode..."
echo "Current network address will be detected and logged for API key configuration"
IP_ADDRESS=$(ipconfig getifaddr en0)
echo "Network IP Address: $IP_ADDRESS"
echo "Add this to your Google Cloud Console API key restrictions:"
echo "http://$IP_ADDRESS:3000/*"
echo "http://$IP_ADDRESS:3001/*"
echo "http://$IP_ADDRESS:3002/*"
echo "http://$IP_ADDRESS:3003/*"

# Start Next.js with verbose logging
NODE_OPTIONS="--trace-warnings" npm run dev 
#!/usr/bin/env node

/**
 * Google Maps API Referrer Header Check
 * 
 * This script helps diagnose RefererNotAllowedMapError by checking
 * what referrer headers are being sent to Google Maps API.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { networkInterfaces } = require('os');

console.log('\n=== Google Maps API Referrer Header Checker ===\n');

// Get network interfaces
const getNetworkAddresses = () => {
  const nets = networkInterfaces();
  const results = {};
  
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal addresses
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }
  
  return results;
};

// Create an HTML file with a test Google Maps script
const createTestHTML = (port) => {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Google Maps Referrer Test</title>
  <script>
    // Log referrer information
    console.log('Document referrer:', document.referrer);
    console.log('Location href:', window.location.href);
    console.log('Location origin:', window.location.origin);
    
    // Setup error handling
    window.onerror = function(msg, url, line, col, error) {
      if (msg.includes('RefererNotAllowedMapError')) {
        document.getElementById('error').textContent = 'RefererNotAllowedMapError detected! Google Maps API key restrictions do not allow this referrer.';
        document.getElementById('referrer-value').textContent = document.referrer || window.location.href;
      }
      return false;
    };
    
    // Define the callback function
    window.initMap = function() {
      document.getElementById('status').textContent = 'Google Maps API loaded successfully!';
      
      // Try to create a map
      try {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: -33.8688, lng: 151.2093 },
          zoom: 13
        });
        document.getElementById('map-status').textContent = 'Map initialized successfully!';
      } catch (error) {
        document.getElementById('map-status').textContent = 'Error initializing map: ' + error.message;
      }
    };
  </script>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    .container { margin-top: 20px; }
    #map { height: 300px; width: 100%; background: #f0f0f0; margin-top: 20px; }
    .info { background: #f8f9fa; padding: 15px; border-radius: 6px; margin: 15px 0; }
    .error { background: #fde2e2; color: #c53030; padding: 15px; border-radius: 6px; margin: 15px 0; }
    .success { background: #e6fffa; color: #234e52; padding: 15px; border-radius: 6px; }
    pre { background: #2d3748; color: #e2e8f0; padding: 15px; border-radius: 6px; overflow-x: auto; }
  </style>
</head>
<body>
  <h1>Google Maps API Referrer Test</h1>
  
  <div class="info">
    <p>This page tests if Google Maps API can load with the current referrer.</p>
    <p><strong>Current URL:</strong> <span id="url"></span></p>
    <p><strong>Detected Referrer:</strong> <span id="referrer-value">None detected</span></p>
  </div>
  
  <div id="error" class="error" style="display: none;"></div>
  <div id="status" class="info">Waiting for Google Maps API to load...</div>
  <div id="map-status" class="info">Map not initialized yet</div>
  
  <div id="map"></div>
  
  <div class="container">
    <h2>API Key Restrictions Guide</h2>
    <p>If you're seeing a RefererNotAllowedMapError, add these URLs to your Google Cloud Console API key restrictions:</p>
    <pre id="urls-to-add"></pre>
  </div>
  
  <script>
    document.getElementById('url').textContent = window.location.href;
    document.getElementById('referrer-value').textContent = document.referrer || window.location.href;
    
    // Show error div only if there's an error
    const errorDiv = document.getElementById('error');
    if (errorDiv.textContent) {
      errorDiv.style.display = 'block';
    }
  </script>
  
  <!-- Google Maps script will be added here -->
  <script 
    src="https://maps.googleapis.com/maps/api/js?key=GOOGLE_MAPS_API_KEY&callback=initMap&loading=async&useIP=true"
    async
    defer
    referrerpolicy="no-referrer-when-downgrade"
  ></script>
</body>
</html>
  `;
  
  // Get API key from .env file
  let apiKey = '';
  try {
    const envPath = path.join(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      const match = envContent.match(/NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=(.*)/);
      if (match && match[1]) {
        apiKey = match[1].trim();
      }
    }
  } catch (error) {
    console.error('Error reading .env file:', error);
  }
  
  if (!apiKey) {
    apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  }
  
  if (!apiKey) {
    console.log('❌ No API key found in .env file or environment variables');
    process.exit(1);
  }
  
  // Replace the placeholder with the actual API key
  const finalHtml = html.replace('GOOGLE_MAPS_API_KEY', apiKey);
  
  // Create temp directory if it doesn't exist
  const tempDir = path.join(process.cwd(), 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }
  
  const filePath = path.join(tempDir, 'referrer-test.html');
  fs.writeFileSync(filePath, finalHtml);
  
  return filePath;
};

// Start the server
const startServer = (port) => {
  const filePath = createTestHTML(port);
  
  const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Error loading the test page');
          return;
        }
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  
  server.listen(port, () => {
    const networkAddresses = getNetworkAddresses();
    
    console.log(`\n✅ Referrer test server running on port ${port}`);
    console.log('\nAccess the test page using one of these URLs:');
    console.log(`🔗 http://localhost:${port}/`);
    
    // Print all available network addresses
    for (const [name, addresses] of Object.entries(networkAddresses)) {
      for (const address of addresses) {
        console.log(`🔗 http://${address}:${port}/`);
      }
    }
    
    console.log('\n📋 Add these URLs to your Google Maps API key restrictions:');
    console.log(`   http://localhost:${port}/*`);
    
    for (const [name, addresses] of Object.entries(networkAddresses)) {
      for (const address of addresses) {
        console.log(`   http://${address}:${port}/*`);
      }
    }
    
    console.log('\n❓ After checking the test page, press Ctrl+C to stop the server');
  });
  
  return server;
};

// Start the server on port 3333
startServer(3333); 
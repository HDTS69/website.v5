#!/usr/bin/env node

/**
 * Google API Key Domain Restriction Syntax Checker
 * 
 * This script helps check if your Google API key domain restrictions
 * are formatted correctly.
 */

const os = require('os');
const dns = require('dns');
const { networkInterfaces } = require('os');

// Log header
console.log('\n=== Google API Key Domain Restriction Syntax Checker ===\n');

// Get all network interfaces and IPs
const getNetworkIPs = () => {
  const nets = networkInterfaces();
  const ips = [];

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Only interested in IPv4 addresses that aren't internal
      if (net.family === 'IPv4' && !net.internal) {
        ips.push({
          name,
          address: net.address,
          netmask: net.netmask,
          cidr: calculateCIDR(net.address, net.netmask)
        });
      }
    }
  }

  return ips;
};

// Calculate CIDR notation
function calculateCIDR(ip, netmask) {
  const netmaskBits = netmask.split('.')
    .map(octet => parseInt(octet, 10).toString(2).padStart(8, '0'))
    .join('');
  
  const cidrLength = netmaskBits.split('1').length - 1;
  return `${ip}/${cidrLength}`;
}

// Generate all possible domain restriction formats
function generateDomainFormats(ips) {
  const formats = [];
  
  for (const ip of ips) {
    // Standard formats
    formats.push(`http://${ip.address}`);
    formats.push(`http://${ip.address}/`);
    formats.push(`http://${ip.address}/*`);
    
    // With ports
    for (let port = 3000; port <= 3010; port++) {
      formats.push(`http://${ip.address}:${port}`);
      formats.push(`http://${ip.address}:${port}/`);
      formats.push(`http://${ip.address}:${port}/*`);
    }
    
    // Wildcards
    formats.push(`http://${ip.address}:*`);
    formats.push(`http://${ip.address}:*/*`);
  }
  
  return formats;
}

// Main function
async function main() {
  try {
    const localIPs = getNetworkIPs();
    const hostname = os.hostname();
    
    console.log('Network Information:');
    console.log('---------------------------------');
    
    for (const ip of localIPs) {
      console.log(`Interface: ${ip.name}`);
      console.log(`IP Address: ${ip.address}`);
      console.log(`Netmask: ${ip.netmask}`);
      console.log(`CIDR: ${ip.cidr}`);
      console.log('---------------------------------');
    }
    
    console.log(`\nLocal Hostname: ${hostname}`);
    
    // Try to get external hostname
    console.log('\nAttempting to resolve hostname...');
    dns.lookup(hostname, (err, address, family) => {
      if (err) {
        console.log(`Could not resolve hostname: ${err.message}`);
      } else {
        console.log(`Hostname ${hostname} resolves to ${address} (IPv${family})`);
      }
      
      // Print recommended formats
      console.log('\nRecommended Google API Key Domain Restriction Formats:');
      console.log('=======================================================');
      
      const formats = generateDomainFormats(localIPs);
      
      // Group by address for readability
      const formatsByIP = {};
      for (const format of formats) {
        const ip = format.match(/\d+\.\d+\.\d+\.\d+/)[0];
        if (!formatsByIP[ip]) {
          formatsByIP[ip] = [];
        }
        formatsByIP[ip].push(format);
      }
      
      for (const ip in formatsByIP) {
        console.log(`\nFormats for IP ${ip}:`);
        for (const format of formatsByIP[ip]) {
          console.log(`  ${format}`);
        }
      }
      
      console.log('\nGoogle Cloud Console Syntax Guidelines:');
      console.log('1. Use * as a wildcard for any subdomain or path');
      console.log('2. Include trailing /* to allow all paths');
      console.log('3. For multiple ports, use separate entries for each port');
      console.log('4. Do not use http:// nor https:// - use the domain settings panel instead');
      console.log('5. For local testing, both 127.0.0.1 and localhost should be added');
      console.log('6. When providing an IP address, it must match exactly (including ports)');
      
      console.log('\nSuggested API Key Settings:');
      console.log('- Website restrictions:');
      
      for (const ip of localIPs) {
        console.log(`  * ${ip.address}`);
        console.log(`  * ${ip.address}:*`);
        console.log(`  * 127.0.0.1`);
        console.log(`  * localhost`);
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

main(); 
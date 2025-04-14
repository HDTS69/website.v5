# Google Maps API Network Troubleshooting Guide

## Overview of the Issue

When using Google Maps API on a local development environment, you may encounter different behavior between:
- `localhost` (works fine) 
- Network IP addresses (fails with RefererNotAllowedMapError)

This guide explains why this happens and how to fix it.

## Common Error Messages

- **RefererNotAllowedMapError**: Google Maps JavaScript API error: RefererNotAllowedMapError
- **MissingKeyMapError**: Google Maps JavaScript API error: MissingKeyMapError
- **InvalidKeyMapError**: Google Maps JavaScript API error: InvalidKeyMapError

## Why Local IP Addresses Are More Restrictive

Google Maps API treats local network IP addresses (like 192.168.1.140) differently from `localhost` for security reasons:

1. **Different Security Context**: `localhost` is considered a special origin with different security rules
2. **Referrer Validation**: IP addresses need exact matching in API key restrictions
3. **Port Numbers Matter**: Each port is treated as a separate origin

## Solutions

### 1. Update API Key Restrictions Correctly

In the Google Cloud Console:

1. Go to **APIs & Services** > **Credentials**
2. Find your API key and edit it
3. Under **Website restrictions**:
   - Add each specific port you need: `http://192.168.1.140:3000/*`, `http://192.168.1.140:3001/*`, etc.
   - You cannot use wildcards for ports like `http://192.168.1.140:*/*`
   - Make sure formats are exact (trailing slash matters)
   - Include any IP addresses your machine might use

### 2. Add the `useIP=true` Parameter

The `useIP=true` parameter helps Google Maps API work better with IP addresses:

```js
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap&useIP=true`;
```

### 3. Use HTTP Referrer Headers Correctly

The `Referer` header is how Google validates the origin:

- Make sure all requests include the correct Referer header
- Do not strip referrer headers in your browser settings
- Consider using the [`referrerpolicy` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-referrerpolicy) on script tags

### 4. Cache & Debugging Issues

- Clear browser cache completely to ensure fresh requests
- Use Chrome Dev Tools > Application > Clear Storage
- Check the Network tab to verify Request Headers
- Temporarily use an unrestricted API key for testing (secure it afterward!)

### 5. Other Options

- Use a localhost tunnel like ngrok for development
- Set up a local DNS name instead of using an IP address
- Create a separate development API key with fewer restrictions

## Testing Your Setup

1. Run our diagnostic script:
   ```
   node scripts/check-api-domain-syntax.js
   ```

2. Visit our test page:
   ```
   http://your-ip-address:3000/test-maps
   ```

3. Check browser console for detailed error messages

## Best Practice API Key Security

Even for local development:

1. **Restrict API keys** by IP address or domain
2. **Use environment variables** to store keys
3. **Create separate keys** for development and production
4. **Monitor usage** in Google Cloud Console

## Google Maps API Referrer Debugging Checklist

- [ ] API key is valid and enabled for Maps JavaScript API
- [ ] API key restrictions include the exact URL you're testing from
- [ ] Browser isn't blocking referrer headers
- [ ] You've tried the useIP=true parameter
- [ ] You've cleared browser cache and cookies
- [ ] You've verified the network request in browser dev tools 
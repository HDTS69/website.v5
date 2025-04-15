# Google Maps API Troubleshooting Guide

## Common Issues

### RefererNotAllowedMapError

The most common issue with Google Maps API is the `RefererNotAllowedMapError`, which occurs when the API key's restrictions don't allow the URL or domain you're accessing from.

**Error message example:**
```
Google Maps JavaScript API error: RefererNotAllowedMapError
```

**Solution:**
1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to APIs & Services > Credentials
3. Find your API key and edit the restrictions
4. Add the exact domain/URL patterns that you're accessing from, including:
   - `http://localhost:3000/*` (for local development)
   - `http://your-ip-address:3000/*` (for network access)
   - `https://your-domain.com/*` (for production)

**Important notes:**
- Include the trailing `/*` in all URL patterns
- Each port is considered a separate origin and needs its own entry
- IP addresses need exact matching (no wildcards for ports like `http://192.168.1.140:*/*`)

### Hydration Errors with Google Maps

Next.js hydration errors can occur when using Google Maps because the API is client-side only.

**Solution:**
1. Always use the `'use client'` directive at the top of components using Google Maps
2. Initialize maps only after checking `typeof window !== 'undefined'`
3. Use a state variable to track client-side rendering:
   ```tsx
   const [isClient, setIsClient] = useState(false);
   
   useEffect(() => {
     setIsClient(true);
   }, []);
   
   // Only render map on client
   return isClient ? <Map /> : <Loading />;
   ```

## Diagnostic Tools

We've created several diagnostic tools to help troubleshoot Google Maps issues:

### 1. Test Maps Page

Visit `/test-maps` to test the Google Maps API directly.

This page:
- Loads the API directly to isolate iframe issues
- Shows the current URL (for adding to API restrictions)
- Provides debugging information

### 2. Check Referrer Headers Script

Run our script to check exactly what referrer headers are being sent:

```bash
node scripts/check-referrer-headers.js
```

This starts a test server that:
- Shows all available URLs to add to API restrictions
- Tests the API key directly
- Reports the exact referrer being sent to Google

### 3. API Key Status Check

Run the status check script to verify your API key is working:

```bash
node scripts/check-google-api-status.js
```

## Best Practices for API Key Security

1. **Use environment variables** to store your API key:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-key-here
   ```

2. **Create separate API keys** for development and production environments

3. **Apply the least-privilege principle** to your API keys:
   - Restrict by HTTP referrers (domains/URLs)
   - Enable only the specific APIs you need

4. **Monitor usage** in Google Cloud Console to detect unauthorized use

## Common Errors and Solutions

| Error | Solution |
|-------|----------|
| RefererNotAllowedMapError | Add your URL to API key restrictions |
| MissingKeyMapError | Ensure the API key is being passed correctly |
| InvalidKeyMapError | Verify the key is valid and has Maps JavaScript API enabled |
| This page can't load Google Maps correctly | Check for console errors and API key restrictions |
| Google Maps API warning: NoApiKeys | Add `key=YOUR_API_KEY` to the script URL |

## Specific URL Configuration

When configuring your URL restrictions in Google Cloud Console, make sure to include:

1. **Development URLs:**
   - `http://localhost:3000/*`
   - `http://127.0.0.1:3000/*`
   - `http://your-local-ip:3000/*` (e.g., `http://192.168.1.100:3000/*`)

2. **Production URLs:**
   - `https://your-domain.com/*`
   - `https://www.your-domain.com/*`

3. **Staging/Testing URLs:**
   - `https://staging.your-domain.com/*`
   - `https://test.your-domain.com/*`

Remember to add each environment and port as a separate entry.

## Advanced Troubleshooting

If you've tried everything above and still encounter issues:

1. **Check browser network requests**:
   - Open Developer Tools (F12)
   - Go to the Network tab
   - Look for requests to `maps.googleapis.com`
   - Check the Referrer header in the request headers

2. **Try the `useIP=true` parameter**:
   - Add `&useIP=true` to your Google Maps API URL
   - This can help when accessing via IP address

3. **Test without referrer restrictions**:
   - Temporarily create a test API key with no restrictions
   - If it works, the issue is with your referrer configuration

4. **Clear browser cache**:
   - Use Chrome's "Clear site data" feature
   - Try in incognito/private mode

For further assistance, contact the site administrator or refer to the [Google Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript/overview). 

script.src = `https://maps.googleapis.com/maps/api/js?key=${NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initGooglePlacesAutocomplete&v=weekly`; 
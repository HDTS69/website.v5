# Cross-Browser & Mobile Compatibility Guide

This guide provides best practices for ensuring our website renders and functions correctly across all browsers and devices, following our Test-Driven Development (TDD) approach.

## Key Principles

1. **Mobile-First Development** - Design for mobile devices first, then enhance for larger screens
2. **Progressive Enhancement** - Ensure core functionality works everywhere, then add enhancements for modern browsers
3. **Test-Driven Development** - Write tests before implementing features
4. **Continuous Testing** - Run browser compatibility tests before each deployment

## Browsers & Devices We Support

Our automated testing covers:

### Desktop Browsers
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest version)

### Mobile Devices
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

## Common Cross-Browser Issues

### 1. CSS Compatibility

- Use Autoprefixer (already configured in our build process)
- Avoid using experimental CSS features without fallbacks
- Test flexbox and grid layouts across browsers
- Use relative units (rem, em, %) instead of absolute units (px) where appropriate

### 2. JavaScript Compatibility

- Use TypeScript to catch issues early
- Avoid using bleeding-edge JS features without transpiling
- Always check `typeof` before using browser-specific APIs
- Use feature detection instead of browser detection

### 3. Responsive Design

- Use media queries to adapt layouts to different screen sizes
- Test all interactive elements for proper touch targets (minimum 44×44px)
- Ensure forms are usable on mobile devices
- Check font readability on small screens

### 4. Google Maps Integration

Common Google Maps issues include:

- **RefererNotAllowedMapError** - Add your development and production URLs to API key restrictions
- **API Key Issues** - Ensure your API key is properly restricted and has necessary APIs enabled
- **Mobile Rendering** - Test how maps render on different device sizes
- **Hydration Errors** - Use proper client-side initialization techniques (see `docs/google-maps-troubleshooting.md`)

## Testing Process

### Automated Testing with Playwright

We use Playwright to automate cross-browser and mobile testing:

```bash
# Run all cross-browser tests
npm run test:cross-browser

# Test on specific platforms
npm run test:cross-browser:desktop  # Desktop browsers only
npm run test:cross-browser:mobile   # Mobile devices only
```

### Manual Testing Checklist

For each major feature or page update:

1. **Visual Consistency**
   - Check layout consistency across browsers
   - Verify responsive behavior on different screen sizes
   - Test font rendering

2. **Functionality**
   - Verify all interactive elements work correctly
   - Test forms submission and validation
   - Check navigation flow

3. **Performance**
   - Check load times on slower connections
   - Test scrolling performance on mobile
   - Verify animations run smoothly

## Integration with CI/CD

Our GitHub Actions workflow (`playwright.yml`) automatically runs cross-browser tests on pull requests:

1. Tests run across multiple browsers and device configurations
2. A test summary is posted as a comment on the PR
3. Failing tests block merging to protect against compatibility regressions

## Debugging Cross-Browser Issues

When you encounter browser-specific issues:

1. Identify which browsers/devices have the issue
2. Use browser developer tools to inspect the problem
3. Check for known compatibility issues on [caniuse.com](https://caniuse.com/)
4. Create a minimal test case that demonstrates the issue
5. Add a test that fails due to the issue, then fix it (TDD approach)

## Resources

- [MDN Browser Compatibility](https://developer.mozilla.org/en-US/docs/Web/Guide/Browser_compatibility)
- [Caniuse.com](https://caniuse.com/) - Browser support tables for features
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Web.dev Responsive Design](https://web.dev/responsive-web-design-basics/) 
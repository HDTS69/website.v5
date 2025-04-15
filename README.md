# HD Trade Services Website V4

Modern website for HD Trade Services, a professional plumbing, gas fitting, roof repairs, and air conditioning service provider.

## Features

- Modern, responsive design with mobile-first approach
- Service pages for Plumbing, Gas Fitting, Roof Repairs, and Air Conditioning
- Online booking system with Google Maps integration
- Fast load times and optimized performance
- Professional service presentation with clear CTAs

## Tech Stack

- **Frontend:** Next.js with React and TypeScript
- **Styling:** Tailwind CSS with shadcn UI components
- **Deployment:** Netlify
- **Forms:** Custom booking forms with validation
- **Animation:** Subtle CSS and Rive animations
- **Testing:** Playwright for cross-browser and mobile testing

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
- `/public` - Static assets like images and icons
- `/styles` - Global CSS and animation styles
- `/lib` - Utility functions and shared logic
- `/hooks` - Custom React hooks
- `/tests` - Playwright tests for cross-browser compatibility

## Cross-Browser & Mobile Testing

We follow Test-Driven Development (TDD) principles and ensure our website works consistently across all browsers and devices:

### Testing Infrastructure

The project uses Playwright for automated testing across multiple browsers (Chrome, Firefox, Safari) and devices (mobile and desktop).

### Running Tests

```bash
# Run all tests (desktop + mobile)
npm run test

# Run tests with UI
npm run test:ui

# Run cross-browser compatibility tests
npm run test:cross-browser

# Test on desktop browsers only
npm run test:cross-browser:desktop

# Test on mobile devices only
npm run test:cross-browser:mobile

# Run Google Maps specific tests
npm run test:cross-browser:maps
```

### Test Coverage

Our tests verify:

1. **Cross-Browser Compatibility** - Elements render consistently across browsers
2. **Mobile Responsiveness** - Proper display and functionality on mobile devices
3. **Google Maps Integration** - Maps and Places Autocomplete work correctly
4. **Navigation & Core Functionality** - Critical user paths work as expected

### Adding New Tests

When adding new features, create corresponding tests following TDD principles:

1. Write the test first to define the expected behavior
2. Implement the feature to make the test pass
3. Refactor as needed while maintaining test coverage

### CI Integration

Tests automatically run on pull requests to prevent regressions.

## Key Components

- Service category pages with detailed sub-services
- Online booking system with real-time validation
- Testimonials and review integration
- Service area/suburb pages for local SEO

## License

© 2024 HD Trade Services. All rights reserved.

## Development Workflow

We use a preview-deploy workflow to catch and fix errors before they reach production:

1. **Development Branch**: Make all changes on the `development` branch or feature branches
   ```bash
   # Switch to development branch
   git checkout development
   
   # Create a feature branch if needed
   git checkout -b feature/your-feature-name
   ```

2. **Preview Deploys**: 
   - All pushes to non-main branches trigger preview deploys on Netlify
   - Pull requests automatically generate deploy previews for testing

3. **Testing**:
   - Test all features and fixes on the preview URL before merging to main
   - Use the preview URL format: `https://deploy-preview-{PR-NUMBER}--{SITE-NAME}.netlify.app/`
   - Branch deploys use: `https://{BRANCH-NAME}--{SITE-NAME}.netlify.app/`

4. **Production Deployment**:
   - Once tested on preview environments, create a PR to merge into `main`
   - Only merge to `main` when all tests pass and the feature is ready for production

## Available Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Environment Variables

Create a `.env.local` file in the root directory with:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```


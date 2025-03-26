# Rive Animation Integration Guide

This guide will help you understand the Rive animation implementation for the HD Trade Services logo.

## Current Implementation

The website is now using a custom logo animation (`icon-logo-animation.riv`) from the `/public/rive` folder. The animation has been integrated into both the mobile and desktop headers.

## How It Works

The RiveLogo component (`components/ui/RiveLogo.tsx`) uses the Rive React Canvas library to render the animation. Key features include:

- Automatic playback of the animation when the page loads
- A loading spinner while the animation is being loaded
- Fallback to the static logo if the animation fails to load
- Responsive sizing that maintains the aspect ratio

## Customizing the Animation

If you want to modify or replace the current animation:

1. Create a new animation using the Rive editor (https://rive.app)
2. Export it as a `.riv` file
3. Replace the existing file at `public/rive/icon-logo-animation.riv`
4. The changes will be applied automatically

### Animation Guidelines

For the best performance and user experience:

- Keep the file size small (<100KB)
- Ensure the animation loops smoothly
- Maintain a simple design that complements the brand
- Test on various devices to ensure consistent performance

## Advanced Customization

### Adding Interactivity

To make the logo interactive (e.g., respond to hover or click events):

1. Create a state machine in your Rive animation
2. Update the RiveLogo component to include the state machine and inputs:

```typescript
const { RiveComponent, rive } = useRive({
  src: '/rive/icon-logo-animation.riv',
  stateMachines: "YOUR_STATE_MACHINE_NAME", // Add your state machine name
  autoplay: true,
  layout: new Layout({
    fit: Fit.Contain,
    alignment: Alignment.Center
  }),
  // ... other options
});

// Add interactions
useEffect(() => {
  if (rive) {
    const inputs = rive.stateMachineInputs('YOUR_STATE_MACHINE_NAME');
    // Example: Toggle a boolean input on hover
    const boolInput = inputs.find(input => input.name === 'hover');
    if (boolInput) {
      // Your interaction code here
    }
  }
}, [rive]);
```

## Troubleshooting

If the animation doesn't appear or behaves unexpectedly:

1. Check the browser console for errors
2. Verify the file path is correct: `/rive/icon-logo-animation.riv`
3. Ensure the animation file is properly exported from Rive
4. Try reducing the complexity of the animation if performance is an issue

## Rive Animation Best Practices

- **File Size**: Keep animations under 100KB for better performance
- **Complexity**: Simpler animations load faster and use less CPU
- **State Machines**: Use Rive's state machines for interactive animations
- **Artboards**: Keep artboard size as small as possible
- **Assets**: Reuse assets when possible to reduce file size
- **Testing**: Test on various devices, especially low-end mobile devices

## Additional Resources

- [Rive Documentation](https://rive.app/docs/)
- [Rive React Canvas Documentation](https://help.rive.app/runtimes/overview/react)
- [Animation Examples](https://rive.app/community/)
- [Rive Best Practices](https://rive.app/docs/getting-started/best-practices) 
# Rive Animation Implementation

This document outlines how Rive animations are implemented in the project following best practices from the [Rive documentation](https://rive.app/docs/runtimes/overview/web).

## Packages

We use the following Rive packages:

- `@rive-app/canvas` (v2.26.4) - Base Rive runtime
- `@rive-app/react-canvas-lite` (v4.18.3) - React wrapper for Rive animations

## WebAssembly Loading

Rive uses WebAssembly (WASM) for its core functionality. We've implemented the following approach for efficient WASM loading:

1. **Early Initialization**: The `RiveInitializer` component in the main app layout ensures WASM is loaded early.

2. **Preloading in Document Head**: The WASM file is preloaded in `_document.tsx` to improve loading time.

3. **Webpack Configuration**: We've configured webpack in `next.config.js` to properly handle WASM files.

## High-DPI / Retina Display Support

To ensure animations look crisp on high-DPI screens (like Apple Retina displays), we use Rive's built-in `resizeDrawingSurfaceToCanvas` method:

1. When a Rive instance is loaded, call this method to adjust the canvas for the device pixel ratio:
   ```typescript
   const { rive } = useRive({
     src: '/path/to/animation.riv',
     // other options...
     onLoad: () => {
       if (rive) {
         rive.resizeDrawingSurfaceToCanvas();
       }
     }
   });
   ```

2. Also handle window resize events to maintain proper rendering:
   ```typescript
   useEffect(() => {
     const handleResize = () => {
       if (rive) {
         rive.resizeDrawingSurfaceToCanvas();
       }
     };
     
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, [rive]);
   ```

3. Ensure the canvas container has explicit width and height styles:
   ```tsx
   <div 
     style={{ 
       width: '400px', 
       height: '400px'
     }}
   >
     <RiveComponent />
   </div>
   ```

This approach ensures that:
- The canvas drawing surface is properly sized for the device pixel ratio
- Animations remain crisp on high-DPI displays
- Scaling is consistent across different screen densities

## Usage Guidelines

### 1. Basic Component Usage

```tsx
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas-lite';

function MyRiveAnimation() {
  const { RiveComponent, rive } = useRive({
    src: '/path/to/animation.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    onLoad: () => {
      console.log('Animation loaded');
      // Fix for high-DPI displays
      if (rive) {
        rive.resizeDrawingSurfaceToCanvas();
      }
    },
    onLoadError: (error) => {
      console.error('Failed to load animation:', error);
    }
  });

  return <RiveComponent />;
}
```

### 2. Controlling Playback

Use the utility functions in `utils/riveUtils.ts` to control animations:

```tsx
import { playRiveAnimation, pauseRiveAnimation, stopRiveAnimation } from '@/utils/riveUtils';

// Play animation
playRiveAnimation(rive);

// Play specific animation
playRiveAnimation(rive, 'animationName');

// Pause animation
pauseRiveAnimation(rive);

// Stop animation
stopRiveAnimation(rive);
```

### 3. State Machines and Inputs

For more complex animations using state machines:

```tsx
import { useRive, useStateMachineInput } from '@rive-app/react-canvas-lite';

function ComplexAnimation() {
  const { RiveComponent, rive } = useRive({
    src: '/path/to/animation.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  // Get a reference to a boolean input
  const booleanInput = useStateMachineInput(rive, 'State Machine 1', 'isHovered');
  
  // Get a reference to a number input
  const numberInput = useStateMachineInput(rive, 'State Machine 1', 'level');

  return (
    <div 
      onMouseEnter={() => booleanInput && (booleanInput.value = true)}
      onMouseLeave={() => booleanInput && (booleanInput.value = false)}
    >
      <button onClick={() => numberInput && (numberInput.value = 100)}>
        Set Level to 100
      </button>
      <RiveComponent />
    </div>
  );
}
```

## Optimizing Performance

1. **Unload animations** when they are no longer visible to save resources.

2. **Use Layout properly** to avoid unintended scaling issues.

3. **Provide fallbacks** for users or browsers that might have issues with WASM.

## Troubleshooting

If animations aren't working:

1. Check browser console for errors
2. Verify the WASM is loading correctly 
3. Ensure animation files are in the correct location
4. Check that the Rive runtime is properly initialized 
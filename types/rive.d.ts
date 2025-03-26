/**
 * Type declarations for Rive-related modules
 */

/**
 * Type declaration for Rive WASM module
 */
declare module '@rive-app/canvas/rive.wasm' {
  const wasmUrl: string;
  export default wasmUrl;
}

/**
 * Extend the RuntimeLoader interface with additional properties for canvas
 */
declare module '@rive-app/canvas' {
  export class RuntimeLoader {
    static setWasmUrl(url: string): void;
    static getInstance(): any;
    static hasInstance: boolean;
    static hasLoadedWasm(): boolean;
    static wasmLoaded: boolean;
  }
}

/**
 * Type declarations for react-canvas-lite
 */
declare module '@rive-app/react-canvas-lite' {
  import { FunctionComponent, RefObject, ComponentProps } from 'react';
  
  export enum Fit {
    Cover = 'cover',
    Contain = 'contain',
    Fill = 'fill',
    FitWidth = 'fitWidth',
    FitHeight = 'fitHeight',
    None = 'none',
    ScaleDown = 'scaleDown'
  }
  
  export enum Alignment {
    Center = 'center',
    TopLeft = 'topLeft',
    TopCenter = 'topCenter',
    TopRight = 'topRight',
    CenterLeft = 'centerLeft',
    CenterRight = 'centerRight',
    BottomLeft = 'bottomLeft',
    BottomCenter = 'bottomCenter',
    BottomRight = 'bottomRight'
  }
  
  export class Layout {
    constructor(options: {
      fit?: Fit;
      alignment?: Alignment;
      minX?: number;
      minY?: number;
      maxX?: number;
      maxY?: number;
    });
  }
  
  export interface RiveProps {
    src: string;
    artboard?: string;
    animations?: string | string[];
    stateMachines?: string | string[];
    layout?: Layout;
    autoplay?: boolean;
    onLoad?: () => void;
    onLoadError?: (error: any) => void;
    onPlay?: (animationName: string, isStateMachine: boolean) => void;
    onPause?: (animationName: string, isStateMachine: boolean) => void;
    onStop?: (animationName: string, isStateMachine: boolean) => void;
    onLoopEnd?: (animationName: string) => void;
    onStateChange?: (stateMachineName: string, stateName: string) => void;
  }
  
  export interface UseRiveOptions extends RiveProps {
    canvas?: RefObject<HTMLCanvasElement>;
  }
  
  export interface UseRiveReturn {
    RiveComponent: FunctionComponent;
    rive: any | null;
    canvas: HTMLCanvasElement | null;
    play: (animationNames?: string | string[]) => void;
    pause: (animationNames?: string | string[]) => void;
    stop: (animationNames?: string | string[]) => void;
    reset: () => void;
    setLayout: (layout: Layout) => void;
  }
  
  export function useRive(options: UseRiveOptions): UseRiveReturn;
  export function useStateMachineInput(rive: any, stateMachineName: string, inputName: string): any;
} 
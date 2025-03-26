import React from 'react';
import { CSSProperties } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    src?: string;
    trigger?: string;
    colors?: string;
    state?: string;
    target?: string;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': React.DetailedHTMLProps<
        {
          src: string;
          trigger?: string;
          colors?: string;
          style?: React.CSSProperties;
          class?: string;
          state?: string;
          target?: string;
          ref?: React.RefObject<HTMLElement>;
        },
        HTMLElement
      >;
    }
  }
} 
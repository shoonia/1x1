import type { HTMLAttributes } from 'jsx-dom-runtime';
import type { HexAlphaBase } from 'vanilla-colorful/lib/entrypoints/hex-alpha';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'color-picker': HTMLAttributes<HexAlphaBase>
    }
  }

  interface Window {
    dataLayer: unknown[];
  }
}

export {};

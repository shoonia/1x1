import type { HexAlphaBase } from 'vanilla-colorful/lib/entrypoints/hex-alpha';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'color-picker': JSX.HTMLAttributes<HexAlphaBase>
    }
  }
}

export {};

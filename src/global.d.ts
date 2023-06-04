declare global {
  namespace JSX {
    interface IntrinsicElements {
      'color-picker': {
        ref?: (node: import('vanilla-colorful/lib/entrypoints/hex-alpha').HexAlphaBase) => void;
        class?: string;
      }
    }
  }

  interface Window {
    dataLayer: unknown[];
  }

  type FC<T = Record<string, unknown>> = import('jsx-dom-runtime').FC<T>;
}

export {};

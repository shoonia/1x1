declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hex-alpha-color-picker': {
        ref?: { readonly current: import('vanilla-colorful').HexColorPicker };
        class?: string;
      }
    }
  }

  type FC<T = Record<string, unknown>> = import('jsx-dom-runtime').FC<T>;
}

export {};

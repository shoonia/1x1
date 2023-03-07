declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hex-color-picker': {
        ref?: (node: import('vanilla-colorful').HexColorPicker) => void;
        class?: string;
      }
    }
  }

  type FC<T = Record<string, unknown>> = import('jsx-dom-runtime').FC<T>;
}

export {};

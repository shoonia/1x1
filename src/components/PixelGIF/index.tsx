import { signal } from 'jsx-dom-runtime';

import s from './styles.css';
import { connect } from '../../store';

const hash = signal();

connect('hex', (state) =>
  hash.set(state.hex.slice(0, 6)),
);

export const PixelGIF: JSX.FC = () => (
  <a
    href="https://shoonia.github.io/pixel-gif/"
    prop:hash={hash}
    class={s.link}
    aria-label="Generate 1x1 pixel GIF image"
  >
    1x1 Pixel GIF <small>(35 bytes)</small>
  </a>
);

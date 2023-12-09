import type { RefCallback } from 'jsx-dom-runtime';

import s from './styles.css';
import { connect } from '../../store';

const url = new URL('https://shoonia.github.io/pixel-gif/');

export const PixelGIF: JSX.FC = () => {
  const ready: RefCallback<HTMLAnchorElement> = (a) =>
    connect('hex', (state) => {
      url.hash = state.hex.slice(0, 6);
      a.href = url.href;
    });

  return (
    <a
      ref={ready}
      href={url.href}
      class={s.link}
      aria-label="One pixel Base64 encoded GIF generator"
    >
      1x1 Pixel GIF <small>(43 bytes)</small>
    </a>
  );
};

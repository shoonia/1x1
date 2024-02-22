import type { RefCallback } from 'jsx-dom-runtime';

import s from './styles.css';
import { connect } from '../../store';

const url = 'https://shoonia.github.io/pixel-gif/#';

export const PixelGIF: JSX.FC = () => {
  const ready: RefCallback<HTMLAnchorElement> = (a) =>
    connect('hex', (state) => {
      a.href = url + state.hex.slice(0, 6);
    });

  return (
    <a
      ref={ready}
      href={url}
      class={s.link}
      aria-label="One pixel Base64 encoded GIF generator"
    >
      1x1 Pixel GIF <small>(43 bytes)</small>
    </a>
  );
};

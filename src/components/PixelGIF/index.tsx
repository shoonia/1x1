import s from './styles.css';
import { connect } from '../../store';

export const PixelGIF: FC = () => {
  const url = new URL('https://shoonia.github.io/pixel-gif/');

  const ready = (a: HTMLAnchorElement) => {
    connect('hex', (state) => {
      url.hash = state.hex.slice(0, 6);
      a.href = url.href;
    });
  };

  return (
    <a
      ref={ready}
      href={url.href}
      class={s.link}
      aria-label="One pixel Base64 encoded GIF generator"
    >
      1x1 Pixel GIF
    </a>
  );
};

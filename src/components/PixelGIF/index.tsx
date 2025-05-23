import s from './styles.css';
import { connect } from '../../store';

export const PixelGIF: JSX.FC = () => {
  const ready: JSX.Ref<HTMLAnchorElement> = (a) =>
    connect('hex', (state) => {
      a.hash = state.hex.slice(0, 6);
    });

  return (
    <a
      ref={ready}
      href="https://shoonia.github.io/pixel-gif/"
      class={s.link}
      aria-label="One pixel Base64 encoded GIF generator"
    >
      1x1 Pixel GIF <small>(35 bytes)</small>
    </a>
  );
};

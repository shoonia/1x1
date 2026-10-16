import { signal } from 'jsx-dom-runtime';
import { connect } from '../../store';
import { Preset } from '../Preset';
import { createFavicon } from './createFavicon';
import s from './styles.css';

const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')!;
const colorLabel = signal();
const size = signal(0);

let timeout: NodeJS.Timeout;

export const Preview: JSX.FC = () => {
  const ready: JSX.Ref<HTMLDivElement> = (node) =>
    connect('color', ({ bytes, color }) => {
      colorLabel.set(color);
      size.set(bytes.length);
      node.style.backgroundColor = color;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-color:' + color;

        favicon.href = createFavicon(color);
        location.hash = color;
        console.log('%c  ', css, color);
      }, 300);
    });

  return (
    <div ref={ready} class={s.view} role="img" aria-label="Color preview">
      <output class={s.color} aria-label="Current color code">
        {colorLabel}
      </output>
      <output class={s.size} aria-label="PNG image size">
        1x1 ({size} bytes)
      </output>
      <div class={s.preset} aria-label="Color presets">
        <Preset />
      </div>
    </div>
  );
};

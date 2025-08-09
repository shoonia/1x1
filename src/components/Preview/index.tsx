import { useText } from 'jsx-dom-runtime';
import { Preset } from '../Preset';
import { connect } from '../../store';
import s from './styles.css';
import { createFavicon } from './createFavicon';

const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')!;
const [color, setColor] = useText('');
const [size, setSize] = useText(0);

let timeout: ReturnType<typeof setTimeout>;

export const Preview: JSX.FC = () => {
  const ready: JSX.Ref<HTMLDivElement> = (node) =>
    connect('color', ({ bytes, color }) => {
      setColor(color);
      setSize(bytes.length);
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
      <code class={s.color} aria-label="Current color code">
        {color}
      </code>
      <code class={s.size} aria-label="PNG image size">
        1x1 ({size} bytes)
      </code>
      <div class={s.preset} aria-label="Color presets">
        <Preset />
      </div>
    </div>
  );
};

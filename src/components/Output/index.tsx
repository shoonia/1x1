import { useRef, useText } from 'jsx-dom-runtime';

import s from './styles.css';
import { TextInput } from './TextInput';
import { Preset } from '../Preset';
import { RadixSelect } from './RadixSelect';
import { connect } from '../../store';
import { createFavicon } from '../../utils/canvas';

export const Output: JSX.FC = () => {
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  const view = useRef<HTMLDivElement>();
  const dataUrl = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const dataBytes = useRef<HTMLInputElement>();
  const dataBase64 = useRef<HTMLInputElement>();

  const [size, setSize] = useText(0);
  const [color, setColor] = useText('#00000000');

  let timeout: NodeJS.Timeout | number;

  connect('bytes', 'radix', ({ url, color, bytes, base64, radix }) => {
    const cssUrl = `url(${url})`;

    setColor(color);
    view.current.style.backgroundImage = cssUrl;
    dataUrl.current.value = url;
    dataBase64.current.value = base64;
    dataLink.current.value = 'https://shoonia.github.io/1x1/' + color;

    dataBytes.current.value = bytes.map((i) => i.toString(radix)).join(' ');
    setSize(bytes.length);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:' + cssUrl;

      location.hash = color;
      favicon.href = createFavicon(color);
      console.log('%c  ', css, color);
    }, 300);
  });

  return (
    <>
      <div ref={view} class={s.view}>
        <code class={s.color}>
          {color}
        </code>
        <code class={s.size}>
          1x1 ({size} bytes)
        </code>
        <div class={s.preset}>
          <Preset />
        </div>
      </div>
      <fieldset class={s.box}>
        <TextInput ref={dataUrl} label="Data URL:" />
        <TextInput ref={dataBase64} label="Base64:" />
        <div class={s.bytes}>
          <TextInput ref={dataBytes} label="Bytes:" />
          <RadixSelect />
        </div>
        <TextInput ref={dataLink} label="Share Link:" />
      </fieldset>
    </>
  );
};

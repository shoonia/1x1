import { useRef, useText } from 'jsx-dom-runtime';

import s from './styles.css';
import { TextInput } from './TextInput';
import { Preset } from '../Preset';
import { RadixSelect } from './RadixSelect';
import { connect } from '../../store';
import { createFavicon } from '../../utils/canvas';
import { makePixelPng } from '../../utils/png';

export const Output: JSX.FC = () => {
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  const view = useRef<HTMLDivElement>();
  const dataUrl = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const dataBytes = useRef<HTMLInputElement>();
  const dataBase64 = useRef<HTMLInputElement>();

  const [size, setSize] = useText(0);
  const [color, setColor] = useText('#00000000');

  let timeout: ReturnType<typeof setTimeout>;

  connect('hex', 'radix', ({ hex, r, g, b, a }) => {
    const hex8 = '#' + hex;

    const bytes = makePixelPng(r, g, b, a);
    const data = 'data:image/png;base64,' + btoa(String.fromCharCode(...bytes));
    const url = `url(${data})`;

    setColor(hex8);
    view.current.style.backgroundImage = url;
    dataUrl.current.value = data;
    dataBase64.current.value = data.slice(22);
    dataLink.current.value = 'https://shoonia.github.io/1x1/' + hex8;

    dataBytes.current.value = bytes.join(' ');
    setSize(bytes.length);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const css = 'display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:' + url;

      location.hash = hex8;
      favicon.href = createFavicon(hex8);
      console.log('%c  ', css, hex8);
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

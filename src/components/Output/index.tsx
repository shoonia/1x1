import { useRef, useText } from 'jsx-dom-runtime';

import s from './styles.css';
import { TextInput } from './TextInput';
import { Preset } from '../Preset';
import { RadixSelect } from './RadixSelect';
import { connect, getState } from '../../store';
import { createCanvas, createFavicon } from '../../utils/canvas';

export const Output: JSX.FC = () => {
  const fileReader = new FileReader();
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  const view = useRef<HTMLDivElement>();
  const dataUrl = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const dataBytes = useRef<HTMLInputElement>();
  const dataBase64 = useRef<HTMLInputElement>();

  const [size, setSize] = useText(0);
  const [color, setColor] = useText('#00000000');

  let timeout: ReturnType<typeof setTimeout>;

  const readAsArrayBuffer = (blob: Blob | null) => {
    if (fileReader.readyState !== 1 && blob) {
      fileReader.readAsArrayBuffer(blob);
    }
  };

  fileReader.addEventListener('load', () => {
    if (fileReader.result instanceof ArrayBuffer) {
      const { radix } = getState();
      const bytes = Array.from(new Uint8Array(fileReader.result), (i) => i.toString(radix));

      dataBytes.current.value = bytes.join(' ');
      setSize(bytes.length);
    }
  });

  connect('hex', 'radix', ({ hex, a }) => {
    const hex8 = '#' + hex;

    const canvas = createCanvas(hex, a);
    const data = canvas.toDataURL('image/png', 0.1);
    const url = `url(${data})`;

    setColor(hex8);
    canvas.toBlob(readAsArrayBuffer);
    view.current.style.backgroundImage = url;
    dataUrl.current.value = data;
    dataBase64.current.value = data.slice(22);
    dataLink.current.value = 'https://shoonia.github.io/1x1/' + hex8;

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

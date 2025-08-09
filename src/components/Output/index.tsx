import { useRef } from 'jsx-dom-runtime';

import s from './styles.css';
import { TextInput } from './TextInput';
import { RadixSelect } from './RadixSelect';
import { connect } from '../../store';

export const Output: JSX.FC = () => {
  const dataUrl = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const dataBytes = useRef<HTMLInputElement>();
  const dataBase64 = useRef<HTMLInputElement>();

  connect('color', 'radix', ({ url, color, bytes, base64, radix }) => {
    dataUrl.current.value = url;
    dataBase64.current.value = base64;
    dataLink.current.value = 'https://shoonia.github.io/1x1/' + color;
    dataBytes.current.value = bytes.map((i) => i.toString(radix)).join(' ');
  });

  return (
    <fieldset class={s.box}>
      <legend class="sr-only">
        Output formats
      </legend>
      <TextInput ref={dataUrl} label="Data URL" />
      <TextInput ref={dataBase64} label="Base64" />
      <div class={s.bytes}>
        <TextInput ref={dataBytes} label="Bytes" />
        <RadixSelect />
      </div>
      <TextInput ref={dataLink} label="Share Link" />
    </fieldset>
  );
};

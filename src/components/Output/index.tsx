import { signal } from 'jsx-dom-runtime';

import s from './styles.css';
import { TextInput } from './TextInput';
import { RadixSelect } from './RadixSelect';
import { connect } from '../../store';

export const Output: JSX.FC = () => {
  const dataUrl = signal();
  const dataLink = signal();
  const dataBytes = signal();
  const dataBase64 = signal();

  connect('color', 'radix', ({ url, color, bytes, base64, radix }) => {
    dataUrl.set(url);
    dataBase64.set(base64);
    dataLink.set('https://shoonia.github.io/1x1/' + color);
    dataBytes.set(bytes.map((i) => i.toString(radix)).join(' '));
  });

  return (
    <fieldset class={s.box}>
      <legend class="sr-only">
        Output formats
      </legend>
      <TextInput value={dataUrl} label="Data URL" />
      <TextInput value={dataBase64} label="Base64" />
      <div class={s.bytes}>
        <TextInput value={dataBytes} label="Bytes" />
        <RadixSelect />
      </div>
      <TextInput value={dataLink} label="Share Link" />
    </fieldset>
  );
};

import { useRef } from 'jsx-dom-runtime';

import s from './styles.css';
import { TextInput } from './TextInput';

export const Output: FC = () => {
  const dataUrl = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const dataBytes = useRef<HTMLInputElement>();
  const dataBase64 = useRef<HTMLInputElement>();

  return (
    <fieldset>
      <legend>
        Output
      </legend>
      <TextInput ref={dataUrl} label="Data: URL" />
      <TextInput ref={dataBase64} label="Base64:" />
      <div class={s.bytes}>
        <TextInput ref={dataBytes} label="Bytes:" />
        <select class={s.radix}>
          <option value="16">16</option>
          <option value="10">10</option>
          <option value="8">8</option>
          <option value="2">2</option>
        </select>
      </div>
      <TextInput ref={dataLink} label="Share Link:" />
    </fieldset>
  );
};

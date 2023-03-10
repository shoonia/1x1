import { useRef } from 'jsx-dom-runtime';

import s from './styles.css';
import { TextInput } from './TextInput';
import { connect, setState } from '../../store';

export const Output: FC = () => {
  const dataUrl = useRef<HTMLInputElement>();
  const dataLink = useRef<HTMLInputElement>();
  const dataBytes = useRef<HTMLInputElement>();
  const dataBase64 = useRef<HTMLInputElement>();

  const changeRadix = (node: HTMLSelectElement) => {
    node.addEventListener('change', () => {
      setState({ radix: ~~node.value });
    });
  };

  connect('hex', ({ hex }) => {
    const hex8 = '#' + hex;

    dataLink.current.value = 'https://shoonia.github.io/1x1/' + hex8;
  });

  return (
    <fieldset>
      <legend>
        Output
      </legend>
      <TextInput ref={dataUrl} label="Data: URL" />
      <TextInput ref={dataBase64} label="Base64:" />
      <div class={s.bytes}>
        <TextInput ref={dataBytes} label="Bytes:" />
        <select ref={changeRadix} class={s.radix}>
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

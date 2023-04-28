import { useRef } from 'jsx-dom-runtime';

import s from './styles.css';
import { Group } from '../Group';
import { DataList } from './DataList';
import { NOT_HEXADECIMAL, randomHex, getHex } from '../../utils';
import { connect, dispatch } from '../../store';

export const HexInputs: FC = () => {
  const color = useRef<HTMLInputElement>();
  const alpha = useRef<HTMLInputElement>();
  const listId = 'e' + randomHex(4);

  const changeAlpha: EventListener = () => {
    const val = alpha.current.value
      .trim()
      .toLowerCase()
      .replace(NOT_HEXADECIMAL, '');

    dispatch('rgba', [
      'a',
      val.length !== 2 ? 255 : parseInt(val, 16),
    ]);
  };

  const changeColor: EventListener = () => {
    const hex = getHex(color.current.value);

    if (hex) {
      dispatch('hex', hex);
    }
  };

  connect('hex', ({ hex }) => {
    color.current.value = hex.slice(0, 6);
  });

  connect('a', ({ hex }) => {
    alpha.current.value = hex.slice(6);
  });

  return (
    <Group open title="HEX">
      <div class={s.box}>
        <input
          ref={color}
          type="text"
          list={listId}
          autocomplete="on"
          placeholder="ffffff"
          spellcheck="false"
          class={s.inp}
          onchange={changeColor}
          aria-label="color"
        />
        <DataList id={listId} />
        <input
          ref={alpha}
          type="text"
          placeholder="ff"
          maxLength={2}
          spellcheck="false"
          class={s.inp}
          onchange={changeAlpha}
          aria-label="alpha (opacity)"
        />
      </div>
    </Group>
  );
};

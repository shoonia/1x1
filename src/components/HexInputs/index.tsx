import { useRef } from 'jsx-dom-runtime';

import s from './styles.css';
import { Group } from '../Group';
import { DataList } from './DataList';
import { randomHex } from '../../utils';
import { connect, dispatch } from '../../store';

const NOT_HEXADECIMAL = /[^\da-f]/ig;

export const HexInputs: FC = () => {
  const color = useRef<HTMLInputElement>();
  const alpha = useRef<HTMLInputElement>();
  const listId = 'e' + randomHex(4);

  const changeAlpha: EventListener = () => {
    const val = alpha.current.value
      .trim()
      .toLowerCase()
      .replace(NOT_HEXADECIMAL, '');

    dispatch('set/rgba', [
      'a',
      val.length !== 2 ? 255 : parseInt(val, 16),
    ]);
  };

  connect('hex', ({ hex }) => {
    color.current.value = hex.slice(0, 6);
    alpha.current.value = hex.slice(6);
  });

  return (
    <Group open title="HEX">
      <div class={s.box}>
        <label class={s.label} aria-label="color">
          <input
            ref={color}
            type="text"
            list={listId}
            autoComplete="on"
            placeholder="ffffff"
            spellcheck="false"
            class={s.inp}
          />
          <DataList id={listId} />
        </label>
        <label class={s.label} aria-label="alpha (opacity)">
          <input
            ref={alpha}
            type="text"
            placeholder="ff"
            maxLength={2}
            spellcheck="false"
            class={s.inp}
            onchange={changeAlpha}
          />
        </label>
      </div>
    </Group>
  );
};

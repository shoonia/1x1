import { signal } from 'jsx-dom-runtime';

import s from './styles.css';
import { Group } from '../Group';
import { DataList } from './DataList';
import { NOT_HEXADECIMAL, getHex } from '../../utils';
import { connect, dispatch } from '../../store';

export const HexInputs: JSX.FC = () => {
  const color = signal();
  const alpha = signal();

  const colorChanged: JSX.EventListener<HTMLInputElement> = (event) => {
    const hex = getHex(event.currentTarget.value);

    if (hex) {
      dispatch('hex', hex);
    }
  };

  const alphaChanged: JSX.EventListener<HTMLInputElement> = (event) => {
    const val = event.currentTarget.value
      .trim()
      .toLowerCase()
      .replace(NOT_HEXADECIMAL, '');

    dispatch('rgba', [
      'a',
      val.length !== 2 ? 255 : parseInt(val, 16),
    ]);
  };

  connect('hex', (state) =>
    color.set(state.hex.slice(0, 6)),
  );

  connect('a', (state) =>
    alpha.set(state.hex.slice(6)),
  );

  return (
    <Group open title="HEX">
      <div class={s.box}>
        <input
          on:change={colorChanged}
          prop:value={color}
          type="search"
          list="color-list"
          autocomplete="on"
          placeholder="ffffff"
          minLength={3}
          maxLength={25}
          spellcheck="false"
          class={s.inp}
          aria-label="Hex color code"
          name="hex-color"
        />
        <input
          on:change={alphaChanged}
          prop:value={alpha}
          type="text"
          placeholder="ff"
          maxLength={2}
          spellcheck="false"
          class={s.inp}
          aria-label="Hex alpha (opacity) code"
          name="hex-alpha"
        />
        <DataList />
      </div>
    </Group>
  );
};

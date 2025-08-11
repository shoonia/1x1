import s from './styles.css';
import { Group } from '../Group';
import { DataList } from './DataList';
import { NOT_HEXADECIMAL, getHex } from '../../utils';
import { connect, dispatch } from '../../store';

export const HexInputs: JSX.FC = () => {
  const readyColor: JSX.Ref<HTMLInputElement> = (color) => {
    color.addEventListener('change', () => {
      const hex = getHex(color.value);

      if (hex) {
        dispatch('hex', hex);
      }
    });

    connect('hex', (state) => {
      color.value = state.hex.slice(0, 6);
    });
  };

  const readyAlpha: JSX.Ref<HTMLInputElement> = (alpha) => {
    alpha.addEventListener('change', () => {
      const val = alpha.value
        .trim()
        .toLowerCase()
        .replace(NOT_HEXADECIMAL, '');

      dispatch('rgba', [
        'a',
        val.length !== 2 ? 255 : parseInt(val, 16),
      ]);
    });

    connect('a', (state) => {
      alpha.value = state.hex.slice(6);
    });
  };

  return (
    <Group open title="HEX">
      <div class={s.box}>
        <input
          ref={readyColor}
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
          ref={readyAlpha}
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

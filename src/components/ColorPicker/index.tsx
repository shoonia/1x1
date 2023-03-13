import type { HexColorPicker } from 'vanilla-colorful';
import 'vanilla-colorful/hex-alpha-color-picker.js';

import s from './styles.css';
import { Group } from '../Group';
import { connect, dispatch } from '../../store';

const isBigScreen = window.matchMedia('(min-width:700px)').matches;

export const ColorPicker: FC = () => {
  const ready = (node: HexColorPicker) => {
    connect('hex', (state) => {
      node.color = '#' + state.hex;
    });

    node.addEventListener('color-changed', (event) => {
      dispatch('set/hex', event.detail.value.slice(1));
    });
  };

  return (
    <Group open={isBigScreen} title="Picker">
      <hex-alpha-color-picker
        ref={ready}
        class={s.picker}
      />
    </Group>
  );
};

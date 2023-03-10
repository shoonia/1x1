import type { HexColorPicker } from 'vanilla-colorful';

import s from './styles.css';
import { Group } from '../Group';
import { connect, dispatch } from '../../store';

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
    <Group open title="Picker">
      <hex-alpha-color-picker
        ref={ready}
        class={s.picker}
      />
    </Group>
  );
};

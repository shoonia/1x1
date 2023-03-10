import type { HexColorPicker } from 'vanilla-colorful';
import { useRef } from 'jsx-dom-runtime';

import s from './styles.css';
import { Group } from '../Group';
import { connect } from '../../store';

export const ColorPicker: FC = () => {
  const picker = useRef<HexColorPicker>();

  connect('hex', (state) => {
    picker.current.color = '#' + state.hex;
  });

  return (
    <Group open title="Picker">
      <hex-alpha-color-picker
        ref={picker}
        class={s.picker}
      />
    </Group>
  );
};

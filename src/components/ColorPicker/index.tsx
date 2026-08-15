import { signal } from 'jsx-dom-runtime';
import { HexAlphaBase } from 'vanilla-colorful/lib/entrypoints/hex-alpha';

import s from './styles.css';
import { Group } from '../Group';
import { connect, dispatch } from '../../store';

customElements.define('color-picker', HexAlphaBase);

export const ColorPicker: JSX.FC = () => {
  const color = signal();

  connect('hex', (state) =>
    color.set(state.color),
  );

  const changed = (event: CustomEvent) =>
    dispatch('hex', event.detail.value.slice(1));

  return (
    <Group
      open={matchMedia('(min-width:700px)').matches}
      title="Picker"
    >
      <color-picker
        class={s.picker}
        on:color-changed={changed}
        prop:color={color}
        aria-label="Color picker"
        role="group"
      />
    </Group>
  );
};

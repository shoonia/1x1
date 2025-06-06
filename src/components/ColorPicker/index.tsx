import { HexAlphaBase } from 'vanilla-colorful/lib/entrypoints/hex-alpha';

import s from './styles.css';
import { Group } from '../Group';
import { connect, dispatch } from '../../store';

customElements.define('color-picker', HexAlphaBase);

export const ColorPicker: JSX.FC = () => {
  const ready: JSX.Ref<HexAlphaBase> = (node) =>
    connect('hex', (state) => {
      node.color = state.color;
    });

  const changed = (event: CustomEvent) =>
    dispatch('hex', event.detail.value.slice(1));

  return (
    <Group
      open={matchMedia('(min-width:700px)').matches}
      title="Picker"
    >
      <color-picker
        ref={ready}
        class={s.picker}
        on:color-changed={changed}
      />
    </Group>
  );
};

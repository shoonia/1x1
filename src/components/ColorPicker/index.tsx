import type { RefCallback } from 'jsx-dom-runtime';
import { HexAlphaBase } from 'vanilla-colorful/lib/entrypoints/hex-alpha';

import s from './styles.css';
import { Group } from '../Group';
import { connect, dispatch } from '../../store';

customElements.define('color-picker', HexAlphaBase);

export const ColorPicker: JSX.FC = () => {
  const isBigScreen = /*#__PURE__*/ matchMedia('(min-width:700px)').matches;

  const ready: RefCallback<HexAlphaBase> = (node) => {
    connect('hex', (state) => {
      node.color = '#' + state.hex;
    });

    node.addEventListener('color-changed', (event) =>
      dispatch('hex', event.detail.value.slice(1)),
    );
  };

  return (
    <Group open={isBigScreen} title="Picker">
      <color-picker
        ref={ready}
        class={s.picker}
      />
    </Group>
  );
};

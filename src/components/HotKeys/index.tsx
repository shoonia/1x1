import { createKeybindingsHandler } from 'tinykeys';

import s from './styles.css';
import { dispatch, getState } from '../../store';
import { getHex } from '../../utils';

const $mod = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  ? '⌘'
  : 'Ctrl';

const undo = () => {
  if (history.state === null) {
    history.go(-1);
  }
};

const redo = () => history.go(1);

addEventListener('popstate', () => {
  const state = getState();
  const hash = location.hash.slice(1);

  if (hash !== state.hex) {
    const hex = getHex(hash);

    if (hex) {
      dispatch('hex', hex);
    }
  }
});

addEventListener('keydown', createKeybindingsHandler({
  '$mod+z': undo,
  '$mod+Shift+z': redo,
}));

export const HotKeys: JSX.FC = () =>
  <div class={s.box}>
    <div>
      <div>Undo:</div>
      <button
        type="button"
        class={s.btn}
        on:click={undo}
        accessKey="z"
        aria-label='Undo last action'
      >
        <kbd class={s.comb}>
          <span class={s.key}>{$mod}</span>
          <span class={s.key}>z</span>
        </kbd>
      </button>
    </div>
    <div>
      <div>Redo:</div>
      <button
        type="button"
        class={s.btn}
        on:click={redo}
        accessKey="y"
        aria-label='Redo last action'
      >
        <kbd class={s.comb}>
          <span class={s.key}>{$mod}</span>
          <span class={s.key}>Shift</span>
          <span class={s.key}>z</span>
        </kbd>
      </button>
    </div>
  </div>;

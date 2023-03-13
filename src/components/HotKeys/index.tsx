import tinykeys from 'tinykeys';

import { dispatch, getState } from '../../store';
import { parseHex } from '../../utils';

import s from './styles.css';

const isMacOs = /Mac OS/i.test(navigator.userAgent);

const undo = () => {
  if (history.state === null) {
    history.go(-1);
  }
};

const redo = () => history.go(1);

window.addEventListener('popstate', () => {
  const state = getState();
  const hash = location.hash.slice(1);

  if (hash === state.hex) {
    return;
  }

  const [isValid, hex] = parseHex(hash);

  if (isValid) {
    dispatch('set/hex', hex);
  }
});

tinykeys(window, {
  '$mod+z': undo,
  '$mod+Shift+z': redo,
});

export const HotKeys: FC = () => {
  const mod = isMacOs ? '⌘' : 'Ctrl';

  return (
    <div class={s.box}>
      <div>
        <div>Undo:</div>
        <button type="button" class={s.btn} onclick={undo}>
          <kbd class={s.comb}>
            <span class={s.key}>{mod}</span>
            <span class={s.key}>z</span>
          </kbd>
        </button>
      </div>
      <div>
        <div>Redo:</div>
        <button type="button" class={s.btn} onclick={redo}>
          <kbd class={s.comb}>
            <span class={s.key}>{mod}</span>
            <span class={s.key}>Shift</span>
            <span class={s.key}>z</span>
          </kbd>
        </button>
      </div>
    </div>
  );
};

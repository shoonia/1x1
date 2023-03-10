import s from './styles.css';

const isMacOs = /Mac OS/i.test(navigator.userAgent);

export const HotKeys: FC = () => {
  const mod = isMacOs ? '⌘' : 'Ctrl';

  return (
    <div class={s.box}>
      <div>
        <div>Undo:</div>
        <button type="button" class={s.btn}>
          <kbd class={s.comb}>
            <span class={s.key}>{mod}</span>
            <span class={s.key}>z</span>
          </kbd>
        </button>
      </div>
      <div>
        <div>Redo:</div>
        <button type="button" class={s.btn}>
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

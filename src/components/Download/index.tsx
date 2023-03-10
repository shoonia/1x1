import s from './styles.css';

export const Download: FC = () => {
  return typeof window.showSaveFilePicker === 'function'
    ? (
      <button type="button" class={s.btn}>
        Download
      </button>
    ) : (
      <a role="button" class={s.btn} href="#">
        Download
      </a>
    );
};

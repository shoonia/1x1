import s from './styles.css';
import { savePngButton, savePngLink } from './helpers';

export const Download: FC = () => {
  return typeof window.showSaveFilePicker === 'function'
    ? (
      <button ref={savePngButton} type="button" class={s.btn}>
        Download
      </button>
    ) : (
      <a ref={savePngLink} role="button" class={s.btn} href="#">
        Download
      </a>
    );
};

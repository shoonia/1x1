import s from './styles.css';
import { connect } from '../../store';

export const Toast: JSX.FC = () => {
  const ready: JSX.Ref<HTMLDivElement> = (node) => {
    connect('toast', (state) => {
      node.classList.toggle(s.show, state.toast);
    });
  };

  return (
    <div
      ref={ready}
      class={s.toast}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      Copied to clipboard
    </div>
  );
};

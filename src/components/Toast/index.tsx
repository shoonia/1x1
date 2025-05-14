import s from './styles.css';
import { connect } from '../../store';

export const Toast: JSX.FC = () => {
  const ready: JSX.Ref<HTMLDivElement> = (node) => {
    connect('toast', (state) => {
      if (state.toast) {
        node.classList.add(s.show);
      } else {
        node.classList.remove(s.show);
      }
    });
  };

  return (
    <div ref={ready} class={s.toast} role="status">
      Copied to clipboard
    </div>
  );
};

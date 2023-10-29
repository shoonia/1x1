import s from './styles.css';
import { connect } from '../../store';

export const Toast: JSX.FC = () => {
  const ready = (node: HTMLDivElement) => {
    let timer: ReturnType<typeof setTimeout>;

    const show = () => {
      clearTimeout(timer);
      node.classList.add(s.show);

      timer = setTimeout(
        () => node.classList.remove(s.show),
        3_000,
      );
    };

    connect('toast', (state) => {
      if (state.toast) {
        show();
      }
    });
  };

  return (
    <div ref={ready} class={s.toast} role="status">
      Copied to clipboard
    </div>
  );
};

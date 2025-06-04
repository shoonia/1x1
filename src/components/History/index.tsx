import s from './styles.css';
import { connect, HISTORY_LENGTH } from '../../store';
import { Item } from './Item';

let isRendered = false;

export const History: JSX.FC = () => {
  const ready: JSX.Ref<Element> = (node) =>
    connect('history', ({ history }) => {
      if (isRendered) {
        if (history.length >= HISTORY_LENGTH) {
          node.lastChild?.remove();
        }

        node.prepend(<Item hex={`#${history[0]}`} />);
      } else {
        isRendered = true;
        node.append(...history.map((i) => <Item hex={`#${i}`} />));
      }
    });

  return (
    <ul ref={ready} class={s.list} />
  );
};

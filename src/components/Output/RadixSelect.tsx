import s from './RadixSelect.css';
import { setState } from '../../store';

export const RadixSelect: JSX.FC = () => {
  const ready = (node: HTMLSelectElement) =>
    node.addEventListener('change', () =>
      setState({ radix: ~~node.value }),
    );

  return (
    <select
      ref={ready}
      class={s.radix}
      aria-label="byte base"
    >
      {[16, 10, 8, 2].map((i) =>
        <option value={i}>
          {i}
        </option>,
      )}
    </select>
  );
};

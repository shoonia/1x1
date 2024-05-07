import s from './RadixSelect.css';
import { setState } from '../../store';

export const RadixSelect: JSX.FC = () => {
  const change: JSX.EventListener<HTMLSelectElement> = (event) =>
    setState({ radix: ~~event.currentTarget.value });

  return (
    <select
      on:change={change}
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

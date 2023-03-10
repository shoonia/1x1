import { useRef } from 'jsx-dom-runtime';

import s from './PairInputs.css';
import type { TRgba } from '../../store/types';
import { connect, dispatch } from '../../store';

interface Props {
  param: TRgba;
}

export const PairInputs: FC<Props> = ({ param }) => {
  const number = useRef<HTMLInputElement>();
  const range = useRef<HTMLInputElement>();

  const input: EventListener = (event) => {
    const el = event.target as HTMLInputElement;
    const val = el.valueAsNumber;

    dispatch('set/rgba', [param, val > 255 ? 255 : val]);
  };

  connect(param, (state) => {
    const val = state[param];

    number.current.valueAsNumber = val;
    range.current.valueAsNumber = val;
  });

  return (
    <div class={s.box}>
      <span class={s.label}>
        {param.toUpperCase()}
      </span>
      <input
        ref={number}
        type="number"
        class={s.number}
        oninput={input}
        max={255}
        min={0}
        step={1}
      />
      <input
        ref={range}
        type="range"
        class={s.range}
        oninput={input}
        max={255}
        min={0}
        step={1}
      />
    </div>
  );
};

import { useRef } from 'jsx-dom-runtime';

import s from './PairInputs.css';
import type { TRgba } from '../../store/types';
import { connect, dispatch } from '../../store';

interface Props {
  param: TRgba;
}

export const PairInputs: JSX.FC<Props> = ({ param }) => {
  const number = useRef<HTMLInputElement>();
  const range = useRef<HTMLInputElement>();
  const displayName = param.toUpperCase();

  const input: JSX.InputEventListener<HTMLInputElement> = (event) =>
    dispatch('rgba', [param, event.currentTarget.valueAsNumber]);

  connect(param, (state) => {
    const val = state[param];

    number.current.valueAsNumber = val;
    range.current.valueAsNumber = val;
  });

  return (
    <div class={s.box} role="group" aria-label={`${displayName} color channel`}>
      <span class={s.label}>
        {displayName}
      </span>
      <input
        ref={number}
        type="number"
        name={`${param}-number`}
        class={s.number}
        on:input={input}
        max={255}
        min={0}
        step={1}
        aria-label={`${displayName} number input`}
      />
      <input
        ref={range}
        type="range"
        name={`${param}-range`}
        class={s.range}
        on:input={input}
        max={255}
        min={0}
        step={1}
        aria-label={`${displayName} slider`}
      />
    </div>
  );
};

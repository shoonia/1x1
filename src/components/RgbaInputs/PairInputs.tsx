import { signal } from 'jsx-dom-runtime';

import s from './PairInputs.css';
import type { TRgba } from '../../store/types';
import { connect, dispatch } from '../../store';

interface Props {
  param: TRgba;
}

export const PairInputs: JSX.FC<Props> = ({ param }) => {
  const value = signal(0);
  const displayName = param.toUpperCase();

  const input: JSX.InputEventListener<HTMLInputElement> = (event) =>
    dispatch('rgba', [param, event.currentTarget.valueAsNumber]);

  connect(param, (state) =>
    value.set(state[param]),
  );

  return (
    <div class={s.box} role="group" aria-label={`${displayName} color channel`}>
      <span class={s.label}>
        {displayName}
      </span>
      <input
        type="number"
        name={`${param}-number`}
        class={s.number}
        on:input={input}
        prop:valueAsNumber={value}
        max={255}
        min={0}
        step={1}
        aria-label={`${displayName} number input`}
      />
      <input
        type="range"
        name={`${param}-range`}
        class={s.range}
        on:input={input}
        prop:valueAsNumber={value}
        max={255}
        min={0}
        step={1}
        aria-label={`${displayName} slider`}
      />
    </div>
  );
};

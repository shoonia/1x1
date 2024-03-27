import type { MouseEventHandler } from 'jsx-dom-runtime';

import s from './TextInput.css';
import { setState } from '../../store';

interface Props {
  label: string;
  ref: JSX.Ref<HTMLInputElement>;
}

const copy: MouseEventHandler<HTMLInputElement> = ({ currentTarget: input }) => {
  input.select();
  navigator.clipboard.writeText(input.value);
  setState({ toast: true });
};

export const TextInput: JSX.FC<Props> = ({ label, ref }) =>  (
  <label>
    {label}
    <input
      ref={ref}
      onclick={copy}
      class={s.inp}
      type="text"
      spellcheck="false"
      readOnly
    />
  </label>
);

import type { Signal } from 'jsx-dom-runtime';

import s from './TextInput.css';
import { dispatch } from '../../store';

interface Props {
  label: string;
  value: Signal<string>;
}

const copy: JSX.EventListener<HTMLInputElement> = ({ currentTarget: input }) => {
  input.select();
  navigator.clipboard.writeText(input.value);
  dispatch('copy');
};

export const TextInput: JSX.FC<Props> = ({ label, value }) =>
  <label>
    {label}
    <input
      on:click={copy}
      prop:value={value}
      class={s.inp}
      name={label.replaceAll(' ', '-')}
      type="text"
      spellcheck="false"
      readOnly
    />
  </label>;

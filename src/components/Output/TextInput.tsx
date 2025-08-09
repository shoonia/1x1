import s from './TextInput.css';
import { dispatch } from '../../store';

interface Props {
  label: string;
  ref: JSX.Ref<HTMLInputElement>;
}

const copy: JSX.EventListener<HTMLInputElement> = ({ currentTarget: input }) => {
  input.select();
  navigator.clipboard.writeText(input.value);
  dispatch('copy');
};

export const TextInput: JSX.FC<Props> = ({ label, ref }) =>
  <label>
    {label}
    <input
      ref={ref}
      on:click={copy}
      class={s.inp}
      name={label.toLowerCase().replaceAll(' ', '-')}
      type="text"
      spellcheck="false"
      readOnly
    />
  </label>;

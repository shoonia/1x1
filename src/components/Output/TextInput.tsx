import s from './TextInput.css';
import { setState } from '../../store';

interface Props {
  label: string;
  ref: {
    readonly current: HTMLInputElement
  }
}

const copy: EventListener = (event) => {
  const el = event.target as HTMLInputElement;

  el.select();
  navigator.clipboard.writeText(el.value);
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

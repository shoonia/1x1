import s from './styles.css';

interface Props {
  open?: boolean;
  title: string;
}

export const Group: JSX.FC<Props> = ({ open, title, children }) => (
  <details open={open} class={s.box}>
    <summary class={s.title}>
      {title}
    </summary>
    <fieldset>
      {children}
    </fieldset>
  </details>
);

import s from './styles.css';

interface Props {
  hex: `#${string}`;
  title?: string
}

export const Item: JSX.FC<Props> = ({ hex, title = hex }) =>
  <li class={s.item}>
    <a
      class={s.link}
      href={hex}
      style={{ backgroundColor: hex }}
      aria-label={`Select ${title} color`}
      data-title={title}
    />
  </li>;

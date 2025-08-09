import s from './styles.css';

interface Props {
  color: `#${string}`;
  title: string;
}

export const Item: JSX.FC<Props> = ({ color, title }) =>
  <li class={s.item}>
    <a
      href={color}
      style={{ backgroundColor: color }}
      class={s.link}
      title={title}
      aria-label={`Select ${title} color`}
    />
  </li>;

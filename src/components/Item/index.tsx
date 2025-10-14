import s from './styles.css';

interface Props {
  hex: `#${string}`;
  tag?: string
}

export const Item: JSX.FC<Props> = ({ hex, tag = hex }) =>
  <li class={s.item}>
    <a
      class={s.link}
      href={hex}
      aria-label={`Select ${tag} color`}
      data-tag={tag}
    >
      <span
        role="img"
        class={s.preview}
        style={{ backgroundColor: hex }}
        aria-label="Color preview"
      />
    </a>
  </li>;

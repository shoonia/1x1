import s from './styles.css';
import { Item } from './Item';

export const Preset: FC = () => (
  <ul class={s.list}>
    <Item color="#ffffffff" title="White" />
    <Item color="#000000ff" title="Black" />
    <Item color="#00000000" title="Transparent" />
  </ul>
);

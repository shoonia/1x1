import s from './styles.css';
import { Item } from '../Item';

export const Preset: JSX.FC = () =>
  <ul class={s.list}>
    <Item hex="#ffffffff" title="White" />
    <Item hex="#000000ff" title="Black" />
    <Item hex="#00000000" title="Transparent" />
  </ul>;

import s from './styles.css';
import { Item } from '../Item';

export const Preset: JSX.FC = () =>
  <ul class={s.list}>
    <Item hex="#ffffffff" tag="White" />
    <Item hex="#000000ff" tag="Black" />
    <Item hex="#00000000" tag="Transparent" />
  </ul>;

import s from './styles.css';
import { Group } from '../Group';

export const ColorPicker: FC = () => {
  return (
    <Group open title="Picker">
      <hex-alpha-color-picker class={s.picker}></hex-alpha-color-picker>
    </Group>
  );
};

import type { TRgba } from '../../store/types';
import s from './PairInputs.css';

interface Props {
  param: TRgba;
}

export const PairInputs: FC<Props> = ({ param }) => {
  return (
    <div class={s.box}>
      <span class={s.label}>
        {param.toUpperCase()}
      </span>
      <input
        type="number"
        class={s.number}
        max={255}
        min={0}
        step={1}
      />
      <input
        type="range"
        class={s.range}
        max={255}
        min={0}
        step={1}
      />
    </div>
  );
};

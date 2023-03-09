import s from './styles.css';
import { Group } from '../Group';
import { DataList } from './DataList';

export const HexInputs: FC = () => {
  const listId = 'e' + crypto.randomUUID();

  return (
    <Group open title="HEX">
      <div class={s.box}>
        <label class={s.label} aria-label="color">
          <input
            type="text"
            list={listId}
            autoComplete="on"
            placeholder="ffffff"
            spellcheck="false"
            class={s.inp}
          />
          <DataList id={listId} />
        </label>
        <label class={s.label} aria-label="alpha (opacity)">
          <input
            type="text"
            placeholder="ff"
            maxLength={2}
            spellcheck="false"
            class={s.inp}
          />
        </label>
      </div>
    </Group>
  );
};

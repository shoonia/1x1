import { type TColors, colors } from '../../utils/colors';

export const DataList: JSX.FC = () =>
  <datalist id="color-list">
    {Object.keys(colors).map((key) =>
      <option value={colors[key as keyof TColors]}>
        {key}
      </option>,
    )}
  </datalist>;

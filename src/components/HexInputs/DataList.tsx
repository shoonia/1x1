import { type TColors, colors } from '../../utils/colors';

export const DataList: FC = () => {
  const options = /*#__PURE__*/ Object.keys(colors).map((key) => (
    <option value={colors[key as keyof TColors]}>
      {key}
    </option>
  ));

  return (
    <datalist id="color-list">
      {options}
    </datalist>
  );
};

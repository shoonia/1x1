import { type TColors, colors } from '../../utils/colors';

interface Props {
  id: string;
}

export const DataList: FC<Props> = ({ id }) => {
  const options = <></>;

  let key: keyof TColors;

  for (key in colors) {
    options.append(
      <option value={colors[key]}>
        {key}
      </option>,
    );
  }

  return (
    <datalist id={id}>
      {options}
    </datalist>
  );
};

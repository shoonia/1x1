import { type TColors, colors } from '../../utils/colors';

interface Props {
  id: string;
}

export const DataList: FC<Props> = ({ id }) => {
  const datalist = <datalist id={id} />;

  let key: keyof TColors;

  for (key in colors) {
    datalist.append(
      <option value={colors[key]}>
        {key}
      </option>,
    );
  }

  return datalist;
};

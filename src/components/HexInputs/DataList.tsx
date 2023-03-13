import { type TColors, colors } from '../../utils/colors';

interface Props {
  id: string;
}

export const DataList: FC<Props> = ({ id }) => {
  const ready = (node: HTMLDataListElement) => {
    const fragment = <></>;

    let key: keyof TColors;

    for (key in colors) {
      fragment.append(
        <option value={colors[key]}>
          {key}
        </option>,
      );
    }

    node.append(fragment);
  };

  return (
    <datalist ref={ready} id={id} />
  );
};

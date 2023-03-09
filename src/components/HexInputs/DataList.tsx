interface Props {
  id: string;
}

const colors = JSON.parse(
  // @ts-expect-error @typescript-eslint/ban-ts-comment
  document.getElementById('colors').textContent,
) as Record<string, string>;

export const DataList: FC<Props> = ({ id }) => {
  const ready = (node: HTMLDataListElement) => {
    const fragment = <></>;

    for (const key in colors) {
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

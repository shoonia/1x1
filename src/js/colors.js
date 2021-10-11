import colors from './colorConstants.json';

export { colors };

export const createOptionList = () => {
  const list = new DocumentFragment();
  const option = document.createElement('option');

  for (let key in colors) {
    const item = option.cloneNode();

    item.value = colors[key];
    item.textContent = key;
    list.append(item);
  }

  return list;
};

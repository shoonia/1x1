import colors from './colors.json';

export type TColors = Readonly<typeof colors>;

export const isColorsKey = (val: string): val is keyof TColors => {
  return val in colors;
};

export { colors };

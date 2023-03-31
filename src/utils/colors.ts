import type T from './colors.json';

export type TColors = Readonly<typeof T>;

export const isColorsKey = (val: string): val is keyof TColors => {
  return val in colors;
};

export const colors = JSON.parse(
  // @ts-expect-error @typescript-eslint/ban-ts-comment
  document.getElementById('colors').textContent,
) as TColors;

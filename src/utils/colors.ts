
export type TColors = Readonly<typeof import('./colors.json')>;

export const isColorsKey = (val: string): val is keyof TColors => {
  return val in colors;
};

export const colors = JSON.parse(
  // @ts-expect-error @typescript-eslint/ban-ts-comment
  document.getElementById('colors').textContent,
) as TColors;

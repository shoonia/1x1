export interface IState {
  readonly r: number,
  readonly g: number,
  readonly b: number,
  readonly a: number,
  readonly hex: string,
  readonly radix: number;
  readonly toast: boolean;
  readonly timeout: ReturnType<typeof setTimeout> | undefined;
}

export interface IEvents {
  'hex': string;
  'rgba': readonly [param: TRgba, value: number];
  'copy': void;
}

export type TRgba = keyof Pick<IState, 'r' | 'g' | 'b' | 'a'>;

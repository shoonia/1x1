export interface IRgba {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a: number;
}

export interface IState extends IRgba {
  readonly radix: number;
  readonly toast: boolean;
  readonly timeout?: NodeJS.Timeout | number;
  readonly hex: string;
  readonly color: string;
  readonly bytes: readonly number[];
  readonly base64: string;
  readonly url: string;
}

export interface IEvents {
  'hex': string;
  'rgba': readonly [param: TRgba, value: number];
  'copy': void;
}

export type TRgba = keyof IRgba;

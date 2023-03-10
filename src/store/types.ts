export interface IState {
  readonly r: number,
  readonly g: number,
  readonly b: number,
  readonly a: number,
  readonly hex: string,
}

export interface IEvents {
  'set/hex': string;
  'set/rgba': [TRgba, number];
}

export type TRgba = keyof Pick<IState, 'r' | 'g' | 'b' | 'a'>;

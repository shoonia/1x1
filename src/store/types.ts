export interface IState {
  readonly r: number,
  readonly g: number,
  readonly b: number,
  readonly a: number,
  readonly hex: string,
}

export interface IEvents {
  'set/hex': unknown;
  'set/rgb': unknown;
}

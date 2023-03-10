import type { IState } from '../store/types';

export const randomHex = (size: number): string => {
  let hex = '';

  while (size--) {
    hex += (16 * Math.random() | 0).toString(16);
  }

  return hex;
};

export const decimalToHex = (i: number): string => {
  const hex = i.toString(16);

  return hex.length < 2 ? '0' + hex : hex;
};

export const createHex = ({ r, g, b, a }: IState) => {
  return [r, g, b, a].map(decimalToHex).join('');
};

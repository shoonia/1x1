import rgbHex from 'rgb-hex';

import type { IState } from '../store/types';
import { colors, isColorsKey } from './colors';

const SYMBOL_HASH = /^#/;
export const NOT_HEXADECIMAL = /[^\da-f]/ig;

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

export const parseHex = (value: string) => {
  let color = value
    .trim()
    .toLowerCase()
    .replace(SYMBOL_HASH, '');

  if (isColorsKey(color)) {
    color = colors[color];
  }

  if (NOT_HEXADECIMAL.test(color)) {
    try {
      color = rgbHex(value);
    } catch {
      return [false] as const;
    }
  }

  if (color.length === 3) {
    color += color;
  }

  if (color.length === 6) {
    color += 'ff';
  }

  if (color.length !== 8) {
    return [false] as const;
  }

  return [true, color] as const;
};

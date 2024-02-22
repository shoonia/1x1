import rgbHex from 'rgb-hex';

import type { IState } from '../store/types';
import { colors, isColorsKey } from './colors';

const SYMBOL_HASH = /^#/;
export const NOT_HEXADECIMAL = /[^\da-f]/;

export const randomHex = () => crypto.randomUUID().slice(-6) + 'ff';

export const createHex = ({ r, g, b, a }: IState) => {
  return [r, g, b, a].map((i) => {
    const hex = i.toString(16);

    return hex.length < 2 ? '0' + hex : hex;
  }).join('');
};

const duplicate = (hex: string): string => {
  return hex.split('').map((i) => i + i).join('');
};

export const getHex = (value: string): string | undefined => {
  let color = value
    .trim()
    .toLowerCase()
    .replace(SYMBOL_HASH, '');

  if (isColorsKey(color)) {
    color = colors[color];
  } else if (NOT_HEXADECIMAL.test(color)) {
    try {
      color = rgbHex(value);
    } catch {
      return;
    }
  }

  switch (color.length) {
    case 8: {
      return color;
    }
    case 6: {
      return color + 'ff';
    }
    case 4: {
      return duplicate(color);
    }
    case 3: {
      return duplicate(color) + 'ff';
    }
  }
};

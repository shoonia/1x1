import { createStoreon } from 'storeon';
import { storeonConnect } from 'storeon-connect';

import { createCanvas, createHex, parseNumber } from './util';

const appModule = ({ on }) => {
  on('@init', () => {
    return {
      R: 255,
      G: 255,
      B: 255,
      A: 255,
      hex: 'ffffffff',
      canvas: createCanvas('fff', 255),
    };
  });

  on('hex', (_, hex) => {
    const i = parseInt(hex, 16);
    const A = i & 255;

    return {
      R: i >> 24 & 255,
      G: i >> 16 & 255,
      B: i >> 8 & 255,
      A,
      hex,
      canvas: createCanvas(hex, A),
    };
  });

  on('rgba', (state, [key, value]) => {
    const i = parseNumber(value);
    const s = { ...state, [key]: i };
    const hex = createHex(s);

    return {
      [key]: i,
      hex,
      canvas: createCanvas(hex, s.A),
    };
  });
};

const store = createStoreon([appModule]);

export const { getState, dispatch, connect } = storeonConnect(store);

import { createStoreon } from 'storeon';
import { storeonConnect } from 'storeon-connect';

import { createHex, parseNumber } from './util';

const appModule = ({ on }) => {
  on('@init', () => {
    return {
      R: 255,
      G: 255,
      B: 255,
      A: 255,
      hex: 'ffffffff',
    };
  });

  on('hex', (_, hex) => {
    const i = parseInt(hex, 16);

    return {
      R: i >> 24 & 255,
      G: i >> 16 & 255,
      B: i >> 8 & 255,
      A: i & 255,
      hex,
    };
  });

  on('rgba', (state, [key, value]) => {
    const i = parseNumber(value);

    return {
      [key]: i,
      hex: createHex({ ...state, [key]: i }),
    };
  });
};

const store = createStoreon([appModule]);

export const { getState, dispatch, connect } = storeonConnect(store);

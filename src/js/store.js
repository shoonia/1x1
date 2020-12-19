import { createStoreon } from 'storeon';

import { createHex, parseNumber } from './util';

const subs = [];

const connect = (key, cb) => {
  subs.push({ key, cb });
};

const appModule = ({ on }) => {
  on('@init', () => {
    return {
      R: 255,
      G: 255,
      B: 255,
      A: 255,
      hex: 'ffffff',
    };
  });

  on('@changed', (state, diff) => {
    subs.forEach((s) => {
      if (s.key in diff) {
        s.cb(state);
      }
    });
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

const { get, dispatch } = createStoreon([appModule]);

export {
  get as getState,
  dispatch,
  connect,
};

import { createStoreon } from 'storeon/index';

import { createHex } from './util';

const subs = [];

const connect = (key, cb) => {
  subs.push({ key, cb });
};

const modules = (store) => {
  store.on('@init', () => {
    return {
      R: 255,
      G: 255,
      B: 255,
      A: 255,
      hex: 'ffffff',
    };
  });

  store.on('@changed', (state, diff) => {
    subs.forEach((s) => {
      if (s.key in diff) {
        s.cb(state);
      }
    });
  });

  store.on('hex', (_, hex) => {
    const i = parseInt(hex, 16);

    return {
      R: i >> 16 & 255,
      G: i >> 8 & 255,
      B: i & 255,
      hex,
    };
  });

  store.on('rgba', (state, [key, value]) => {
    return {
      [key]: value,
      hex: createHex({ ...state, [key]: value }),
    };
  });
};

const { dispatch } = createStoreon([modules]);

export {
  dispatch,
  connect,
};

import type { StoreonModule } from 'storeon-velo';

import type { IEvents, IState } from './types';
import { getDiff } from './helpers';
import { createHex } from '../utils';

export const app: StoreonModule<IState, IEvents> = (store) => {
  store.on('@init', () => {
    return {
      r: 255,
      g: 255,
      b: 255,
      a: 255,
      hex: 'ffffffff',
    };
  });

  store.on('set/rgba', (state, [key, val]) => {
    return {
      hex: createHex({
        ...state,
        [key]: val,
      }),
      [key]: val,
    };
  });

  store.on('set/hex', (state, val) => {
    const hex = val.length < 8 ? val + 'ff' : val;
    const i = parseInt(hex, 16);

    return getDiff(
      state,
      {
        r: i >> 24 & 255,
        g: i >> 16 & 255,
        b: i >> 8 & 255,
        a: i & 255,
        hex,
      },
    );
  });
};

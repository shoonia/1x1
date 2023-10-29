import type { StoreonModule } from 'storeon-velo';

import type { IEvents, IState } from './types';
import { getDiff } from './helpers';
import { createHex } from '../utils';

export const app: StoreonModule<IState, IEvents> = (store) => {
  store.on('@init', () => {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      hex: '00000000',
      radix: 16,
      toast: false,
    };
  });

  store.on('rgba', (state, [key, val]) => {
    return {
      hex: createHex({
        ...state,
        [key]: val,
      }),
      [key]: val,
    };
  });

  store.on('hex', (state, val) => {
    const hex = val.length < 8 ? val + 'ff' : val;
    const i = parseInt(hex, 16);

    return getDiff(
      state,
      {
        r: i >> 24 & 255,
        g: i >> 16 & 255,
        b: i >> 8 & 255,
        a: i & 255,
      },
      { hex },
    );
  });
};

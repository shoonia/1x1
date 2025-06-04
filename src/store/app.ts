import type { StoreonModule } from 'storeon-velo';

import type { IEvents, IRgba, IState } from './types';
import { getDiff } from './helpers';
import { createHex } from '../utils';
import { makePixelPng } from '../utils/png';

const calc = (hex: string, rgba: IRgba): Partial<IState> => {
  const bytes = makePixelPng(rgba);
  const base64 = btoa(String.fromCharCode(...bytes));

  return {
    hex,
    color: '#' + hex,
    bytes,
    base64,
    url: 'data:image/png;base64,' + base64,
  };
};

export const app: StoreonModule<IState, IEvents> = (store) => {
  store.on('@init', () => {
    const rgba: IRgba = {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    };

    return {
      radix: 16,
      toast: false,
      ...rgba,
      ...calc('', rgba),
    };
  });

  store.on('rgba', (state, [key, value]) => {
    const v = value | 0;
    const i = v > 255 ? 255 : v < 0 ? 0 : v;
    const rgba: IRgba = { ...state, [key]: i };
    const hex = createHex(rgba);


    return {
      [key]: i,
      ...calc(hex, rgba),
    };
  });

  store.on('hex', (state, val) => {
    const hex = val.length < 8 ? val + 'ff' : val;
    const i = parseInt(hex, 16);

    const rgba: IRgba = {
      r: i >> 24 & 255,
      g: i >> 16 & 255,
      b: i >> 8 & 255,
      a: i & 255,
    };

    return getDiff(
      state,
      rgba,
      calc(hex, rgba),
    );
  });

  store.on('copy', (state) => {
    clearTimeout(state.timeout);

    return {
      toast: true,
      timeout: setTimeout(store.set, 2000, { toast: false }),
    };
  });
};

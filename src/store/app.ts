import type { StoreonModule } from 'storeon-velo';

import type { IEvents, IState } from './types';
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

  store.on('set/rgba', (state, [param, value]) => {
    return {
      hex: createHex({
        ...state,
        [param]: value,
      }),
      [param]: value,
    };
  });
};

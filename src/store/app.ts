import type { StoreonModule } from 'storeon-velo';

import type { IEvents, IState } from './types';

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
};

import { createStoreon } from 'storeon-velo';

import type { IEvents, IState } from './types';
import { app } from './app';

export { HISTORY_LENGTH } from './storage';

export const { readyStore, connect, dispatch, setState, getState } = createStoreon<IState, IEvents>([
  app,
]);

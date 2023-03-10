import { createStoreon } from 'storeon-velo';

import type { IEvents, IState } from './types';
import { app } from './app';

export const { readyStore, connect, dispatch, setState } = createStoreon<IState, IEvents>([
  app,
]);

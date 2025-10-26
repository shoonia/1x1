// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { test } from 'node:test';
import { deepStrictEqual } from 'node:assert/strict';

import data from './png-data.json' with { type: 'json' };
import { makePixelPng } from '../src/utils/png.ts';

data.forEach(([rgba, expected], i) => {
  test(`makePixelPng case ${i}`, () => {
    const result = makePixelPng(rgba);
    deepStrictEqual(result, expected);
  });
});

import { expect, mergeExpects } from '@playwright/test';

const expectFoo = expect.extend({
  async toBeFoo() {
    return { pass: true, message: () => 'foo' };
  },
});

const expectBar = expect.extend({
  async toBeBar() {
    return { pass: true, message: () => 'bar' };
  },
});

const expectBaz = expect.extend({
  async toBeBar() {
    return { pass: true, message: () => 'bar' };
  },
});

export const mergedExpects = mergeExpects(expectFoo, expectBar);
export const mergedExpects2 = mergeExpects(mergeExpects, expectBaz);

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

export const mergedExpects = mergeExpects(expectFoo, expectBar);

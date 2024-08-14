// tests/unit/utils.test.js
import { describe, it, expect } from 'vitest';
import { sum } from '../../lib/main';

describe('sum function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });
});

// tests/unit/utils.test.js
import { describe, it, expect } from 'vitest';
import { sum, async_sum } from '../../lib/main';
import { async_error } from '../../lib/utils';

describe('sum function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });
});

describe('async_sum function', () => {
  it('adds 1 + 2 to equal 3', async () => {
    expect(await async_sum(1, 2)).toBe(3);
  });

  it('adds -1 + 1 to equal 0', async () => {
    expect(await async_sum(-1, 1)).toBe(0);
  });
});

describe('asyncFunctionThatThrows', () => {
  it('should throw an error', async () => {
    // Test that the async function throws an error
    await expect(async_error()).rejects.toThrow('Something went wrong');
  });
});

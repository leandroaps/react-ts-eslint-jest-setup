import { SUM } from '../src/';

describe('sum', () => {
  it('should return sum of two numbers', () => {
    expect(SUM(1, 2)).toEqual(3);
  });
});

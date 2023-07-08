import { range } from '../range';

describe('range', () => {
  it('should return an array of numbers with default start and step', () => {
    const result = range(5);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it('should return an array of numbers with specified start and step', () => {
    const result = range(5, { start: 1, step: 2 });
    expect(result).toEqual([1, 3, 5]);
  });

  it('should return an empty array if range is 0', () => {
    const result = range(0);
    expect(result).toEqual([]);
  });

  it('should return an array with a single number if range is 1', () => {
    const result = range(1);
    expect(result).toEqual([0]);
  });


  it('should handle range and step greater than 1', () => {
    const result = range(3, { start: 10, step: 3 });
    expect(result).toEqual([10]);
  });
});

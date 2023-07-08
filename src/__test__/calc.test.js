import calc from "../calc"

describe('calc', () => {
  it('should return the correct result for addition', () => {
    const result = calc(2, 3, '+');
    expect(result).toBe('2 + 3 = 5');
  });

  it('should return the correct result for subtraction', () => {
    const result = calc(5, 2, '-');
    expect(result).toBe('5 - 2 = 3');
  });

  it('should return the correct result for multiplication', () => {
    const result = calc(4, 5, '*');
    expect(result).toBe('4 * 5 = 20');
  });

  it('should return the correct result for division', () => {
    const result = calc(10, 2, '/');
    expect(result).toBe('10 / 2 = 5');
  });

  it('should return "Invalid operator" for an unknown operator', () => {
    const result = calc(4, 3, 'a');
    expect(result).toBe('Invalid operator');
  });
});

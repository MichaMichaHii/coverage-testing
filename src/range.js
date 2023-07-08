/**
 * @param {number} range - number of array
 * @param {object} config - { start(option): number, step(option): number}
 */

export const range = (range, config) => {
  const { start = 0, step = 1 } = config || {};
  const arr = [];
  for (let i = start; i < start + range; i += step) {
    arr.push(i);
  }
  return arr;
};

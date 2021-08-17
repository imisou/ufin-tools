import { isArray } from '../isArray';

test('isArray : []  ', () => {
  expect(isArray([])).toBe(true);

  expect(isArray(new Array(1,2))).toBe(true);
  expect(isArray(Array.from({length:5},() => 1))).toBe(true);
});

test('isArray : 1, 类数组 ', () => {
  expect(isArray(1)).toBe(false);
  expect(isArray({ 0:1,1:1,length:2 })).toBe(false);
});

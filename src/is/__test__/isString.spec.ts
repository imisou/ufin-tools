import { isString } from '../isString';

test('isString : ""，\'0\' ', () => {
  expect(isString('')).toBe(true);
  expect(isString('0')).toBe(true);
});

test('isString : 1,true,[],undefined,null ', () => {
  expect(isString(1)).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString([])).toBe(false);
  expect(isString(undefined)).toBe(false);
  expect(isString(null)).toBe(false);
});

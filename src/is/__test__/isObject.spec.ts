import { isObject } from '../isObject';

test('isObject {}', () => {
  expect(isObject({})).toBe(true);
});

test('isObject : 1,true,[],undefined,null ', () => {
  expect(isObject([])).toBe(false);
  expect(isObject(1)).toBe(false);
  expect(isObject(true)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject([])).toBe(false);
});

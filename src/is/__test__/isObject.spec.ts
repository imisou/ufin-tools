import { isObject } from '../isObject';

test('isObject : Symbol()，Symbol(121312) ', () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(true);
});

test('isObject : 1,true,[],undefined,null ', () => {
  expect(isObject(1)).toBe(false);
  expect(isObject(true)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(null)).toBe(false);
});

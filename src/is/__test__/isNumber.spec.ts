import { isNumber } from '../isNumber';

test('isNumber : 0，-1 ', () => {
  expect(isNumber(0)).toBe(true);
  expect(isNumber(-1)).toBe(true);
});


test('isNumber : "","1",[],undefined,null ', () => {
  expect(isNumber("")).toBe(false);
  expect(isNumber("1")).toBe(false);
  expect(isNumber([])).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber(null)).toBe(false);
});

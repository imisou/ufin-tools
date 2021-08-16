import { isBoolean, isNull, isArray, isEmptyValue } from '../../../src/is/base';




// ------------------------------------
// ------------- isArray --------------
// ------------------------------------
test('isArray : [] ', () => {
  expect(isArray([])).toBe(true);
});

test('isArray : { 0: 1 } ', () => {
  expect(isArray({ 0: 1 })).toBe(false);
});

// isEmptyValue
test('isEmptyValue : null ', () => {
  expect(isEmptyValue(null)).toBe(true);
});

test('isEmptyValue : undefined ', () => {
  expect(isEmptyValue(undefined)).toBe(true);
});

test('isEmptyValue : "" ', () => {
  expect(isEmptyValue('')).toBe(true);
});

test('isEmptyValue : [] ', () => {
  expect(isEmptyValue([])).toBe(true);
});

test('isEmptyValue : {} ', () => {
  expect(isEmptyValue({})).toBe(true);
});

test('isEmptyValue : 0 ', () => {
  expect(isEmptyValue(0)).toBe(false);
});

test('isEmptyValue : -0 ', () => {
  expect(isEmptyValue(-0)).toBe(false);
});

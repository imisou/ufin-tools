import { isBoolean, isNull, isArray, isEmptyValue } from '../../../src/is/base';

test('isBoolean : true ', () => {
  expect(isBoolean(true)).toBe(true);
});

test('isBoolean : 1 ', () => {
  expect(isBoolean(1)).toBe(false);
});

test('isBoolean : false ', () => {
  expect(isBoolean(false)).toBe(true);
});

test('isNull : "" ', () => {
  expect(isNull('')).toBe(false);
});

test('isNull : null ', () => {
  expect(isNull(null)).toBe(true);
});

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

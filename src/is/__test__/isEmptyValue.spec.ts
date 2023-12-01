import { isEmptyValue } from '../isEmptyValue';


// 正确数据
test('isEmptyValue : []  ', () => {
  expect(isEmptyValue([])).toBe(true);
});

test('isEmptyValue : ""  ', () => {
  expect(isEmptyValue("")).toBe(true);
});

test('isEmptyValue : null  ', () => {
  expect(isEmptyValue(null)).toBe(true);
});

test('isEmptyValue : undefined  ', () => {
  expect(isEmptyValue(undefined)).toBe(true);
});

test('isEmptyValue : {}  ', () => {
  expect(isEmptyValue({})).toBe(true);
});

// 错误数据
test('isEmptyValue : " "  ', () => {
  expect(isEmptyValue(" ")).toBe(false);
});

test('isEmptyValue : "1"  ', () => {
  expect(isEmptyValue("1")).toBe(false);
});

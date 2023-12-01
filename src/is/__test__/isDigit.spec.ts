import { isDigit } from "../isDigit";

//
test('isDigit : 正确数据', () => {
  expect(isDigit("123")).toBe(true);
});

//
test('isDigit : 正确数据', () => {
  expect(isDigit("0123")).toBe(true);
});

test('isDigit : 正确数据', () => {
  expect(isDigit("-0123")).toBe(true);
});

test('isDigit : 正确数据', () => {
  expect(isDigit("123.12")).toBe(true);
});

test('isDigit : 错误数据', () => {
  expect(isDigit("12A12")).toBe(false);
})

test('isDigit : 错误数据', () => {
  expect(isDigit("12A12.")).toBe(false);
})
test('isDigit : 错误数据', () => {
  expect(isDigit("12A12.1.2")).toBe(false);
})

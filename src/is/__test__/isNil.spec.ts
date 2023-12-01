import { isNil } from "../isNil";

test('isNil : null ', () => {
  expect(isNil(null)).toBe(true);
});

test('isNil : undefined ', () => {
  expect(isNil(undefined)).toBe(true);
});

test('isNil : "" ', () => {
  expect(isNil("")).toBe(false);
});

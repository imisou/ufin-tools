import { isNull } from "../isNull";

test('isNull : "" ', () => {
  expect(isNull('')).toBe(false);
});

test('isNull : null ', () => {
  expect(isNull(null)).toBe(true);
});

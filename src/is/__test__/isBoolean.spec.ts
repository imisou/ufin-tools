import { isBoolean } from "../isBoolean";

test('isBoolean : true ', () => {
  expect(isBoolean(true)).toBe(true);
});

test('isBoolean : 1 ', () => {
  expect(isBoolean(1)).toBe(false);
});

test('isBoolean : false ', () => {
  expect(isBoolean(false)).toBe(true);
});

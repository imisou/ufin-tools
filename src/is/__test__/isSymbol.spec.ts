import { isSymbol } from '../isSymbol';

test('isSymbol : Symbol()，Symbol(121312) ', () => {
  expect(isSymbol(Symbol())).toBe(true);
  expect(isSymbol(Symbol(121312))).toBe(true);
});

test('isSymbol : 1,true,[],undefined,null ', () => {
  expect(isSymbol(1)).toBe(false);
  expect(isSymbol(true)).toBe(false);
  expect(isSymbol([])).toBe(false);
  expect(isSymbol(undefined)).toBe(false);
  expect(isSymbol(null)).toBe(false);
});

import { isCardID } from '../../../src/is/cardId';

test('isCardID : "321281199825334586" ', () => {
  expect(isCardID('321281199825334586')).toBe(false);
});

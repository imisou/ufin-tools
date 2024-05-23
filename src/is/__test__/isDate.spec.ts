import { isDate } from '../isDate';

test('isDate : new Date() 返回 true  ', () => {
  expect(isDate(new Date())).toBe(true);
});

test('isDate 为false的情况: 1 , 对象 , 数字', () => {
  expect(isDate(1)).toBe(false);
  expect(isDate({ 0: 1, 1: 1, length: 2 })).toBe(false);
  // +new Date() 也为false
  expect(isDate(+new Date())).toBe(false);
});

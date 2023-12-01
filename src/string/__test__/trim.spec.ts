import { trim } from '../trim';

test('trim : 默认的', () => {
  expect(trim(' ab cde ')).toBe('ab cde');
});

test('trim : 修改type 为1，去除所有的空格', () => {
  expect(trim(' ab cde ', 1)).toBe('abcde');
});

test('trim : 修改type 为2，去除前后空格', () => {
  expect(trim(' ab cde ', 2)).toBe('ab cde');
});

test('trim : 修改type 为3，去除 前空格 ', () => {
  expect(trim(' ab cde ', 3)).toBe('ab cde ');
});

test('trim : 修改type 为4，去除后空格', () => {
  expect(trim(' ab cde ', 4)).toBe(' ab cde');
});

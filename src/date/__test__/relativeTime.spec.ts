import { relativeTime } from '../relativeTime';

// 2021/07/05
const current = 1625466764674;

test('relativeTime : 基础 ', () => {
  expect(relativeTime(current - 999, current)).toBe('刚刚');
  expect(relativeTime(current - 1000, current)).toBe('1秒前');
  expect(relativeTime(current - 59999, current)).toBe('59秒前');
  expect(relativeTime(current - 60000, current)).toBe('1分钟前');
  expect(relativeTime(current - 3600000 + 1, current)).toBe('59分钟前');
  expect(relativeTime(current - 3600000, current)).toBe('1小时前');
  expect(relativeTime(current - 86400000 + 1, current)).toBe('23小时前');
  expect(relativeTime(current - 86400000, current)).toBe('1天前');
  expect(relativeTime(current - 86400000 - 86400000, current)).toBe('2天前');
});

test('relativeTime : 相对于当前时间，且之后的时间 ', () => {
  const current = new Date().getTime();
  expect(relativeTime(current + 999, current)).toBe('刚刚');
  expect(relativeTime(current + 1000, current)).toBe('1秒后');
  expect(relativeTime(current + 59999, current)).toBe('59秒后');
  expect(relativeTime(current + 60000, current)).toBe('1分钟后');
  expect(relativeTime(current + 3600000 - 1, current)).toBe('59分钟后');
  expect(relativeTime(current + 3600000, current)).toBe('1小时后');
  expect(relativeTime(current + 86400000 - 1, current)).toBe('23小时后');
  expect(relativeTime(current + 86400000, current)).toBe('1天后');
  expect(relativeTime(current + 86400000 + 86400000, current)).toBe('2天后');
});

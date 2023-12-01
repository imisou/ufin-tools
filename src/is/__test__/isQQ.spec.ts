import { isQQ } from '../isQQ';

test('isQQ : 正确的数据', () => {
  expect(isQQ('1234567890')).toBe(true);
  expect(isQQ('12345')).toBe(true);
});

test('isQQ : 错误的数据', () => {
  expect(isQQ('1234')).toBe(false); // 小于5位
  expect(isQQ('12345678901')).toBe(false); // 超过10位
  expect(isQQ('12345678a')).toBe(false); // 包含非数字类型字符
  expect(isQQ('023456789')).toBe(false); // 首字符不能为0
});

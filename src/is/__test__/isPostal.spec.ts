import { isPostal } from '../isPostal';

test('isPostal : 正确的数据', () => {
  expect(isPostal('100000')).toBe(true);
});

test('isPostal : 错误的数据', () => {
  expect(isPostal('1234')).toBe(false); // 小于5位
  expect(isPostal('12345678901')).toBe(false); // 超过10位
  expect(isPostal('12345678a')).toBe(false); // 包含非数字类型字符
  expect(isPostal('023456789')).toBe(false); // 首字符不能为0
});

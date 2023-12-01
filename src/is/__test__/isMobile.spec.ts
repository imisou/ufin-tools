import { isMobile } from '../isMobile';

test('isMobile : 正确的数据', () => {
  expect(isMobile('15601598629')).toBe(true);
});

test('isMobile : 错误的数据', () => {
  expect(isMobile('1234')).toBe(false); // 位数不是11位
  expect(isMobile('12345678a')).toBe(false); // 包含非数字类型字符
  expect(isMobile('25601598629')).toBe(false); // 首字符不是1
  expect(isMobile('11601598629')).toBe(false); // 第二个字符是1或者2
});

test('isMobile : 手机号码号段校验', () => {
  expect(isMobile('10112345678')).toBe(false); // 101号段 错误
  expect(isMobile('11112345678')).toBe(false); // 111号段 错误
  expect(isMobile('12112345678')).toBe(false); // 121号段 错误
  expect(isMobile('13112345678')).toBe(true); // 131号段
  expect(isMobile('14112345678')).toBe(false); // 141号段 错误
  expect(isMobile('14412345678')).toBe(false); // 144号段 错误
  expect(isMobile('14512345678')).toBe(true); // 145号段
  expect(isMobile('15112345678')).toBe(true);  // 151号段
  expect(isMobile('16112345678')).toBe(false); // 161号段 错误
  expect(isMobile('16612345678')).toBe(true); // 161号段
  expect(isMobile('17112345678')).toBe(false); // 171号段 错误
  expect(isMobile('17312345678')).toBe(true); // 173号段
  expect(isMobile('18112345678')).toBe(true); // 181号段
  expect(isMobile('19112345678')).toBe(true); // 191号段
});

import { isNickName } from '../isNickName';
/*
  1、为汉字，且最少两位
  2、为英文名称，且最少两位
  3、为中文名称加数字，且最少两位

*/

test('isNickName : 正确数据-只有汉字 ', () => {
  expect(isNickName('胡歌')).toBe(true);
});
test('isNickName : 正确数据_英文名称，例如 Jad ', () => {
  expect(isNickName('Jad')).toBe(true);
  expect(isNickName('Barack Hussein Obama')).toBe(true);
  expect(isNickName('贝拉克·侯赛因·奥巴马')).toBe(true);
});

test('isNickName : 正确数据_中文名称加数字，例如 胡歌1 ', () => {
  expect(isNickName('胡歌1')).toBe(true);
  expect(isNickName('胡歌a')).toBe(true);
});
test('isNickName : 错误数据_只有1位，例如 胡', () => {
  expect(isNickName('胡')).toBe(false);
  expect(isNickName('J')).toBe(false);
});

test('isNickName : 错误数据_包含特殊字符等，例如 ^`~!@#$^&*()+=|{}\':;\',[].<>/?~！@#￥……&*（）——|{}【】‘；：”“\'。，、？% ', () => {
  expect(isNickName('胡歌#')).toBe(false);
  expect(isNickName('#胡歌')).toBe(false);
  expect(isNickName('@胡歌')).toBe(false);
  expect(isNickName('$胡歌')).toBe(false);
  expect(isNickName('(胡歌)')).toBe(false);
});

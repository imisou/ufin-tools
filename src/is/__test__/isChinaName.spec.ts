import { isChinaName } from '../isChinaName';
/*
  1、只能为汉字，且最少两位

*/

test('isChinaName : 正确数据-只有汉字 ', () => {
  expect(isChinaName('胡歌')).toBe(true);
});
test('isChinaName : 错误数据_只有一个汉字，例如胡 ', () => {
  expect(isChinaName('胡')).toBe(false);
});

test('isChinaName : 错误数据_包含字母数字特殊字符等，例如胡歌y ', () => {
  expect(isChinaName('胡歌y')).toBe(false);
  expect(isChinaName('胡歌1')).toBe(false);
  expect(isChinaName('胡歌#')).toBe(false);
  expect(isChinaName('#胡歌')).toBe(false);
  expect(isChinaName('Jad')).toBe(false);
  expect(isChinaName('胡 歌')).toBe(false);
  expect(isChinaName('Jad 胡')).toBe(false);
});

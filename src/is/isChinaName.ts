import { ChinaNameRegexp } from '../regexp/index';
/**
 * 是否为 中文姓名(只能为汉字，且最少两位)
 *
 * @param { string } val  中文姓名
 * @returns { Boolean }
 *
 *
 * @example
 *
 * isChinaName('胡歌');
 * // => true
 *
 * isChinaName('胡');    // => false
 * isChinaName('胡歌y'); // => false
 * isChinaName('胡歌1'); // => false
 * isChinaName('胡歌#'); // => false
 * isChinaName('Jad');  // => false
 * isChinaName('胡 歌'); // => false
 * isChinaName('Jad 胡'); // => false
 *
 */
export const isChinaName = (val: string): boolean => {
  return ChinaNameRegexp.test(val);
};

import { EnglishNameRegexp } from '../regexp/index';
/**
 * 是否为有效的英文姓名
 *
 * @param { String } val
 * @returns {boolean}
 *
 *
 * @example
 *
 * isEnglishName('James');
 * // => true
 *
 * isEnglishName('Kevin Wayne Durant');
 * // => true
 *
 * isEnglishName('Dirk Nowitzki');
 * // => true
 */
export const isEnglishName = (val: string): boolean => {
  return EnglishNameRegexp.test(val);
};

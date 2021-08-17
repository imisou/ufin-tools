/**
 * 是否为有效的英文姓名
 *
 * @param { String } val
 * @returns {boolean}
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

  const reg = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/;

  return reg.test(val);
};

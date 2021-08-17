/**
 * 是否为数字, 注意 不关注是否数字第一个为0，且支持 负值，小数位，如 12 ， 012 , -12, 12.1
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isDigit('100');
 * // => true
 * isDigit('012');
 * // => true
 * isDigit('-012');
 * // => true
 * isDigit('12.12');
 * // => true
 *
 * isDigit('abc');
 * // => false
 */
export const isDigit = (val: string): boolean => {
  var reg = /^-?\d+\.?\d*$/;
  return reg.test(val);
};

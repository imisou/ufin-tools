import { PhoneRegexp } from '../regexp/index';

/**
 * 是否为有效的手机号码
 *
 * @author jed
 * @param { String } val 手机号码
 * @returns { Boolean }
 *
 * @example
 *
 * isMobile("15601589834")
 * // => true
 */
export const isMobile = (val: string): boolean => {
  return PhoneRegexp.test(val);
};

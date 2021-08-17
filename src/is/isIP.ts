import { IPRegexp } from '../regexp';

/**
 * IP格式校验
 *
 * @param {String} str 检测的值
 * @returns Boolean
 *
 */
export const isIP = (str: string): boolean => {
  return IPRegexp.test(str);
};

import { EmailRegexp } from '../regexp';

/**
 * 邮箱格式校验(非严格校验)
 *
 * @param {String} str 检测的值
 * @returns { boolean } 返回true|false
 */
export const isEmail = (val: string): boolean => {
  return EmailRegexp.test(val);
};

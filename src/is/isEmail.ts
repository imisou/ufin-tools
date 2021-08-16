import { EmailRegexp } from '../regexp';

/**
 * 是否为有效的邮箱地址<br>
 * 名称允许汉字、字母、数字，域名只允许英文域名<br>
 *
 * @param {String} str 检测的值
 * @returns { boolean } 返回true|false
 */
export const isEmail = (val: string): boolean => {
  return EmailRegexp.test(val);
};

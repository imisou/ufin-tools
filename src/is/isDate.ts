import { helperGetTypeInObjectToString } from './base';
/**
 * 是否是日期类型类型
 * @author jed
 * @param { any } val
 * @returns  { Boolean }
 *
 * @example
 *
 * isDate(new Date())
 * // => true
 *
 * isDate("")
 * // => false
 */
export const isDate = helperGetTypeInObjectToString('Date');


import { toString } from "./base";

/**
 * 是否是对象类型
 * @param val
 * @returns  Boolean
 * @example
 *
 * isObject({})
 * // => true
*
 *
 * isObject([])
 * // => true
 *
 * isObject(1)
 * // => false
 * isObject(true)
 * // => false
 * isObject(undefined)
 * // => false
 * isObject(null)
 * // => false
 *
 */
 export const isObject = (val: any): boolean => {
  return toString.call(val).slice(8, -1) === 'Object';
};

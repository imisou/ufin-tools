import { helperGetTypeInObjectToString } from './base';

/**
 * 是否是对象类型
 * @param val
 * @returns  Boolean
 *
 *
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([])
 * // => false
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
export const isObject = helperGetTypeInObjectToString('Object');

/**
 * 判断是否为 string 类型。
 * @param val
 * @returns Boolean
 *
 *
 * @example
 *
 * isString("")
 * // => true
 */
 export const isString = (val: unknown): val is string => typeof val === 'string';

/**
 * 判断是否为 null 或 undefined 类型。
 * @param val
 * @returns Boolean
 * @example
 *
 * isNil(undefined)
 * // => true
 * isNil(null)
 * // => true
 * isNil("")
 * // => false
 */
 export const isNil = (val: any): boolean => val === undefined || val === null;

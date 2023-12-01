/**
 * 判断是否是Null类型
 * @param val
 * @returns Boolean
 *
 *
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(undefined)
 * // => false
 * isNull("")
 * // => false
 */
 export const isNull = (val: any): val is null => val === null;

/**
 * 判断是否是undefined类型
 * @param val
 * @returns { Boolean }
 *
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined(null)
 * // => false
 * isUndefined("")
 * // => false
 */
 export const isUndefined = (val: any): val is undefined => val === undefined;

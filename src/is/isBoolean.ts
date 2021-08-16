
/**
 * 判断是否是Boolean类型
 * @param val
 * @returns Boolean
 *
 * @example
 * isBoolean(true)
 * // => true
 * isBoolean("true")
 * //=> false
 */
 export const isBoolean = (val: any): val is boolean => typeof val === 'boolean';


/**
 * 判断是否是Boolean类型
 * @author jed
 * @param { any } val
 * @returns  { Boolean }
 *
 *
 * @example
 * isBoolean(true)
 * // => true
 * isBoolean("true")
 * //=> false
 */
 export const isBoolean = (val: any): val is boolean => typeof val === 'boolean';

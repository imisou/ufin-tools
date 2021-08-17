/**
 * 是否是对象类型
 * @param val
 * @returns  Boolean
 * @example
 *
 * isObject({})
 * // => true
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
export declare const isObject: (val: any) => boolean;

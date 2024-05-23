/**
 * 判断是否为 number 类型。
 * @param val
 * @returns Boolean
 * @example
 *
 * isNumber(1)
 * // => true
 * isNumber(-1)
 * // => true
 * isNumber("")
 * // => false
 * isNumber("1")
 * // => false
 * isNumber(null)
 * // => false
 * isNumber(false)
 * // => false
 */
export declare const isNumber: (val: any) => val is number;

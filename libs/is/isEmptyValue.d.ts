/**
 * 判断val是否是一个空值，如"" , null , undefined , [] , {} ,
 * @param val
 * @returns Boolean
 * @example
 *
 * isEmptyValue([])
 * // => true
 * isEmptyValue("")
 * // => true
 * isEmptyValue(null)
 * // => true
 * isEmptyValue(undefined)
 * // => true
 * isEmptyValue(undefined)
 * // => true
 * isEmptyValue({})
 * // => true
 *
 * // 错误的数据
 * isEmptyValue(" ")
 * // => false
 * isEmptyValue("1")
 * // => false
 */
export declare const isEmptyValue: (val: any) => boolean;

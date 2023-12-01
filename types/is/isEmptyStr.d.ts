/**
 * 判断val是否是一个空值，如"" , "  " , null , undefined , [] , {} ,
 *
 * @param { any } val  判断空值入参
 * @returns { Boolean }
 *
 *
 * @example
 *
 * isEmptyStr(null)
 * // => true
 * isEmptyStr(undefined)
 * // => true
 * isEmptyStr("")
 * // => true
 * isEmptyStr(" ")
 * // => true
 * isEmptyStr("  ")
 * // => true
 *
 * // 错误的数据
 * isEmptyStr(" 1 ")
 * // => false
 * isEmptyStr("1")
 * // => false
 * isEmptyStr(1)
 * // => false
 * isEmptyStr({})
 * // => false
 * isEmptyStr([])
 * // => false
 */
export declare const isEmptyStr: (val: any) => boolean;

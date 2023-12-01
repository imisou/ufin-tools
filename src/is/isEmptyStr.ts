import { isNull } from "./isNull";
import { isNumber } from "./isNumber";
import { isString } from "./isString";
import { isUndefined } from "./isUndefined";

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
export const isEmptyStr = (val: any): boolean => {
  // 非 null undefined string number 类型的 默认就是 false
  if (!isNull(val) && !isUndefined(val) && !isNumber(val) && !isString(val)) { return false }

  if (isUndefined(val) || isNull(val)) {
    return true;
  }

  if (isString(val) && val.trim() !== '') {
    return false;
  }

  if (isNumber(val) && val !== 0) {
    return false;
  }

  return true;
};

import { isUndefined  } from "./isUndefined";
import { isNull  } from "./isNull";
import { isObject  } from "./isObject";
import { isArray  } from "./isArray";

/**
 * 判断val是否是一个空值，如"" , null , undefined , [] , {} ,
 *
 * @param { any } val  判断空值入参
 * @returns { Boolean }
 *
 *
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
 export const isEmptyValue = (val: any): boolean => {
  if (isUndefined(val) || isNull(val) || val === '') {
    return true;
  }

  if (isObject(val)) {
    return !Object.keys(val).length;
  }
  if (isArray(val)) {
    return val.length === 0;
  }

  return false;
};

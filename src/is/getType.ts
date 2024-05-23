import { isArray } from './isArray';
import { isDate } from './isDate';
import { isNull } from './isNull';
import { isSymbol } from './isSymbol';

/**
 * 获取对象类型
 *
 * @param { Any } val 变量
 * @return {String }
 */
export const getType = (val: any): string => {
  if (isNull(val)) {
    return 'null';
  }
  if (isSymbol(val)) {
    return 'symbol';
  }
  if (isDate(val)) {
    return 'date';
  }
  if (isArray(val)) {
    return 'array';
  }
  // if (isR(obj)) {
  //   return 'regexp';
  // }
  // if (isError(obj)) {
  //   return 'error';
  // }
  return typeof val;
};

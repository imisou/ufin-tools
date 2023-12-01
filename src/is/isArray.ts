import { toString } from "./base";

/**
 * 是否是数组类型
 * @author jed
 * @param { any } val
 * @returns  { Boolean }
 *
 * @example
 *
 * isArray([])
 * // => true
 *
 * isArray({ 0:1,1:1,length:2 })
 * // => false
 */
 export const isArray = (val: any): boolean => {
  return toString.call(val).slice(8, -1) === 'Array';
};

import { toString } from "./base";

/**
 * 是否是数组类型
 * @author jed
 * @param { any } val
 * @returns  { Boolean }
 */
 export const isArray = (val: any): boolean => {
  return toString.call(val).slice(8, -1) === 'Array';
};

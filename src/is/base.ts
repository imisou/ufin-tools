import loadshIsEmpty from 'lodash/isEmpty';

export const  toString = Object.prototype.toString;



/**
 * 判断是否为 null 或 undefined 类型。
 * @param val
 * @returns Boolean
 */
export const isNil = (val: any): boolean => val === undefined || val === null;

/**
 * 判断是否为 number 类型。
 * @param val
 * @returns Boolean
 */
export const isNumber = (val: any): val is number => typeof val === 'number';

/**
 * 判断是否为 string 类型。
 * @param val
 * @returns Boolean
 */
export const isString = (val: unknown): val is string => typeof val === 'string';

/**
 * 判断参数的值是否是 Symbol 类型
 * @param val
 * @returns  Boolean
 */
export const isSymbol = (val: any): val is symbol => typeof val === 'symbol';

/**
 * 是否是对象类型
 * @param val
 * @returns  Boolean
 */
export const isObject = (val: any): boolean => {
  //
  return toString.call(val).slice(8, -1) === 'Object';
};

/**
 * 是否是数组类型
 * @param val
 * @returns  Boolean
 */
export const isArray = (val: any): boolean => {
  return toString.call(val).slice(8, -1) === 'Array';
};

/**
 * 判断val是否是一个空值，如"" , null , undefined , [] , {} ,
 * @param val
 * @returns Boolean
 */
export const isEmptyValue = (val: any): boolean => {
  if (isUndefined(val) || isNull(val) || val === '') {
    return true;
  }

  if (isObject(val)) {
    return loadshIsEmpty(val);
  }
  if (isArray(val)) {
    return val.length === 0;
  }

  return false;
};

/**
 * 判断是否是函数类型
 * @param val
 * @returns
 */
export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function';

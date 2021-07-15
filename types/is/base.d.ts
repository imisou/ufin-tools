/**
 * 判断是否是Boolean类型
 * @param val
 * @returns Boolean
 */
export declare const isBoolean: (val: any) => val is boolean;
/**
 * 判断是否是Null类型
 * @param val
 * @returns Boolean
 */
export declare const isNull: (val: any) => val is null;
/**
 * 判断是否是undefined类型
 * @param val
 * @returns Boolean
 */
export declare const isUndefined: (val: any) => val is undefined;
/**
 * 判断是否为 null 或 undefined 类型。
 * @param val
 * @returns Boolean
 */
export declare const isNil: (val: any) => boolean;
/**
 * 判断是否为 number 类型。
 * @param val
 * @returns Boolean
 */
export declare const isNumber: (val: any) => val is number;
/**
 * 判断是否为 string 类型。
 * @param val
 * @returns Boolean
 */
export declare const isString: (val: unknown) => val is string;
/**
 * 判断参数的值是否是 Symbol 类型
 * @param val
 * @returns  Boolean
 */
export declare const isSymbol: (val: any) => val is symbol;
/**
 * 是否是对象类型
 * @param val
 * @returns  Boolean
 */
export declare const isObject: (val: any) => boolean;
/**
 * 是否是数组类型
 * @param val
 * @returns  Boolean
 */
export declare const isArray: (val: any) => boolean;
/**
 * 判断val是否是一个空值，如"" , null , undefined , [] , {} ,
 * @param val
 * @returns Boolean
 */
export declare const isEmptyValue: (val: any) => boolean;
/**
 * 判断是否是函数类型
 * @param val
 * @returns
 */
export declare const isFunction: <T extends Function>(val: any) => val is T;

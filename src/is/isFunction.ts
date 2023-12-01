
/**
 * 判断是否是函数类型
 * @param val
 * @returns { Boolean }
 *
 *
 * @example
 * const func = () =>  1;
 * isFunction(func)
 * // => true
 *
 * const function func() {}
 * isFunction(func)
 * // => true
 *
 * isFunction("1udr Bide")
 * // => false
 */
 export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function';

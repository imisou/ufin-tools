
/**
 * 判断是否是函数类型
 * @param val
 * @returns { Boolean }
 *
 *
 * @example
 * const func = () =>  1;
 * isAsyncFunction(func)
 * // => true
 *
 * const function func() {}
 * isAsyncFunction(func)
 * // => true
 *
 * isAsyncFunction("1udr Bide")
 * // => false
 */
 export const isAsyncFunction = <T extends Function>(val: any): val is T => typeof val === 'AsyncFunction';

/**
 * 判断参数的值是否是 Symbol 类型
 * @param val
 * @returns  Boolean
 * @example
 *
 * isSymbol(Symbol(1))
 * // => true
 */
export declare const isSymbol: (val: any) => val is symbol;

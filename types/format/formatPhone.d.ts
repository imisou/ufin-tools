/**
 *  手机号码按照 344 的方式进行格式化显示
 *
 * @param {String} mobile   手机号码
 * @param {String} symbol   分割符号 默认为 ' '
 * @example
 *
 * formatPhone(`18915601235`)
 * // => `189 1560 1235`
 *
 * formatPhone(`18915601235` , ',')
 * // => `189,1560,1235`
 *
 */
export declare const formatPhone: (mobile: string, symbol?: string) => string;

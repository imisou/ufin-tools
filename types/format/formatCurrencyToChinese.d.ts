/**
 *
 * 将数字转换为大写金额
 *   如果没有小数位则后面加一个整
 *   如果超过十亿，返回值为""
 *
 * @param { number|string } currency 货币
 * @returns { string }  大写金额
 *
 *
 * @example
 * formatCurrencyToChinese(100)
 * // => "壹佰元整"
 *
 * formatCurrencyToChinese(100.1)
 * // => "壹佰元壹角"
 *
 * formatCurrencyToChinese(100.01)
 * // => "壹佰元壹分"
 *
 * formatCurrencyToChinese(100100001)
 * // => "壹亿零壹拾万零壹元整"
 *
 * formatCurrencyToChinese(10000000000)
 * // => ""
 *
 * formatCurrencyToChinese("")
 * // => ""
 *
 * formatCurrencyToChinese("  ")
 * // => ""
 *
 * formatCurrencyToChinese(0)
 * // => "零元"
 */
export declare const formatCurrencyToChinese: (curreny: number | string) => string;

export interface FormatCurrencyOption {
    symbol?: string;
    decimals?: number;
    symbolOnLeft?: boolean;
    thousandsSeparator?: string;
    spaceBetweenAmountAndSymbol?: boolean;
    decimalSeparator?: string;
}
/**
 * 货币格式化工具方法,注意小数位会进行四舍五入处理
 *
 * 12345 => $12,345.00
 *
 * @param { FormatCurrencyOption } options       设置对象
 *        --- options.symbol        货币符号  默认为 $
 *        --- options.decimals      小数点个数  默认为2位
 *        --- options.symbolOnLeft   货币符号是否在左边显示   默认为true
 *        --- options.thousandsSeparator   千分位符号  默认为 ','
 *        --- options.spaceBetweenAmountAndSymbol   货币符号与值之间添加一个空格 默认没有空格
 *        --- options.decimalSeparator   货币中的小数点的符号  默认为 '.'
 * @returns { string }
 * @example
 *
 * formatCurrency(12345)
 * // => "$12,345.00"
 *
 * formatCurrency(12345.235621, { decimals: 4 })
 * // => '$12,345.2356'
 *
 * formatCurrency(5.235621,{ symbol: '￥' })
 * // => '￥5.24'
 *
 * formatCurrency(12345.235621, {
 *     symbolOnLeft: false,
 *     thousandsSeparator: ' ',
 *     spaceBetweenAmountAndSymbol: true,
 *     decimalSeparator: '..',
 *   })
 * // => '123 45..24 $
 */
export declare const formatCurrency: (value: number | string, options?: FormatCurrencyOption) => string;

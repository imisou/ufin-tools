export interface FormatCurrencyOption {
  symbol?: string;
  decimals?: number;
  symbolOnLeft?: boolean;
  thousandsSeparator?: string;
  spaceBetweenAmountAndSymbol?: boolean;
  decimalSeparator?: string;
}
// 默认的配置信息
const FORMAT_CURRENCY_OPTION: FormatCurrencyOption = {
  symbol: '$',
  decimals: 2,
  symbolOnLeft: true,
  thousandsSeparator: ',',
  spaceBetweenAmountAndSymbol: false,
  decimalSeparator: '.',
};

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
export const formatCurrency = (value: number | string , options = FORMAT_CURRENCY_OPTION): string => {
  let thousandsSeparator;
  let symbolOnLeft;
  let spaceBetweenAmountAndSymbol;
  let symbol: string;
  let decimals;
  const digitsRE = /(\d{3})(?=\d)/g;
  value = parseFloat(value as string);
  if (!isFinite(value) || (!value && value !== 0)) value = 0;

  // 货币符号  默认为 $
  symbol = options.symbol || FORMAT_CURRENCY_OPTION.symbol;
  // 小数点个数  默认为2位
  decimals = options.decimals || FORMAT_CURRENCY_OPTION.decimals;
  // 设置千分位符号  默认为 ,
  thousandsSeparator =
    options.thousandsSeparator != null
      ? options.thousandsSeparator
      : FORMAT_CURRENCY_OPTION.thousandsSeparator;
  // 货币符号是否在左边显示
  symbolOnLeft =
    options.symbolOnLeft != null ? options.symbolOnLeft : FORMAT_CURRENCY_OPTION.symbolOnLeft;
  // 设置货币符号与值之间是否有空格
  spaceBetweenAmountAndSymbol =
    options.spaceBetweenAmountAndSymbol != null ? options.spaceBetweenAmountAndSymbol : false;
  var stringified = Math.abs(value).toFixed(decimals);
  stringified = options.decimalSeparator
    ? stringified.replace(FORMAT_CURRENCY_OPTION.decimalSeparator, options.decimalSeparator)
    : stringified;
  var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
  var i = _int.length % 3;
  var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? thousandsSeparator : '') : '';
  // 处理货币小数点后面的个数
  var _float = decimals ? stringified.slice(-1 - decimals) : '';
  // 处理货币符号与值之间的空格
  symbol = spaceBetweenAmountAndSymbol ? (symbolOnLeft ? symbol + ' ' : ' ' + symbol) : symbol;
  symbol = symbolOnLeft
    ? symbol + head + _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float
    : head + _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float + symbol;
  var sign = value < 0 ? '-' : '';
  return sign + symbol;
};

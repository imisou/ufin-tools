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
export const formatPhone = (mobile: string, symbol = ' '): string => {
  if (typeof mobile !== 'string') throw new TypeError('数据类型必须是 string');

  let value = mobile.replace(/\s+/g, '')
  const valueLen = value.length

  if (valueLen > 3 && valueLen < 8) {
    value = `${value.substr(0, 3)}${symbol}${value.substr(3)}`
  } else if (valueLen >= 8) {
    value = `${value.substr(0, 3)}${symbol}${value.substr(
      3,
      4
    )}${symbol}${value.substr(7)}`
  }
  return value
};

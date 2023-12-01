
const ZIPCODE_REGEXP = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/

/**
 * 是否为有效的邮政编码
 *
 * @author jed
 * @param { String } val 邮政编码
 * @returns { Boolean }
 *
 * @example
 *
 * isZipcode("110000")
 * // => true
 */
export const isZipcode = (val : string) : boolean => {
  return ZIPCODE_REGEXP.test(val)
}

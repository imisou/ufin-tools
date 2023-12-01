import { TelephoneRegexp } from "../regexp/index";

/**
 * 是否为有效的电话(座机)
 *
 * @author jed
 * @param { String } val 座机号码
 * @returns { Boolean }
 *
 * @example
 *
 * isTelephone("0571-4221236")
 * // => true
 */
export const isTelephone = (val : string) : boolean => {
  return TelephoneRegexp.test(val)
}

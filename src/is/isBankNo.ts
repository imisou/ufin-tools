import { BankNoRegexp } from '../regexp/index';
/**
 * 是否为有效的银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
 *
 * @param { string } val  银行卡号
 * @returns { Boolean }
 *
 *
 * @example
 *
 * isBankNo('6234567890');
 * // => true
 *
 * isBankNo('6222026006705354217');
 * // => true
 */
export const isBankNo = (val: string): boolean => {
  return BankNoRegexp.test(val);
};

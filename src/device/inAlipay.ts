
/**
 * 是否是支付宝内核
 *
 * @author jed
 * @returns { Boolean }
 * @example
 *
 * inAlipay();
 * // => false
 */
export const inAlipay = (): boolean => {
  if (typeof navigator === 'undefined') return;
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('alipayclient') !== -1;
};

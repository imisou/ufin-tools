/**
 * 是否是微信内核
 *
 * @returns {boolean}
 * @example
 *
 * inWeixin();
 * // => false
 */
export const inWeixin = (): boolean => {
  if (typeof navigator === 'undefined') return;

  const ua = navigator.userAgent.toLowerCase();

  return ua.indexOf('micromessenger') !== -1;
};

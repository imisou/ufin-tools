/**
 * 是否是微博内核
 *
 * @returns {boolean}
 * @example
 *
 * inWeibo();
 * // => false
 */
export const inWeibo = (): boolean => {
  if (typeof navigator === 'undefined') return;

  const ua = navigator.userAgent.toLowerCase();

  return ua.indexOf('weibo') !== -1;
};

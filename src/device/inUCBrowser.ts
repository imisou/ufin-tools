/**
 * 是否是UC浏览器内核
 *
 * @returns {boolean}
 * @example
 *
 * inUCBrowser();
 * // => false
 */
export const inUCBrowser = (): boolean => {
  if (typeof window.navigator === 'undefined') return;

  const ua = window.navigator.userAgent.toLowerCase();

  return ua.indexOf('ucbrowser') !== -1;
};

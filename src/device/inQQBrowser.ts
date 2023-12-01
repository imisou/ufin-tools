/**
 * 是否是QQ浏览器内核
 * @author jed
 * @returns { Boolean }
 * @example
 *
 * inQQBrowser();
 * // => false
 */
export const inQQBrowser = (): boolean => {
  if (typeof window.navigator === 'undefined') return;

  const ua = window.navigator.userAgent.toLowerCase();

  return ua.indexOf('mqqbrowser') !== -1;
};

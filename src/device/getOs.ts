// 系统平台名称
export enum BrowserDetectOS {
  Mac = 'mac',
  Android = 'android',
  Ios = 'ios',
  Linux = 'linux',
  Window = 'window',
  Other = 'other',
}

/**
 * @desc 获取当前系统类型
 * @returns { BrowserDetectOS } 'mac' | 'android' | 'ios' | 'linux' | 'window' | 'other'
 *
 * @example
 *
 * getOs()
 * // => "mac"
 *
 * getOs() === BrowserDetectOS.Mac
 */
export const getOs = (): BrowserDetectOS => {
  const sUserAgent =
    ('navigator' in window && 'userAgent' in navigator && navigator.userAgent) || '';
  const isWin = navigator.platform === 'Win32' || navigator.platform === 'Windows';
  const isMac =
    navigator.platform === 'Mac68K' ||
    navigator.platform === 'MacPPC' ||
    navigator.platform === 'Macintosh' ||
    navigator.platform === 'MacIntel';
  if (isMac) return BrowserDetectOS.Mac;
  const isLinux = String(navigator.platform).indexOf('Linux') > -1;
  if (isLinux) {
    const isAndroid = sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('Adr') > -1;
    if (isAndroid) {
      return BrowserDetectOS.Android;
    }
    const isiOS = !!sUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
    if (isiOS) {
      return BrowserDetectOS.Ios;
    }
    return BrowserDetectOS.Linux;
  }
  if (isWin) {
    const isAndroid = sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('Adr') > -1;
    if (isAndroid) {
      return BrowserDetectOS.Android;
    }
    const isiOS = !!sUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
    if (isiOS) {
      return BrowserDetectOS.Ios;
    }
    return BrowserDetectOS.Window;
  }
  const isAndroid = sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('Adr') > -1;
  if (isAndroid) {
    return BrowserDetectOS.Android;
  }
  const isiOS = !!sUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
  if (isiOS) {
    return BrowserDetectOS.Ios;
  }
  return BrowserDetectOS.Other;
};

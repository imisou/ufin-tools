// 浏览器的类型
export enum BrowserType {
  Chrome = 'Chrome',
  Safari = 'Safari',
  Opera = 'Opera',
  FF = 'FF',
  Edge = 'Edge',
  IE11 = 'IE11',
  IE10 = 'IE10',
  IE9 = 'IE9',
  IE8 = 'IE8',
  IE7 = 'IE7',
  IEOld = 'IE7以下',
}

/**
 * @desc 获取当前浏览器的类型
 * @author jed
 * @returns { BrowserType } ['Chrome'、"Safari"、"Opera"、"FF"、"Edge"、"IE11"、"IE10"、"IE9"、"IE8"、"IE7"、"IE7以下"]
 *
 * @example
 *
 * getBrowser()
 * // => "Chrome"
 *
 * // 内置的枚举对象
 * getBrowser() === BrowserType.Chrome
 */
export const getBrowser = (): BrowserType | undefined => {
  const { userAgent } = navigator; // 取得浏览器的userAgent字符串
  const isOpera = userAgent.indexOf('Opera') > -1; // 判断是否Opera浏览器
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera; // 判断是否IE浏览器
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  const isEdge = userAgent.indexOf('Edge') > -1 && !isIE; // 判断是否IE的Edge浏览器
  const isFF = userAgent.indexOf('Firefox') > -1; // 判断是否Firefox浏览器
  const isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1; // 判断是否Safari浏览器
  const isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1; // 判断Chrome浏览器

  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp.$1);
    if (fIEVersion === 7) return BrowserType.IE7;
    if (fIEVersion === 8) return BrowserType.IE8;
    if (fIEVersion === 9) return BrowserType.IE9;
    if (fIEVersion === 10) return BrowserType.IE10;
    return BrowserType.IEOld; // IE版本过低
  }
  if (isIE11) return BrowserType.IE11;
  if (isEdge) return BrowserType.Edge;
  if (isFF) return BrowserType.FF;
  if (isOpera) return BrowserType.Opera;
  if (isSafari) return BrowserType.Safari;
  if (isChrome) return BrowserType.Chrome;
};

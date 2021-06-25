export declare enum BrowserType {
    Chrome = "Chrome",
    Safari = "Safari",
    Opera = "Opera",
    FF = "FF",
    Edge = "Edge",
    IE11 = "IE11",
    IE10 = "IE10",
    IE9 = "IE9",
    IE8 = "IE8",
    IE7 = "IE7",
    IEOld = "IE7\u4EE5\u4E0B"
}
/**
 * @desc 获取当前浏览器的类型
 *
 * @returns ['Chrome'、"Safari"、"Opera"、"FF"、"Edge"、"IE11"、"IE10"、"IE9"、"IE8"、"IE7"、"IE7以下"]
 */
export declare const getBrowser: () => BrowserType | undefined;

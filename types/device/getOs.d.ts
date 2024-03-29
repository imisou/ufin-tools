export declare enum BrowserDetectOS {
    Mac = "mac",
    Android = "android",
    Ios = "ios",
    Linux = "linux",
    Window = "window",
    Other = "other"
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
export declare const getOs: () => BrowserDetectOS;

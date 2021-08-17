import dayjs from 'dayjs';

/**
 * 为元素添加class
 * @param {HTMLElement} el
 * @param {String} cls
 */
export declare function addClass(el: HTMLElement, cls: string): void;

export declare enum BrowserDetectOS {
    Mac = "mac",
    Android = "android",
    Ios = "ios",
    Linux = "linux",
    Window = "window",
    Other = "other"
}

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

export declare type CookiesGet = (name: string) => string | undefined;

/**
 *  cookie 基础组件
 *
 *  @version 1.0.0
 *  @author gzh
 *
 *  @example
 *
 *  import cookies from '@/utils/cookies.js'
 *
 *  // 默认设置 --有效期为 一天
 *  cookies.set('name' , 'gzh')
 *
 *  // 设置对象类型的数据 --有效期为 半天
 *  cookies.set('name',JSON.stringify({'name':"xxxx"}) , {  expires : 0.5 })
 *
 *  // 获取数据  --- 注意 path 的问题
 *  cookies.get('name')
 *
 *  // 获取所有的数据
 *  cookies.getAll()
 *
 *  // 删除某一个数据
 *  cookies.remove('name')
 *
 */
export declare interface CookiesOptions {
    path?: string;
    expires?: number;
    prefix?: string;
}

export declare type CookiesRemove = (name: string, path?: string) => void;

export declare const dateUtil: typeof dayjs;

export declare const EmailRegexp: RegExp;

/**
 *  将阿拉伯数字翻译成中文的大写数字
 * @param {*} num  阿拉伯数字
 * @returns { String }  阿拉伯数字的大写数字
 * @example numberToChinese(100.1)   =>   一百点一
 */
export declare const formatChinese: (num: number) => string;

/**
 * 时间格式化
 * @description 时间格式化方法
 * @param  { String | Number} time
 * @param { String }  fmt
 * @returns {String} 格式化后的时间
 */
export declare const formateTime: (time: string | number, fmt?: string) => string;

/**
 * @desc 获取当前浏览器的类型
 *
 * @returns ['Chrome'、"Safari"、"Opera"、"FF"、"Edge"、"IE11"、"IE10"、"IE9"、"IE8"、"IE7"、"IE7以下"]
 */
export declare const getBrowser: () => BrowserType | undefined;

/**
 * @description 拿到 cookie 全部的值
 */
export declare const getCookieAll: () => {
    [key: string]: string;
};

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 * @returns { String } cookie存储的值
 * @example
 *
 * getCookieByName("token")
 */
export declare const getCookieByName: CookiesGet;

/**
 * @desc 获取当前系统类型
 * @returns BrowserDetectOS 'mac' | 'android' | 'ios' | 'linux' | 'window' | 'other'
 */
export declare const getOs: () => BrowserDetectOS;

/**
 * 获取元素上的 style
 * @param {HTMLElement} element
 * @param {String} styleName
 */
export declare const getStyle: (element: HTMLElementStyle, styleName: string) => string | number | null;

/**
 * 获取Url中的参数，并转换成对象类型
 *
 * @example
 *  import { getUrlQuery } from "ufin-tools"
 *  const queryObjectData = getUrlQuery()
 *
 * @example
 *  import { getUrlQuery } from "ufin-tools"
 *  const queryObjectData = getUrlQuery("http://www.baidu.com?name=2")
 *
 * @param url  URL 地址
 * @returns Object
 */
export declare const getUrlQuery: (urlstr?: string) => UrlQueryData;

/**
 * 根据Name获取Url中的对应的参数
 *
 * @example
 *  import { getUrlQueryByName } from "ufin-tools"
 *  const val = getUrlQueryByName("name")
 * @example
 *  import { getUrlQueryByName } from "ufin-tools"
 *  const val1 = getUrlQueryByName("name" , "http://www.baidu.com?name=2")
 *
 * @param { String } name  属性的name
 * @param { String }  urlStr  URL 地址
 * @returns string | undefined
 */
export declare const getUrlQueryByName: (name?: string, urlstr?: string) => string | undefined;

/**
 *  生成一个指定长度的随机数
 * @param { Number } 长度
 * @returns {String} 随机数字符串
 * @example getUUID(11) => '1212asdasdA'
 */
export declare const getUUID: (len?: number | string) => string;

/**
 * 判断元素上是否存在对应的class
 * @param el  元素
 * @param cls className
 * @returns Boolean
 */
export declare function hasClass(el: HTMLElement, cls: string): boolean;

declare interface HTMLElementCurrentStyle {
    [propName: string]: string;
}

declare interface HTMLElementFilters {
    item: HTMLElementFiltersItem;
}

declare type HTMLElementFiltersItem = (arg: string) => HTMLElementFiltersItemResult;

declare interface HTMLElementFiltersItemResult {
    opacity: number;
}

declare interface HTMLElementStyle extends HTMLElement {
    filters: HTMLElementFilters;
    currentStyle: HTMLElementCurrentStyle;
}

/**
 * 初始化Cookie的配置数据
 * @param option
 */
export declare const initCookie: (option: Partial<CookiesOptions>) => void;

export declare const IPRegexp: RegExp;

/**
 * 是否是数组类型
 * @author jed
 * @param { any } val
 * @returns  { Boolean }
 */
export declare const isArray: (val: any) => boolean;

/**
 * 判断是否是Boolean类型
 * @author jed
 * @param { any } val
 * @returns  { Boolean }
 *
 * @example
 * isBoolean(true)
 * // => true
 * isBoolean("true")
 * //=> false
 */
export declare const isBoolean: (val: any) => val is boolean;

/**
 * 身份证格式严格校验
 * @author jed
 * @param { String } sId   身份证号码
 * @returns  { Boolean }
 * @example
 * // 正确数据-输入18位身份证号且只有数字，例如130701199310302288
 * isCardID("130701199310302288")
 * // => true
 *
 * // 正确数据_输入18位身份证号且最后一位为X，例如52030219891209794X
 * isCardID("52030219891209794X")
 * // => true
 *
 * // 错误数据_输入18位身份证号且最后一位为除X外的字母，例如52030219891209794Y
 * isCardID("52030219891209794Y")
 * // => false
 */
export declare const isCardID: (sId: string) => boolean;

/**
 * 是否为有效的邮箱地址<br>
 * 名称允许汉字、字母、数字，域名只允许英文域名<br>
 *
 * @param {String} val 检测的值
 * @returns { boolean } 返回true|false
 * @example
 *
 * isEmail("11063296@qq.com")
 * // => true
 * test('isEmail : 正确数据', () => {
 *   expect(isEmail("11063296@qq.com")).toBe(true);
 * });
 *
 * //
 * test('isEmail : 2、错误数据-只输入空白、空或者回车 ', () => {
 *   expect(isEmail("")).toBe(false);
 *   expect(isEmail(" ")).toBe(false);
 *   expect(isEmail(`
 *   `)).toBe(false);
 * });
 *
 * // 3. 错误数据-只输入字母
 * test('isEmail : 错误数据-只输入字母', () => {
 *   expect(isEmail("qw")).toBe(false);
 * });
 *
 * // 4. 错误数据-只输入数字
 * test('isEmail : 错误数据-只输入数字', () => {
 *   expect(isEmail("123123")).toBe(false);
 * });
 * // 5. 错误数据-只输入特殊字符
 * test('isEmail : 错误数据-只输入特殊字符', () => {
 *   expect(isEmail("@#$")).toBe(false);
 * });
 *
 * // 6. 错误数据-输入以上数据的组合
 * test('isEmail : 错误数据-输入以上数据的组合', () => {
 *   expect(isEmail("1#qq.com")).toBe(false);
 * });
 * // 7. 错误数据-缺少@符号，例如email163.com
 * test('isEmail : 错误数据-缺少@符号，例如email163.com', () => {
 *   expect(isEmail("email163.com")).toBe(false);
 * });
 *
 * // 8. 错误数据-缺少黑点“.”，例如email@163com
 * test('isEmail : 错误数据-缺少黑点“.”，例如email@163com', () => {
 *   expect(isEmail("email@163com")).toBe(false);
 * });
 * // 9. 错误数据-缺少com、cn、net、hotmail等，例如：email@163.
 * test('isEmail : 错误数据-缺少com、cn、net、hotmail等，例如：email@163.', () => {
 *   expect(isEmail("email@163.")).toBe(false);
 * });
 *
 * // 10. 错误数据-@符号位置不正确，例如：email163@.com、email163.@com、email163.com@等
 * test('isEmail : 错误数据-@符号位置不正确，例如：email163@.com、email163.@com、email163.com@等', () => {
 *   expect(isEmail("email163@.com")).toBe(false);
 *   expect(isEmail("email163.@com")).toBe(false);
 *   expect(isEmail("email163.com@")).toBe(false);
 * });
 * // 11. 错误数据-黑点“.”位置不正确，例如：email.@163.com、email@.163com、email@163com.
 * test('isEmail : 错误数据-黑点“.”位置不正确，例如：email.@163.com、email@.163com、email@163com.', () => {
 *   expect(isEmail("email.@163.com")).toBe(false);
 *   expect(isEmail("email@.163com")).toBe(false);
 *   expect(isEmail("email@163com.")).toBe(false);
 * });
 */
export declare const isEmail: (val: string) => boolean;

/**
 * 判断val是否是一个空值，如"" , null , undefined , [] , {} ,
 * @param val
 * @returns Boolean
 * @example
 *
 * isEmptyValue([])
 * // => true
 * isEmptyValue("")
 * // => true
 * isEmptyValue(null)
 * // => true
 * isEmptyValue(undefined)
 * // => true
 * isEmptyValue(undefined)
 * // => true
 * isEmptyValue({})
 * // => true
 *
 * // 错误的数据
 * isEmptyValue(" ")
 * // => false
 * isEmptyValue("1")
 * // => false
 */
export declare const isEmptyValue: (val: any) => boolean;

/**
 * 是否为有效的英文姓名
 *
 * @param { String } val
 * @returns {boolean}
 * @example
 *
 * isEnglishName('James');
 * // => true
 *
 * isEnglishName('Kevin Wayne Durant');
 * // => true
 *
 * isEnglishName('Dirk Nowitzki');
 * // => true
 */
export declare const isEnglishName: (val: string) => boolean;

/**
 * 判断是否是函数类型
 * @param val
 * @returns { Boolean }
 * @example
 * const func = () =>  1;
 * isFunction(func)
 * // => true
 *
 * const function func() {}
 * isFunction(func)
 * // => true
 *
 * isFunction("1udr Bide")
 * // => false
 */
export declare const isFunction: <T extends Function>(val: any) => val is T;

/**
 * 判断是否是IOS系统 ''
 * @author jed
 * @returns { Boolean }
 */
export declare const isIos: () => boolean;

/**
 * IP格式校验
 *
 * @param {String} str 检测的值
 * @returns Boolean
 *
 */
export declare const isIP: (str: string) => boolean;

/**
 * 判断是否为 null 或 undefined 类型。
 * @param val
 * @returns Boolean
 * @example
 *
 * isNil(undefined)
 * // => true
 * isNil(null)
 * // => true
 * isNil("")
 * // => false
 */
export declare const isNil: (val: any) => boolean;

/**
 * 判断是否是Null类型
 * @param val
 * @returns Boolean
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(undefined)
 * // => false
 * isNull("")
 * // => false
 */
export declare const isNull: (val: any) => val is null;

/**
 * 判断是否为 number 类型。
 * @param val
 * @returns Boolean
 * @example
 *
 * isNumber(1)
 * // => true
 * isNumber(-1)
 * // => true
 * isNumber("")
 * // => false
 * isNumber("1")
 * // => false
 * isNumber(null)
 * // => false
 * isNumber(false)
 * // => false
 */
export declare const isNumber: (val: any) => val is number;

/**
 * 是否是对象类型
 * @param val
 * @returns  Boolean
 * @example
 *
 * isObject({})
 * // => true
 * isObject([])
 * // => true
 *
 * isObject(1)
 * // => false
 * isObject(true)
 * // => false
 * isObject(undefined)
 * // => false
 * isObject(null)
 * // => false
 *
 */
export declare const isObject: (val: any) => boolean;

/**
 * 判断当前是否是在PC端 window | mac | linux
 * @author jed
 * @returns { Boolean }
 */
export declare const isPC: () => boolean;

/**
 * 判断是否为 string 类型。
 * @param val
 * @returns Boolean
 * @example
 *
 * isString("")
 * // => true
 */
export declare const isString: (val: unknown) => val is string;

/**
 * 判断参数的值是否是 Symbol 类型
 * @param val
 * @returns  Boolean
 * @example
 *
 * isSymbol(Symbol(1))
 * // => true
 */
export declare const isSymbol: (val: any) => val is symbol;

/**
 * 判断是否是undefined类型
 * @param val
 * @returns { Boolean }
 *
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined(null)
 * // => false
 * isUndefined("")
 * // => false
 */
export declare const isUndefined: (val: any) => val is undefined;

/**
 * 空函数
 *
 * @returns undefined
 */
export declare const noop: () => void;

/**
 *  获取一个在指定范围内的随机整数
 * @param {*} min  最小范围(包含)
 * @param {*} max  最大范围(包含)
 * @returns {Number} 整数
 */
export declare const random: (min: number, max: number) => number | null;

/**
 * 获取相对时间
 * @param { String | Number | Date } origin 相对时间
 * @param { String | Number | Date } target 目标时间
 * @param { RelativeTimeOptions } options 配置
 * @returns { String } 时间差
 */
export declare const relativeTime: (origin: Time, target?: Time, options?: {
    before: string;
    after: string;
    just: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}) => string;

/**
 * 配置
 */
export declare interface RelativeTimeOptions {
    before: string;
    after: string;
    just: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

/**
 * @desc 移除指定元素上的指定class
 * @param {HTMLElement} el
 * @param {String} cls
 */
export declare function removeClass(el: HTMLElement, cls: string): void;

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
export declare const removeCookie: CookiesRemove;

/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 * @returns undefined
 * @example
 * setCookie("token" ,"1232")
 */
export declare const setCookie: (name?: string, value?: any, cookieSetting?: CookiesOptions) => void;

/**
 * @description 设置页面的标题  [title]
 * @param {string} title title内容
 */
export declare function setDocumentTitle(title: string): void;

/**
 * 给指定元素设置style
 * @param {HTMLElement} element
 * @param {String} styleName
 * @param {String} value
 */
export declare function setStyle(element: HTMLElement, styleName: any, value: string | number): void;

/**
 * @description 设置页面的标题  [appTitle - title]
 * @param {string} title title内容
 * @param {string} appTitle title的前缀
 */
export declare function setTitle(title: string, appTitle?: string): void;

declare type Time = string | number | Date;

/** **************
 *
 * 处理URL的工具方法
 *

 如：
 1. http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese

 url();            // http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese
 url('tld');       // co.uk
 url('domain');    // example.co.uk
 url('hostname');  // www.example.co.uk
 url('sub');       // www
 url('.0')         // undefined
 url('.1')         // www
 url('.2')         // example
 url('.-1')        // uk
 url('auth')       // rob:abcd1234
 url('user')       // rob
 url('pass')       // abcd1234
 url('port');      // 80
 url('protocol');  // http
 url('path');      // /path/index.html
 url('file');      // index.html
 url('filename');  // index
 url('fileext');   // html
 url('1');         // path
 url('2');         // index.html
 url('3');         // undefined
 url('-1');        // index.html
 url(1);           // path
 url(2);           // index.html
 url(-1);          // index.html
 url('query');     // query1=test&silly=willy
 url('?');         // {query1: 'test', silly: 'willy', field: ['zero', undefined, 'two']}
 url('?silly');    // willy
 url('?poo');      // undefined
 url('field[0]')   // zero
 url('field')      // ['zero', undefined, 'two']
 url('hash');      // test=hash&chucky=cheese
 url('#');         // {test: 'hash', chucky: 'cheese'}
 url('#chucky');   // cheese
 url('#poo');      // undefined

 2. mailto

 url('protocol', 'mailto:rob@websanova.com'); // mailto
 url('email', 'mailto:rob@websanova.com');    // rob@websanova.com

 2. 用第二个参数
 url('hostname', 'test.www.example.com/path/here');          // test.www.example.com
 url('protocol', 'www.example.com/path/here');               // http
 url('path', 'http://www.example.com:8080/some/path');       // /some/path
 url('port', 'http://www.example.com:8080/some/path');       // 8080
 url('protocol', 'https://www.example.com:8080/some/path');  // https

 */
declare type Url = (arg: string | number, url?: string) => string;

export declare const url: Url;

declare interface UrlQueryData {
    [propName: string]: string;
}

export { }

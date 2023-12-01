/**
 * 为元素添加class
 * @param {HTMLElement} el
 * @param {String} cls
 */
export declare function addClass(el: HTMLElement, cls: string): void;

/**
 * 银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
 */
export declare const BankNoRegexp: RegExp;

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

/**
 * 中文姓名正则
 * @example 胡歌
 * @example 错误 ： Jad
 */
export declare const ChinaNameRegexp: RegExp;

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

/**
 * 数字正则，注意 不关注是否数字第一个为0，且支持 负值，小数位，如 12 ， 012 , -12, 12.1
 * @example 100 、 012 、 -012 、 12.12
 * @example 错误 ： abc
 */
export declare const DigitRegexp: RegExp;

export declare const EmailRegexp: RegExp;

/**
 * 英文姓名正则
 * @example James 、 Kevin Wayne Durant 、 Dirk Nowitzki
 * @example 错误 ： 胡歌 、 @Jad
 */
export declare const EnglishNameRegexp: RegExp;

/**
 *
 * 将数字转换为大写金额
 *   如果没有小数位则后面加一个整
 *   如果超过十亿，返回值为""
 *
 * @param { number|string } currency 货币
 * @returns { string }  大写金额
 *
 *
 * @example
 * formatCurrencyToChinese(100)
 * // => "壹佰元整"
 *
 * formatCurrencyToChinese(100.1)
 * // => "壹佰元壹角"
 *
 * formatCurrencyToChinese(100.01)
 * // => "壹佰元壹分"
 *
 * formatCurrencyToChinese(100100001)
 * // => "壹亿零壹拾万零壹元整"
 *
 * formatCurrencyToChinese(10000000000)
 * // => ""
 *
 * formatCurrencyToChinese("")
 * // => ""
 *
 * formatCurrencyToChinese("  ")
 * // => ""
 *
 * formatCurrencyToChinese(0)
 * // => "零元"
 */
export declare const formatCurrencyToChinese: (curreny: number | string) => string;

/**
 * 将阿拉伯数字翻译成中文的大写数字
 * @param {*} num  阿拉伯数字
 * @returns { String }  阿拉伯数字的大写数字
 *
 * @example
 * formatNumberToChinese(100.1)
 * //=>   一百点一
 *
 * formatNumberToChinese(100)
 * // => "一百点一"
 *
 * formatNumberToChinese(100.01)
 * // => "一百点零一"
 *
 * formatNumberToChinese(1001.01)
 * // => "一仟一点零一"
 */
export declare const formatNumberToChinese: (num: number) => string;

/**
 *  手机号码按照 344 的方式进行格式化显示
 *
 * @param {String} mobile   手机号码
 * @param {String} symbol   分割符号 默认为 ' '
 * @example
 *
 * formatPhone(`18915601235`)
 * // => `189 1560 1235`
 *
 * formatPhone(`18915601235` , ',')
 * // => `189,1560,1235`
 *
 */
export declare const formatPhone: (mobile: string, symbol?: string) => string;

/**
 * 手机号码部分隐藏工具方法
 *
 * @param {Number} mobileNumber         手机号码
 * @param { FormatPhoneEllipsisOption } option 配置项
 *        --- option.leftNoEllipsisNumber  {Number} 左边不始隐藏的个数
 *        --- option.rightNoEllipsisNumber {Number} 右边不隐藏的个数
 *        --- option.ellipsisSeparator     {String}  隐藏的符号
 * @returns { String } 隐藏后的手机号码
 *
 * @example
 * formatPhoneEllipsis('18915601235')
 * // => 189*****35
 *
 * // 修改左边不始隐藏的个数
 * formatPhoneEllipsis('18915601235', { leftNoEllipsisNumber: 4 })
 * // => '1891*****35'
 *
 * // 修改右边不隐藏的个数
 * formatPhoneEllipsis('18915601235', { rightNoEllipsisNumber: 4 })
 * // => '189****1235'
 *
 * // 修改隐藏的符号
 * formatPhoneEllipsis('18915601235', { ellipsisSeparator: '-' })
 * // => '189------35'
 *
 */
export declare const formatPhoneEllipsis: (mobileNumber: string, option?: FormatPhoneEllipsisOption) => string;

export declare interface FormatPhoneEllipsisOption {
    leftNoEllipsisNumber?: number;
    rightNoEllipsisNumber?: number;
    ellipsisSeparator?: string;
}

/**
 * 时间格式化 格式为 'YYYY-MM-DD HH:mm:ss'
 *
 * @description 时间格式化方法
 * @param  { String | Number} time
 * @param { String }  fmt
 * @returns {String} 格式化后的时间
 *
 * @example
 * test('formatTime : 默认', () => {
 *   expect(formatTime(1629190692284)).toBe('2021-08-17 16:58:12');
 * });
 *
 * test('formatTime : 格式化："YYYY-MM-DD"', () => {
 *   expect(formatTime(1629190692284, 'YYYY-MM-DD')).toBe('2021-08-17');
 * });
 *
 * test('formatTime : 格式化："HH:mm:ss"', () => {
 *   expect(formatTime(1629190692284, 'HH:mm:ss')).toBe('16:58:12');
 * });
 *
 * test('formatTime : 格式化："hh:mm:ss"', () => {
 *   expect(formatTime(1629190692284, 'hh:mm:ss')).toBe('04:58:12');
 * });
 *
 */
export declare const formatTime: (time: string | number, fmt?: string) => string;

/**
 * 字符串转换 - 首字母大写、小写、全大写、全小写、
 * @param  {str}
 * @param  {type}
 *       type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
 * @return {String}
 *
 * @example
 * test('formatWord : 默认', () => {
 *   expect(formatWord('jed')).toBe('JED');
 * });
 *
 * test('formatWord : type = 1 =>  首字母大写', () => {
 *   expect(formatWord('jed', 1)).toBe('Jed');
 * });
 *
 * test('formatWord : type = 2 =>  首页母小写', () => {
 *   expect(formatWord('JED', 2)).toBe('jED');
 * });
 *
 * test('formatWord : type = 3 =>  大小写转换', () => {
 *   expect(formatWord('jEd', 3)).toBe('JeD');
 * });
 *
 * test('formatWord : type = 4 =>  全部大写', () => {
 *   expect(formatWord('jed Gu 张', 4)).toBe('JED GU 张');
 * });
 *
 * test('formatWord : type = 5 =>  全部小写', () => {
 *   expect(formatWord('JeD', 5)).toBe('jed');
 * });
 */
export declare const formatWord: (str: string, type?: number) => string;

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

/**
 * 获取元素上的 style
 * @param {HTMLElement} element
 * @param {String} styleName
 */
export declare const getStyle: (element: HTMLElementStyle, styleName: string) => string | number | null;

/**
 * 获取Url中的参数，并转换成对象类型
 *
 * @param url  URL 地址
 * @returns Object
 * @example
 *
 * // 基础
 * getUrlQuery('http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese')
 * // => {
 query1: 'test',
 silly: 'willy',
 field: ['zero', , 'two'],
 }
 *
 * // 不存在参数的时候返回空的对象
 * getUrlQuery('http://rob:abcd1234@www.example.co.uk/path/index.html')
 * // => {}
 *
 */
export declare const getUrlQuery: (urlstr?: string) => UrlQueryData;

/**
 * 根据Name获取Url中的对应的参数， 如果不存在返回 undefined
 *
 * @param { String } name  属性的name
 * @param { String }  urlStr  URL 地址
 * @returns { string | undefined }
 *
 * @example
 * const example1 = 'http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese'
 *
 * // 获取基本类型的
 * getUrlQueryByName('query1', example1)
 * // => 'test'
 *
 * // 获取数组类型的
 * getUrlQueryByName('field', example1)
 * // => ["zero", undefined, "two"]
 *
 * // 获取不存在的属性
 * getUrlQueryByName('notdata', example1)
 * // => undefined
 *
 */
export declare const getUrlQueryByName: (name?: string, urlstr?: string) => GetUrlQueryByNameValue;

export declare type GetUrlQueryByNameValue = string | undefined;

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
 * 是否是支付宝内核
 *
 * @author jed
 * @returns { Boolean }
 * @example
 *
 * inAlipay();
 * // => false
 */
export declare const inAlipay: () => boolean;

/**
 * 初始化Cookie的配置数据
 * @param option
 */
export declare const initCookie: (option: Partial<CookiesOptions>) => void;

/**
 * 是否是QQ浏览器内核
 * @author jed
 * @returns { Boolean }
 * @example
 *
 * inQQBrowser();
 * // => false
 */
export declare const inQQBrowser: () => boolean;

/**
 * 是否是UC浏览器内核
 *
 * @returns {boolean}
 * @example
 *
 * inUCBrowser();
 * // => false
 */
export declare const inUCBrowser: () => boolean;

/**
 * 是否是微博内核
 *
 * @returns {boolean}
 * @example
 *
 * inWeibo();
 * // => false
 */
export declare const inWeibo: () => boolean;

/**
 * 是否是微信内核
 *
 * @returns {boolean}
 * @example
 *
 * inWeixin();
 * // => false
 */
export declare const inWeixin: () => boolean;

export declare const IPRegexp: RegExp;

/**
 * 是否是数组类型
 * @author jed
 * @param { any } val
 * @returns  { Boolean }
 *
 * @example
 *
 * isArray([])
 * // => true
 *
 * isArray({ 0:1,1:1,length:2 })
 * // => false
 */
export declare const isArray: (val: any) => boolean;

/**
 * 是否为有效的银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
 *
 * @param { string } val  银行卡号
 * @returns { Boolean }
 *
 *
 * @example
 *
 * isBankNo('6234567890');
 * // => true
 *
 * isBankNo('6222026006705354217');
 * // => true
 */
export declare const isBankNo: (val: string) => boolean;

/**
 * 判断是否是Boolean类型
 * @author jed
 * @param { any } val
 * @returns  { Boolean }
 *
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
 *
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
 *
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
 *
 * @param { any } val  判断空值入参
 * @returns { Boolean }
 *
 *
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
 *
 *
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
 *
 *
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
 *
 *
 * isIos()
 * //=> true
 */
export declare const isIos: () => boolean;

/**
 * IP格式校验
 *
 * @param {String} str 检测的值
 * @returns Boolean
 *
 *
 */
export declare const isIP: (str: string) => boolean;

/**
 * 是否为有效的手机号码
 *
 * @author jed
 * @param { String } val 手机号码
 * @returns { Boolean }
 *
 * @example
 *
 * isMobile("15601589834")
 * // => true
 */
export declare const isMobile: (val: string) => boolean;

/**
 * 判断是否为 null 或 undefined 类型。
 * @param val
 * @returns Boolean
 *
 *
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
 *
 *
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
 *
 *
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
 *
 *
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([])
 * // => false
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
 *
 */
export declare const isPC: () => boolean;

/**
 * 邮政号码格式校验
 * 正则 :  /^[1-9]\d{5}
 * @param {String} str 邮政号码的值
 * @returns Boolean
 * @
 * @example
 * // => true
 * test('isPostal : 正确数据', () => {
 *   expect(isPostal("100000")).toBe(true);
 * });
 * // => false
 * test('isPostal : 错误数据', () => {
 *   expect(isPostal("1234")).toBe(false);        // 小于5位
 *   expect(isPostal("12345678901")).toBe(false); // 超过10位
 *   expect(isPostal("12345678a")).toBe(false);   // 包含非数字类型字符
 *   expect(isPostal("023456789")).toBe(false);   // 首字符不能为0
 * });
 */
export declare const isPostal: (str: string) => boolean;

/**
 * QQ号码格式校验
 * 正则 :  /^[1-9][0-9]{4,9}$/
 * @param {String} str QQ号码的值
 * @returns Boolean
 * @
 * @example
 * // => true
 * test('isQQ : 正确数据', () => {
 *   expect(isQQ("123456789")).toBe(true);
 * });
 * // => false
 * test('isQQ : 错误数据', () => {
 *   expect(isQQ("1234")).toBe(false);        // 小于5位
 *   expect(isQQ("12345678901")).toBe(false); // 超过10位
 *   expect(isQQ("12345678a")).toBe(false);   // 包含非数字类型字符
 *   expect(isQQ("023456789")).toBe(false);   // 首字符不能为0
 * });
 */
export declare const isQQ: (str: string) => boolean;

/**
 * 判断是否为 string 类型。
 * @param val
 * @returns Boolean
 *
 *
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
 *
 *
 * @example
 *
 * isSymbol(Symbol(1))
 * // => true
 */
export declare const isSymbol: (val: any) => val is symbol;

/**
 * 是否为有效的电话(座机)
 *
 * @author jed
 * @param { String } val 座机号码
 * @returns { Boolean }
 *
 * @example
 *
 * isTelephone("0571-4221236")
 * // => true
 */
export declare const isTelephone: (val: string) => boolean;

/**
 * 判断是否是undefined类型
 * @param val
 * @returns { Boolean }
 *
 *
 * @example
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
 * 是否为有效的 url
 *    支持类型:
 * http(s)://(username:password@)(www.)domain.(com/co.uk)(/...)<br>
 * (s)ftp://(username:password@)domain.com/...<br>
 * git://(username:password@)domain.com/...<br>
 * irc(6/s)://host:port/... //<br>
 * afp over TCP/IP: afp://[<user>@]<host>[:<port>][/[<path>]]<br>
 * telnet://<user>:<password>@<host>[:<port>/]<br>
 * smb://[<user>@]<host>[:<port>][/[<path>]][?<param1>=<value1>[;<param2>=<value2>]]<br>
 *
 * @param { string } val  url地址
 * @returns { Boolean }
 *
 *
 * @example
 *
 * isValidURI('https://github.com/lodash');
 * // => true
 */
export declare const isURI: (url: string) => boolean;

/**
 * 是否为有效的邮政编码
 *
 * @author jed
 * @param { String } val 邮政编码
 * @returns { Boolean }
 *
 * @example
 *
 * isZipcode("110000")
 * // => true
 */
export declare const isZipcode: (val: string) => boolean;

/**
 * 昵称正则
 * @example 胡歌 、Jad 、 胡歌1
 * @example 错误 ： 胡歌# 、 @Jad
 */
export declare const NickNameRegexp: RegExp;

/**
 * 空函数
 *
 * @returns undefined
 */
export declare const noop: () => void;

export declare const off: (element: HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject, useCapture?: boolean) => void;

export declare const on: (element: HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject, useCapture?: boolean) => void;

export declare const once: (el: HTMLElement, event: string, fn: EventListener) => void;

export declare const PhoneRegexp: RegExp;

export declare const PostalRegexp: RegExp;

/**
 * QQ号码正则表达式
 * @example 492877865 、 1532653
 * @example 错误 ： 012565982 、 12312312423434
 */
export declare const QQRegexp: RegExp;

/**
 *  获取一个在指定范围内的随机整数
 * @param {*} min  最小范围(包含)
 * @param {*} max  最大范围(包含)
 * @returns {Number} 整数
 *
 * @example
 *
 * random(1,99)
 * // => 88 (可能)
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

/**
 * 有效的电话(座机)正则表达式
 * @example 0571-4221236
 * @example 错误 ： 15601598909 、 252-12312
 */
export declare const TelephoneRegexp: RegExp;

declare type Time = string | number | Date;

/**
 * 去除空格
 * @param  {str}
 * @param  {type}
 *       type:  1-所有空格  2-前后空格  3-前空格 4-后空格
 * @return {String}
 */
export declare const trim: (str: string, type?: number) => string;

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
declare type Url = (arg: string | number, url?: string) => string | UrlQueryData | undefined;

export declare const url: Url;

export declare interface UrlQueryData {
    [propName: string]: string;
}

/**
 *  生成一个指定长度的随机数
 * @param { Number } 长度
 * @returns {String} 随机数字符串
 *
 * @example
 *
 * uuid(11)
 * // => '1212asdasdA'
 */
export declare const uuid: (len?: number | string) => string;

export { }

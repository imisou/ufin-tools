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
export interface CookiesOptions {
    path?: string;
    expires?: number;
    prefix?: string;
}
export declare type CookiesGet = (name: string) => string | undefined;
export declare type CookiesRemove = (name: string, path?: string) => void;
/**
 * 初始化Cookie的配置数据
 * @param option
 */
export declare const initCookie: (option: Partial<CookiesOptions>) => void;
/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
export declare const setCookie: (name?: string, value?: any, cookieSetting?: CookiesOptions) => void;
/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
export declare const getCookieByName: CookiesGet;
/**
 * @description 拿到 cookie 全部的值
 */
export declare const getCookieAll: () => {
    [key: string]: string;
};
/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
export declare const removeCookie: CookiesRemove;

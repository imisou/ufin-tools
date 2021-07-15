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
export declare type CookiesSet = (name: string, value: string | any, cookieSetting?: CookiesOptions) => void;
export declare type CookiesGetAll = () => {
    [key: string]: string;
};
export declare type CookiesRemove = (name: string, path?: string) => void;
export interface ICookies {
    get: CookiesGet;
    set: CookiesSet;
    getAll: CookiesGetAll;
    remove: CookiesRemove;
}
declare const _default: ICookies;
export default _default;

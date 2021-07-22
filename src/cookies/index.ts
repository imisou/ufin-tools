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

import JsCookies from 'js-cookie';

export interface CookiesOptions {
  path?: string;
  expires?: number;
  prefix?: string;
}

export type CookiesGet = (name: string) => string | undefined;

export type CookiesSet = (
  name: string,
  value: string | any,
  cookieSetting?: CookiesOptions,
) => void;

export type CookiesGetAll = () => { [key: string]: string };

export type CookiesRemove = (name: string, path?: string) => void;

export interface ICookies {
  get: CookiesGet;
  set: CookiesSet;
  getAll: CookiesGetAll;
  remove: CookiesRemove;
}

export const cookies: Partial<ICookies> = {};

// 默认配置信息
const DEFAULT_COOKIE_OPTIONS = {
  path: '',
  expires: 1,
  prefix: 'ufin',
} as CookiesOptions;

/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
cookies.set = function (
  name: string = 'default',
  value: any = '',
  cookieSetting?: CookiesOptions,
): void {
  // 设置cookie的 配置属性  主要为 path : 路径  expires : 生命周期
  const currentCookieSetting = {
    ...DEFAULT_COOKIE_OPTIONS,
    expires: 1,
  };
  Object.assign(currentCookieSetting, cookieSetting || {});
  JsCookies.set(`${DEFAULT_COOKIE_OPTIONS.prefix}-${name}`, value, currentCookieSetting);
};

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
cookies.get = function (name: string = 'default'): string | undefined {
  return JsCookies.get(`${DEFAULT_COOKIE_OPTIONS.prefix}-${name}`);
};

/**
 * @description 拿到 cookie 全部的值
 */
cookies.getAll = function (): { [key: string]: string } {
  return JsCookies.get();
};

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
cookies.remove = function (name: string = 'default', path = DEFAULT_COOKIE_OPTIONS.path): void {
  // 删除的时候必须与添加的路径相同  不然  path = '/oa'  下的 数据直接删除是删除不了的
  JsCookies.remove(`${DEFAULT_COOKIE_OPTIONS.prefix}-${name}`, {
    path,
  });
};
